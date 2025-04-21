/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
    ];
  },
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
      "utfs.io",
      "turnto10.com",
      "8tg47xoyc4.ufs.sh",
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
