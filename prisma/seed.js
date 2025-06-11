const { PrismaClient } = require("@prisma/client");
const { create } = require("axios");

const crypto = require("crypto");
const prisma = new PrismaClient();

const algorithm = "aes-256-gcm";
const key = Buffer.from(process.env.PHI_ENCRYPTION_KEY, "hex"); // 32 bytes
const ivLength = 12; // GCM recommended IV length

function hexToUint8Array(hex) {
  return new Uint8Array(hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
}

function encrypt(text) {
  const ivBuffer = crypto.randomBytes(ivLength);
  const iv = new Uint8Array(
    ivBuffer.buffer,
    ivBuffer.byteOffset,
    ivBuffer.byteLength,
  );
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag();
  return {
    data: encrypted,
    iv: Buffer.from(iv).toString("hex"), // Store as hex string
    tag: tag.toString("hex"),
  };
}

function encryptPHI(patient) {
  const encrypted = { ...patient };
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
  return encrypted;
}

async function main() {
  // --- Patient Data ---
  const patientData = [
    {
      patientKey: "james_carter",
      name: "James Carter",
      insurer: "Blue Cross",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "olivia_peterson",
      name: "Olivia Peterson",
      insurer: "Blue Cross",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "michael_johnson",
      name: "Michael Johnson",
      insurer: "WellCare",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "sophia_turner",
      name: "Sophia Turner",
      insurer: "UnitedHealthcare",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "liam_mitchell",
      name: "Liam Mitchell",
      insurer: "Humana",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "amelia_young",
      name: "Amelia Young",
      insurer: "Cigna",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "ethan_clark",
      name: "Ethan Clark",
      insurer: "Aetna",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "emily_davis",
      name: "Emily Davis",
      insurer: "Anthem",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "daniel_martinez",
      name: "Daniel Martinez",
      insurer: "Oscar Health",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "maya_patel",
      name: "Maya Patel",
      insurer: "Kaiser Permanente",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "julian_kim",
      name: "Julian Kim",
      insurer: "Molina Healthcare",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "rachel_green",
      name: "Rachel Green",
      insurer: "Health Net",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "marcus_lee",
      name: "Marcus Lee",
      insurer: "Centene",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "test_blank",
      name: "test blank",
      insurer: "Blue Shield",
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
  ];

  // --- Encounter Data ---
  const patientEncounters = [
    {
      encounterId: "143862458",
      date: "2024-03-01T00:00:00.000Z",
      content: "Knee pain presented. Ordered MRI.",
      patientKey: "james_carter",
      facility: "Advocate Medical Group",
      insuranceCompany: "HUMANA",
      status: "Pending Verification",
      physician: "Siram Perni",
      dob: "04/01/2025",
      caseId: "demo-173",
    },
    {
      encounterId: "3267462969",
      date: "2024-04-05T00:00:00.000Z",
      content: "Routine check-up, no complaints.",
      patientKey: "olivia_peterson",
      facility: "Advocate Medical Group",
      insuranceCompany: "Anthem Blue Cross Blue Shield Kentucky",
      status: "Pending Information",
      physician: "Daniel Jenkins",
      dob: "03/30/1985",
      caseId: "demo-172",
    },
    {
      encounterId: "4236787683",
      date: "2024-02-12T00:00:00.000Z",
      content: "Severe back pain, referred to PT.",
      patientKey: "michael_johnson",
      facility: "Carle Clinic",
      insuranceCompany: "Aetna",
      status: "Approved",
      physician: "George Ellender",
      dob: "04/08/1994",
      caseId: "demo-171",
    },
    {
      encounterId: "164788197B",
      date: "2024-03-10T00:00:00.000Z",
      content: "Reported dizziness, advised hydration and rest.",
      patientKey: "liam_mitchell",
      facility: "Carle Clinic",
      insuranceCompany: "Aetna",
      status: "Pending Information",
      physician: "Sully Scott",
      dob: "03/31/1979",
      caseId: "demo-170",
    },
    {
      encounterId: "114835643",
      date: "2024-02-01T00:00:00.000Z",
      content: "Follow-up on asthma, no exacerbations reported.",
      patientKey: "amelia_young",
      facility: "Carle Clinic",
      insuranceCompany: "Cigna",
      status: "Approved",
      physician: "Kelley Achtman",
      dob: "11/12/1967",
      caseId: "demo-169",
    },
    {
      encounterId: "031419BEB",
      date: "2024-01-05T00:00:00.000Z",
      content: "Routine bloodwork completed.",
      patientKey: "emily_davis",
      facility: "OSF Heart Lung Assoc",
      insuranceCompany: "Wellmark BCBS",
      status: "Canceled",
      physician: "Sarah Devore",
      dob: "03/14/1989",
      caseId: "demo-168",
    },
    {
      encounterId: "098765432I",
      date: "2024-03-14T00:00:00.000Z",
      content: "Complained of lower back pain from work stress.",
      patientKey: "maya_patel",
      facility: "OSF Cardiovascular Institute",
      insuranceCompany: "aetna",
      status: "Canceled",
      physician: "Nicole Tsang",
      dob: "02/04/1978",
      caseId: "demo-167",
    },
    {
      encounterId: "2387676898",
      date: "2024-03-09T00:00:00.000Z",
      content: "Annual physical, labs ordered.",
      patientKey: "julian_kim",
      facility: "Illinois Cancer Care",
      insuranceCompany: "Aetna",
      status: "Canceled",
      physician: "abc cba",
      dob: "01/01/1992",
      caseId: "demo-166",
    },
    {
      encounterId: "142376328T",
      date: "2024-02-23T00:00:00.000Z",
      content: "Prescribed physical therapy for shoulder strain.",
      patientKey: "rachel_green",
      facility: "Advocate Medical Group",
      insuranceCompany: "Highmark",
      status: "Approved",
      physician: "Daniel Jenkins",
      dob: "02/10/1976",
      caseId: "demo-165",
    },
  ];

  // --- Biller Actions Data ---
  const billerActions = [
    {
      date: "2024-03-30T00:00:00.000Z",
      type: "Denial",
      content: "Denied for imaging.",
      encounterId: "143862458",
    },
    {
      date: "2024-04-01T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Appeal filed for imaging.",
      encounterId: "143862458",
    },
    {
      date: "2024-04-03T00:00:00.000Z",
      type: "Voice AI",
      transcript: "Discussed surgical options.",
      summary: "Patient leaning conservative care.",
      encounterId: "143862458",
    },
    {
      date: "2024-04-06T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Submitted wellness visit documentation.",
      encounterId: "3267462969",
    },
    {
      date: "2024-02-20T00:00:00.000Z",
      type: "Voice AI",
      transcript: "Discussed therapy expectations.",
      summary: "Patient agreed to PT for 6 weeks.",
      encounterId: "4236787683",
    },
    {
      date: "2024-01-15T00:00:00.000Z",
      type: "Denial",
      content: "Denied for lab work due to coding error.",
      encounterId: "164788197B",
    },
    {
      date: "2024-01-20T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Appeal submitted with correct code.",
      encounterId: "164788197B",
    },
    {
      date: "2024-02-07T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Sent medication refill request.",
      encounterId: "114835643",
    },
    {
      date: "2024-04-02T00:00:00.000Z",
      type: "Denial",
      content: "Denied for out-of-network lab testing.",
      encounterId: "031419BEB",
    },
    {
      date: "2024-04-04T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Appeal submitted with supporting documents.",
      encounterId: "031419BEB",
    },
    {
      date: "2024-02-10T00:00:00.000Z",
      type: "Voice AI",
      transcript: "Doctor explained the new medication schedule.",
      summary: "Medication adherence emphasized.",
      encounterId: "098765432I",
    },
    {
      date: "2024-03-16T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Referred to ergonomic consultant.",
      encounterId: "2387676898",
    },
    {
      date: "2024-02-25T00:00:00.000Z",
      type: "Voice AI",
      transcript: "PT goals discussed.",
      summary: "Focus on mobility improvement.",
      encounterId: "142376328T",
    },
    {
      date: "2024-04-11T00:00:00.000Z",
      type: "Denial",
      content: "Denied for imaging due to missing referral.",
      encounterId: "2387676898",
    },
    {
      date: "2024-04-12T00:00:00.000Z",
      type: "Kyron Letter",
      content: "Appeal filed with updated referral.",
      encounterId: "2387676898",
    },
  ];

  // --- Create Patients ---
  const patientIdMap = {};
  for (const patient of patientData) {
    const encrypted = encryptPHI(patient);
    const { patientKey, ...dbPatient } = encrypted;
    const created = await prisma.patient.create({ data: dbPatient });
    patientIdMap[patient.patientKey] = created.id;
  }

  // Helper to generate a fake NPI for a physician name
  function fakeNPI(name) {
    // Simple deterministic hash for demo purposes (not a real NPI)
    return crypto.createHash("md5").update(name).digest("hex").slice(0, 10);
  }

  // --- Create Physicians ---
  const physicianIdMap = {};
  for (const encounter of patientEncounters) {
    const name = encounter.physician;
    if (!physicianIdMap[name]) {
      const npi = fakeNPI(name);
      const physician = await prisma.physician.upsert({
        where: { npi },
        update: {},
        create: { name, npi },
      });
      physicianIdMap[name] = physician.id;
    }
  }

  // --- Create Encounters ---
  const encounterDbIdMap = {};
  for (const encounter of patientEncounters) {
    const dbEncounter = await prisma.encounter.create({
      data: {
        patientId: patientIdMap[encounter.patientKey],
        physicianId: physicianIdMap[encounter.physician],
        dateOfService: new Date(encounter.date),
        content: encounter.content,
        facilityName: encounter.facility,
        status: encounter.status,
        appointmentType: "General",
        placeOfService: null,
        fileUrls: [],
        summary: null,
        id: encounter.caseId,
      },
    });
    encounterDbIdMap[encounter.encounterId] = dbEncounter.id;
  }

  // --- Create Biller Actions ---
  const enumTypeMap = {
    Denial: "DENIALS",
    "Kyron Letter": "APPEALS",
    "Voice AI": "CLAIM_STATUS_INQUIRIES",
    // Add more mappings if needed
  };
  for (const action of billerActions) {
    await prisma.billerAction.create({
      data: {
        id: action.id || crypto.randomUUID(),
        encounterId: encounterDbIdMap[action.encounterId],
        date: action.date ? new Date(action.date) : new Date(),
        type: enumTypeMap[action.type] || "APPEALS", // fallback to APPEALS
        content: action.content || null,
        transcript: action.transcript || null,
        summary: action.summary || null,
        createdAt: action.createdAt ? new Date(action.createdAt) : new Date(),
        updatedAt: action.updatedAt ? new Date(action.updatedAt) : new Date(),
        fileUrls: Array.isArray(action.fileUrls) ? action.fileUrls : [],
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
