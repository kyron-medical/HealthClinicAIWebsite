import Footer from "@/components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" data-oid="uaug93l">
      {/*
                   <head /> will contain the components returned by the nearest parent
                   head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
                  */}
      <head data-oid="jta1b.q" />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        data-oid="p2qe1g."
      >
        <Providers data-oid="c1zmdxx">
          <Header data-oid="4otd0lr" />
          {children}
          <Footer data-oid="fi1h3g:" />
          <ScrollToTop data-oid="dr-5wcq" />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
