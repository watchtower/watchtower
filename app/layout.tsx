import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/global/theme-provider";

import Header from "./_components/layout/header";
import Sidebar from "./_components/layout/sidebar";

import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WatchTower App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-15 blur-[80px] z-[-2]"></div>
            <div className="dark:hidden absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <Sidebar />
            <div className="flex flex-col">
              <Header />
              {children}
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
