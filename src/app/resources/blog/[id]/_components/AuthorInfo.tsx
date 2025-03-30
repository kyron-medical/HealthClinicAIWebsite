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
    <div className="flex items-center space-x-4" data-oid="j8zlc3j">
      <div
        className="h-12 w-12 overflow-hidden rounded-full"
        data-oid="bqr8r2q"
      >
        <Image
          src={author.avatar || "/images/blog/author-placeholder.jpg"}
          alt={author.name}
          width={48}
          height={48}
          className="h-full w-full object-cover"
          data-oid="51-hea5"
        />
      </div>
      <div data-oid="eb9p.fo">
        <h4
          className="text-sm font-semibold text-gray-900 dark:text-white"
          data-oid="-mp-v6i"
        >
          {author.name}
        </h4>
        <p
          className="text-xs text-gray-500 dark:text-gray-400"
          data-oid="zoe0o.."
        >
          {author.role}
        </p>
      </div>
    </div>
  );
};
