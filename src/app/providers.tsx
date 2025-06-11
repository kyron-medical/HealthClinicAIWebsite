"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "react-hot-toast";
import { TRPCProvider } from "@/../trpc/client"; // <-- Import your TRPCProvider

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider data-oid="i_n5o6p">
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
        data-oid="lvxe7:g"
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
          data-oid="nqr3.6s"
        />

        <TRPCProvider data-oid="p87g7ob">{children}</TRPCProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
