"use client";

import { useState } from "react";
import PatientModal from "../ui/patient-modal";
import { Patient } from "@prisma/client";
import { PatientEvent } from "@prisma/client";
import { createPortal } from "react-dom";
import { trpc } from "trpc/client";
import styles from "./styles/PatientRow.module.css";

// Define interface for your row data
interface PatientRow {
  name: string;
  dob: Date; // Assuming dob is a Date object
  insurer: string;
  moneyCollected: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  billerId: string;
}

interface PatientGridProps {
  patients: {
    id: string;
    name: string;
    dob: Date; // Assuming dob is a Date object
    insurer: string;
    moneyCollected: number;
    createdAt: Date;
    updatedAt: Date;
    billerId: string;
    groupNumber: string | null;
  }[];

  filterName: string;
  filterInsurer: string;
  refetchPatientsAction: (options?: unknown) => Promise<unknown>;
}

const PatientGridClient = ({
  patients,
  filterName,
  filterInsurer,
  refetchPatientsAction,
}: PatientGridProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<PatientRow | null>(
    null,
  );

  // Ensure modal is rendered in a portal
  const modalRoot =
    typeof window !== "undefined"
      ? document.getElementById("modal-root")
      : null;

  // Fetch events for the selected patient
  const { data: patientEvents = [], refetch } =
    trpc.getpatientEventsByPatientId.useQuery(
      selectedPatient ? { patientId: selectedPatient.id } : { patientId: "" },
      { enabled: !!selectedPatient },
    );

  const handleRowClick = (patient: PatientRow) => {
    setSelectedPatient(patient);
    setModalOpen(true);
  };

  // Next/Previous patient navigation
  const handleSetPatient = (patient: PatientRow) => {
    setSelectedPatient(patient);
    // refetch will be triggered automatically by the hook
  };

  return (
    <>
      {/* Patient Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-xs uppercase text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-xs uppercase text-gray-500">
                Insurer
              </th>
              <th className="px-6 py-3 text-xs uppercase text-gray-500">
                Money Collected
              </th>
            </tr>
          </thead>
          <tbody>
            {patients
              .filter(
                (p) =>
                  p.name.toLowerCase().includes(filterName.toLowerCase()) &&
                  p.insurer.toLowerCase().includes(filterInsurer.toLowerCase()),
              )
              .map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => handleRowClick(patient)}
                  className="group cursor-pointer transition hover:bg-blue-50"
                >
                  <td className="flex items-center gap-2 px-6 py-4">
                    {patient.name}

                    {!patient.name ||
                    !patient.dob ||
                    !patient.insurer ||
                    patient.insurer === "Unknown" ||
                    !patient.groupNumber ? (
                      <span
                        className={styles.pulseDot}
                        title="Missing data"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                  </td>
                  <td className="px-6 py-4">{patient.insurer}</td>
                  <td className="flex items-center justify-between px-6 py-4">
                    ${patient.moneyCollected}
                    <span className="ml-2 opacity-60 transition group-hover:opacity-100">
                      {/* Right arrow icon */}
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 18l6-6-6-6"
                        />
                      </svg>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {modalOpen &&
        selectedPatient &&
        modalRoot instanceof Element &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
        createPortal(
          <PatientModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            patient={selectedPatient}
            setPatient={(patient) => setSelectedPatient(patient)}
            events={patientEvents}
            patients={patients}
            refetchPatientsAction={refetchPatientsAction}
          />,

          modalRoot,
        )}
    </>
  );
};

export default PatientGridClient;
