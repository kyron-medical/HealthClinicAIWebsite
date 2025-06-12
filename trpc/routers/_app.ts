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
import { Encounter, Patient, Action, Physician, Facility } from "@prisma/client";
import { encrypt, decrypt } from "@/../utils/secure";
import { I } from "@upstash/redis/zmscore-CjoCv9kz";
import { parseDate, normalize, levenshteinTwoMatrixRows } from "utils/tools";

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
  insurer: string;
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
  if (patient.insurer) {
    const { data, iv, tag } = encrypt(patient.insurer);
    encrypted.insurer = data;
    encrypted.insurer_iv = iv;
    encrypted.insurer_tag = tag;
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
  insurer: z.string(),
  insurer_iv: z.string().nullable().optional(),
  insurer_tag: z.string().nullable().optional(),
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
    patientId: z.string().optional(),
    // mrn or medical_record_number
    mrn: z.string().optional(),
    medical_record_number: z.string().optional(),
    dateOfBirth: z.string().optional(),
    age: z.number().optional(),
    sex: z.string().optional(),
    race: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    phone: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergency_contact_phone: z.string().optional(),
    group_number: z.string().optional(),
    admission_date: z.string().date().optional(),
    admission_time: z.string().time().optional(),
    attending_physician: z.string().optional(),
    diagnosis: z.string().optional(),
    procedure: z.string().optional(),
    discharge_date: z.string().date().optional(),
    insurance_id: z.string().optional(),
    insurance_name: z.string().optional(),
    insurance_type: z.string().optional(),
    insurance_plan: z.string().optional(),
    insurance_primary_secondary: z.string().optional(),
    insurance_start_date: z.string().date().optional(),
    insurance_end_date: z.string().date().optional(),
    facility_name: z.string().optional(),
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
        insurer: z.string().optional(),
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
        insurer: input.insurer ?? "",
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
          serviceStart: input.serviceStart ?? null,
          serviceEnd: input.serviceEnd ?? null,
          providerName: input.providerName ?? null,
          facilityName: input.facilityName ?? null,
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
          patient: true, // Include patient details
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

      // Using the CasesBulkSchema, we need to create one or more
      // encounters, and create or update one or more patients and physicians.
      // 1. Fetch all existing patients for this biller

      // Quick access map for patients
      const patientMap = new Map<string, Patient>();
      const existingPatients = await ctx.prisma.patient.findMany({
        where: { billerId },
        // Optionally select only fields needed for matching (name, dob, etc.)
      });

      existingPatients.forEach((p) => {
        const key = `${normalize(p.name)}|${p.dob.toISOString().split("T")[0]}`;
        patientMap.set(key, p);
      });

      // Quick access map for physicians
      const physicianMap = new Map<string, Physician>();
      const existingPhysicians = await ctx.prisma.physician.findMany({
      });

      existingPhysicians.forEach((p) => {
        const key = `${normalize(p.name)}|${p.address}`;
        physicianMap.set(key, p);
      });

      // Quick access map for facilities
      const facilityMap = new Map<string, Facility>();
      const existingFacilities = await ctx.prisma.facility.findMany({
      });

      existingFacilities.forEach((f) => {
        const key = `${normalize(f.name)}|${f.address}`;
        facilityMap.set(key, f);
      });


      // Let's divide-and-conquer to narrow down existing patients. We
      // need to t match encounters to patients using available fields
      // (name, DOB, etc.), using exact or fuzzy matching

      // 2. For each case in the input:
      input.forEach(async (caseData) => {
        if (!caseData.patientName  || !caseData.dateOfBirth) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message:
              "Patient name and date of birth are required for matching. " + 
            "Face sheet is incomplete.",
          });
        }

        const patientName: string = caseData.patientName!;
        const dateOfBirth: string = caseData.dateOfBirth!;

        // Then, inside your loop:
        const patientkey = `${normalize(patientName)}|${dateOfBirth}`;
        let matchedPatient = patientMap.get(patientkey);

        // b. If not found, try fuzzy match (e.g., Levenshtein/Jaro-Winkler on name, dob within 1-2 days)
        if (matchedPatient === undefined) {

            // 1. Filter by DOB (exact or within a range, e.g., ±1 day)
            const dobCandidates = existingPatients.filter((p) => {
              // Example: exact match
              return p.dob.toISOString().split("T")[0] === dateOfBirth;
              // Or for a range, use a date diff function
            });

          const threshold = 2; // Adjust this threshold as needed
          for (const p of dobCandidates) {
            if (
              levenshteinTwoMatrixRows(p.name, caseData.patientName!) >
                threshold &&
              levenshteinTwoMatrixRows(
                p.dob.toISOString().split("T")[0],
                caseData.dateOfBirth!,
              ) > threshold
            ) {
              matchedPatient = p;
              break;
            }
          }
        }

        // c. If still not found, create new patient
        if (matchedPatient === undefined) {
          const newPatient = await ctx.prisma.patient.create({
            data: {
              name: caseData.patientName,
              dob: parseDate(caseData.dateOfBirth),
              // ...other fields...
              billerId,
            },
            
          }).catch((error) => {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: `Failed to create patient: ${error.message}`,
            });
          });

          // Create insurance for the new patient
            await ctx.prisma.insurance.create({
              data: {
                name: caseData.insurance_name ?? "Unknown",
                insuranceType: caseData.insurance_type ?? "",
                insurancePlan: caseData.insurance_plan ?? "",
                insuranceStartDate: caseData.insurance_start_date
                  ? parseDate(caseData.insurance_start_date)
                  : new Date(),
                insuranceEndDate: caseData.insurance_end_date
                  ? parseDate(caseData.insurance_end_date)
                  : null,
                patientId: newPatient.id,
              },
            });

          matchedPatient = newPatient;
        }


        if (!caseData.attending_physician  || !caseData.address) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message:
              "Attending physician and address are required for matching. " + 
            "Face sheet is incomplete.",
          });
        }

        const attending_physician: string = caseData.attending_physician!;
        const address: string = caseData.address!;

        // Then, inside your loop:
        const physicianKey = `${normalize(attending_physician)}|${address}`;
        let matchedPhysician = physicianMap.get(physicianKey);

        if (matchedPhysician === undefined) {
          // 1. Filter by address (exact or within a range, e.g., similar street names)
          const addressCandidates = existingPhysicians.filter((p) => {
            // Example: exact match
            return p.address === address;
            // Or for a range, use a string similarity function
          });

          const threshold = 2; // Adjust this threshold as needed
          for (const p of addressCandidates) {
            if (
              levenshteinTwoMatrixRows(p.name, caseData.attending_physician!) >
                threshold &&
              levenshteinTwoMatrixRows(p.address!, caseData.address!) > threshold
            ) {
              matchedPhysician = p;
              break;
            }
          }
        }

        // c. If still not found, create new physician
        if (matchedPhysician === undefined) {
          const newPhysician = await ctx.prisma.physician.create({
            data: {
              name: attending_physician,
              address: caseData.address,
              physicianNPI: "missing_npi", // <-- required, use value or default
              phone: caseData.phone ?? null,
              // Add other fields as needed
            }

          }).catch((error) => {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: `Failed to create physician: ${error.message}`,
            });
          });

          matchedPhysician = newPhysician;
        }


        if (!caseData.admission_date) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Admission date is required for creating an encounter." + 
            "Face sheet is incomplete.",
          });
        }
        
        // d. Create new encounter for this patient
        await ctx.prisma.encounter.create({
          data: {
            patientId: matchedPatient.id,
            // ...other encounter fields from caseData...
            dateOfService: parseDate(caseData.admission_date),
            physicianId: matchedPhysician.id,        // <-- Make sure this exists in caseData
            appointmentType: "Select",

          }
        }).catch((error) => {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Failed to create encounter: ${error.message}`,
            });
        });
        

      // 3. Return summary (e.g., number of encounters created)
      return { count: input.length };
    });
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
