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
  const patientData = [
    {
      patientKey: "james_carter",
      name: "James Carter",
      insurer: "Blue Cross",
      moneyCollected: 1200,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "olivia_peterson",
      name: "Olivia Peterson",
      insurer: "Blue Cross",
      moneyCollected: 900,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },

    {
      patientKey: "michael_johnson",
      name: "Michael Johnson",
      insurer: "WellCare",
      moneyCollected: 1300,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "sophia_turner",
      name: "Sophia Turner",
      insurer: "UnitedHealthcare",
      moneyCollected: 1500,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "liam_mitchell",
      name: "Liam Mitchell",
      insurer: "Humana",
      moneyCollected: 700,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "amelia_young",
      name: "Amelia Young",
      insurer: "Cigna",
      moneyCollected: 400,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "ethan_clark",
      name: "Ethan Clark",
      insurer: "Aetna",
      moneyCollected: 1000,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "emily_davis",
      name: "Emily Davis",
      insurer: "Anthem",
      moneyCollected: 900,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "daniel_martinez",
      name: "Daniel Martinez",
      insurer: "Oscar Health",
      moneyCollected: 0,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "maya_patel",
      name: "Maya Patel",
      insurer: "Kaiser Permanente",
      moneyCollected: 650,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "julian_kim",
      name: "Julian Kim",
      insurer: "Molina Healthcare",
      moneyCollected: 500,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "rachel_green",
      name: "Rachel Green",
      insurer: "Health Net",
      moneyCollected: 1100,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      patientKey: "marcus_lee",
      name: "Marcus Lee",
      insurer: "Centene",
      moneyCollected: 950,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
    {
      name: "test blank",
      insurer: "Blue Shield",
      moneyCollected: 0,
      billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
    },
  ];

  // 2. Encrypt and create patients, mapping patientKey to ID
  const patientIdMap = {};
  for (const patient of patientData) {
    const encrypted = encryptPHI(patient);
    // Remove patientKey before saving to DB
    const { patientKey, ...dbPatient } = encrypted;
    const created = await prisma.patient.create({ data: dbPatient });
    patientIdMap[patient.patientKey] = created.id;
  }


  await prisma.patientEvent.createMany({
    data: [
      {
        date: "2024-03-01T00:00:00.000Z",
        type: "Note",
        content: "Knee pain presented. Ordered MRI.",
        patientId: patientIdMap["james_carter"],
      },
      {
        date: "2024-03-30T00:00:00.000Z",
        type: "Denial",
        content: "Denied for imaging.",
        patientId: patientIdMap["james_carter"],
      },
      {
        date: "2024-04-01T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Appeal filed for imaging.",
        patientId: patientIdMap["james_carter"],
      },
      {
        date: "2024-04-03T00:00:00.000Z",
        type: "Voice AI",
        transcript: "Discussed surgical options.",
        summary: "Patient leaning conservative care.",
        patientId: patientIdMap["james_carter"],
      },
      {
        date: "2024-04-05T00:00:00.000Z",
        type: "Note",
        content: "Routine check-up, no complaints.",
        patientId: patientIdMap["olivia_peterson"],
      },
      {
        date: "2024-04-06T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Submitted wellness visit documentation.",
        patientId: patientIdMap["olivia_peterson"],
      },
      {
        date: "2024-02-12T00:00:00.000Z",
        type: "Note",
        content: "Severe back pain, referred to PT.",
        patientId: patientIdMap["michael_johnson"],
      },
      {
        date: "2024-02-20T00:00:00.000Z",
        type: "Voice AI",
        transcript: "Discussed therapy expectations.",
        summary: "Patient agreed to PT for 6 weeks.",
        patientId: patientIdMap["michael_johnson"],
      },
      {
        date: "2024-01-15T00:00:00.000Z",
        type: "Denial",
        content: "Denied for lab work due to coding error.",
        patientId: patientIdMap["sophia_turner"],
      },
      {
        date: "2024-01-20T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Appeal submitted with correct code.",
        patientId: patientIdMap["sophia_turner"],
      },
      {
        date: "2024-03-10T00:00:00.000Z",
        type: "Note",
        content: "Reported dizziness, advised hydration and rest.",
        patientId: patientIdMap["liam_mitchell"],
      },
      {
        date: "2024-02-01T00:00:00.000Z",
        type: "Note",
        content: "Follow-up on asthma, no exacerbations reported.",
        patientId: patientIdMap["amelia_young"],
      },
      {
        date: "2024-02-07T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Sent medication refill request.",
        patientId: patientIdMap["amelia_young"],
      },
      {
        date: "2024-04-02T00:00:00.000Z",
        type: "Denial",
        content: "Denied for out-of-network lab testing.",
        patientId: patientIdMap["ethan_clark"],
      },
      {
        date: "2024-04-04T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Appeal submitted with supporting documents.",
        patientId: patientIdMap["ethan_clark"],
      },
      {
        date: "2024-01-05T00:00:00.000Z",
        type: "Note",
        content: "Routine bloodwork completed.",
        patientId: patientIdMap["emily_davis"],
      },
      {
        date: "2024-02-10T00:00:00.000Z",
        type: "Voice AI",
        transcript: "Doctor explained the new medication schedule.",
        summary: "Medication adherence emphasized.",
        patientId: patientIdMap["daniel_martinez"],
      },
      {
        date: "2024-03-14T00:00:00.000Z",
        type: "Note",
        content: "Complained of lower back pain from work stress.",
        patientId: patientIdMap["maya_patel"],
      },
      {
        date: "2024-03-16T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Referred to ergonomic consultant.",
        patientId: patientIdMap["maya_patel"],
      },
      {
        date: "2024-03-09T00:00:00.000Z",
        type: "Note",
        content: "Annual physical, labs ordered.",
        patientId: patientIdMap["julian_kim"],
      },
      {
        date: "2024-02-23T00:00:00.000Z",
        type: "Note",
        content: "Prescribed physical therapy for shoulder strain.",
        patientId: patientIdMap["rachel_green"],
      },
      {
        date: "2024-02-25T00:00:00.000Z",
        type: "Voice AI",
        transcript: "PT goals discussed.",
        summary: "Focus on mobility improvement.",
        patientId: patientIdMap["rachel_green"],
      },
      {
        date: "2024-04-11T00:00:00.000Z",
        type: "Denial",
        content: "Denied for imaging due to missing referral.",
        patientId: patientIdMap["marcus_lee"],
      },
      {
        date: "2024-04-12T00:00:00.000Z",
        type: "Kyron Letter",
        content: "Appeal filed with updated referral.",
        patientId: patientIdMap["marcus_lee"],
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
