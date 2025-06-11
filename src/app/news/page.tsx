import { useMemo } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import newsData from "./_components/newsData"; // Import the news data

import type { Metadata } from "next";
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
  }, []);

  return (
    <section
      id="news"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      data-oid="xv7_uer"
    >
      <div className="container" data-oid=".2qsrq8">
        <SectionTitle
          title="Latest News"
          paragraph="Stay up to date with the latest news and updates for Kyron!"
          center
          data-oid="pmb9g2r"
        />

        {/* Featured Article */}
        <div className="mb-16" data-oid="gs:u.lq">
          {sortedNewsData.length > 0 && (
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
              data-oid="8vhvb0b"
            >
              <div className="group relative" data-oid="ng6zwn3">
                <div
                  className="aspect-[16/9] w-full overflow-hidden"
                  data-oid="_eh7ik:"
                >
                  <Image
                    src={sortedNewsData[0].image}
                    alt={sortedNewsData[0].title}
                    className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    width={1200}
                    height={675}
                    data-oid="dkh6sl4"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"
                  data-oid="l4:4ilk"
                >
                  <div className="absolute bottom-0 p-8" data-oid="1htyms1">
                    <span
                      className="mb-3 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white"
                      data-oid="ol-i-_b"
                    >
                      Featured
                    </span>
                    <h2
                      className="mb-4 text-3xl font-bold text-white"
                      data-oid="j_ngv_1"
                    >
                      {sortedNewsData[0].title}
                    </h2>
                    <p className="mb-4 text-gray-200" data-oid="xid:osd">
                      {sortedNewsData[0].paragraph.substring(0, 150)}...
                    </p>
                    <div className="flex items-center gap-4" data-oid="wpevvxo">
                      <span
                        className="text-sm text-gray-300"
                        data-oid="h6u4w4a"
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
                        data-oid="54msaar"
                      >
                        Read More
                        <span
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                          data-oid="f2ym6i6"
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
          data-oid="wy_g63k"
        >
          {sortedNewsData.slice(1).map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              data-oid="b9:3fxf"
            >
              <div className="aspect-[16/9] overflow-hidden" data-oid="9-zh1r-">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  width={400}
                  height={225}
                  className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  data-oid="80e75yx"
                />
              </div>
              <div className="p-6" data-oid="ls22c3u">
                <div
                  className="mb-4 flex items-center gap-4"
                  data-oid=".h_gcn2"
                >
                  {/* <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {newsItem.tags?.[0] || "News"}
                  </span> */}
                  <span
                    className="text-sm text-gray-500 dark:text-gray-400"
                    data-oid="2t.z2zy"
                  >
                    {new Date(newsItem.publishDate).toLocaleDateString()}
                  </span>
                  <span
                    className="text-xs text-gray-500 dark:text-gray-400"
                    data-oid="d4nb498"
                  >
                    by{" "}
                    <span className="font-semibold " data-oid="alszf_a">
                      {newsItem.author.name}
                    </span>
                  </span>
                  <Image
                    src={newsItem.logoUrl} // The logo URL you want to use
                    alt="Logo"
                    className="h-8 w-auto" // Adjust size as needed
                    width={32}
                    height={32}
                    data-oid="wbnxftf"
                  />
                </div>
                <Link href={newsItem.link} data-oid="zet9t_6">
                  <h3
                    className="mb-3 text-xl font-bold text-gray-900 dark:text-white"
                    data-oid="cl.h96:"
                  >
                    {newsItem.title}
                  </h3>
                </Link>
                <p
                  className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-300"
                  data-oid="6wqt-zj"
                >
                  {newsItem.paragraph}
                </p>
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  data-oid="hqzl8e6"
                >
                  Read Article
                  <span
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                    data-oid="tgjivdm"
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
