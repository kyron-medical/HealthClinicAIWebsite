"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "trpc/client";

// Define interface for your row data
interface PatientRow {
  name: string;
  dob: Date;
  sex?: string | null;
  address?: string;
  insurer: string;
  moneyCollected: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  billerId: string;
  groupNumber?: string | null;
  serviceStart?: Date | null;
  serviceEnd?: Date | null;
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
  patient: PatientRow;
  refetchPatientsAction: (options?: unknown) => Promise<unknown>;
};

/*
===============================================================================

  Details Component

===============================================================================
*/

export function DetailsForm({
  patient,
  refetchPatientsAction,
}: DetailsFormProps) {
  // Local form state for every field:
  const [firstName, setFirstName] = useState(patient.name.split(" ")[0] || "");
  const [editingFirstName, setEditingFirstName] = useState(false);

  const [lastName, setLastName] = useState(patient.name.split(" ")[1] || "");
  const [editingLastName, setEditingLastName] = useState(false);

  const [dob, setDob] = useState(
    patient.dob ? patient.dob.toISOString().substring(0, 10) : "",
  );
  const [editingDob, setEditingDob] = useState(false);

  const [sex, setSex] = useState("");
  const [editingSex, setEditingSex] = useState(false);

  // New fields
  const [address, setAddress] = useState("");
  const [editingAddress, setEditingAddress] = useState(false);

  const [zipCode, setZipCode] = useState("");
  const [editingZipCode, setEditingZipCode] = useState(false);

  const [insurer, setInsurer] = useState(patient.insurer || "");
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
    patientId: patient.id,
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
          patientId: patient.id,
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
      data-oid="gfi_:sh"
    >
      <h2 className="mb-2 text-2xl font-bold" data-oid="o:vcaru">
        Patient Details
      </h2>

      <div className="grid grid-cols-2 gap-4" data-oid=".oq83zg">
        {/* First Name */}
        <div data-oid="6krtb-q">
          <label className="" data-oid="9ald4:k">
            First Name
          </label>
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
              data-oid=":1hvjn8"
            />
          ) : (
            <div className="flex items-center gap-2" data-oid=".fsvfpv">
              <span className="truncate text-sm" data-oid="5f:a6on">
                {firstName}
              </span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingFirstName(true)}
                type="button"
                data-oid="mw9ybh:"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Last Name */}
        <div data-oid="bc.c_qh">
          <label data-oid="w:mo95y">Last Name</label>
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
              data-oid="9lcqq.4"
            />
          ) : (
            <div className="flex items-center gap-2" data-oid="y:8082a">
              <span className="truncate text-sm" data-oid="gvb4k:q">
                {lastName}
              </span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingLastName(true)}
                type="button"
                data-oid="o3n3ds4"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div data-oid="b:yh0b8">
          <label data-oid=":s-9q-3">Date of Birth</label>
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
              data-oid="su0x0dm"
            />
          ) : (
            <div className="flex items-center gap-2" data-oid="-3eh2ve">
              <span data-oid="z8mv1q-">{dob}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingDob(true)}
                type="button"
                data-oid="uq:iw1h"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Sex */}
        <div data-oid="d.st86h">
          <label data-oid="ycflwjb">Sex</label>
          {editingSex || !sex ? (
            <select
              className="mt-1 w-full rounded border px-2 py-1"
              value={sex}
              onChange={handleChange(setSex)}
              onBlur={() => setEditingSex(false)}
              autoFocus
              data-oid="f29ufcu"
            >
              <option value="" data-oid="uw:8v:n">
                Select...
              </option>
              <option value="Male" data-oid="vq_x5gb">
                Male
              </option>
              <option value="Female" data-oid="02njnfx">
                Female
              </option>
              <option value="Other" data-oid="m0qdmtg">
                Other
              </option>
            </select>
          ) : (
            <div className="flex items-center gap-2" data-oid="7gcpvtj">
              <span className="truncate text-sm" data-oid="qgfud4:">
                {sex}
              </span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingSex(true)}
                type="button"
                data-oid="5fc.k-j"
              >
                Change
              </button>
            </div>
          )}
        </div>
        {/* …and all your other insurance, procedure, ICD fields… */}
      </div>

      {/* Address */}
      <div className="col-span-2" data-oid="v690xbs">
        <label data-oid="i52.vj8">Address</label>
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
            data-oid="dg:d4v6"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="236ira8">
            <span className="truncate text-sm" data-oid="gj2kvd9">
              {address}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingAddress(true)}
              type="button"
              data-oid="x5mdtfv"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Zip Code */}
      <div data-oid="0n7lf0-">
        <label data-oid="n.xit3e">Zip Code</label>
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
            data-oid="2ld43x7"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="2zabfxx">
            <span className="truncate text-sm" data-oid=":lfu6k:">
              {zipCode}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingZipCode(true)}
              type="button"
              data-oid="mgitgn3"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Insurer Name */}
      <div data-oid="s_egbvn">
        <label data-oid="-jm8svt">Insurer Name</label>
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
            data-oid="s3nha50"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="2ovva.t">
            <span className="truncate text-sm" data-oid="tygwe4b">
              {insurer}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingInsurer(true)}
              type="button"
              data-oid="bhodm9p"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service Start */}
      <div data-oid="2.-mpna">
        <label data-oid="9i-0s6q">Service Start</label>
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
            data-oid="tdnjjkc"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="gl-zmgs">
            <span className="truncate text-sm" data-oid="s7:yfgg">
              {serviceStart}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceStart(true)}
              type="button"
              data-oid="eduenoz"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service End */}
      <div data-oid="p26h-bw">
        <label data-oid="_nl9waf">Service End</label>
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
            data-oid="-gk2y5x"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="eo12ofd">
            <span className="truncate text-sm" data-oid=":tt2tq.">
              {serviceEnd}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceEnd(true)}
              type="button"
              data-oid="da-ggqc"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Provider Name */}
      <div data-oid="03vbxe1">
        <label data-oid="nn5p.tb">Provider Name</label>
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
            data-oid="hb:v:q-"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="rnnj_pf">
            <span className="truncate text-sm" data-oid="1jhapfp">
              {providerName}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingProviderName(true)}
              type="button"
              data-oid="8d8gh:3"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Facility Name */}
      <div data-oid=".7y19r_">
        <label data-oid="9f2p8v.">Facility Name</label>
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
            data-oid="qof9a3i"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="dh-0d1u">
            <span className="truncate text-sm" data-oid="3anth-w">
              {facilityName}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingFacilityName(true)}
              type="button"
              data-oid="as6.phr"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Group Number */}
      <div data-oid="xrb99l9">
        <label data-oid="bz54t8b">Group Number</label>
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
            data-oid=".:av0gl"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="4cyd9kh">
            <span className="truncate text-sm" data-oid="1vyg5ym">
              {groupNumber}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingGroupNumber(true)}
              type="button"
              data-oid="zur958q"
            >
              Change
            </button>
          </div>
        )}
      </div>

      <div data-oid="2ce-7s-">
        <label className="text-sm font-semibold" data-oid="_js7ly1">
          Attach Insurance Card
          <input
            type="file"
            accept="application/pdf"
            multiple
            className="mt-1 w-full"
            onChange={(e) =>
              setInsuranceCard(e.target.files ? e.target.files[0] : undefined)
            }
            data-oid="ti.hsgg"
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
        data-oid="kclbq2i"
      >
        {detailsMutation.isPending ? "Saving…" : "Save Details"}
      </button>
    </form>
  );
}
