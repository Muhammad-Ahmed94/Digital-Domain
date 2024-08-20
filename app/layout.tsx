import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muneeb Ahmed",
  description: "A passionate web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {/* wrapping the entire root layout in next theme provider */}
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
