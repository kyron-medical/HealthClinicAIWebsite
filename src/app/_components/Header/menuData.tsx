import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  /*{
id: 33,
title: "Blog",
path: "/blog",
newTab: false,
},*/
  {
    id: 3,
    title: "Request a Demo",
    path: "https://form.typeform.com/to/zstMkPH7",
    newTab: false,
  },
  {
    id: 4,
    title: "News",
    path: "/news",
    newTab: false,
  },
  {
    id: 5,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Blog",
        path: "/resources/blog",
        newTab: false,
      },
      {
        id: 52,
        title: "Case Studies",
        path: "/resources/case-studies",
        newTab: false,
      },
      {
        id: 53,
        title: "Whitepapers",
        path: "/resources/whitepapers",
        newTab: false,
      },
      {
        id: 54,
        title: "FAQs",
        path: "/resources/faqs",
        newTab: false,
      },
    ],
  },
];

export default menuData;
