import { getAuth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs"; // Optional: Use edge runtime for faster responses

// Define interfaces for better type safety
interface BlogPostRequestData {
  title: string;
  tagline: string;
  author: string;
  content: string;
  mainImage: string;
}

// Type guard function to validate blog post data
function isBlogPostData(data: unknown): data is BlogPostRequestData {
  if (!data || typeof data !== "object") return false;

  const requiredFields = ["title", "tagline", "author", "content", "mainImage"];
  return requiredFields.every(
    (field) =>
      field in data &&
      typeof (data as Record<string, unknown>)[field] === "string" &&
      (data as Record<string, unknown>)[field] !== "",
  );
}

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

    const rawData: unknown = await request.json();

    // Validate the data structure
    if (!isBlogPostData(rawData)) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 },
      );
    }

    // Now TypeScript knows the structure is validated
    const { title, tagline, author, content, mainImage } = rawData;

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
  } catch (error: unknown) {
    console.error("API Error:", error);

    // Safely handle error messages
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";

    const statusCode = errorMessage === "Unauthorized" ? 401 : 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

export async function GET() {
  try {
    return NextResponse.json(
      { message: "Use server actions instead of this endpoint" },
      { status: 200 },
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
