import axios from 'axios';

interface OpenGraphData {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

function extractMetaContent(html: string, property: string): string | undefined {
  // Match meta tags with property/name
  const propertyMatch = new RegExp(
    `<meta[^>]*(?:property|name)=["']${property}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i",
  );
  const contentMatch = new RegExp(
    `<meta[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["']${property}["'][^>]*>`,
    "i",
  );

  const match1 = html.match(propertyMatch);
  const match2 = html.match(contentMatch);

  // Use optional chaining (?.) and nullish coalescing (??) to handle null values
  return match1?.[1] ?? match2?.[1] ?? undefined;
}

function extractTitle(html: string): string | undefined {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1] : undefined;
}

export async function scrapeOpenGraph(url: string): Promise<OpenGraphData> {
  try {
    const response = await axios.get(url);
    const html = response.data;
    
    const ogData: OpenGraphData = {
      ogTitle: extractMetaContent(html, 'og:title') || 
               extractTitle(html),
      ogDescription: extractMetaContent(html, 'og:description') || 
                    extractMetaContent(html, 'description'),
      ogImage: extractMetaContent(html, 'og:image')
    };

    return ogData;
  } catch (error) {
    throw new Error('Failed to fetch metadata');
  }
}
