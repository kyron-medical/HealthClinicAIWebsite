"use client";

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
      data-oid="6t0:1kt"
    >
      <h2 className="mb-2 text-2xl font-bold" data-oid="bz29t.2">
        Patient Details
      </h2>

      <div className="grid grid-cols-2 gap-4" data-oid="yyr1qeu">
        {/* First Name */}
        <div data-oid="fkl:8ze">
          <label className="" data-oid="ya40o05">
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
              data-oid="u_2.jeh"
            />
          ) : (
            <div className="flex items-center gap-2" data-oid="6t6.sih">
              <span className="truncate text-sm" data-oid="._yp5aj">
                {firstName}
              </span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingFirstName(true)}
                type="button"
                data-oid=":t7b4bj"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Last Name */}
        <div data-oid="5byo-a4">
          <label data-oid=":lyi3z0">Last Name</label>
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
              data-oid="_kr:b-w"
            />
          ) : (
            <div className="flex items-center gap-2" data-oid="0:b83zk">
              <span className="truncate text-sm" data-oid="h1gn2ja">
                {lastName}
              </span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingLastName(true)}
                type="button"
                data-oid="j4zi7ny"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div data-oid="o9-i1:y">
          <label data-oid="j-z48v0">Date of Birth</label>
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
              data-oid="5cph7q6"
            />
          ) : (
            <div className="flex items-center gap-2" data-oid="p.5rrff">
              <span data-oid=":.om3_s">{dob}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingDob(true)}
                type="button"
                data-oid="s.9.5mz"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Sex */}
        <div data-oid="e9e.e89">
          <label data-oid="t-jrmvx">Sex</label>
          {editingSex || !sex ? (
            <select
              className="mt-1 w-full rounded border px-2 py-1"
              value={sex}
              onChange={handleChange(setSex)}
              onBlur={() => setEditingSex(false)}
              autoFocus
              data-oid="kq:m809"
            >
              <option value="" data-oid="igf4rc_">
                Select...
              </option>
              <option value="Male" data-oid="qymy18f">
                Male
              </option>
              <option value="Female" data-oid="88ckpoy">
                Female
              </option>
              <option value="Other" data-oid="eqv11o4">
                Other
              </option>
            </select>
          ) : (
            <div className="flex items-center gap-2" data-oid="f7ifhws">
              <span className="truncate text-sm" data-oid="klvjmxh">
                {sex}
              </span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingSex(true)}
                type="button"
                data-oid="zuthys3"
              >
                Change
              </button>
            </div>
          )}
        </div>
        {/* …and all your other insurance, procedure, ICD fields… */}
      </div>

      {/* Address */}
      <div className="col-span-2" data-oid="3jq:yaz">
        <label data-oid="d7im46w">Address</label>
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
            data-oid="e:6pmia"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="5wskngi">
            <span className="truncate text-sm" data-oid="wgtbb28">
              {address}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingAddress(true)}
              type="button"
              data-oid="j6.i0r0"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Zip Code */}
      <div data-oid="6ef7o7a">
        <label data-oid="nu:ww:1">Zip Code</label>
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
            data-oid="xgpwrs3"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="s0-_u-b">
            <span className="truncate text-sm" data-oid="g6b.yl_">
              {zipCode}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingZipCode(true)}
              type="button"
              data-oid="0nysa:z"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Insurer Name */}
      <div data-oid="f-f27:k">
        <label data-oid="x1b-h2r">Insurer Name</label>
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
            data-oid="hwqym-d"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="9.t41ka">
            <span className="truncate text-sm" data-oid="5.vnhyc">
              {insurer}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingInsurer(true)}
              type="button"
              data-oid="uophoyy"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service Start */}
      <div data-oid="a1:xr01">
        <label data-oid="dv2jrps">Service Start</label>
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
            data-oid="_xn6x1i"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="8ud5mhx">
            <span className="truncate text-sm" data-oid="x.s0o6j">
              {serviceStart}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceStart(true)}
              type="button"
              data-oid="l8hn3vt"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service End */}
      <div data-oid="978aazb">
        <label data-oid="nw-vmx3">Service End</label>
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
            data-oid="znojwr0"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="33h1xm-">
            <span className="truncate text-sm" data-oid="5h2.o10">
              {serviceEnd}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceEnd(true)}
              type="button"
              data-oid="fgw.1lz"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Provider Name */}
      <div data-oid="zy2b8ww">
        <label data-oid="_850x14">Provider Name</label>
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
            data-oid="051n8ph"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="ufrd:44">
            <span className="truncate text-sm" data-oid="7i43y6c">
              {providerName}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingProviderName(true)}
              type="button"
              data-oid="9hizsco"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Facility Name */}
      <div data-oid="g8tq8e4">
        <label data-oid="n9rbznl">Facility Name</label>
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
            data-oid="gbsyoec"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="06abdp6">
            <span className="truncate text-sm" data-oid="i.ys69s">
              {facilityName}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingFacilityName(true)}
              type="button"
              data-oid="58-mt92"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Group Number */}
      <div data-oid="-dyt5lq">
        <label data-oid="_s10p94">Group Number</label>
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
            data-oid="5.q76od"
          />
        ) : (
          <div className="flex items-center gap-2" data-oid="yv:a-av">
            <span className="truncate text-sm" data-oid="jll_vuw">
              {groupNumber}
            </span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingGroupNumber(true)}
              type="button"
              data-oid="z0j8fq6"
            >
              Change
            </button>
          </div>
        )}
      </div>

      <div data-oid="isap4sa">
        <label className="text-sm font-semibold" data-oid="nrdr4cf">
          Attach Insurance Card
          <input
            type="file"
            accept="application/pdf"
            multiple
            className="mt-1 w-full"
            onChange={(e) =>
              setInsuranceCard(e.target.files ? e.target.files[0] : undefined)
            }
            data-oid="g-:ii50"
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
        data-oid="o4afvac"
      >
        {detailsMutation.isPending ? "Saving…" : "Save Details"}
      </button>
    </form>
  );
}
