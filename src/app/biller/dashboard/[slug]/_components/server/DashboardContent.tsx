import { currentUser } from "@clerk/nextjs/server";
import { trpc } from "@/../trpc/server";
import DashboardContentClient from "../client/DashboardContentUI";
import { redirect } from "next/navigation";
import type { PatientEvent } from "@prisma/client";

const DashboardContent = async (): Promise<JSX.Element | null> => {
  const user = await currentUser();

  if (!user) {
    // Redirect to the home page if the user is not authenticated
    redirect("/");
    return null;
  }

  if (user.publicMetadata?.role !== "biller") {
    // Redirect to the home page if the user is not a biller
    redirect("/");
    return null;
  }

  const patients = await trpc.getPatientsByBillerId({
    userId: user.id,
  });

  const patientIds: string[] = patients.map((p) => p.id);

  let patientEvents: PatientEvent[] = [];
  if (patientIds.length > 0) {
    patientEvents = await trpc.getpatientEventsByPatientIds({
      patientIds,
    });
  }

  // If you know the type of patientEvents, replace 'unknown' with the correct type above

  return (
    <DashboardContentClient patientEvents={patientEvents} />
  );
};

export default DashboardContent;
