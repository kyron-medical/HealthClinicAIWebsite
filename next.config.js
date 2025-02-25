/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "bostonglobe-prod.cdn.arcpublishing.com",
      "snworksceo.imgix.net",
      "www.browndailyherald.com",
      "americanbazaaronline.com",
      "www.browndailyherald.com",
      "medical.brown.edu",
      "media.licdn.com",
      "encrypted-tbn0.gstatic.com",
      "www.bostonglobe.com",
      "scontent-lax3-2.xx.fbcdn.net",
      "medicine.at.brown.edu",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
