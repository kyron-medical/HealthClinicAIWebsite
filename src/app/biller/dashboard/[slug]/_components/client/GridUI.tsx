"use client";

import { useState } from "react";
import EncounterModal from "../ui/patient-modal";
import { Encounter, Patient, Physician, billerAction } from "@prisma/client";
import { createPortal } from "react-dom";
import { trpc } from "trpc/client";
import styles from "./styles/PatientRow.module.css";

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
    patient: Patient;
    physician: Physician; // or the actual Physician type if you have it imported
    actions: billerAction[];
  })[];

  refetchPatientsAction: (options?: unknown) => Promise<unknown>;
}


// Status badge component with exact styling from image
const StatusBadge = ({ status }) => {
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
      data-oid="zdiqe5v"
    >
      {status}
    </span>
  );
};

const EncounterGridClient = ({
  encounters,
  refetchPatientsAction,
}: EncounterGridProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEncounter, setSelectedEncounter] = useState<
    | (Encounter & {
        patient: Patient;
        physician: Physician; // or the actual Physician type if you have it imported
        actions: billerAction[];
      })
    | null
  >(null);

  // New dashboard hooks
  const [cases, setCases] = useState(encounters);
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
    key: keyof PatientRow | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  // Filter cases based on current filters and search
  // Filter and sort patients
  const filteredEncounters = encounters.filter(
    (e) =>
      e.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedEncounters = [...filteredEncounters].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedEncounters.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEncounters = sortedEncounters.slice(startIndex, endIndex);

  // Get unique values for filter dropdowns
  const uniqueStatuses = [...new Set(cases.map((case_) => case_.status))];
  const uniqueFacilities = [
    ...new Set(cases.map((case_) => case_.facilityName)),
  ];
  const uniqueInsurances = [
    ...new Set(cases.map((case_) => case_.patient.insurer).filter(Boolean)),
  ];

  const uniquePhysicians = [
    ...new Set(cases.map((case_) => case_.physician?.name).filter(Boolean)),
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

  const handleSort = (key: keyof PatientRow) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName: keyof PatientRow) => {
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
      patient: Patient;
      physician: Physician; // or the actual Physician type if you have it imported
      actions: billerAction[];
    },
  ) => {
    setSelectedEncounter(encounter);
    setModalOpen(true);
  };

  // Next/Previous patient navigation
  const handleSetPatient = (
    encounter: Encounter & {
      patient: Patient;
      physician: Physician; // or the actual Physician type if you have it imported
      actions: billerAction[];
    },
  ) => {
    setSelectedEncounter(encounter);
    // refetch will be triggered automatically by the hook
  };

  return (
    <>
      <div className="mx-auto max-w-7xl" data-oid="6_w5c54">
        {/* Header */}
        <div
          className="mb-6 flex items-center justify-between"
          data-oid="ezln8ic"
        >
          <div data-oid="tbu9h9j">
            <h1
              className="text-2xl font-bold text-gray-900 dark:text-white"
              data-oid="rwf9z.t"
            >
              List of Current Cases
            </h1>
            <p
              className="text-sm text-gray-600 dark:text-gray-400"
              data-oid="m2:-xg9"
            >
              Biller Dashboard - Name
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="zpcw.wr">
            <div className="flex items-center gap-2" data-oid="hsfhefg">
              <span
                className="text-sm text-gray-600 dark:text-gray-400"
                data-oid=":6zr_-j"
              >
                Showing
              </span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                data-oid="7eq0f2x"
              >
                <option value={10} data-oid="8-3ot_k">
                  10
                </option>
                <option value={25} data-oid="jgmjiy9">
                  25
                </option>
                <option value={50} data-oid="89rg64j">
                  50
                </option>
                <option value={100} data-oid="_eqycem">
                  100
                </option>
              </select>
              <span
                className="text-sm text-gray-600 dark:text-gray-400"
                data-oid="rr851sw"
              >
                cases per list
              </span>
            </div>
            <button
              className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
              data-oid="x7rpqag"
            >
              + New Case
            </button>
          </div>
        </div>

        {/* Search and Filters Bar */}
        <div
          className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800"
          data-oid="slluumd"
        >
          <div
            className="mb-4 flex flex-wrap items-center gap-4"
            data-oid="9ksdzwe"
          >
            <span
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              data-oid="zrx3oox"
            >
              Filters:
            </span>

            {/* Product Type Filter */}
            <select
              value={filters.productType}
              onChange={(e) =>
                setFilters({ ...filters, productType: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              data-oid="bcya2e0"
            >
              <option value="" data-oid="dxopqmn">
                Product Type ▼
              </option>
              <option value="Prior Auth" data-oid="0xyc7:4">
                Prior Auth
              </option>
              <option value="Claims" data-oid="u0y_ihc">
                Claims
              </option>
              <option value="Appeals" data-oid="z5.usq6">
                Appeals
              </option>
            </select>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              data-oid="8dddvdt"
            >
              <option value="" data-oid="3reu1ax">
                Status ▼
              </option>
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
              data-oid="ft7.v1_"
            >
              <option value="" data-oid="pxg3ngo">
                Facility ▼
              </option>
              {uniqueFacilities
                .filter(
                  (facility): facility is string =>
                    typeof facility === "string",
                )
                .map((facility) => (
                  <option key={facility} value={facility} data-oid="m2:vu42">
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
              data-oid=".13lilu"
            >
              <option value="" data-oid="pdw:4w7">
                Insurance ▼
              </option>
              {uniqueInsurances
                .filter(
                  (insurance): insurance is string =>
                    typeof insurance === "string",
                )
                .map((insurance) => (
                  <option key={insurance} value={insurance} data-oid="eiq2bab">
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
              data-oid="bwho6u6"
            >
              <option value="" data-oid="oth:i5k">
                Date of Service ▼
              </option>
              <option value="today" data-oid="4srx0.h">
                Today
              </option>
              <option value="week" data-oid="cwex52.">
                This Week
              </option>
              <option value="month" data-oid="ya2gj7e">
                This Month
              </option>
            </select>

            {/* Physician Filter */}
            <select
              value={filters.physician}
              onChange={(e) =>
                setFilters({ ...filters, physician: e.target.value })
              }
              className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              data-oid="h-qwx12"
            >
              <option value="" data-oid="l6g3.r1">
                Physician ▼
              </option>
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
              data-oid="qtrnyiz"
            >
              <option value="" data-oid="_1ocr:p">
                Created By ▼
              </option>
              <option value="system" data-oid="htoi3mx">
                System
              </option>
              <option value="user" data-oid="fx5ao9_">
                User
              </option>
            </select>

            {/* Filter Actions */}
            <div className="ml-auto flex items-center gap-2" data-oid="3rre2fp">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                data-oid="qxr2:.7"
              >
                View Filters
              </button>
              <button
                onClick={resetFilters}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                data-oid="taopyug"
              >
                Reset Filters
              </button>
              <button
                className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700"
                data-oid="qzbbn-q"
              >
                Edit Dashboard
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4" data-oid="4sdakk5">
            <input
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              data-oid="8w_jk8w"
            />

            <span
              className="text-sm text-gray-600 dark:text-gray-400"
              data-oid="3oet2lt"
            >
              Case ID/Encounter ID/Patient Name
            </span>
          </div>
        </div>

        {/* Cases Table */}
        <div
          className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
          data-oid="wphri5t"
        >
          <div className="overflow-x-auto" data-oid="laa_kla">
            <table
              className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              data-oid="ggt-6bz"
            >
              <thead className="bg-gray-50 dark:bg-gray-700" data-oid="zcnr:60">
                <tr data-oid="ec.a4on">
                  <th
                    className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => handleSort("encounterId")}
                    data-oid="lijhu8n"
                  >
                    Encounter ID{getSortIcon("encounterId")}
                  </th>
                  <th
                    className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => handleSort("name")}
                    data-oid=":b2x_d5"
                  >
                    Patient Name{getSortIcon("name")}
                    {/* {!patient.name ||
                    !patient.dob ||
                    !patient.insurer ||
                    patient.insurer === "Unknown" ||
                    !patient.groupNumber ? (
                      <span
                        className={styles.pulseDot}
                        title="Missing data"
                        data-oid="3xqfb4n"
                      ></span>
                    ) : (
                      <span data-oid="jrf0unt"></span>
                    )} */}
                  </th>
                  <th
                    className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => handleSort("physician")}
                    data-oid="1xjqxjf"
                  >
                    Physician{getSortIcon("physician")}
                  </th>
                  <th
                    className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => handleSort("dob")}
                    data-oid="ayc-a0e"
                  >
                    Date of Birth{getSortIcon("dob")}
                  </th>
                  <th
                    className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => handleSort("dateOfService")}
                    data-oid="pvtnoiv"
                  >
                    Date of Service{getSortIcon("dateOfService")}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    data-oid="wcabzi5"
                  >
                    Facility
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    data-oid="rt6:qsc"
                  >
                    Insurance Company
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    data-oid="ya2n_f-"
                  >
                    Status
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    data-oid="oea28hh"
                  >
                    Messages
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800"
                data-oid="j8j_tls"
              >
                {currentEncounters.map((encounter, index) => (
                  <tr
                    key={encounter.id}
                    className="transition hover:bg-gray-50 dark:hover:bg-gray-700"
                    data-oid="obv707j"
                    onClick={() => handleRowClick(encounter)} // Make row clickable
                  >
                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white"
                      data-oid="520vsr2"
                    >
                      {encounter.id}
                    </td>

                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
                      data-oid="5lk1.g8"
                    >
                      <div className="flex items-center" data-oid="0p.iw.6">
                        {/* <div
                          className="h-8 w-8 flex-shrink-0"
                          data-oid="eqifccr"
                        >
                          <div
                            className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
                            data-oid="mq0up:a"
                          ></div>
                        </div> */}
                        <div className="ml-3" data-oid="c000q2f">
                          <div
                            className="text-sm font-medium text-gray-900 dark:text-white"
                            data-oid="-kcfqk8"
                          >
                            {encounter.patient.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
                      data-oid="3grvvcy"
                    >
                      {encounter.physician.name}
                    </td>
                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
                      data-oid="cfidyp-"
                    >
                      {encounter.patient.dob
                        ? new Date(encounter.patient.dob).toLocaleDateString()
                        : ""}
                    </td>
                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
                      data-oid="k1zrpet"
                    >
                      {encounter.dateOfService
                        ? new Date(encounter.dateOfService).toLocaleDateString()
                        : ""}
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-gray-900 dark:text-white"
                      data-oid="w-r92-n"
                    >
                      {encounter.facilityName}
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-gray-900 dark:text-white"
                      data-oid="6-ulo75"
                    >
                      {encounter.patient.insurer}
                    </td>
                    <td
                      className="whitespace-nowrap px-6 py-4 text-sm"
                      data-oid="yjb43k-"
                    >
                      <StatusBadge
                        status={encounter.status}
                        data-oid="vyd4d86"
                      />
                    </td>
                    <td
                      className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-900 dark:text-white"
                      data-oid="nax7rli"
                    >
                      {encounter.actions.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div
          className="mt-6 flex items-center justify-between"
          data-oid="qoa:gu4"
        >
          <div className="flex items-center gap-2" data-oid="m4jkiio">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              data-oid="1_es99_"
            >
              ← Previous Page
            </button>
          </div>

          <div className="flex items-center gap-2" data-oid="g.mohkz">
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`rounded px-3 py-2 text-sm transition ${
                    currentPage === pageNum
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  data-oid="mt3lzbo"
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > 5 && (
              <>
                <span className="text-gray-500" data-oid="2:5bl5h">
                  ...
                </span>
                <span
                  className="text-sm text-gray-600 dark:text-gray-400"
                  data-oid="6k.7qhu"
                >
                  {totalPages}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2" data-oid="oi-fwxr">
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              data-oid="v2:wup:"
            >
              Next Page →
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div
          className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400"
          data-oid="xf_a_.a"
        >
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
            refetchEncountersAction={refetchPatientsAction}
            data-oid=":mynx.5"
          />,

          modalRoot,
        )}
    </>
  );
};

export default EncounterGridClient;
