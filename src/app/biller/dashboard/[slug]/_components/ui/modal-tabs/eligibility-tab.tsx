export const EligibilityTab = () => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold" data-oid="g:3vv.n">
        Eligibility and Benefits
      </h2>
      <div className="mb-4 text-sm text-gray-500" data-oid="3yfggqz">
        <strong data-oid="6g:uorb">
          To generate a letter of appeal for ___, please upload both:
        </strong>
        <ul className="ml-6 mt-2 list-disc" data-oid="e9-2m05">
          <li data-oid="b0t-6hg">
            <strong data-oid="2lx:h:6">Denial</strong> (PDF, Word, or TXT)
          </li>
          <li data-oid="3_7na3x">
            <strong data-oid="gay58_z">Note</strong> (PDF, Word, or TXT)
          </li>
        </ul>
        <span className="mt-2 block text-red-500" data-oid="8efwvgh">
          Do not upload the same file twice. File names do not matter.
        </span>
      </div>
      <form data-oid="7dk.t.4">
        <h3 className="mb-4 text-2xl font-bold" data-oid="848mge2">
          Patient Information
        </h3>
        {/* Patient Name XXXX */}
        <div className="mb-4" data-oid="70c.z8x">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="uhmxkhu"
          >
            Patient Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Patient Name"
            data-oid="0dh6oqt"
          />
        </div>
        {/* Date of Birth 12/02/1964 */}
        <div className="mb-4" data-oid="6t1e2gp">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="4xpspu7"
          >
            Date of Birth
          </label>
          <input
            type="date"
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="vbh43o:"
          />
        </div>
        {/* Facility Name XXXX  */}
        <div className="mb-4" data-oid="2vbhfjd">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="kff_pm."
          >
            Facility Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Facility Name"
            data-oid="m:fj3:5"
          />
        </div>
        {/* Physician Name  */}
        <div className="mb-4" data-oid="l90gd2d">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="d4he-yn"
          >
            Physician Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Physician Name"
            data-oid="jauyikc"
          />
        </div>
        {/* Created On 04/24/2025 19:11:53 PM */}
        <div className="mb-4" data-oid="xwyt1z8">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="auscih:"
          >
            Created On
          </label>
          <input
            type="datetime-local"
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="yn7lrfe"
          />
        </div>
        {/* Created By kevin.ramirez  */}
        <div className="mb-4" data-oid="q52.xli">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="-p17-p:"
          >
            Created By
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Creator's Name"
            data-oid="jljhd2o"
          />
        </div>
        {/* Notes F10410317 */}
        <div className="mb-4" data-oid="hepwzdk">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="bhwhzz2"
          >
            Notes
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Notes"
            data-oid="wqpf8hw"
          />
        </div>
        <h3 className="mb-4 text-2xl font-bold" data-oid="5cdh_m7">
          Eligibility Information
        </h3>
        <h3 className="mb-4 text-2xl font-bold" data-oid="j_20fgn">
          Benefits Information — 72156
        </h3>
        <h3 className="mb-4 text-2xl font-bold" data-oid="9w6-sjg">
          Benefits Information — 00000
        </h3>
        {/* Dropdown to select yes or no on coverage */}
        <div className="mb-4" data-oid="4ocgpek">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="x5-vz9x"
          >
            Do you have coverage?
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="qh9l65c"
          >
            <option value="yes" data-oid="wr6dfzk">
              Yes
            </option>
            <option value="no" data-oid="j5caes:">
              No
            </option>
          </select>
        </div>
        {/* Medicare Cap Amount 2410  */}
        {/* Service Limit 0 null */}
        {/* Authorization Required  Dropdown to select yes or no on coverage */}
        <div className="mb-4" data-oid="8hb8_z4">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="lmk0r6i"
          >
            Authorization Required?
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="q4jelgf"
          >
            <option value="yes" data-oid="g_v54.f">
              Yes
            </option>
            <option value="no" data-oid="9.sjyj-">
              No
            </option>
          </select>
        </div>
        {/* Co Pay 0 */}
        {/* Referral Required Yes  Dropdown to select yes or no on coverage */}
        <div className="mb-4" data-oid="f6ze5rr">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="0.5b_fy"
          >
            Referral Required?
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="ceusory"
          >
            <option value="yes" data-oid="094vutt">
              Yes
            </option>
            <option value="no" data-oid="j63uvqy">
              No
            </option>
          </select>
        </div>
        {/* Co Insurance 0  */}
        {/* Service Used 0 null */}
        {/* Medicare Cap Amount Used 0  */}
        {/* Case Reference Number Example: 75681482637 */}
        <div className="mb-4" data-oid="gi8bn.u">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="yx1_fiu"
          >
            Case Reference Number
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Case Reference Number"
            data-oid="a99oavt"
          />
        </div>
      </form>
    </>
  );
};
