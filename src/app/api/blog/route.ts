import { getAuth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs"; // Optional: Use edge runtime for faster responses

export async function POST(request: Request) {
  try {
    // Use getAuth instead of auth() for API routes
    const nextRequest = new NextRequest(request);
    const { userId, sessionClaims } = getAuth(nextRequest);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Use type assertion to tell TypeScript about the expected structure
    const isAdmin =
      (sessionClaims?.metadata as { role?: string })?.role === "admin" ||
      sessionClaims?.role === "admin";

    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    // Validate required fields
    const { title, tagline, author, content, mainImage } = body;
    if (!title || !tagline || !author || !content || !mainImage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create blog post directly with prisma
    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        tagline,
        author,
        content,
        mainImage,
        imageUrls: [], // Initialize with empty array as per schema
      },
    });

    return NextResponse.json(blogPost, { status: 201 });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.message === "Unauthorized" ? 401 : 500 },
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json(
      { message: "Use server actions instead of this endpoint" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
