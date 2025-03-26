"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@prisma/client"

interface RelatedPostsProps {
  currentPostId: string;
}

export const RelatedPosts = ({ currentPostId }: RelatedPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        const response = await fetch(
          `/api/blog/public?excludeId=${currentPostId}`,
        );
        if (!response.ok) throw new Error("Failed to fetch related posts");
        const data = await response.json();
        setRelatedPosts(data);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedPosts();
  }, [currentPostId]);

  if (loading) return <div>Loading related articles...</div>;

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
              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                {post.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
