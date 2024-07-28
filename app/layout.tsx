/**
 * Root layout component.
 * This component wraps the entire app and provides the global layout.
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WatchTower App',
};

import './globals.css';

import { ThemeProvider } from '@/lib/theme-provider';

// Import layout components
import Header from './_components/layout/header';
import Sidebar from './_components/layout/sidebar';

import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HTML document structure
    <html lang="en">
      <body className={inter.className}>
        {/* Theme provider component */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Grid layout */}
          <div className="relative grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
            {/* Gradient overlay for sidebar */}
            <div className="dark:hidden absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            {/* Sidebar */}
            <Sidebar />
            {/* Content */}
            <div className="flex flex-col">
              {/* Header */}
              <Header />
              {/* Main content */}
              {children}
              {/* Sonner toaster */}
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
