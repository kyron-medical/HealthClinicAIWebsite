import { useMemo } from "react";
import styles from "./NewsPage.module.css";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleBlog from "@/app/_components/SingleBlog";
import newsData from "./_components/newsData"; // Import the news data

import { Metadata } from "next";
import { InfiniteCarousel } from "./_components/InfiniteCarousel";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News | Kyron",
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
      data-oid="fbuao6i"
    >
      <div className="container" data-oid="i3j75bm">
        <SectionTitle
          title="Latest News"
          paragraph="Stay up to date with the latest news and updates for Kyron!"
          center
          data-oid="195.n2s"
        />

        {/* Featured Article */}
        <div className="mb-16" data-oid="wmup68z">
          {sortedNewsData.length > 0 && (
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
              data-oid="buweqru"
            >
              <div className="group relative" data-oid="kl8d2v0">
                <div
                  className="aspect-[16/9] w-full overflow-hidden"
                  data-oid="-ndz:xj"
                >
                  <Image
                    src={sortedNewsData[0].image}
                    alt={sortedNewsData[0].title}
                    className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    width={1200}
                    height={675}
                    data-oid="2iz_dnh"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"
                  data-oid="soh:f1q"
                >
                  <div className="absolute bottom-0 p-8" data-oid="fnr7im9">
                    <span
                      className="mb-3 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white"
                      data-oid="5puesum"
                    >
                      Featured
                    </span>
                    <h2
                      className="mb-4 text-3xl font-bold text-white"
                      data-oid="0fiow8u"
                    >
                      {sortedNewsData[0].title}
                    </h2>
                    <p className="mb-4 text-gray-200" data-oid="gw.381v">
                      {sortedNewsData[0].paragraph.substring(0, 150)}...
                    </p>
                    <div className="flex items-center gap-4" data-oid="byori6s">
                      <span
                        className="text-sm text-gray-300"
                        data-oid="jafg2v3"
                      >
                        {new Date(
                          sortedNewsData[0].publishDate,
                        ).toLocaleDateString()}
                      </span>
                      <a
                        href={sortedNewsData[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-white hover:text-blue-400"
                        data-oid="2u833ng"
                      >
                        Read More
                        <span
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                          data-oid="9sv6xq6"
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* News Grid */}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-oid="3wjdz:g"
        >
          {sortedNewsData.slice(1).map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              data-oid="7oyhj0k"
            >
              <div className="aspect-[16/9] overflow-hidden" data-oid="s17razh">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  width={400}
                  height={225}
                  className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  data-oid="jmmbtnn"
                />
              </div>
              <div className="p-6" data-oid="5p80b_f">
                <div
                  className="mb-4 flex items-center gap-4"
                  data-oid="4sb:pbq"
                >
                  {/* <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {newsItem.tags?.[0] || "News"}
                  </span> */}
                  <span
                    className="text-sm text-gray-500 dark:text-gray-400"
                    data-oid="y_.l:d3"
                  >
                    {new Date(newsItem.publishDate).toLocaleDateString()}
                  </span>
                  <span
                    className="text-xs text-gray-500 dark:text-gray-400"
                    data-oid="ckcd:of"
                  >
                    by{" "}
                    <span className="font-semibold " data-oid="0u-7j:y">
                      {newsItem.author.name}
                    </span>
                  </span>
                  <Image
                    src={newsItem.logoUrl} // The logo URL you want to use
                    alt="Logo"
                    className="h-8 w-auto" // Adjust size as needed
                    width={32}
                    height={32}
                    data-oid="udx2q4:"
                  />
                </div>
                <Link href={newsItem.link} data-oid="wyyvwcb">
                  <h3
                    className="mb-3 text-xl font-bold text-gray-900 dark:text-white"
                    data-oid="0u6l1i-"
                  >
                    {newsItem.title}
                  </h3>
                </Link>
                <p
                  className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-300"
                  data-oid="9wyp4g3"
                >
                  {newsItem.paragraph}
                </p>
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  data-oid="nq0a-sw"
                >
                  Read Article
                  <span
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                    data-oid="b2qa4:q"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
