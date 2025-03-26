import { createBlogPost } from "@/server/db";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const runtime = "nodejs"; // Optional: Use edge runtime for faster responses

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const blogPost = await createBlogPost(body);
    return NextResponse.json(blogPost, { status: 201 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.message === "Unauthorized" ? 401 : 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json(
      { message: "Use server actions instead of this endpoint" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}





