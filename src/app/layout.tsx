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
    <html suppressHydrationWarning lang="en" data-oid="u_xub_a">
      {/*
                            <head /> will contain the components returned by the nearest parent
                            head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
                           */}
      <head data-oid="i-59tm:" />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        data-oid="huok8py"
      >
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
          data-oid="kbi1wk6"
        />

        <Providers data-oid="2-w.fje">
          <Header data-oid="3xnnvt9" />
          {children}
          <Footer data-oid="k5u-lir" />
          <ScrollToTop data-oid="344:jy:" />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
