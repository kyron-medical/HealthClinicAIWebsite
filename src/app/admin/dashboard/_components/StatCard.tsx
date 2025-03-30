"use client";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export const StatCard = ({
  title,
  value,
  change,
  icon,
  color,
}: StatCardProps) => {
  const isPositive = change >= 0;

  return (
    <div
      className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
      data-oid="h47lcq1"
    >
      <div className="flex items-center justify-between" data-oid="usl5jjw">
        <div data-oid="auvkcsq">
          <p
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
            data-oid="l2.s-85"
          >
            {title}
          </p>
          <h3
            className="mt-1 text-2xl font-bold text-gray-900 dark:text-white"
            data-oid="34g8u8d"
          >
            {value}
          </h3>
        </div>
        <div className={`rounded-full p-3 ${color}`} data-oid="m38h0lf">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center" data-oid="zudwfn-">
        <span
          className={`flex items-center text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
          data-oid="nna4.lw"
        >
          {isPositive ? (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="jxai31e"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                data-oid="oktip8z"
              ></path>
            </svg>
          ) : (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="0sjx8:o"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                data-oid=":ystaeq"
              ></path>
            </svg>
          )}
          {Math.abs(change)}%
        </span>
        <span
          className="ml-2 text-sm text-gray-500 dark:text-gray-400"
          data-oid="3u:5131"
        >
          from last month
        </span>
      </div>
    </div>
  );
};
