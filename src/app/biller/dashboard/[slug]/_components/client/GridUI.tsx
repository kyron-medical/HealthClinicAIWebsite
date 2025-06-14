"use client";

import { useState } from "react";
import EncounterModal from "../ui/encounter-modal";
import {
  Encounter,
  Insurance,
  Patient,
  Physician,
  billerAction,
} from "@prisma/client";
import { createPortal } from "react-dom";
import { FaceSheetMassUploader } from "./FaceSheetUploader";
import styles from "./styles/PatientRow.module.css";
import { format } from "date-fns";
import { displayDate } from "../../utils/utils";

// Define interface for your row data
interface PatientRow {
  id: string;
  name: string;
  dob: Date; // Assuming dob is a Date object
  physician: string;
  insurer: string;
  caseId: string;
  encounterId: string;
  dateOfService: Date;
  facility: string;
  insuranceCompany: string;
  actions: number;
  status: string;

  billerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define interface for encounter details

interface EncounterGridProps {
  encounters: (Encounter & {
    patient: Patient & { insurances: Insurance[] };
    physician: Physician; // or the actual Physician type if you have it imported
    actions: billerAction[];
  })[];

  refetchEncountersAction: (options?: unknown) => Promise<unknown>;
}

// Status badge component with exact styling from image
const StatusBadge = ({ status }: { status: string }) => {
  const redStatuses = [
    "Pending Information",
    "Information Requested",
    "Canceled",
  ];

  const blueStatuses = [
    "Pending Verification",
    "Pending Appeal",
    "Pending Claim Status Inquiry",
  ];

  const greenStatuses = [
    "Approved",
    "Appeal Approved",
    "Verification Complete",
    "Claim Status Resolved",
  ];

  let bgColor = "";
  let textColor = "";
  let borderColor = "";

  if (redStatuses.includes(status)) {
    bgColor = "bg-red-50";
    textColor = "text-red-700";
    borderColor = "border-red-200";
  } else if (blueStatuses.includes(status)) {
    bgColor = "bg-blue-50";
    textColor = "text-blue-700";
    borderColor = "border-blue-200";
  } else if (greenStatuses.includes(status)) {
    bgColor = "bg-green-50";
    textColor = "text-green-700";
    borderColor = "border-green-200";
  } else {
    bgColor = "bg-gray-50";
    textColor = "text-gray-700";
    borderColor = "border-gray-200";
  }

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium ${bgColor} ${textColor} ${borderColor}`}
    >
      {status}
    </span>
  );
};

const EncounterGridClient = ({
  encounters,
  refetchEncountersAction,
}: EncounterGridProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEncounter, setSelectedEncounter] = useState<
    | (Encounter & {
        patient: Patient & { insurances: Insurance[] };
        physician: Physician;
        actions: billerAction[];
      })
    | null
  >(null);

  const [filters, setFilters] = useState({
    productType: "",
    status: "",
    facility: "",
    insurance: "",
    dateOfService: "",
    physician: "",
    createdBy: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  // Filter cases based on current filters and search
  // Filter and sort patients
  const filteredEncounters = encounters.filter((e) => {
    // Search filter
    const matchesSearch =
      e.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase());

    // Status filter
    const matchesStatus = !filters.status || e.status === filters.status;

    // Facility filter
    const matchesFacility =
      !filters.facility || e.facilityName === filters.facility;

    // Insurance filter
    const matchesInsurance =
      !filters.insurance ||
      (Array.isArray(e.patient.insurances) &&
        e.patient.insurances.some(
          (ins) => ins.name === filters.insurance, // or use another property if needed
        ));

    // Physician filter
    const matchesPhysician =
      !filters.physician || e.physician?.name === filters.physician;

    // Add more filters as needed...

    return (
      matchesSearch &&
      matchesStatus &&
      matchesFacility &&
      matchesInsurance &&
      matchesPhysician
      // ...add more as needed
    );
  });

  function getValueByPath<T>(obj: T, path: string): unknown {
    return path
      .split(".")
      .reduce<unknown>(
        (acc, part) =>
          typeof acc === "object" && acc !== null
            ? (acc as Record<string, unknown>)[part]
            : undefined,
        obj,
      );
  }

  const sortedEncounters = [...filteredEncounters].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = getValueByPath(a, sortConfig.key);
    const bValue = getValueByPath(b, sortConfig.key);

    // Handle undefined/null values
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return 1;
    if (bValue == null) return -1;

    // Compare as strings or numbers
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }
    // For dates
    if (aValue instanceof Date && bValue instanceof Date) {
      return sortConfig.direction === "asc"
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }
    // Fallback to string comparison
    const isPrimitive = (v: unknown): v is string | number | boolean | Date => {
      return (
        typeof v === "string" ||
        typeof v === "number" ||
        typeof v === "boolean" ||
        v instanceof Date
      );
    };

    if (isPrimitive(aValue) && isPrimitive(bValue)) {
      return sortConfig.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedEncounters.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEncounters = sortedEncounters.slice(startIndex, endIndex);

  // Get unique values for filter dropdowns
  const uniqueStatuses = [...new Set(encounters.map((e) => e.status))];
  const uniqueFacilities = [...new Set(encounters.map((e) => e.facilityName))];
  const uniqueInsurances: string[] = [
    ...new Set(
      encounters
        .flatMap((e) => e.patient.insurances ?? [])
        .map((ins) => ins.name)
        .filter(Boolean),
    ),
  ];

  const uniquePhysicians = [
    ...new Set(encounters.map((e) => e.physician?.name).filter(Boolean)),
  ];

  const resetFilters = () => {
    setFilters({
      productType: "",
      status: "",
      facility: "",
      insurance: "",
      dateOfService: "",
      physician: "",
      createdBy: "",
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName: string) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === "asc" ? " ↑" : " ↓";
    }
    return " ↑";
  };
  /*
  ================================================================================
  
  ================================================================================
  */

  // Ensure modal is rendered in a portal
  const modalRoot =
    typeof window !== "undefined"
      ? document.getElementById("modal-root")
      : null;

  // Fetch events for the selected patient
  // const { data: patientEvents = [], refetch } =
  //   trpc.getEncountersByPatientId.useQuery(
  //     selectedPatient ? { patientId: selectedPatient.id } : { patientId: "" },
  //     { enabled: !!selectedPatient },
  //   );

  const handleRowClick = (
    encounter: Encounter & {
      patient: Patient & { insurances: Insurance[] };
      physician: Physician; // or the actual Physician type if you have it imported
      actions: billerAction[];
    },
  ) => {
    setSelectedEncounter(encounter);
    setModalOpen(true);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              List of Current Cases
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Biller Dashboard - Name
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Showing
              </span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                cases per list
              </span>
            </div>
            <FaceSheetMassUploader
              refetchEncountersAction={refetchEncountersAction}
            />

           
          </div>
        </div>

        {/* Search and Filters Bar */}
        <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filters:
            </span>

            {/* Product Type Filter */}
            <select
              value={filters.productType}
              onChange={(e) =>
                setFilters({ ...filters, productType: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Product Type ▼</option>
              <option value="Prior Auth">Prior Auth</option>
              <option value="Claims">Claims</option>
              <option value="Appeals">Appeals</option>
            </select>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Status ▼</option>
              {uniqueStatuses
                .filter(
                  (status): status is string => typeof status === "string",
                )
                .map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
            </select>

            {/* Facility Filter */}
            <select
              value={filters.facility}
              onChange={(e) =>
                setFilters({ ...filters, facility: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Facility ▼</option>
              {uniqueFacilities
                .filter(
                  (facility): facility is string =>
                    typeof facility === "string",
                )
                .map((facility) => (
                  <option key={facility} value={facility}>
                    {facility}
                  </option>
                ))}
            </select>

            {/* Insurance Filter */}
            <select
              value={filters.insurance}
              onChange={(e) =>
                setFilters({ ...filters, insurance: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Insurance ▼</option>
              {uniqueInsurances
                .filter(
                  (insurance): insurance is string =>
                    typeof insurance === "string",
                )
                .map((insurance) => (
                  <option key={insurance} value={insurance}>
                    {insurance}
                  </option>
                ))}
            </select>

            {/* Date of Service Filter */}
            <select
              value={filters.dateOfService}
              onChange={(e) =>
                setFilters({ ...filters, dateOfService: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Date of Service ▼</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            {/* Physician Filter */}
            <select
              value={filters.physician}
              onChange={(e) =>
                setFilters({ ...filters, physician: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Physician ▼</option>
              {uniquePhysicians.map((physicianName) => (
                <option key={physicianName} value={physicianName}>
                  {physicianName}
                </option>
              ))}
            </select>

            {/* Created By Filter */}
            <select
              value={filters.createdBy}
              onChange={(e) =>
                setFilters({ ...filters, createdBy: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Created By ▼</option>
              <option value="system">System</option>
              <option value="user">User</option>
            </select>

            {/* Filter Actions */}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                View Filters
              </button>
              <button
                onClick={resetFilters}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Reset Filters
              </button>
              <button className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700">
                Edit Dashboard
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />

            <span className="text-sm text-gray-600 dark:text-gray-400">
              Case ID/Encounter ID/Patient Name
            </span>
          </div>
        </div>

        {/* Cases Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    onClick={() => handleSort("id")}
                  >
                    Encounter ID{getSortIcon("id")}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    onClick={() => handleSort("patient.name")}
                  >
                    Patient Name{getSortIcon("patient.name")}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    onClick={() => handleSort("physician.name")}
                  >
                    Physician{getSortIcon("physician.name")}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    onClick={() => handleSort("patient.dob")}
                  >
                    Date of Birth{getSortIcon("patient.dob")}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    onClick={() => handleSort("dateOfService")}
                  >
                    Date of Service{getSortIcon("dateOfService")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Facility
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Insurance Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Messages
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {currentEncounters.map((encounter) => (
                  <tr
                    key={encounter.id}
                    className="transition hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handleRowClick(encounter)} // Make row clickable
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {encounter.id}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        {/* <div
                        className="h-8 w-8 flex-shrink-0"
                        data-oid="eqifccr"
                        >
                        <div
                          className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
                          data-oid="mq0up:a"
                        ></div>
                        </div> */}
                        <div className="ml-3">
                          <div className="flex flex-row items-center justify-center gap-2 text-sm font-medium  text-gray-900 dark:text-white">
                            <div>
                              {(() => {
                                const name = encounter.patient.name;
                                if (name.includes(",")) {
                                  const [last, first] = name
                                    .split(",")
                                    .map((s) => s.trim());
                                  if (first && last) {
                                    return `${first} ${last}`;
                                  }
                                }
                                return name;
                              })()}
                            </div>
                            <div>
                              {!encounter.patient.name ||
                              !encounter.patient.dob ||
                              !encounter.patient.insurances ||
                              encounter.patient.insurances.length === 0 ||
                              !encounter.patient.groupNumber ? (
                                <span
                                  className={styles.pulseDot}
                                  title="Missing data"
                                ></span>
                              ) : (
                                <span></span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {encounter.physician.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {displayDate(encounter.patient.dob)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {displayDate(encounter.patient.dob)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {encounter.facilityName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {encounter.patient.insurances &&
                      encounter.patient.insurances.length > 0
                        ? encounter.patient.insurances[0].name
                        : ""}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <StatusBadge status={encounter.status} />
                    </td>
                    <td className=" whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                      <div className="flex flex-row items-center justify-between">
                        <span>{encounter.actions.length}</span>

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
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ← Previous Page
            </button>
          </div>

          <div className="flex items-center gap-2">
            {Array.from(
              { length: Math.min(5, totalPages) },
              (_, i) => i + 1,
            ).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`rounded px-3 py-2 text-sm transition ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {pageNum}
              </button>
            ))}
            {totalPages > 5 && (
              <>
                <span className="text-gray-500">...</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {totalPages}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Next Page →
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, sortedEncounters.length)} of{" "}
          {sortedEncounters.length} patients
          {searchTerm &&
            ` (filtered from ${encounters.length} total encounters)`}
        </div>
      </div>

      {/* Old Patient Table */}
      {/* <div
          className="overflow-x-auto rounded-lg bg-white shadow"
          data-oid="e6-..ci"
         >
          <table className="w-full" data-oid="mx.tdr6">
            <thead data-oid="1-j31d6">
              <tr className="bg-gray-50 text-left" data-oid="5_59vhr">
                <th
                  className="px-6 py-3 text-xs uppercase text-gray-500"
                  data-oid="wo:xfwa"
                >
                  Name
                </th>
                <th
                  className="px-6 py-3 text-xs uppercase text-gray-500"
                  data-oid="p8672fd"
                >
                  Insurer
                </th>
                <th
                  className="px-6 py-3 text-xs uppercase text-gray-500"
                  data-oid="_-7t._t"
                >
                  Money Collected
                </th>
              </tr>
            </thead>
            <tbody data-oid="ro_guoz">
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
                    data-oid=":s9imw5"
                  >
                    <td
                      className="flex items-center gap-2 px-6 py-4"
                      data-oid="6fo11u3"
                    >
                      {patient.name}
                    </td>
                    <td className="px-6 py-4" data-oid="4en9udw">
                      {patient.insurer}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
         </div> */}

      {modalOpen &&
        selectedEncounter &&
        modalRoot instanceof Element &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
        createPortal(
          <EncounterModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            encounter={selectedEncounter}
            setEncounter={setSelectedEncounter}
            encounters={encounters}
            actions={selectedEncounter.actions}
            refetchEncountersAction={refetchEncountersAction}
          />,

          modalRoot,
        )}
    </>
  );
};

export default EncounterGridClient;
