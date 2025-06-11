"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "react-hot-toast";
import { TRPCProvider } from "@/../trpc/client"; // <-- Import your TRPCProvider

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="8:ah_1o">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="70shdlj"
      >
        <Toaster
          toastOptions={{
            duration: 3000,
            position: "bottom-center",
            className: "z-[9999]",
          }}
          containerStyle={{
            top: 70,
          }}
          data-oid="7i2j6tn"
        />

        <TRPCProvider data-oid="xssnfi0">{children}</TRPCProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
