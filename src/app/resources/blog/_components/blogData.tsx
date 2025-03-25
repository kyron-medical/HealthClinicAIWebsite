import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
    },
    publishDate: "2025",
    logoUrl: "/images/logo/kyron_mdeical.png",
    link: "/resources/blog/1",
  },
  {
    id: 2,
    title: "",
    paragraph: "A",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Joshi Samuyl",
    },
    publishDate: "March 25, 2025",
    logoUrl: "/images/logo/kyron_mdeical.png",
    link: "/resources/blog/2",
  },
];

export default blogData;
