export const patients = [
  { name: "James Carter", insurer: "Blue Cross", moneyCollected: 1200 },
  { name: "Olivia Peterson", insurer: "Blue Cross", moneyCollected: 900 },
  { name: "Michael Johnson", insurer: "WellCare", moneyCollected: 1300 },
  {
    name: "Sophia Turner",
    insurer: "UnitedHealthcare",
    moneyCollected: 1500,
  },
  { name: "Liam Mitchell", insurer: "Humana", moneyCollected: 700 },
  { name: "Amelia Young", insurer: "Cigna", moneyCollected: 400 },
  { name: "Ethan Clark", insurer: "Aetna", moneyCollected: 1000 },
  { name: "Emily Davis", insurer: "Anthem", moneyCollected: 900 },
  { name: "Daniel Martinez", insurer: "Oscar Health", moneyCollected: 0 },
  { name: "Maya Patel", insurer: "Kaiser Permanente", moneyCollected: 650 },
  { name: "Julian Kim", insurer: "Molina Healthcare", moneyCollected: 500 },
  { name: "Rachel Green", insurer: "Health Net", moneyCollected: 1100 },
  { name: "Marcus Lee", insurer: "Centene", moneyCollected: 950 },
  { name: "test blank", insurer: "Blue Shield", moneyCollected: 0 },
];

export const patientEvents = {
  "James Carter": [
    {
      date: "March 1",
      type: "Note",
      content: "Knee pain presented. Ordered MRI.",
    },
    { date: "March 30", type: "Denial", content: "Denied for imaging." },
    {
      date: "April 1",
      type: "Kyron Letter",
      content: "Appeal filed for imaging.",
    },
    {
      date: "April 3",
      type: "Voice AI",
      transcript: "Discussed surgical options.",
      summary: "Patient leaning conservative care.",
    },
  ],
  "Olivia Peterson": [
    {
      date: "April 5",
      type: "Note",
      content: "Routine check-up, no complaints.",
    },
    {
      date: "April 6",
      type: "Kyron Letter",
      content: "Submitted wellness visit documentation.",
    },
  ],
  "Michael Johnson": [
    {
      date: "Feb 12",
      type: "Note",
      content: "Severe back pain, referred to PT.",
    },
    {
      date: "Feb 20",
      type: "Voice AI",
      transcript: "Discussed therapy expectations.",
      summary: "Patient agreed to PT for 6 weeks.",
    },
  ],
  "Sophia Turner": [
    {
      date: "Jan 15",
      type: "Denial",
      content: "Denied for lab work due to coding error.",
    },
    {
      date: "Jan 20",
      type: "Kyron Letter",
      content: "Appeal submitted with correct code.",
    },
  ],
  "Liam Mitchell": [
    {
      date: "March 10",
      type: "Note",
      content: "Reported dizziness, advised hydration and rest.",
    },
  ],
  "Amelia Young": [
    {
      date: "Feb 1",
      type: "Note",
      content: "Follow-up on asthma, no exacerbations reported.",
    },
    {
      date: "Feb 7",
      type: "Kyron Letter",
      content: "Sent medication refill request.",
    },
  ],
  "Ethan Clark": [
    {
      date: "April 2",
      type: "Denial",
      content: "Denied for out-of-network lab testing.",
    },
    {
      date: "April 4",
      type: "Kyron Letter",
      content: "Appeal submitted with supporting documents.",
    },
  ],
  "Emily Davis": [
    { date: "Jan 5", type: "Note", content: "Routine bloodwork completed." },
  ],
  "Daniel Martinez": [
    {
      date: "Feb 10",
      type: "Voice AI",
      transcript: "Doctor explained the new medication schedule.",
      summary: "Medication adherence emphasized.",
    },
  ],
  "Maya Patel": [
    {
      date: "March 14",
      type: "Note",
      content: "Complained of lower back pain from work stress.",
    },
    {
      date: "March 16",
      type: "Kyron Letter",
      content: "Referred to ergonomic consultant.",
    },
  ],
  "Julian Kim": [
    {
      date: "March 9",
      type: "Note",
      content: "Annual physical, labs ordered.",
    },
  ],
  "Rachel Green": [
    {
      date: "Feb 23",
      type: "Note",
      content: "Prescribed physical therapy for shoulder strain.",
    },
    {
      date: "Feb 25",
      type: "Voice AI",
      transcript: "PT goals discussed.",
      summary: "Focus on mobility improvement.",
    },
  ],
  "Marcus Lee": [
    {
      date: "April 11",
      type: "Denial",
      content: "Denied for imaging due to missing referral.",
    },
    {
      date: "April 12",
      type: "Kyron Letter",
      content: "Appeal filed with updated referral.",
    },
  ],
  "balnk test": [{}],
};

export const messages = [
  "Ready when you are.",
  "Let's get started.",
  "Welcome to Kyron.",
];
