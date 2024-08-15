// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"; //* Next-Themes provider

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {" "}
        {/* default theme is dark */}
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
