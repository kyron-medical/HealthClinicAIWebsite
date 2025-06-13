export const EligibilityTab = () => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Eligibility and Benefits</h2>
      <div className="mb-4 text-sm text-gray-500">
        <strong>
          To generate a letter of appeal for ___, please upload both:
        </strong>
        <ul className="ml-6 mt-2 list-disc">
          <li>
            <strong>Denial</strong> (PDF, Word, or TXT)
          </li>
          <li>
            <strong>Note</strong> (PDF, Word, or TXT)
          </li>
        </ul>
        <span className="mt-2 block text-red-500">
          Do not upload the same file twice. File names do not matter.
        </span>
      </div>
      <form>
        <h3 className="mb-4 text-2xl font-bold">Patient Information</h3>
        {/* Patient Name XXXX */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Patient Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Patient Name"
          />
        </div>
        {/* Date of Birth 12/02/1964 */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            className="block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        {/* Facility Name XXXX  */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Facility Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Facility Name"
          />
        </div>
        {/* Physician Name  */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Physician Name
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Physician Name"
          />
        </div>
        {/* Created On 04/24/2025 19:11:53 PM */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Created On
          </label>
          <input
            type="datetime-local"
            className="block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        {/* Created By kevin.ramirez  */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Created By
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Creator's Name"
          />
        </div>
        {/* Notes F10410317 */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Notes
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Notes"
          />
        </div>
        <h3 className="mb-4 text-2xl font-bold">Eligibility Information</h3>
        <h3 className="mb-4 text-2xl font-bold">
          Benefits Information — 72156
        </h3>
        <h3 className="mb-4 text-2xl font-bold">
          Benefits Information — 00000
        </h3>
        {/* Dropdown to select yes or no on coverage */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Do you have coverage?
          </label>
          <select className="block w-full rounded-md border border-gray-300 p-2">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* Medicare Cap Amount 2410  */}
        {/* Service Limit 0 null */}
        {/* Authorization Required  Dropdown to select yes or no on coverage */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Authorization Required?
          </label>
          <select className="block w-full rounded-md border border-gray-300 p-2">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* Co Pay 0 */}
        {/* Referral Required Yes  Dropdown to select yes or no on coverage */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Referral Required?
          </label>
          <select className="block w-full rounded-md border border-gray-300 p-2">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* Co Insurance 0  */}
        {/* Service Used 0 null */}
        {/* Medicare Cap Amount Used 0  */}
        {/* Case Reference Number Example: 75681482637 */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Case Reference Number
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter Case Reference Number"
          />
        </div>
      </form>
    </>
  );
};
