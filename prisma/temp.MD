model Patient {
  id              String   @id @default(cuid())
  name            String
  name_iv         String   
  name_tag        String   
  dob       DateTime @default(now())
  insurer         String
  insurer_iv      String   
  insurer_tag     String   
  moneyCollected  Int
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  patientEvents   PatientEvent[]
  billerId        String
  serviceStart    DateTime @default(now())
  serviceEnd      DateTime?
  providerName    String?           // <-- make optional
  providerName_iv String?           // <-- make optional
  providerName_tag String?          // <-- make optional
  facilityName    String?           // <-- make optional
  zipCode         String?           // <-- make optional
  zipCode_iv      String?           // <-- make optional
  zipCode_tag     String?           // <-- make optional
  groupNumber     String?           // <-- make optional
}
