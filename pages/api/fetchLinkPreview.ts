import { NextApiRequest, NextApiResponse } from "next";
import ogs from "open-graph-scraper"; // Open Graph Scraper

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const { error, result } = await ogs({ url: url as string });

    if (error) {
      return res.status(500).json({ error: (error as any).message });
    }

    // Return the Open Graph metadata
    return res.status(200).json({
      ogTitle: result.ogTitle,
      ogDescription: result.ogDescription,
      ogImage: result.ogImage?.[0]?.url || null, // Use the first image from the Open Graph meta tag
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch metadata" });
  }
}
