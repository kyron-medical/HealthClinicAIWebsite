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
    <div className="flex items-center space-x-4" data-oid="9u7f2ny">
      <div
        className="h-12 w-12 overflow-hidden rounded-full"
        data-oid="e2f1r2."
      >
        <Image
          src={author.avatar || "/images/blog/author-placeholder.jpg"}
          alt={author.name}
          width={48}
          height={48}
          className="h-full w-full object-cover"
          data-oid=":l3sd34"
        />
      </div>
      <div data-oid="m1t5iiv">
        <h4
          className="text-sm font-semibold text-gray-900 dark:text-white"
          data-oid="d22pibk"
        >
          {author.name}
        </h4>
        <p
          className="text-xs text-gray-500 dark:text-gray-400"
          data-oid="9o9gqcn"
        >
          {author.role}
        </p>
      </div>
    </div>
  );
};
