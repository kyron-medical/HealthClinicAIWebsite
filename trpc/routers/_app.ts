import { z } from "zod";
import {
  baseProcedure,
  publicProcedure,
  privateProcedure,
  createTRPCRouter,
} from "../init";
import { clerkClient, User } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { filterUserForClient } from "@/server/helpers/filterUserForClient";
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";
import {
  Encounter,
  Patient,
  Action,
  Physician,
  Facility,
} from "@prisma/client";
import { encrypt, decrypt } from "@/../utils/secure";
import { I } from "@upstash/redis/zmscore-CjoCv9kz";
import { parseDate, normalize, levenshteinTwoMatrixRows, toValidDateOrNull } from "utils/tools";

/*
===============================================================================

Data encryption functions.

===============================================================================
*/

type EncryptedPatient = {
  name: string;
  name_iv: string;
  name_tag: string;
  insurer: string;
  insurer_iv: string;
  insurer_tag: string;
  // Add other fields as needed
};

// Helper to encrypt PHI fields before storing
function encryptPHI(patient: {
  name: string;
  address?: string | null;
  zipCode?: string | null;
  sex?: string | null;
}) {
  const encrypted: any = { ...patient };
  if (patient.name) {
    const { data, iv, tag } = encrypt(patient.name);
    encrypted.name = data;
    encrypted.name_iv = iv;
    encrypted.name_tag = tag;
  }

  if (patient.address) {
    const { data, iv, tag } = encrypt(patient.address);
    encrypted.address = data;
    encrypted.address_iv = iv;
    encrypted.address_tag = tag;
  }
  if (patient.zipCode) {
    const { data, iv, tag } = encrypt(patient.zipCode);
    encrypted.zipCode = data;
    encrypted.zipCode_iv = iv;
    encrypted.zipCode_tag = tag;
  }
  if (patient.sex) {
    const { data, iv, tag } = encrypt(patient.sex);
    encrypted.sex = data;
    encrypted.sex_iv = iv;
    encrypted.sex_tag = tag;
  }
  return encrypted;
}

// Helper to decrypt PHI fields after retrieval
function decryptPHI(patient: any) {
  const decrypted: any = { ...patient };
  if (patient.name && patient.name_iv && patient.name_tag) {
    decrypted.name = decrypt({
      data: patient.name,
      iv: patient.name_iv,
      tag: patient.name_tag,
    });
  }
  if (patient.insurer && patient.insurer_iv && patient.insurer_tag) {
    decrypted.insurer = decrypt({
      data: patient.insurer,
      iv: patient.insurer_iv,
      tag: patient.insurer_tag,
    });
  }
  if (patient.address && patient.address_iv && patient.address_tag) {
    decrypted.address = decrypt({
      data: patient.address,
      iv: patient.address_iv,
      tag: patient.address_tag,
    });
  }
  if (patient.zipCode && patient.zipCode_iv && patient.zipCode_tag) {
    decrypted.zipCode = decrypt({
      data: patient.zipCode,
      iv: patient.zipCode_iv,
      tag: patient.zipCode_tag,
    });
  }
  if (patient.sex && patient.sex_iv && patient.sex_tag) {
    decrypted.sex = decrypt({
      data: patient.sex,
      iv: patient.sex_iv,
      tag: patient.sex_tag,
    });
  }
  // Add more PHI fields as needed
  return decrypted;
}

/*
===============================================================================

Data retrieval and creation functions.
This is where we define the API endpoints and their logic.

===============================================================================
*/

export const InsuranceSchema = z.object({
  id: z.string(),
  name: z.string(),
  insuranceType: z.string().nullable().optional(),
  insurancePlan: z.string().nullable().optional(),
  insuranceStartDate: z.date().nullable().optional(),
  insuranceEndDate: z.date().nullable().optional(),
  patientId: z.string(),
});

export const PatientSchema = z.object({
  id: z.string(),
  name: z.string(),
  name_iv: z.string().nullable().optional(),
  name_tag: z.string().nullable().optional(),
  dob: z.date(),
  sex: z.string().nullable().optional(),
  sex_iv: z.string().nullable().optional(),
  sex_tag: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  address_iv: z.string().nullable().optional(),
  address_tag: z.string().nullable().optional(),
  insurances: z.array(InsuranceSchema).optional(),
  insurer_iv: z.array(z.string()).nullable().optional(),
  insurer_tag: z.array(z.string()).nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  billerId: z.string(),
  serviceStart: z.date(),
  serviceEnd: z.date().nullable().optional(),
  providerName: z.string().nullable().optional(),
  providerName_iv: z.string().nullable().optional(),
  providerName_tag: z.string().nullable().optional(),
  facilityName: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
  zipCode_iv: z.string().nullable().optional(),
  zipCode_tag: z.string().nullable().optional(),
  groupNumber: z.string().nullable().optional(),
});

const CasesBulkSchema = z.array(
  z.object({
    patientName: z.string().optional(),
    patientId: z.string().optional(), // example : patient_id : "075873778"
    mrn: z.string().optional(), // mrn or medical_record_number. Also listed as "MR#"
    medical_record_number: z.string().optional(),
    date_of_birth: z.string().optional(),
    age: z.string().optional(),
    sex: z.string().optional(),
    race: z.string().optional(),
    patient_phone: z.string().optional(),
    patientAddress: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    group_number: z.string().optional(),
    emergency_contact_name: z.string().optional(),
    emergency_contact_phone: z.string().optional(),
    admission_date: z.string().date().optional(),
    admission_time: z.string().time().optional(),
    discharge_date: z.string().date().optional(),
    discharge_time: z.string().time().optional(),
    admitting_physician: z.string().optional(),
    attending_physician: z.string().optional(),
    attending_physician_npi: z.string().optional(),
    attending_physician_opn: z.string().optional(),
    attending_physician_address: z.string().optional(),
    diagnosis: z.string().optional(),
    procedure: z.string().optional(),
    insurance_id: z.string().optional(),
    insurance_name: z.string().optional(),
    insurance_type: z.string().optional(),
    insurance_plan: z.string().optional(),
    insurance_primary_secondary: z.string().optional(),
    insurance_start_date: z.string().date().optional(),
    insurance_end_date: z.string().date().optional(),
    facility_name: z.string().optional(),
    facility_address: z.string().optional(),
    facility_npi: z.string().optional(),
    facility_type: z.string().optional(),
    place_of_service: z.nativeEnum({
      Home: "Home",
      PCP_Physician_Office: "PCP/Physician Office",
      Outpatient_Facility: "Outpatient/Facility",
      Free_Standing_Facility: "Free Standing Facility",
      Specialist: "Specialist",
      Ambulatory_Surgical_Center: "Ambulatory Surgical Center",
      Impatient_Hospital: "Impatient Hospital",
      Independent_Lab: "Independent Lab",
    }).optional(),
    appointment_type: z
      .nativeEnum({
        Annual_Physical_Exam: "Annual Physical Exam (APE)",
        Chronic_Care_Management: "Chronic Care Management (CCM)",
        Consultation: "Consultation (Consult)",
        Follow_Up: "Follow-Up (F/U)",
        Immunization_Visit: "Immunization Visit (IV)",
        New_Patient_Telehealth: "New Patient Telehealth (TH)",
        New_Patient: "New Patient",
        Post_Operative_Visit: "Post-Operative Visit (Post-Op)",
        Pre_Operative_Assessment: "Pre-Operative Assessment (Pre-Op)",
        Redraw: "Redraw",
        Same_Day: "Same Day",
        Scheduled: "Scheduled",
        Sick_Visit: "Sick Visit (SV)",
        True_PA: "True PA",
        Urgent_Care_Visit: "Urgent Care Visit (UCV)",
        Well_Child_Visit: "Well Child Visit (WCV)",
      })
      .optional(),
  }),
);

z.object({
  // ...
  type: z.nativeEnum(Action),
  // ...
});

const addBillerDataToPatients = async (patients: Patient[]) => {
  const userId = patients.map((patient) => patient.billerId);

  //We need more data, specifically, the user profile image url. We will use
  //the clerk client
  const users = (
    await (
      await clerkClient()
    ).users.getUserList({
      userId: userId,
      limit: 100,
    })
  ).data.map(filterUserForClient);

  return patients.map((patient) => {
    const biller = users.find((user) => user.id == patient.billerId);

    if (!biller) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        // Post author id in errors
        message: `Author for post not found. POST ID: ${patient.id}, USER ID: ${patient.billerId}`,
      });
    }
    if (!biller.username) {
      //user the ExternalUsername
      if (!biller.externalUsername) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Author has no authorized account: ${biller.id}`,
        });
      }
      biller.username = biller.externalUsername;
    }
    return {
      patient,
      biller: {
        ...biller,
        username: biller.username ?? "(username not found)",
      },
    };
  });
};

// Create a new ratelimiter, that allows 3 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),

  getUserByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const response = await (
        await clerkClient()
      ).users.getUserList({
        username: [input.username],
      });

      const user: User = response.data[0];
      //   users.getUserList({
      //     username: [input.username],
      //   });

      //   users.getUserList({
      //     username: [input.username],
      //   });

      if (!user) {
        // if we hit here we need a unsantized username so hit api once more and find the user.
        const response = await (
          await clerkClient()
        ).users.getUserList({
          limit: 200,
        });
        const users = response.data;
        const user = users.find((user) =>
          user.externalAccounts.find(
            (account) => account.username === input.username,
          ),
        );
        if (!user) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "User not found",
          });
        }
        return filterUserForClient(user);
      }

      return filterUserForClient(user);
    }),

  updateUserRole: privateProcedure
    .input(
      z.object({
        role: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Ensure the user is authenticated
      if (!ctx.userId) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      // Update the user's public metadata with the new role
      (await clerkClient()).users.updateUserMetadata(input.userId, {
        publicMetadata: {
          role: input.role,
        },
      });
      return { success: true };
    }),

  // (request: Request) {
  //   const { role, userId } = await request.json();

  //   await clerkClient.users.updateUserMetadata(userId, {
  //     publicMetadata: {
  //       role: role,
  //     },
  //   });
  //   return NextResponse.json({ success: true });
  // }

  /*
        Gets all the patients for us. TODO: This needS to be protected by user
        authetication because people should NOT be able to see all patients from 
        anywhere.
        */
  getAll: privateProcedure.query(async ({ ctx }) => {
    try {
      // Remove this line:
      // if (!ctx.userId) throw new Error("No user in context");

      const patients = await ctx.prisma.patient.findMany({
        take: 100,
        orderBy: [{ createdAt: "desc" }],
        include: { insurances: true },
      });

      return addBillerDataToPatients(patients.map(decryptPHI));
    } catch (err) {
      console.error("getAll error:", err);
      throw err;
    }
  }),

  getById: privateProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const patient = await ctx.prisma.patient.findUnique({
        where: { id: input.id },
      });

      if (!patient) throw new TRPCError({ code: "NOT_FOUND" });

      return (await addBillerDataToPatients([decryptPHI(patient)]))[0];
    }),

  getpatientsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const patients = await ctx.prisma.patient.findMany({
        where: { billerId: input.userId },
        take: 100,
        orderBy: [{ createdAt: "desc" }],
        include: { insurances: true },
      });
      return patients.map(decryptPHI);
    }),

  getPatientsByBillerId: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .output(z.array(PatientSchema))
    .query(async ({ ctx, input }) => {
      const patients = await ctx.prisma.patient.findMany({
        where: {
          billerId: input.userId,
        },
        take: 100,
        orderBy: [{ createdAt: "desc" }],
        include: {
          insurances: true, // Include insurances if needed
        },
      });
      return patients.map(decryptPHI);
    }),

  //Guarantees user is authenticated

  //Zod: Use to type-check data essentially
  // In createPatient mutation
  createPatient: privateProcedure
    .input(
      z.object({
        name: z.string(),
        insurer: z.string(),

        address: z.string().nullable().optional(),
        zipCode: z.string().nullable().optional(),
        sex: z.string().nullable().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      // Encrypt PHI before storing
      const encrypted = encryptPHI({
        ...input,
        address: input.address ?? null,
        zipCode: input.zipCode ?? null,
        sex: input.sex ?? null,
      });

      const patient = await ctx.prisma.patient.create({
        data: {
          ...encrypted,
          billerId,
        },
      });
      return decryptPHI(patient);
    }),

  deletePatient: privateProcedure
    .input(z.object({ patientId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      // First, delete all related PatientEvent records
      await ctx.prisma.encounter.deleteMany({
        where: { patientId: input.patientId },
      });

      const patient = await ctx.prisma.patient.delete({
        where: {
          id: input.patientId,
        },
      });
      return patient;
    }),

  getPatientDetails: privateProcedure
    .input(z.object({ patientId: z.string() }))
    .query(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const patient = await ctx.prisma.patient.findUnique({
        where: {
          id: input.patientId,
        },
      });

      if (!patient) throw new TRPCError({ code: "NOT_FOUND" });

      return decryptPHI(patient);
    }),

  updatePatientDetails: privateProcedure
    .input(
      z.object({
        patientId: z.string(),
        name: z.string(),
        dob: z.string(),
        insurances: z.array(z.string()).optional(),
        serviceStart: z.string().optional(),
        serviceEnd: z.string().optional(),
        providerName: z.string(),
        facilityName: z.string(),
        zipCode: z.string().nullable().optional(),
        groupNumber: z.string().nullable().optional(),
        sex: z.string().nullable(),
        address: z.string().nullable(),
        // …etc
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      // Encrypt PHI before updating
      const encryptedData = encryptPHI({
        name: input.name,
        address: input.address ?? null,
        zipCode: input.zipCode ?? null,
        sex: input.sex ?? null,
      });

      const patient = await ctx.prisma.patient.update({
        where: {
          id: input.patientId,
        },
        data: {
          ...encryptedData,
          billerId,
          dob: toValidDateOrNull(input.dob),
          serviceStart: toValidDateOrNull(input.serviceStart),
          serviceEnd: toValidDateOrNull(input.serviceEnd),
          zipCode: input.zipCode ?? null,
          groupNumber: input.groupNumber ?? null,
          sex: input.sex ?? null,
          address: input.address ?? null,
        },
      });
      return decryptPHI(patient);
    }),

  // In your tRPC router

  /*
    name: extractedData.patient_name,
    insurer: extractedData.insurance_name ?? "Unknown",
    dob: new Date(extractedData.date_of_birth),
    address: extractedData.address ?? null,
    age: extractedData.age ?? null,
    sex: extractedData.sex ?? null,
    state: extractedData.state ?? null,
    city: extractedData.city ?? null,
    serviceEnd: null, // Default to null, can be updated later
    providerName: extractedData.provider_name ?? null,
    facilityName: extractedData.facility_name ?? null,
    zipCode: extractedData.zip_code ?? null,
    groupNumber: extractedData.group_number ?? null,
    billerId: user.id,
  */
  createPatientsBulk: privateProcedure
    .input(
      z.array(
        z.object({
          name: z.string(),
          insurer: z.string(),
          dob: z.date().nullable().optional(),
          address: z.string().nullable().optional(),
          sex: z.string().nullable().optional(),
          serviceStart: z.date().nullable().optional(),
          serviceEnd: z.date().nullable().optional(),
          providerName: z.string().nullable().optional(),
          facilityName: z.string().nullable().optional(),
          zipCode: z.string().nullable().optional(),
          groupNumber: z.string().nullable().optional(),
          billerId: z.string(),
        }),
      ),
    )
    .mutation(async ({ input, ctx }) => {
      // Validate, dedupe, etc.
      // Insert all patients in a transaction
      const billerId = ctx.userId;

      const encryptedPatients = input.map((patient) => ({
        ...encryptPHI({
          ...patient,
          address: patient.address ?? null,
          zipCode: patient.zipCode ?? null,
          sex: patient.sex ?? null,
        }),
        billerId,
        serviceStart: patient.serviceStart ?? null,
        serviceEnd: patient.serviceEnd ?? null,
        providerName: patient.providerName ?? null,
        facilityName: patient.facilityName ?? null,
        zipCode: patient.zipCode ?? null,
        groupNumber: patient.groupNumber ?? null,
        sex: patient.sex ?? null,
        address: patient.address ?? null,
      }));

      await ctx.prisma.patient.createMany({ data: encryptedPatients });
      return { count: input.length };
    }),

  getEncountersByPatientId: publicProcedure
    .input(
      z.object({
        patientId: z.string(),
      }),
    )
    .query(({ ctx, input }) =>
      ctx.prisma.encounter.findMany({
        where: {
          patientId: input.patientId,
        },
        take: 100,
        orderBy: [{ createdAt: "desc" }],
      }),
    ),

  getAllEncountersByBillerId: privateProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      // Ensure the user is authenticated
      if (!ctx.userId) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      // Get all patients for the biller
      const patients = await ctx.prisma.patient.findMany({
        where: { billerId: input.userId },
        select: { id: true },
      });

      // Get all encounters for those patients and add patient details, Furthermore,
      // get the physician details for each encounter using the physicianId tied to the encounter
      const encounters = await ctx.prisma.encounter.findMany({
        where: {
          patientId: { in: patients.map((p) => p.id) },
        },
        take: 1000,
        orderBy: [{ createdAt: "desc" }],
        include: {
          patient: {
            include: {
              insurances: true, // <-- This includes insurances with each patient
            },
          },
          physician: true, // Include physician details
          actions: true,
        },
      });

      // Return encounters with patient details
      return encounters.map((enc) => ({
        ...enc,
        patient: decryptPHI(enc.patient),
      }));
    }),

  getEncountersByPatientIds: publicProcedure
    .input(z.object({ patientIds: z.array(z.string()) }))
    .query(({ ctx, input }) =>
      ctx.prisma.encounter.findMany({
        where: {
          patientId: { in: input.patientIds },
        },
        take: 1000,
        orderBy: [{ createdAt: "desc" }],
      }),
    ),

  createEncounter: privateProcedure
    .input(
      z.object({
        patientId: z.string(),
        eventType: z.string(),
        eventContent: z.string().optional(),
        date: z.date(),
        fileUrls: z.array(z.string()).optional(),
        physicianId: z.string(), // <-- Add this
        appointmentType: z.string(), // <-- Add this
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const encounter = await ctx.prisma.encounter.create({
        data: {
          patientId: input.patientId,
          content: input.eventContent,
          dateOfService: input.date,
          fileUrls: input.fileUrls,
          physicianId: input.physicianId, // <-- Add this
          appointmentType: input.appointmentType, // <-- Add this
        },
      });
      return encounter;
    }),

  deleteEncounter: privateProcedure
    .input(z.object({ encounterId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      // Delete the encounter
      const encounter = await ctx.prisma.encounter.delete({
        where: {
          id: input.encounterId,
        },
      });
      return encounter;
    }),

  createCasesBulk: privateProcedure
    .input(CasesBulkSchema)
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;

      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      // Quick access maps
      const patientMap = new Map<string, Patient>();
      const existingPatients = await ctx.prisma.patient.findMany({
        where: { billerId },
      });
      existingPatients.forEach((p) => {
        const key = `${normalize(p.name)}|${p.patientId}`;
        patientMap.set(key, p);
      });

      const physicianMap = new Map<string, Physician>();
      const existingPhysicians = await ctx.prisma.physician.findMany({});
      existingPhysicians.forEach((p) => {
        const key = `${normalize(p.name)}|${p.physicianNPI}`;
        physicianMap.set(key, p);
      });

      const facilityMap = new Map<string, Facility>();
      const existingFacilities = await ctx.prisma.facility.findMany({});
      existingFacilities.forEach((f) => {
        const key = `${normalize(f.name)}|${f.address}`;
        facilityMap.set(key, f);
      });

      const incompleteRecords: any[] = [];

      await Promise.all(
        input.map(async (caseData) => {
          // --- Patient matching/creation ---
          let matchedPatient: Patient | undefined = undefined;
          if (caseData.patientName && caseData.patientId) {
            const patientkey = `${normalize(caseData.patientName)}|${caseData.patientId}`;
            matchedPatient = patientMap.get(patientkey);

            if (!matchedPatient) {
              const idCandidates = existingPatients.filter(
                (p) => p.patientId === caseData.patientId,
              );
              const threshold = 2;
              for (const p of idCandidates) {
                if (
                  levenshteinTwoMatrixRows(p.name, caseData.patientName!) <=
                    threshold &&
                  levenshteinTwoMatrixRows(p.patientId, caseData.patientId!) <=
                    threshold
                ) {
                  matchedPatient = p;
                  break;
                }
              }
            }
          }
          if (!matchedPatient) {
            const newPatient = await ctx.prisma.patient.create({
              data: {
                name: caseData.patientName ?? "MISSING_PATIENT_NAME",
                patientId: caseData.patientId ?? "MISSING_PATIENT_ID",
                billerId,
              },
            });
            matchedPatient = newPatient;
            patientMap.set(
              `${normalize(matchedPatient.name)}|${matchedPatient.patientId}`,
              matchedPatient,
            );
            if (!caseData.patientName || !caseData.patientId) {
              incompleteRecords.push({
                type: "patient",
                missing: [
                  !caseData.patientName ? "patientName" : null,
                  !caseData.patientId ? "patientId" : null,
                ].filter(Boolean),
                id: matchedPatient.id,
              });
            }
          }

          // --- Physician matching/creation ---
          let matchedPhysician: Physician | undefined = undefined;
          if (
            caseData.attending_physician &&
            caseData.attending_physician_npi
          ) {
            const physicianKey = `${normalize(caseData.attending_physician)}|${caseData.attending_physician_npi}`;
            matchedPhysician = physicianMap.get(physicianKey);

            if (!matchedPhysician) {
              const npiCandidates = existingPhysicians.filter(
                (p) => p.physicianNPI === caseData.attending_physician_npi,
              );
              const threshold = 2;
              for (const p of npiCandidates) {
                if (
                  levenshteinTwoMatrixRows(
                    p.name,
                    caseData.attending_physician!,
                  ) <= threshold &&
                  levenshteinTwoMatrixRows(
                    p.physicianNPI!,
                    caseData.attending_physician_npi!,
                  ) <= threshold
                ) {
                  matchedPhysician = p;
                  break;
                }
              }
            }
          }
          if (!matchedPhysician) {
            const newPhysician = await ctx.prisma.physician.create({
              data: {
                name: caseData.attending_physician ?? "MISSING_PHYSICIAN_NAME",
                address: caseData.attending_physician_address ?? null,
                physicianNPI: caseData.attending_physician_npi ?? "MISSING_NPI",
                opn: caseData.attending_physician_opn ?? null,
                phone: null,
              },
            });
            matchedPhysician = newPhysician;
            physicianMap.set(
              `${normalize(matchedPhysician.name)}|${matchedPhysician.physicianNPI}`,
              matchedPhysician,
            );
            if (
              !caseData.attending_physician ||
              !caseData.attending_physician_npi
            ) {
              incompleteRecords.push({
                type: "physician",
                missing: [
                  !caseData.attending_physician ? "attending_physician" : null,
                  !caseData.attending_physician_npi
                    ? "attending_physician_npi"
                    : null,
                ].filter(Boolean),
                id: matchedPhysician.id,
              });
            }
          }

          // --- Facility matching/creation ---
          let matchedFacility: Facility | undefined = undefined;
          if (caseData.facility_name && caseData.facility_address) {
            const facilityKey = `${normalize(caseData.facility_name)}|${caseData.facility_address}`;
            matchedFacility = facilityMap.get(facilityKey);

            if (!matchedFacility) {
              const threshold = 2;
              const candidates = existingFacilities.filter(
                (f) => f.address === caseData.facility_address,
              );
              for (const f of candidates) {
                if (
                  levenshteinTwoMatrixRows(f.name, caseData.facility_name) <=
                  threshold
                ) {
                  matchedFacility = f;
                  break;
                }
              }
            }
          }
          if (!matchedFacility) {
            const newFacility = await ctx.prisma.facility.create({
              data: {
                name: caseData.facility_name ?? "MISSING_FACILITY_NAME",
                address:
                  caseData.facility_address ?? "MISSING_FACILITY_ADDRESS",
                city: caseData.city ?? "missing_city",
                state: caseData.state ?? "missing_state",
                zipCode: caseData.zip ?? "missing_zip",
                facilityNPI: caseData.facility_npi ?? undefined,
                facilityType: caseData.facility_type ?? "Unknown",
              },
            });
            matchedFacility = newFacility;
            facilityMap.set(
              `${normalize(matchedFacility.name)}|${matchedFacility.address}`,
              matchedFacility,
            );
            if (!caseData.facility_name || !caseData.facility_address) {
              incompleteRecords.push({
                type: "facility",
                missing: [
                  !caseData.facility_name ? "facility_name" : null,
                  !caseData.facility_address ? "facility_address" : null,
                ].filter(Boolean),
                id: matchedFacility.id,
              });
            }
          }

          // --- Encounter creation ---
          await ctx.prisma.encounter.create({
            data: {
              patientId: matchedPatient.id,
              physicianId: matchedPhysician.id,
              dateOfService: caseData.admission_date
                ? parseDate(caseData.admission_date)
                : new Date(),
              appointmentType: caseData.appointment_type ?? "Select",
              fileUrls: [],
              status: "Pending",
              facilityId: matchedFacility?.id ?? undefined,
              facilityName: caseData.facility_name ?? undefined,
              placeOfService: caseData.place_of_service ?? undefined,
              // ...other encounter fields from caseData...
            },
          });
        }),
      );

      return { count: input.length, incompleteRecords };
    }),

  createAction: privateProcedure
    .input(
      z.object({
        encounterId: z.string(),
        date: z.date(),
        type: z.nativeEnum(Action),
        eventContent: z.string().optional(),
        transcript: z.string().optional(),
        summary: z.string().optional(),
        fileUrls: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const billerId = ctx.userId;
      const { success } = await ratelimit.limit(billerId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });
      // Create the biller action
      const action = await ctx.prisma.billerAction.create({
        data: {
          encounterId: input.encounterId, // <-- Add this
          date: input.date,
          type: input.type,
          content: input.eventContent,
          transcript: input.transcript,
          summary: input.summary,
          fileUrls: input.fileUrls,
        },
      });
      return action;
    }),

  // createEncountersBulk: privateProcedure
  //   .input(EncounterBulkSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.prisma.encounter.createMany({
  //       data: input,
  //     });
  //   }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
