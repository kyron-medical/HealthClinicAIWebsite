import Footer from "@/components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/global.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyron Medical",
  description:
    "Kyron is a creative agency that specializes in branding, web design, and digital marketing.",
  // other metadata
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" data-oid="f21uc99">
      {/*
                                 <head /> will contain the components returned by the nearest parent
                                                             head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
                                                            */}
      <head data-oid="p..pxc-" />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        data-oid="i7dj5vo"
      >
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
          data-oid="7cwx65c"
        />

        <Providers data-oid="4_n5gpk">
          <Header data-oid="1ojzqfg" />
          <main data-oid="50oeq27">{children}</main>
          {modal}
          <Footer data-oid="hd1f201" />
          <ScrollToTop data-oid="5.iswp5" />
          <div id="modal-root" data-oid="g-jpi8." />
        </Providers>
      </body>
    </html>
  );
}
