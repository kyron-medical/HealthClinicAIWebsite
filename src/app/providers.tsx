"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="scnj8s0">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="brtxga8"
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          data-oid="s2-w8aq"
        />

        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
