"use client";

import { getBlogPosts } from "@/server/db";
import Image from "next/image";
import Link from "next/link";


interface RelatedPostsProps {
  currentPostId: string;
}

export const RelatedPosts = async ({ currentPostId }: RelatedPostsProps) => {
  const relatedPosts = (await getBlogPosts())
    .filter((post) => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-16">
      <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Related Articles
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            href={`/resources/blog/${post.id}`}
            key={post.id}
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={post.mainImage}
                alt={post.title}
                width={400}
                height={225}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-300">
                {post.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};