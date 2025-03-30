"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="yne62bm">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="0b8om55"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="4qei.7:"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
