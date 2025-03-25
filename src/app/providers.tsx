"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="t8nle_v">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="i:lo6hh"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="bufbqtt"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
