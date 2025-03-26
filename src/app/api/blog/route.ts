import { createBlogPost } from "@/server/db";
import { NextResponse } from "next/server";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const blogPost = await createBlogPost({
      title: body.title,
      tagline: body.tagline,
      author: body.author,
      content: body.content,
      mainImage: body.mainImage,
    });

    return NextResponse.json(blogPost, { status: 201 });
  } catch (error: any) { // Type assertion to handle unknown error type
    const status = error.message === "Unauthorized" ? 401 : 500;
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not implemented" }, { status: 501 });
}


