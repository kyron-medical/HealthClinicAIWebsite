import { currentUser } from "@clerk/nextjs/server";
import { trpc } from "@/../trpc/server";
import DashboardContentClient from "../client/DashboardContentUI";
import { redirect } from "next/navigation";
import type { Encounter } from "@prisma/client";

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

  let encounters: Encounter[] = [];
  if (patientIds.length > 0) {
    encounters = await trpc.getEncountersByPatientIds({
      patientIds,
    });
  }

  // If you know the type of patientEvents, replace 'unknown' with the correct type above

  return <DashboardContentClient patientEvents={encounters} />;
};

export default DashboardContent;
