import type { Blog } from "@/types/blog";

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
    logoUrl: "/logos/news/boston-globe-icon.png",
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
    logoUrl: "/logos/news/bdh.png",
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
    logoUrl: "/logos/news/american-bazaar-icon.jpg",
    link: "https://americanbazaaronline.com/2024/11/06/brown-students-launch-kyron-medical-startup-medical-billing-93372/",
  },
  {
    id: 4,
    title:
      "Winners Announced for the Rhode Island Business Competition Pitch Contest",
    image: "/logos/news/ribc-social-poster.png",
    paragraph:
      "The first-place winner who received $500 was Jay Gopal, founder of Kyron Medical and a student at Brown University. His business streamlines medical billing through automated claim submissions, denial handling, and real-time insights resulting in maximizing revenues for physicians.",
    author: {
      name: "Rhode Island Business Competition",
    },
    publishDate: "November 11, 2024",
    logoUrl: "https://ri-business.com/images/ri-business-comp-logo.svg",
    link: "https://ri-business.com/news/winners-announced-for-the-rhode-island-business-competition-pitch-contest",
  },
  {
    id: 6,
    title: "AI fuels new medical billing startup created by Brown students",
    image: "/logos/news/new-england-council.png",
    paragraph:
      "Jay Gopal and Lucas Lieberman were inspired by the discovery that human-driven medical billing causes lost revenue and delayed income, which their online portal would eliminate. So far, they have closed pre-sales and signed letters of intent with several customers who plan to use their platform, Kyron Medical.",
    author: {
      name: "New England Council",
    },
    publishDate: "November 21, 2024",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWDRbyrZ2sut-tGFnmZG-ChZioa4a1H3FDA&s",
    link: "https://www.newenglandcouncil.com/news-article/ai-fuels-new-medical-billing-startup-created-by-brown-students/",
  },
  {
    id: 7,
    title: "Warren Alpert Medical School Congratulates Kuyron Medical",
    image:
      "https://medical.brown.edu/sites/default/files/styles/square_xsml/public/2024-12/home1.jpg?h=2ca5dd1f&itok=ero3kmnv",
    paragraph:
      'Jay Gopal ’25 MD’29 & Lucas Lieberman ’25, founders of Kyron Medical, an AI startup that automates admin tasks, boosting efficiency for doctors. “We let doctors be doctors by doing the busy work," they say.',
    author: {
      name: "Brown Medicine",
    },
    publishDate: "November 22, 2024",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXcU172emhh7d5RZMfGyereNuAl1xqoJRTw&s",
    link: "https://x.com/BrownMedicine/status/1860066120054587878",
  },
  {
    id: 8,
    title:
      "Revolutionizing Medical Billing with AI: Brown University Students Launch Kyron Medical",
    image: "/images/logo/kyron_medical.png",
    paragraph:
      "Kyron Medical, a healthcare technology startup founded by Brown University students, is set to revolutionize medical billing using artificial intelligence (AI). Co-founded by Jay Gopal ’25 MD’29 and Lucas Lieberman ’25, the startup aims to streamline the medical billing process and reduce physician burnout by utilizing AI technology.",
    author: {
      name: "INDO News Editor",
    },
    publishDate: "November 8, 2024",
    logoUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEVHcEzFKDmpRWbBHjDCITLAGy3BHS7AGSvBGizAITTAGy3DJDW3Nk++IDTAHC7BJjjEKzzBIzXAGixFecJFc746dsc8csE4csI3csM3ccJWZaiAjnW2AAAAG3RSTlMAMAd9SsOP/t9r0jwQnbIlG1vvK0V2m9Ho/clc9VdcAAABO0lEQVR4AXXSB3LFIAwEUIsuEALkmtz/oAHn97LT/WZl2vQUgOlrlNbqKxprzdei8wG/FmNw6YtRZiRV1MehKRtVm06flBoQOJFMbzVFtZJh732Ae1X1zPOyrjMZ203smKvOTOu27ftxHPt8msVKfQyYhojTdvyMHFvpFjTQBJhtDD15WrYT98WJ50bUnA3ieyT3Pc+je+wtiINqXBwyzMHUM/TYOOgKOl4kRFeGnbrnbollfLecNZp60tD1l11tvRZsRqCxlwsNxVxQvDAWRbWkOj2EIKGIbZVq0hwF6QFVxRB0IdBWxmp1fcQWrKF020eGB0zMqbcGSbScsTygcaZxX5DNupkEparHXxqMPrI2hVQyxjwtt+oQL7Nq4xhtu1cJIze6TCnIwbt7NbmntZNhd18uvD4qaCf+Aez6Ef6rR1PRAAAAAElFTkSuQmCC",
    link: "https://indonewyork.com/breaking/revolutionizing-medical-billing-with-ai-brown-university-students-launch-kyron-medical.html",
  },
  {
    id: 9,
    title: "Student Entrepreneurs Fight Burnout With AI",
    image: "/images/logo/kyron_medical.png",
    paragraph:
      "New tools in development tackle insurance denials, assist with patient documentation and translation.",
    author: {
      name: "Phoebe Hall",
    },
    publishDate: "February 20, 2025",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXcU172emhh7d5RZMfGyereNuAl1xqoJRTw&s",
    link: "https://medicine.at.brown.edu/student-entrepreneurs-fight-burnout-with-ai/",
  },
  {
    id: 10,
    title:
      "Kyron Medical's AI tool speeds insurance claims, focusing more on patient care",
    image:
      "https://turnto10.com/resources/media2/16x9/1920/648/center/90/9dee961f-6eb1-44dc-8e78-3744aa9c69f2-KYRONMEDICALPKG.transfer_frame_817.jpeg",
    paragraph:
      "A group of Brown University students have developed a software program aimed at making medical billing more efficient.",
    author: {
      name: "Barbara Morse",
    },
    publishDate: "February 25, 2025",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEAgf-KVZ6j5MUqegZTkwJkXUhKHn7cA--g&s",
    link: "https://turnto10.com/features/health-landing-page/kyron-medicals-ai-tool-speeds-insurance-claims-focusing-more-on-patient-care-artificial-intelligence-medical-professionals-february-25-2025",
  },
];

export default newsData;
