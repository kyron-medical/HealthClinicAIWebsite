"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "react-hot-toast";
import { TRPCProvider } from "@/../trpc/client"; // <-- Import your TRPCProvider

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
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
        />

        <TRPCProvider>{children}</TRPCProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
