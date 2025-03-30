import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Prevent this route from being statically generated
export const dynamic = "force-dynamic";
export const runtime = "nodejs"; // Optional: Use edge runtime for faster responses

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const currentId = searchParams.get("excludeId");
    const limit = parseInt(searchParams.get("limit") || "3");

    // Only run this query when actually called, not during build
    const blogPosts = await prisma.blogPost.findMany({
      where: currentId ? { id: { not: currentId } } : {},
      orderBy: { createdAt: "desc" },
      take: Math.min(limit, 10), // Limit to max 10 posts
      // Include only the fields you need for better performance
      select: {
        id: true,
        title: true,
        tagline: true,
        mainImage: true,
        createdAt: true,
      },
    });

    // Add cache headers for better performance (5 minutes)
    const response = NextResponse.json(blogPosts);
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate",
    );
    return response;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}
