import axios from 'axios';
import * as cheerio from 'cheerio';

interface OpenGraphData {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export async function scrapeOpenGraph(url: string): Promise<OpenGraphData> {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    
    const ogData: OpenGraphData = {
      ogTitle: $('meta[property="og:title"]').attr('content') || 
               $('title').text() ||
               undefined,
      ogDescription: $('meta[property="og:description"]').attr('content') || 
                    $('meta[name="description"]').attr('content') ||
                    undefined,
      ogImage: $('meta[property="og:image"]').attr('content') ||
               undefined
    };

    return ogData;
  } catch (error) {
    throw new Error('Failed to fetch metadata');
  }
}