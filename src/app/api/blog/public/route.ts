import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Prevent this route from being statically generated
export const dynamic = "force-dynamic";
export const runtime = "edge"; // Optional: Use edge runtime for faster responses

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const currentId = searchParams.get("excludeId");

    // Only run this query when actually called, not during build
    const blogPosts = await prisma.blogPost.findMany({
      where: currentId ? { id: { not: currentId } } : {},
      orderBy: { createdAt: "desc" },
      take: 3,
      // Include only the fields you need for better performance
      select: {
        id: true,
        title: true,
        tagline: true,
        mainImage: true,
        createdAt: true,
      },
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
