"use client";

interface TableOfContentsProps {
  headings: string[];
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  return (
    <div
      className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      data-oid="winp1mo"
    >
      <h3
        className="mb-4 text-lg font-semibold text-gray-900 dark:text-white"
        data-oid="m..x8ho"
      >
        Table of Contents
      </h3>
      <ul className="space-y-2" data-oid="grdc7.v">
        {headings.map((heading, index) => (
          <li key={index} data-oid="61058bz">
            <a
              href={`#heading-${index}`}
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              data-oid="9k:5k96"
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
