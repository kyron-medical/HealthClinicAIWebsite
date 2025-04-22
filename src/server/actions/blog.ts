'use server';

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createBlogPost(data: {
  title: string;
  tagline: string;
  content: string;
  author: string;
  mainImage: string;
}) {
  try {
    const user = await auth();
    if (!user?.userId) throw new Error("Unauthorized");

    return await prisma.blogPost.create({
      data: {
        ...data,
        imageUrls: [],
      },
    });
  } catch (error : unknown) {
    console.error("Error creating blog post:", error);
    throw error;
  }
}

export async function getRelatedPosts(excludeId: string) {
  try {
    return await prisma.blogPost.findMany({
      where: { id: { not: excludeId } },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true,
        title: true,
        tagline: true,
        mainImage: true,
        createdAt: true,
      },
    });
  } catch (error : unknown) {
    console.error("Error fetching related posts:", error);
    throw error;
  }
}