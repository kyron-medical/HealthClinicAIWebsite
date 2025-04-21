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
    <html suppressHydrationWarning lang="en" data-oid="b_2_mja">
      {/*
                      <head /> will contain the components returned by the nearest parent
                                                  head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
                                                 */}
      <head data-oid="sp.2dib" />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        data-oid="i_:jgf1"
      >
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
          data-oid="_p6-5or"
        />

        <Providers data-oid="son9800">
          <Header data-oid="jely3lu" />
          <main>{children}</main>
          {modal}
          <Footer data-oid="afoq8dr" />
          <ScrollToTop data-oid="a.7fq7i" />
          <div id="modal-root" />
        </Providers>
      </body>
    </html>
  );
}