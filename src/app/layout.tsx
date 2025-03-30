import Footer from "@/components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/global.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyron Medical",
  description:
    "Kyron is a creative agency that specializes in branding, web design, and digital marketing.",
  // other metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" data-oid="mkfolw_">
      {/*
                                       <head /> will contain the components returned by the nearest parent
                                       head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
                                      */}
      <head data-oid="-cez62u" />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        data-oid="t62dq7m"
      >
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
          data-oid="st0zo.:"
        />

        <Providers data-oid="p:fs4u0">
          <Header data-oid="ik-7cwy" />
          {children}
          <Footer data-oid="4x74mks" />
          <ScrollToTop data-oid="8_gufwv" />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
