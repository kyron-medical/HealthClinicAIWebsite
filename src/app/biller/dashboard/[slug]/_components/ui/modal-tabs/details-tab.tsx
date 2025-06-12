"use client";

import {
  billerAction,
  Encounter,
  Patient,
  Physician,
  Action,
} from "@prisma/client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "trpc/client";

// Define interface for your row data
interface PatientRow {
  id: string;
  name: string;
  dob: Date;
  sex?: string | null;
  address?: string;
  physician: string;

  caseId: string;
  encounterId: string;
  dateOfService: Date;
  facility: string;
  insuranceCompany: string;
  actions: number;
  status: string;

  insurer: string;
  groupNumber?: string | null;
  serviceStart?: Date | null;
  serviceEnd?: Date | null;

  billerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Add a type assertion if needed:
type ExistingPatientDetails = {
  dob?: string | Date | null;
  serviceStart?: string | Date | null;
  serviceEnd?: string | Date | null;
  zipCode?: string | null;
  insurer?: string | null;
  address?: string | null;
  sex?: string | null;
  groupNumber?: string | null;
  providerName?: string | null;
  facilityName?: string | null;
  // Add other fields as needed
};

type DetailsFormProps = {
  encounter: Encounter & {
    patient: Patient;
    physician: Physician; // or the actual Physician type if you have it imported
    actions: billerAction[];
  };
  refetchEncountersAction: (options?: unknown) => Promise<unknown>;
};

/*
===============================================================================

  Details Component

===============================================================================
*/

export function DetailsForm({
  encounter: encounter,
  refetchEncountersAction: refetchPatientsAction,
}: DetailsFormProps) {
  // Local form state for every field:
  const [firstName, setFirstName] = useState(
    encounter.patient.name.split(" ")[0] || "",
  );
  const [editingFirstName, setEditingFirstName] = useState(false);

  const [lastName, setLastName] = useState(
    encounter.patient.name.split(" ")[1] || "",
  );
  const [editingLastName, setEditingLastName] = useState(false);

  const [dob, setDob] = useState(
    encounter.patient.dob
      ? encounter.patient.dob.toISOString().substring(0, 10)
      : "",
  );
  const [editingDob, setEditingDob] = useState(false);

  const [sex, setSex] = useState("");
  const [editingSex, setEditingSex] = useState(false);

  // New fields
  const [address, setAddress] = useState("");
  const [editingAddress, setEditingAddress] = useState(false);

  const [zipCode, setZipCode] = useState("");
  const [editingZipCode, setEditingZipCode] = useState(false);

  const [insurer, setInsurer] = useState(encounter.patient.insurer || "");
  const [editingInsurer, setEditingInsurer] = useState(false);

  const [serviceStart, setServiceStart] = useState("");
  const [editingServiceStart, setEditingServiceStart] = useState(false);

  const [serviceEnd, setServiceEnd] = useState("");
  const [editingServiceEnd, setEditingServiceEnd] = useState(false);

  const [providerName, setProviderName] = useState("");
  const [editingProviderName, setEditingProviderName] = useState(false);

  const [facilityName, setFacilityName] = useState("");
  const [editingFacilityName, setEditingFacilityName] = useState(false);

  const [groupNumber, setGroupNumber] = useState("");
  const [editingGroupNumber, setEditingGroupNumber] = useState(false);

  const [insuranceCard, setInsuranceCard] = useState<File>();

  // Track if any field has changed
  const [dirty, setDirty] = useState(false);

  // TRPC mutation to upsert details:
  const detailsMutation = trpc.updatePatientDetails.useMutation({
    onSuccess: () => {
      toast.success("Details saved");
      setDirty(false);
    },
    onError: (err) => toast.error(err.message),
  });

  // On mount, you might fetch existing details to seed the form:
  const { data: existing } = trpc.getPatientDetails.useQuery({
    patientId: encounter.patient.id,
  }) as { data: ExistingPatientDetails };

  useEffect(() => {
    // Find the scrollable parent container
    const scrollContainer = document.querySelector(
      '[class*="overflow-y-auto"]',
    );
    if (scrollContainer) {
      setTimeout(() => {
        scrollContainer.scrollTop = 0;
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (existing) {
      // dob
      let dobString = "";
      if (existing.dob) {
        if (typeof existing.dob === "string") {
          dobString = existing.dob.substring(0, 10);
        } else if (existing.dob instanceof Date) {
          dobString = existing.dob.toISOString().substring(0, 10);
        }
      }
      setDob(dobString);

      // serviceStart
      let serviceStartString = "";
      if (existing.serviceStart) {
        if (typeof existing.serviceStart === "string") {
          serviceStartString = existing.serviceStart.substring(0, 16);
        } else if (existing.serviceStart instanceof Date) {
          serviceStartString = existing.serviceStart
            .toISOString()
            .substring(0, 16);
        }
      }
      setServiceStart(serviceStartString);

      // serviceEnd
      let serviceEndString = "";
      if (existing.serviceEnd) {
        if (typeof existing.serviceEnd === "string") {
          serviceEndString = existing.serviceEnd.substring(0, 16);
        } else if (existing.serviceEnd instanceof Date) {
          serviceEndString = existing.serviceEnd.toISOString().substring(0, 16);
        }
      }
      setServiceEnd(serviceEndString);

      let zipCodeString = "";
      if (existing.zipCode) {
        zipCodeString =
          typeof existing.zipCode === "string" ? existing.zipCode : "";
      }
      setZipCode(zipCodeString);

      let insurerString = "";
      if (existing.insurer) {
        insurerString =
          typeof existing.insurer === "string" ? existing.insurer : "";
      }

      setAddress(existing.address ?? "");
      setSex(existing.sex ?? "");
      setGroupNumber(existing.groupNumber ?? "");
      setProviderName(existing.providerName ?? "");
      setFacilityName(existing.facilityName ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existing]);

  // Mark dirty on any change
  function handleChange<T>(setter: (v: T) => void) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value as T);
      setDirty(true);
    };
  }

  // Only require at least one field to be changed to enable save
  const formValid = dirty && !detailsMutation.isPending;

  // Render form
  return (
    <form
      className="space-y-4  p-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!formValid) {
          toast.error("No changes to save");
          return;
        }

        detailsMutation.mutate({
          patientId: encounter.patient.id,
          name: `${firstName} ${lastName}`,
          dob: dob ?? undefined,
          serviceStart: serviceStart ?? undefined,
          serviceEnd: serviceEnd ?? undefined,
          providerName: providerName ?? undefined,
          facilityName: facilityName ?? undefined,
          zipCode: zipCode ?? undefined,
          groupNumber: groupNumber ?? undefined,
          address: address ?? undefined,
          sex: sex ?? undefined,
        });
        void refetchPatientsAction(); // Refetch patients after saving
      }}
    >
      <h2 className="mb-2 text-2xl font-bold">Patient Details</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="">First Name</label>
          {editingFirstName || !firstName ? (
            <input
              type="text"
              className="mt-1 w-full rounded border px-2 py-1"
              value={firstName}
              onChange={handleChange(setFirstName)}
              onBlur={() => setEditingFirstName(false)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingFirstName(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <span className="truncate text-sm">{firstName}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingFirstName(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          {editingLastName || !lastName ? (
            <input
              type="text"
              className="mt-1 w-full rounded border px-2 py-1"
              value={lastName}
              onChange={handleChange(setLastName)}
              onBlur={() => setEditingLastName(false)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingLastName(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <span className="truncate text-sm">{lastName}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingLastName(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label>Date of Birth</label>
          {editingDob || !dob ? (
            <input
              type="date"
              className="mt-1 w-full rounded border px-2 py-1"
              value={dob}
              onChange={handleChange(setDob)}
              onBlur={() => setEditingDob(false)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingDob(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <span>{dob}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingDob(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Sex */}
        <div>
          <label>Sex</label>
          {editingSex || !sex ? (
            <select
              className="mt-1 w-full rounded border px-2 py-1"
              value={sex}
              onChange={handleChange(setSex)}
              onBlur={() => setEditingSex(false)}
              autoFocus
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <div className="flex items-center gap-2">
              <span className="truncate text-sm">{sex}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingSex(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>
        {/* …and all your other insurance, procedure, ICD fields… */}
      </div>

      {/* Address */}
      <div className="col-span-2">
        <label>Address</label>
        {editingAddress || !address ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={address}
            onChange={handleChange(setAddress)}
            onBlur={() => setEditingAddress(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingAddress(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{address}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingAddress(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Zip Code */}
      <div>
        <label>Zip Code</label>
        {editingZipCode || !zipCode ? (
          <input
            type="text"
            pattern="\d{5}"
            className="mt-1 w-full rounded border px-2 py-1"
            value={zipCode}
            onChange={handleChange(setZipCode)}
            onBlur={() => setEditingZipCode(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingZipCode(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{zipCode}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingZipCode(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Insurer Name */}
      <div>
        <label>Insurer Name</label>
        {editingInsurer || !insurer ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={insurer}
            onChange={handleChange(setInsurer)}
            onBlur={() => setEditingInsurer(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingInsurer(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{insurer}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingInsurer(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service Start */}
      <div>
        <label>Service Start</label>
        {editingServiceStart || !serviceStart ? (
          <input
            type="datetime-local"
            className="mt-1 w-full rounded border px-2 py-1"
            value={serviceStart}
            onChange={handleChange(setServiceStart)}
            onBlur={() => setEditingServiceStart(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingServiceStart(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{serviceStart}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceStart(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service End */}
      <div>
        <label>Service End</label>
        {editingServiceEnd || !serviceEnd ? (
          <input
            type="datetime-local"
            className="mt-1 w-full rounded border px-2 py-1"
            value={serviceEnd}
            onChange={handleChange(setServiceEnd)}
            onBlur={() => setEditingServiceEnd(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingServiceEnd(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{serviceEnd}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceEnd(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Provider Name */}
      <div>
        <label>Provider Name</label>
        {editingProviderName || !providerName ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={providerName}
            onChange={handleChange(setProviderName)}
            onBlur={() => setEditingProviderName(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingProviderName(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{providerName}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingProviderName(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Facility Name */}
      <div>
        <label>Facility Name</label>
        {editingFacilityName || !facilityName ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={facilityName}
            onChange={handleChange(setFacilityName)}
            onBlur={() => setEditingFacilityName(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingFacilityName(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{facilityName}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingFacilityName(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Group Number */}
      <div>
        <label>Group Number</label>
        {editingGroupNumber || !groupNumber ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={groupNumber}
            onChange={handleChange(setGroupNumber)}
            onBlur={() => setEditingGroupNumber(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingGroupNumber(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{groupNumber}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingGroupNumber(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold">
          Attach Insurance Card
          <input
            type="file"
            accept="application/pdf"
            multiple
            className="mt-1 w-full"
            onChange={(e) =>
              setInsuranceCard(e.target.files ? e.target.files[0] : undefined)
            }
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={!formValid}
        className={`mt-4 w-full rounded px-4 py-2 font-bold text-white ${
          formValid
            ? "bg-green-600 hover:bg-green-700"
            : "cursor-not-allowed bg-gray-400"
        }`}
      >
        {detailsMutation.isPending ? "Saving…" : "Save Details"}
      </button>
    </form>
  );
}
