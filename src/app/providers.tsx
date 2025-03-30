"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="ymxgz3v">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="fteuqz2"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="399xw2z"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
