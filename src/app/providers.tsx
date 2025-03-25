"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="af168rg">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="po95d_k"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="n4m1aig"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
