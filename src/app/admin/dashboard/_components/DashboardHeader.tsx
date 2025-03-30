"use client";

interface DashboardHeaderProps {
  userName?: string;
}

export const DashboardHeader = ({
  userName = "Admin User",
}: DashboardHeaderProps) => {
  return (
    <div
      className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center"
      data-oid="g5qtua2"
    >
      <div data-oid="._xl62j">
        <h1
          className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          data-oid="qcwk8rt"
        >
          Welcome back, {userName}
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300" data-oid="ckjijnr">
          Here`&apos;`s what`&apos;`s happening with your practice today.
        </p>
      </div>
      <div className="flex items-center gap-3" data-oid="mt79x5.">
        <button
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          data-oid="vc7:.y3"
        >
          <span className="flex items-center gap-2" data-oid="svhtfjv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              data-oid=".udft18"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                data-oid="snbyrww"
              />
            </svg>
            Generate Report
          </span>
        </button>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          data-oid="16rjl71"
        >
          <span className="flex items-center gap-2" data-oid="kh3cexd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              data-oid="749u3xk"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                data-oid="3ro_s88"
              />
            </svg>
            Actions
          </span>
        </button>
      </div>
    </div>
  );
};
