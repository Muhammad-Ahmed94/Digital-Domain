import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "./globals.css";

// optimize font loading
const nunito = Nunito({ subsets: ["latin"], display: "swap", preload: true, fallback: ['system-ui', 'arial'] });

// my meta
export const metadata: Metadata = {
  title: "Muneeb Ahmed - Software Engineer & Full Stack Developer",
  description: "Passionate software engineer specializing in MERN stack, Next.js, and modern web development. Creating reliable digital solutions with cutting-edge technology.",
  keywords: "Muneeb Ahmed, Software Engineer, Full Stack Developer, MERN Stack, Next.js, React, Node.js, TypeScript, Web Development",
  authors: [{ name: "Muneeb Ahmed" }],
  creator: "Muneeb Ahmed",
  openGraph: {
    title: "Muneeb Ahmed - Software Engineer & Full Stack Developer",
    description: "Passionate software engineer specializing in MERN stack, Next.js, and modern web development.",
    url: "https://devmuneeb.netlify.app",
    siteName: "Muneeb Ahmed Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/my-pic.jpg" as="image" />
        <link rel="preload" href="/footer-grid.svg" as="image" />
        
        {/* Critical CSS will be inlined by Next.js */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${nunito.className} antialiased`}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
