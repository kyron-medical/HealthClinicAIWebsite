import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Public endpoint - no auth needed
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const currentId = searchParams.get("excludeId");

    const where = currentId ? { id: { not: currentId } } : {};

    const blogPosts = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 3,
    });

    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}
