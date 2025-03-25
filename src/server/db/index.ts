import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

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
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  if (!user.id) throw new Error("Unauthorized");

  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!isAdmin) throw new Error("Unauthorized");

  const blogPost = await prisma.blogPost.create({
    data: {
      title: data.title,
      author: data.author,
      content: data.content,
      tagline: data.tagline,
      mainImage: data.mainImage,
    },
  });

  return blogPost;
}

export async function deleteBlogPost(id: string) {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  if (!user.id) throw new Error("Unauthorized");

  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!isAdmin) throw new Error("Unauthorized");

  const blogPost = await prisma.blogPost.delete({
    where: { id, },
  });

  redirect("/admin/blog");
}

