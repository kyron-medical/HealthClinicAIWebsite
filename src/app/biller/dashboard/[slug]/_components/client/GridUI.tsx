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
    groupNumber: string;
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
      <div
        className="overflow-x-auto rounded-lg bg-white shadow"
        data-oid="uuvf2x2"
      >
        <table className="w-full" data-oid="nta0rm1">
          <thead data-oid="lkke8v:">
            <tr className="bg-gray-50 text-left" data-oid="b9io6e_">
              <th
                className="px-6 py-3 text-xs uppercase text-gray-500"
                data-oid="yl1plz-"
              >
                Name
              </th>
              <th
                className="px-6 py-3 text-xs uppercase text-gray-500"
                data-oid=".lyfz5-"
              >
                Insurer
              </th>
              <th
                className="px-6 py-3 text-xs uppercase text-gray-500"
                data-oid="auv40uz"
              >
                Money Collected
              </th>
            </tr>
          </thead>
          <tbody data-oid=".f22f0g">
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
                  data-oid="96d62pz"
                >
                  <td
                    className="flex items-center gap-2 px-6 py-4"
                    data-oid="351a.qg"
                  >
                    {patient.name}

                    {!patient.name ||
                    !patient.dob ||
                    !patient.insurer ||
                    patient.insurer === "Unknown" ||
                    !patient.groupNumber ? (
                      <span
                        className={styles.pulseDot}
                        title="Missing data"
                        data-oid="zky.-ax"
                      ></span>
                    ) : (
                      <span data-oid="093bp_x"></span>
                    )}
                  </td>
                  <td className="px-6 py-4" data-oid="l._tg_1">
                    {patient.insurer}
                  </td>
                  <td
                    className="flex items-center justify-between px-6 py-4"
                    data-oid="-gn-:73"
                  >
                    ${patient.moneyCollected}
                    <span
                      className="ml-2 opacity-60 transition group-hover:opacity-100"
                      data-oid="b.do4pr"
                    >
                      {/* Right arrow icon */}
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        data-oid="6pkatl2"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 18l6-6-6-6"
                          data-oid="edwqb5w"
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
            data-oid="q4zux_d"
          />,

          modalRoot,
        )}
    </>
  );
};

export default PatientGridClient;
