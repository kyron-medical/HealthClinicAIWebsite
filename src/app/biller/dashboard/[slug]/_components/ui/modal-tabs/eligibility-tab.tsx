export const EligibilityTab = () => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold" data-oid="3kxqjvn">
        Eligibility and Benefits
      </h2>
      <div className="mb-4 text-sm text-gray-500" data-oid="kdop1_n">
        <strong data-oid="584cm7g">
          To generate a letter of appeal for ___, please upload both:
        </strong>
        <ul className="ml-6 mt-2 list-disc" data-oid="6:vjppz">
          <li data-oid="11b.2fk">
            <strong data-oid="3_z.rsv">Denial</strong> (PDF, Word, or TXT)
          </li>
          <li data-oid="_tjsc8r">
            <strong data-oid="nxplacn">Note</strong> (PDF, Word, or TXT)
          </li>
        </ul>
        <span className="mt-2 block text-red-500" data-oid="26w_:p_">
          Do not upload the same file twice. File names do not matter.
        </span>
      </div>
      <form data-oid="dsp341y">
        <h3 className="mb-4 text-2xl font-bold" data-oid="7-i_m8d">
          Patient Information
        </h3>
        {/* Patient Name XXXX */}
        <div className="mb-4" data-oid="c8vp6:v">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="zhfbc09"
          >
            Patient Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Patient Name"
            data-oid="2v3lmdz"
          />
        </div>
        {/* Date of Birth 12/02/1964 */}
        <div className="mb-4" data-oid="dzhakhu">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="o4wdonz"
          >
            Date of Birth
          </label>
          <input
            type="date"
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="wogautc"
          />
        </div>
        {/* Facility Name XXXX  */}
        <div className="mb-4" data-oid="-e44:w3">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="7n4:77f"
          >
            Facility Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Facility Name"
            data-oid="9zudtdl"
          />
        </div>
        {/* Physician Name  */}
        <div className="mb-4" data-oid="oaygxyt">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="vwrmnq6"
          >
            Physician Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Physician Name"
            data-oid="89v.d-z"
          />
        </div>
        {/* Created On 04/24/2025 19:11:53 PM */}
        <div className="mb-4" data-oid="5gnl339">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="ltdke0i"
          >
            Created On
          </label>
          <input
            type="datetime-local"
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="17_uogs"
          />
        </div>
        {/* Created By kevin.ramirez  */}
        <div className="mb-4" data-oid="ik.hexs">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="wh0ci1r"
          >
            Created By
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Creator's Name"
            data-oid="w3tmq3i"
          />
        </div>
        {/* Notes F10410317 */}
        <div className="mb-4" data-oid="qj181w1">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="cafrssv"
          >
            Notes
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Notes"
            data-oid="1yllplo"
          />
        </div>
        <h3 className="mb-4 text-2xl font-bold" data-oid="vnbh0v3">
          Eligibility Information
        </h3>
        <h3 className="mb-4 text-2xl font-bold" data-oid="a.dz0q.">
          Benefits Information — 72156
        </h3>
        <h3 className="mb-4 text-2xl font-bold" data-oid="ea6qp9s">
          Benefits Information — 00000
        </h3>
        {/* Dropdown to select yes or no on coverage */}
        <div className="mb-4" data-oid="zr65gzf">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="w9omabm"
          >
            Do you have coverage?
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="k794u2t"
          >
            <option value="yes" data-oid="pcci9_l">
              Yes
            </option>
            <option value="no" data-oid="7:m9bn:">
              No
            </option>
          </select>
        </div>
        {/* Medicare Cap Amount 2410  */}
        {/* Service Limit 0 null */}
        {/* Authorization Required  Dropdown to select yes or no on coverage */}
        <div className="mb-4" data-oid=":8puxcd">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="yyaw.ig"
          >
            Authorization Required?
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="_zdt5qe"
          >
            <option value="yes" data-oid="i4h9dvq">
              Yes
            </option>
            <option value="no" data-oid="seo1tfz">
              No
            </option>
          </select>
        </div>
        {/* Co Pay 0 */}
        {/* Referral Required Yes  Dropdown to select yes or no on coverage */}
        <div className="mb-4" data-oid="2cw23dn">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid="azuwi9q"
          >
            Referral Required?
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 p-2"
            data-oid="n8.6y0j"
          >
            <option value="yes" data-oid="i2lw83h">
              Yes
            </option>
            <option value="no" data-oid="1q7qg0y">
              No
            </option>
          </select>
        </div>
        {/* Co Insurance 0  */}
        {/* Service Used 0 null */}
        {/* Medicare Cap Amount Used 0  */}
        {/* Case Reference Number Example: 75681482637 */}
        <div className="mb-4" data-oid="76.mcl_">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            data-oid=":r01y__"
          >
            Case Reference Number
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Case Reference Number"
            data-oid="c5lha9_"
          />
        </div>
      </form>
    </>
  );
};
