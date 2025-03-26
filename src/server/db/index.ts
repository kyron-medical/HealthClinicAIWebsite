'server-only';

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getBlogPosts() {
  const blogPosts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  return blogPosts;
}

export async function getBlogPost(id: string) {
  const blogPost = await prisma.blogPost.findUnique({
    where: { id, },
  });

  if (!blogPost) throw new Error("Blog post not found");

  return blogPost;
}

export async function createBlogPost(data: {
  title: string;
  tagline: string;
  author: string;
  content: string;
  mainImage: string;
}) {
  const user = await auth();

  if (!user) throw new Error("Unauthorized");
  if (!user.userId) throw new Error("Unauthorized");

  const isAdmin = user.sessionClaims?.role === "admin";
  if (!isAdmin) throw new Error("Unauthorized");

  const blogPost = await prisma.blogPost.create({
    data: {
      title: data.title,
      tagline: data.tagline,
      author: data.author,
      content: data.content,
      mainImage: data.mainImage,
      imageUrls: [], // Initialize with empty array as per schema
    },
  });

  return blogPost;
}

export async function deleteBlogPost(id: string) {
  const user = await auth();

  if (!user) throw new Error("Unauthorized");

  if (!user.userId) throw new Error("Unauthorized");

  const isAdmin = user.sessionClaims?.role === "admin";

  if (!isAdmin) throw new Error("Unauthorized");

  const blogPost = await prisma.blogPost.delete({
    where: { id, },
  });

  redirect("/admin/blog");
}

