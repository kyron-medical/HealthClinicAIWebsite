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
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </h3>
        </div>
        <div className={`rounded-full p-3 ${color}`}>{icon}</div>
      </div>
      <div className="mt-4 flex items-center">
        <span
          className={`flex items-center text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          ) : (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          )}
          {Math.abs(change)}%
        </span>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          from last month
        </span>
      </div>
    </div>
  );
};
