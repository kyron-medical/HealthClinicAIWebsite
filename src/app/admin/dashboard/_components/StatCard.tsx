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
      data-oid="mft3xnl"
    >
      <div className="flex items-center justify-between" data-oid="0a50tlv">
        <div data-oid="3acpp62">
          <p
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
            data-oid="_ip2cj2"
          >
            {title}
          </p>
          <h3
            className="mt-1 text-2xl font-bold text-gray-900 dark:text-white"
            data-oid="z-1l.gb"
          >
            {value}
          </h3>
        </div>
        <div className={`rounded-full p-3 ${color}`} data-oid="itqxq3l">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center" data-oid="z6u:nyi">
        <span
          className={`flex items-center text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
          data-oid="gewlunk"
        >
          {isPositive ? (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="6ai4_27"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                data-oid="5pno935"
              ></path>
            </svg>
          ) : (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="tgyq:u2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                data-oid="-959.7g"
              ></path>
            </svg>
          )}
          {Math.abs(change)}%
        </span>
        <span
          className="ml-2 text-sm text-gray-500 dark:text-gray-400"
          data-oid="nje5:ej"
        >
          from last month
        </span>
      </div>
    </div>
  );
};
