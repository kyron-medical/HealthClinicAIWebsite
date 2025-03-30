"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@prisma/client";
import { getRelatedPosts } from "@/server/actions/blog";

interface RelatedPostsProps {
  currentPostId: string;
}

export const RelatedPosts = ({ currentPostId }: RelatedPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        const data = await getRelatedPosts(currentPostId);
        setRelatedPosts(
          data.map((post) => ({
            ...post,
            author: "",
            content: "",
            imageUrls: [],
            updatedAt: post.createdAt, // Using createdAt as fallback for updatedAt
          })),
        );
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedPosts();
  }, [currentPostId]);

  if (loading) return <div data-oid="jtgs9v-">Loading related articles...</div>;

  return (
    <div className="mt-16" data-oid="3:z3c8n">
      <h3
        className="mb-8 text-2xl font-bold text-gray-900 dark:text-white"
        data-oid="0aj_0vm"
      >
        Related Articles
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-oid="g13stbh">
        {relatedPosts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
            data-oid="6ucm7pw"
          >
            <div className="aspect-[16/9] overflow-hidden" data-oid="r:qyf2x">
              <Image
                src={post.mainImage}
                alt={post.title}
                width={400}
                height={225}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-oid="duf.d_q"
              />
            </div>
            <div className="p-4" data-oid="lippu-2">
              <h4
                className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                data-oid="vhc07b8"
              >
                {post.title}
              </h4>
              <p
                className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300"
                data-oid="p2bx02d"
              >
                {post.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
