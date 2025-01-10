"use client";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <ToastContainer 
        position="bottom-center" autoClose={5000} hideProgressBar={false} />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
