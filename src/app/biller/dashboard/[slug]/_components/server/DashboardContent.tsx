import Image from "next/image";
import DashboardModal from "../ui/patient-modal";
import type { Patient, PatientEvent } from "@prisma/client";
import { patients, patientEvents, messages } from "../../data/dashboard-data";
import { currentUser, auth } from "@clerk/nextjs/server";
import { trpc } from "@/../trpc/server";
import DashboardContentClient from "../client/DashboardContentUI";
import { redirect } from "next/navigation";

const DashboardContent = async () => {
  const user = await currentUser();

  if (!user) {
    // Redirect to the home page if the user is not authenticated
    redirect("/");
    return null;
  }

  if (user.publicMetadata?.role !== "biller") {
    // Redirect to the home page if the user is not a biller
    redirect("/");
  }

  const patients : Patient[] = await trpc.getPatientsByBillerId({
    userId: user.id,
  });

  // Fetch all patient events for these patients
  const patientIds = patients.map((p) => p.id);
  let patientEvents: PatientEvent[] = [];
  if (patientIds.length > 0) {
    patientEvents = await trpc.getpatientEventsByPatientIds({ patientIds });
  }

  const totalCollected = patients.reduce((sum, p) => sum + p.moneyCollected, 0);

  const formattedTotalCollected = totalCollected.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <DashboardContentClient patients={patients} patientEvents={patientEvents} />
  );
};

export default DashboardContent;
