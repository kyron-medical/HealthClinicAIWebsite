import React, { useMemo } from "react";
import styles from "./NewsPage.module.css";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleBlog from "@/components/Blog/SingleBlog";
import newsData from "@/components/News/newsData"; // Import the news data

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Page | Kyron",
  description: "News Page for Kyron",
  // other metadata
};

const NewsPage = () => {
  // Sort the news data by publishDate in descending order (most recent first)
  const sortedNewsData = useMemo(() => {
    return [...newsData].sort((a, b) => {
      const dateA = new Date(a.publishDate); // Convert publishDate to Date
      const dateB = new Date(b.publishDate); // Convert publishDate to Date
      return dateB.getTime() - dateA.getTime(); // Sort in descending order
    });
  }, [newsData]);

  return (
    <section
      id="news"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Latest News"
          paragraph="Stay up to date with the latest news and updates for Kyron!"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {newsData.map((newsItem) => (
            <div key={newsItem.id} className="w-full">
              <SingleBlog blog={newsItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
