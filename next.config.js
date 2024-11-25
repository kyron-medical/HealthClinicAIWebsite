/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "bostonglobe-prod.cdn.arcpublishing.com",
      "snworksceo.imgix.net",
      "www.browndailyherald.com",
      "americanbazaaronline.com",
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
