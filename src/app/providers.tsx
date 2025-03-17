"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="xdeg3i4">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="r-a:62a"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="a0rjh2m"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
