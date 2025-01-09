import { Blog } from "@/types/blog";

const newsData: Blog[] = [
  {
    id: 1,
    title: "AI fuels new medical billing startup created by Brown students",
    image:
      "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/AB5MTQRJTM3Z4K22D3W7DZFSMI.jpeg?auth=4c3bb2bfe4c8d0574dc0a96bd0956fae2beafccf5f4b763a90c1260f71e43722&width=1440",
    paragraph:
      "The cofounders of Kyron Medical say their portal completes administrative tasks for doctors, ‘letting doctors be doctors by doing the busy work.",
    author: {
      name: "Alexa Coultoff",
    },
    publishDate: "November 18, 2024",
    link: "https://www.bostonglobe.com/2024/11/18/metro/rhode-island-business-innovator-ai/",
  },
  {
    id: 2,
    title:
      "Brown student-founded startup uses AI to streamline medical billing processes",
    image:
      "https://snworksceo.imgix.net/bdh/a6fc6171-d00b-458e-8e12-e9b337bdc366.sized-1000x1000.jpg?w=1000",
    paragraph:
      "Kyron Medical is focusing on reducing physician burnout caused by excessive administrative tasks.",
    author: {
      name: "Roma Shah",
    },
    publishDate: "November 3, 2024",
    link: "https://www.browndailyherald.com/article/2024/11/brown-student-founded-startup-uses-ai-to-streamline-medical-billing-processes",
  },
  {
    id: 3,
    title:
      "Brown University students launch AI startup Kyron Medical to revolutionize medical billing",
    image:
      "https://americanbazaaronline.com/wp-content/uploads/2022/12/Brown-University-e1670614713828.jpg",
    paragraph:
      "Kyron Medical aims to revolutionize medical billing and reduce burnout among healthcare professionals.",
    author: {
      name: "Rumaisa Khusru",
    },
    publishDate: "November 6, 2024",
    link: "https://americanbazaaronline.com/2024/11/06/brown-students-launch-kyron-medical-startup-medical-billing-93372/",
  },
];

export default newsData;
