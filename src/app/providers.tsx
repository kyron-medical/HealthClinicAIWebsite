"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="zrt2frx">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="m92c2p3"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="llye599"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
