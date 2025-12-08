import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Themes/Providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { LoadingProvider } from "@/context/LoadingContext";
import LoadingLine from "@/components/Layout/LoadingLine";
import "../css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Sheet Connection",
  description:
    "An application that leverages google sheets as a content management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-white antialiased dark:bg-slate-950`}
      >
        <Providers>
          <LoadingProvider>
            <LoadingLine />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LoadingProvider>
        </Providers>
      </body>
    </html>
  );
}
