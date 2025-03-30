"use client";

import Image from "next/image";

interface AuthorInfoProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const AuthorInfo = ({ author }: AuthorInfoProps) => {
  return (
    <div className="flex items-center space-x-4" data-oid="e:hln5b">
      <div
        className="h-12 w-12 overflow-hidden rounded-full"
        data-oid="2hd:5p:"
      >
        <Image
          src={author.avatar || "/images/blog/author-placeholder.jpg"}
          alt={author.name}
          width={48}
          height={48}
          className="h-full w-full object-cover"
          data-oid="4.9yf:d"
        />
      </div>
      <div data-oid="nmkd8_.">
        <h4
          className="text-sm font-semibold text-gray-900 dark:text-white"
          data-oid="im2cy47"
        >
          {author.name}
        </h4>
        <p
          className="text-xs text-gray-500 dark:text-gray-400"
          data-oid="2lyw:m5"
        >
          {author.role}
        </p>
      </div>
    </div>
  );
};
