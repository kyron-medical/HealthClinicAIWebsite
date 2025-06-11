// // Sample data matching the image structure

// const patientData = [
//   {
//     patientKey: "james_carter",
//     name: "James Carter",
//     insurer: "Blue Cross",

//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "olivia_peterson",
//     name: "Olivia Peterson",
//     insurer: "Blue Cross",

//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },

//   {
//     patientKey: "michael_johnson",
//     name: "Michael Johnson",
//     insurer: "WellCare",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "sophia_turner",
//     name: "Sophia Turner",
//     insurer: "UnitedHealthcare",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "liam_mitchell",
//     name: "Liam Mitchell",
//     insurer: "Humana",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "amelia_young",
//     name: "Amelia Young",
//     insurer: "Cigna",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "ethan_clark",
//     name: "Ethan Clark",
//     insurer: "Aetna",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "emily_davis",
//     name: "Emily Davis",
//     insurer: "Anthem",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "daniel_martinez",
//     name: "Daniel Martinez",
//     insurer: "Oscar Health",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "maya_patel",
//     name: "Maya Patel",
//     insurer: "Kaiser Permanente",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "julian_kim",
//     name: "Julian Kim",
//     insurer: "Molina Healthcare",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "rachel_green",
//     name: "Rachel Green",
//     insurer: "Health Net",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     patientKey: "marcus_lee",
//     name: "Marcus Lee",
//     insurer: "Centene",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
//   {
//     name: "test blank",
//     insurer: "Blue Shield",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//   },
// ];

// const patientEncounters = [
//   {
//     date: "2024-03-01T00:00:00.000Z",
//     content: "Knee pain presented. Ordered MRI.",
//     patientId: patientIdMap["james_carter"],
//     patientName: "James Carter",
//     insurer: "Blue Cross",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "143862458",
//     facility: "Advocate Medical Group",
//     insuranceCompany: "HUMANA",
//     status: "Pending Verification",
//     physician: "Siram Perni",
//     dob: "04/01/2025",
//     caseId: "demo-173",
//   },
//   {
//     date: "2024-04-05T00:00:00.000Z",
//     content: "Routine check-up, no complaints.",
//     patientId: patientIdMap["olivia_peterson"],
//     patientName: "Olivia Peterson",
//     insurer: "Blue Cross",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "3267462969",
//     facility: "Advocate Medical Group",
//     insuranceCompany: "Anthem Blue Cross Blue Shield Kentucky",
//     status: "Pending Information",
//     physician: "Daniel Jenkins",
//     dob: "03/30/1985",
//     caseId: "demo-172",
//   },
//   {
//     date: "2024-02-12T00:00:00.000Z",
//     content: "Severe back pain, referred to PT.",
//     patientId: patientIdMap["michael_johnson"],
//     patientName: "Michael Johnson",
//     insurer: "WellCare",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "4236787683",
//     facility: "Carle Clinic",
//     insuranceCompany: "Aetna",
//     status: "Approved",
//     physician: "George Ellender",
//     dob: "04/08/1994",
//     caseId: "demo-171",
//   },
//   {
//     date: "2024-03-10T00:00:00.000Z",
//     content: "Reported dizziness, advised hydration and rest.",
//     patientId: patientIdMap["liam_mitchell"],
//     patientName: "Liam Mitchell",
//     insurer: "Humana",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "164788197B",
//     facility: "Carle Clinic",
//     insuranceCompany: "Aetna",
//     status: "Pending Information",
//     physician: "Sully Scott",
//     dob: "03/31/1979",
//     caseId: "demo-170",
//   },
//   {
//     date: "2024-02-01T00:00:00.000Z",
//     content: "Follow-up on asthma, no exacerbations reported.",
//     patientId: patientIdMap["amelia_young"],
//     patientName: "Amelia Young",
//     insurer: "Cigna",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "114835643",
//     facility: "Carle Clinic",
//     insuranceCompany: "Cigna",
//     status: "Approved",
//     physician: "Kelley Achtman",
//     dob: "11/12/1967",
//     caseId: "demo-169",
//   },
//   {
//     date: "2024-01-05T00:00:00.000Z",
//     content: "Routine bloodwork completed.",
//     patientId: patientIdMap["emily_davis"],
//     patientName: "Emily Davis",
//     insurer: "Anthem",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "031419BEB",
//     facility: "OSF Heart Lung Assoc",
//     insuranceCompany: "Wellmark BCBS",
//     status: "Canceled",
//     physician: "Sarah Devore",
//     dob: "03/14/1989",
//     caseId: "demo-168",
//   },
//   {
//     date: "2024-03-14T00:00:00.000Z",
//     content: "Complained of lower back pain from work stress.",
//     patientId: patientIdMap["maya_patel"],
//     patientName: "Maya Patel",
//     insurer: "Kaiser Permanente",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "098765432I",
//     facility: "OSF Cardiovascular Institute",
//     insuranceCompany: "aetna",
//     status: "Canceled",
//     physician: "Nicole Tsang",
//     dob: "02/04/1978",
//     caseId: "demo-167",
//   },
//   {
//     date: "2024-03-09T00:00:00.000Z",
//     content: "Annual physical, labs ordered.",
//     patientId: patientIdMap["julian_kim"],
//     patientName: "Julian Kim",
//     insurer: "Molina Healthcare",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "2387676898",
//     facility: "Illinois Cancer Care",
//     insuranceCompany: "Aetna",
//     status: "Canceled",
//     physician: "abc cba",
//     dob: "01/01/1992",
//     caseId: "demo-166",
//   },
//   {
//     date: "2024-02-23T00:00:00.000Z",
//     content: "Prescribed physical therapy for shoulder strain.",
//     patientId: patientIdMap["rachel_green"],
//     patientName: "Rachel Green",
//     insurer: "Health Net",
//     billerId: "user_2odg4IHh4zsh4qQcLTTGQF7OMSR",
//     encounterId: "142376328T",
//     facility: "Advocate Medical Group",
//     insuranceCompany: "Highmark",
//     status: "Approved",
//     physician: "Daniel Jenkins",
//     dob: "02/10/1976",
//     caseId: "demo-165",
//   },
// ];

// export const billerActions = [
//   {
//     id: "action-1",
//     encounterId: "encounter-1",
//     date: new Date("2024-03-30T00:00:00.000Z"),
//     type: "DENIAL",
//     content: "Denied for imaging.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-03-30T00:00:00.000Z"),
//     updatedAt: new Date("2024-03-30T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-2",
//     encounterId: "encounter-1",
//     date: new Date("2024-04-01T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Appeal filed for imaging.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-04-01T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-01T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-3",
//     encounterId: "encounter-1",
//     date: new Date("2024-04-03T00:00:00.000Z"),
//     type: "VOICE_AI",
//     content: "",
//     transcript: "Discussed surgical options.",
//     summary: "Patient leaning conservative care.",
//     createdAt: new Date("2024-04-03T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-03T00:00:00.000Z"),
//     fileUrls: [],
//   },

//   {
//     id: "action-4",
//     encounterId: "encounter-2",
//     date: new Date("2024-04-06T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Submitted wellness visit documentation.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-04-06T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-06T00:00:00.000Z"),
//     fileUrls: [],
//   },

//   {
//     id: "action-5",
//     encounterId: "encounter-3",
//     date: new Date("2024-02-20T00:00:00.000Z"),
//     type: "VOICE_AI",
//     content: "",
//     transcript: "Discussed therapy expectations.",
//     summary: "Patient agreed to PT for 6 weeks.",
//     createdAt: new Date("2024-02-20T00:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-6",
//     encounterId: "encounter-4",
//     date: new Date("2024-01-15T00:00:00.000Z"),
//     type: "DENIAL",
//     content: "Denied for lab work due to coding error.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-01-15T00:00:00.000Z"),
//     updatedAt: new Date("2024-01-15T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-7",
//     encounterId: "encounter-4",
//     date: new Date("2024-01-20T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Appeal submitted with correct code.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-01-20T00:00:00.000Z"),
//     updatedAt: new Date("2024-01-20T00:00:00.000Z"),
//     fileUrls: [],
//   },

//   {
//     id: "action-8",
//     encounterId: "encounter-5",
//     date: new Date("2024-02-07T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Sent medication refill request.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-02-07T00:00:00.000Z"),
//     updatedAt: new Date("2024-02-07T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-9",
//     encounterId: "encounter-6",
//     date: new Date("2024-04-02T00:00:00.000Z"),
//     type: "DENIAL",
//     content: "Denied for out-of-network lab testing.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-04-02T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-02T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-10",
//     encounterId: "encounter-6",
//     date: new Date("2024-04-04T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Appeal submitted with supporting documents.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-04-04T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-04T00:00:00.000Z"),
//     fileUrls: [],
//   },

//   {
//     id: "action-11",
//     encounterId: "encounter-7",
//     date: new Date("2024-02-10T00:00:00.000Z"),
//     type: "VOICE_AI",
//     content: "",
//     transcript: "Doctor explained the new medication schedule.",
//     summary: "Medication adherence emphasized.",
//     createdAt: new Date("2024-02-10T00:00:00.000Z"),
//     updatedAt: new Date("2024-02-10T00:00:00.000Z"),
//     fileUrls: [],
//   },

//   {
//     id: "action-12",
//     encounterId: "encounter-8",
//     date: new Date("2024-03-16T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Referred to ergonomic consultant.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-03-16T00:00:00.000Z"),
//     updatedAt: new Date("2024-03-16T00:00:00.000Z"),
//     fileUrls: [],
//   },

//   {
//     id: "action-13",
//     encounterId: "encounter-9",
//     date: new Date("2024-02-25T00:00:00.000Z"),
//     type: "VOICE_AI",
//     content: "",
//     transcript: "PT goals discussed.",
//     summary: "Focus on mobility improvement.",
//     createdAt: new Date("2024-02-25T00:00:00.000Z"),
//     updatedAt: new Date("2024-02-25T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-14",
//     encounterId: "encounter-10",
//     date: new Date("2024-04-11T00:00:00.000Z"),
//     type: "DENIAL",
//     content: "Denied for imaging due to missing referral.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-04-11T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-11T00:00:00.000Z"),
//     fileUrls: [],
//   },
//   {
//     id: "action-15",
//     encounterId: "encounter-10",
//     date: new Date("2024-04-12T00:00:00.000Z"),
//     type: "APPEALS",
//     content: "Appeal filed with updated referral.",
//     transcript: "",
//     summary: "",
//     createdAt: new Date("2024-04-12T00:00:00.000Z"),
//     updatedAt: new Date("2024-04-12T00:00:00.000Z"),
//     fileUrls: [],
//   },
// ];



// // export default function BillerDashboard() {
// //   const params = useParams();
// //   const slug = params.slug;

// //   return (
// //     <div
// //       className="min-h-screen bg-gray-50 p-6 dark:bg-gray-900"
// //       data-oid="tq5cix9"
// //     >
// //       <div className="mx-auto max-w-7xl" data-oid="2sg-2uz">
// //         {/* Header */}
// //         <div
// //           className="mb-6 flex items-center justify-between"
// //           data-oid="fl1n-ao"
// //         >
// //           <div data-oid="66z76cf">
// //             <h1
// //               className="text-2xl font-bold text-gray-900 dark:text-white"
// //               data-oid="ust.qgr"
// //             >
// //               List of Current Cases
// //             </h1>
// //             <p
// //               className="text-sm text-gray-600 dark:text-gray-400"
// //               data-oid="-rwzi.b"
// //             >
// //               Biller Dashboard - {slug}
// //             </p>
// //           </div>
// //           <div className="flex items-center gap-4" data-oid="4-qet2a">
// //             <div className="flex items-center gap-2" data-oid="dl7x:mz">
// //               <span
// //                 className="text-sm text-gray-600 dark:text-gray-400"
// //                 data-oid="h6k:t3l"
// //               >
// //                 Showing
// //               </span>
// //               <select
// //                 value={entriesPerPage}
// //                 onChange={(e) => {
// //                   setEntriesPerPage(Number(e.target.value));
// //                   setCurrentPage(1);
// //                 }}
// //                 className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
// //                 data-oid="dgnmjqi"
// //               >
// //                 <option value={10} data-oid="c5._k7e">
// //                   10
// //                 </option>
// //                 <option value={25} data-oid="ipwiujz">
// //                   25
// //                 </option>
// //                 <option value={50} data-oid="bpxmq-q">
// //                   50
// //                 </option>
// //                 <option value={100} data-oid=":.ulx9e">
// //                   100
// //                 </option>
// //               </select>
// //               <span
// //                 className="text-sm text-gray-600 dark:text-gray-400"
// //                 data-oid="3uaqt4m"
// //               >
// //                 cases per list
// //               </span>
// //             </div>
// //             <button
// //               className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
// //               data-oid=".k7uouf"
// //             >
// //               + New Case
// //             </button>
// //           </div>
// //         </div>

// //         {/* Search and Filters Bar */}
// //         <div
// //           className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800"
// //           data-oid="t977xpk"
// //         >
// //           <div
// //             className="mb-4 flex flex-wrap items-center gap-4"
// //             data-oid="zovmoqd"
// //           >
// //             <span
// //               className="text-sm font-medium text-gray-700 dark:text-gray-300"
// //               data-oid="mt1gq0o"
// //             >
// //               Filters:
// //             </span>

// //             {/* Product Type Filter */}
// //             <select
// //               value={filters.productType}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, productType: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="_zeu4yp"
// //             >
// //               <option value="" data-oid="cyschr:">
// //                 Product Type ▼
// //               </option>
// //               <option value="Prior Auth" data-oid="hpbx6f7">
// //                 Prior Auth
// //               </option>
// //               <option value="Claims" data-oid="wyhik2x">
// //                 Claims
// //               </option>
// //               <option value="Appeals" data-oid=".glq7ff">
// //                 Appeals
// //               </option>
// //             </select>

// //             {/* Status Filter */}
// //             <select
// //               value={filters.status}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, status: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="mbc_s:k"
// //             >
// //               <option value="" data-oid="srlcn_z">
// //                 Status ▼
// //               </option>
// //               {uniqueStatuses.map((status) => (
// //                 <option key={status} value={status} data-oid=".t4u0b_">
// //                   {status}
// //                 </option>
// //               ))}
// //             </select>

// //             {/* Facility Filter */}
// //             <select
// //               value={filters.facility}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, facility: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="dtag1v2"
// //             >
// //               <option value="" data-oid="6cmqu5k">
// //                 Facility ▼
// //               </option>
// //               {uniqueFacilities.map((facility) => (
// //                 <option key={facility} value={facility} data-oid="a4-.f5.">
// //                   {facility}
// //                 </option>
// //               ))}
// //             </select>

// //             {/* Insurance Filter */}
// //             <select
// //               value={filters.insurance}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, insurance: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="hmfx3o9"
// //             >
// //               <option value="" data-oid="_mywgya">
// //                 Insurance ▼
// //               </option>
// //               {uniqueInsurances.map((insurance) => (
// //                 <option key={insurance} value={insurance} data-oid="ebg0p:-">
// //                   {insurance}
// //                 </option>
// //               ))}
// //             </select>

// //             {/* Date of Service Filter */}
// //             <select
// //               value={filters.dateOfService}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, dateOfService: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="da5e.q9"
// //             >
// //               <option value="" data-oid="7qn213_">
// //                 Date of Service ▼
// //               </option>
// //               <option value="today" data-oid="07p8b4a">
// //                 Today
// //               </option>
// //               <option value="week" data-oid="i7j_u3x">
// //                 This Week
// //               </option>
// //               <option value="month" data-oid="w9i..u_">
// //                 This Month
// //               </option>
// //             </select>

// //             {/* Physician Filter */}
// //             <select
// //               value={filters.physician}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, physician: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="muv1ck8"
// //             >
// //               <option value="" data-oid="fqgrn1k">
// //                 Physician ▼
// //               </option>
// //               {uniquePhysicians.map((physician) => (
// //                 <option key={physician} value={physician} data-oid="dz2agmv">
// //                   {physician}
// //                 </option>
// //               ))}
// //             </select>

// //             {/* Created By Filter */}
// //             <select
// //               value={filters.createdBy}
// //               onChange={(e) =>
// //                 setFilters({ ...filters, createdBy: e.target.value })
// //               }
// //               className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="s0h6uvi"
// //             >
// //               <option value="" data-oid="swti-jb">
// //                 Created By ▼
// //               </option>
// //               <option value="system" data-oid="th7wt4k">
// //                 System
// //               </option>
// //               <option value="user" data-oid="p:dnxiy">
// //                 User
// //               </option>
// //             </select>

// //             {/* Filter Actions */}
// //             <div className="ml-auto flex items-center gap-2" data-oid="0tyswur">
// //               <button
// //                 onClick={() => setShowFilters(!showFilters)}
// //                 className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
// //                 data-oid="8yfulbv"
// //               >
// //                 View Filters
// //               </button>
// //               <button
// //                 onClick={resetFilters}
// //                 className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
// //                 data-oid="9olqwak"
// //               >
// //                 Reset Filters
// //               </button>
// //               <button
// //                 className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700"
// //                 data-oid="515vy.l"
// //               >
// //                 Edit Dashboard
// //               </button>
// //             </div>
// //           </div>

// //           {/* Search Bar */}
// //           <div className="flex items-center gap-4" data-oid="c47:b03">
// //             <input
// //               type="text"
// //               placeholder="Search cases..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //               data-oid="uuxpd41"
// //             />

// //             <span
// //               className="text-sm text-gray-600 dark:text-gray-400"
// //               data-oid="9khlu:8"
// //             >
// //               Case ID/Transaction ID/Patient Name
// //             </span>
// //           </div>
// //         </div>

// //         {/* Cases Table */}
// //         <div
// //           className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
// //           data-oid="89vya3k"
// //         >
// //           <div className="overflow-x-auto" data-oid="t322ebv">
// //             <table
// //               className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
// //               data-oid="j5tfh1-"
// //             >
// //               <thead className="bg-gray-50 dark:bg-gray-700" data-oid="x_x:8zc">
// //                 <tr data-oid="6p_nvk7">
// //                   <th
// //                     className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                     onClick={() => handleSort("caseId")}
// //                     data-oid="xfw9t4-"
// //                   >
// //                     Case ID{getSortIcon("caseId")}
// //                   </th>
// //                   <th
// //                     className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                     onClick={() => handleSort("encounterId")}
// //                     data-oid="twv335f"
// //                   >
// //                     Transaction ID{getSortIcon("encounterId")}
// //                   </th>
// //                   <th
// //                     className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                     onClick={() => handleSort("patientName")}
// //                     data-oid="7ykda_v"
// //                   >
// //                     Patient Name{getSortIcon("patientName")}
// //                   </th>
// //                   <th
// //                     className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                     onClick={() => handleSort("physician")}
// //                     data-oid="_506145"
// //                   >
// //                     Physician{getSortIcon("physician")}
// //                   </th>
// //                   <th
// //                     className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                     onClick={() => handleSort("dob")}
// //                     data-oid="mh4s13f"
// //                   >
// //                     Date of Birth{getSortIcon("dob")}
// //                   </th>
// //                   <th
// //                     className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                     onClick={() => handleSort("dateOfService")}
// //                     data-oid="lx.dx1:"
// //                   >
// //                     Date of Service{getSortIcon("dateOfService")}
// //                   </th>
// //                   <th
// //                     className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
// //                     data-oid="9fg0t8l"
// //                   >
// //                     Facility
// //                   </th>
// //                   <th
// //                     className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
// //                     data-oid="h4xb20p"
// //                   >
// //                     Insurance Company
// //                   </th>
// //                   <th
// //                     className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
// //                     data-oid="xaug84j"
// //                   >
// //                     Status
// //                   </th>
// //                   <th
// //                     className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
// //                     data-oid="zqczifa"
// //                   >
// //                     Messages
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody
// //                 className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800"
// //                 data-oid="puiay77"
// //               >
// //                 {currentCases.map((case_, index) => (
// //                   <tr
// //                     key={case_.caseId}
// //                     className="transition hover:bg-gray-50 dark:hover:bg-gray-700"
// //                     data-oid="n3oj81q"
// //                   >
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white"
// //                       data-oid="404ubds"
// //                     >
// //                       {case_.caseId}
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid="-d4a6c-"
// //                     >
// //                       {case_.encounterId}
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid="09qoz5_"
// //                     >
// //                       <div className="flex items-center" data-oid="rokrfhs">
// //                         <div
// //                           className="h-8 w-8 flex-shrink-0"
// //                           data-oid="uyys8zl"
// //                         >
// //                           <div
// //                             className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
// //                             data-oid="stahp6u"
// //                           ></div>
// //                         </div>
// //                         <div className="ml-3" data-oid="ptwx3f1">
// //                           <div
// //                             className="text-sm font-medium text-gray-900 dark:text-white"
// //                             data-oid="ipz_ytz"
// //                           >
// //                             {case_.patientName}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid="chaogwg"
// //                     >
// //                       {case_.physician}
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid="6yojpvv"
// //                     >
// //                       {case_.dob}
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid="f3jtta3"
// //                     >
// //                       {case_.dateOfService}
// //                     </td>
// //                     <td
// //                       className="px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid="0fjokrq"
// //                     >
// //                       {case_.facility}
// //                     </td>
// //                     <td
// //                       className="px-6 py-4 text-sm text-gray-900 dark:text-white"
// //                       data-oid=".6mc5u."
// //                     >
// //                       {case_.insuranceCompany}
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-sm"
// //                       data-oid="zhr6v_k"
// //                     >
// //                       <StatusBadge status={case_.status} data-oid="xki:j7i" />
// //                     </td>
// //                     <td
// //                       className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-900 dark:text-white"
// //                       data-oid="g-_sx8r"
// //                     >
// //                       {case_.messages}
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Pagination */}
// //         <div
// //           className="mt-6 flex items-center justify-between"
// //           data-oid="1hn42sj"
// //         >
// //           <div className="flex items-center gap-2" data-oid="m0.3q2g">
// //             <button
// //               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
// //               disabled={currentPage === 1}
// //               className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
// //               data-oid="x7f0l_7"
// //             >
// //               ← Previous Page
// //             </button>
// //           </div>

// //           <div className="flex items-center gap-2" data-oid="o6ezdp9">
// //             {[...Array(Math.min(5, totalPages))].map((_, i) => {
// //               const pageNum = i + 1;
// //               return (
// //                 <button
// //                   key={pageNum}
// //                   onClick={() => setCurrentPage(pageNum)}
// //                   className={`rounded px-3 py-2 text-sm transition ${
// //                     currentPage === pageNum
// //                       ? "bg-blue-600 text-white"
// //                       : "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
// //                   }`}
// //                   data-oid="_uiv6if"
// //                 >
// //                   {pageNum}
// //                 </button>
// //               );
// //             })}
// //             {totalPages > 5 && (
// //               <>
// //                 <span className="text-gray-500" data-oid="16e:uq8">
// //                   ...
// //                 </span>
// //                 <span
// //                   className="text-sm text-gray-600 dark:text-gray-400"
// //                   data-oid="scvq0m6"
// //                 >
// //                   {totalPages}
// //                 </span>
// //               </>
// //             )}
// //           </div>

// //           <div className="flex items-center gap-2" data-oid="pjda9uz">
// //             <button
// //               onClick={() =>
// //                 setCurrentPage(Math.min(totalPages, currentPage + 1))
// //               }
// //               disabled={currentPage === totalPages}
// //               className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
// //               data-oid="zh:x7k9"
// //             >
// //               Next Page →
// //             </button>
// //           </div>
// //         </div>

// //         {/* Results Summary */}
// //         <div
// //           className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400"
// //           data-oid=".e09xq-"
// //         >
// //           Showing {startIndex + 1} to {Math.min(endIndex, sortedCases.length)}{" "}
// //           of {sortedCases.length} cases
// //           {searchTerm && ` (filtered from ${cases.length} total cases)`}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
