import { createBlogPost } from "@/server/db";
import { NextResponse } from "next/server";

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
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.message === "Unauthorized" ? 401 : 500 },
    );
  }
}
