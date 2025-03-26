import { NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const { error, result } = await ogs({ url: url });

   if (error) {
     // Handle the boolean error flag
     return NextResponse.json(
       { error: "Failed to extract Open Graph data" },
       { status: 500 },
     );
   }

    // Return the Open Graph metadata
    return NextResponse.json({
      ogTitle: result.ogTitle,
      ogDescription: result.ogDescription,
      ogImage: result.ogImage?.[0]?.url || null,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch metadata" },
      { status: 500 }
    );
  }
}