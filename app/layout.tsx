import type { Metadata } from "next";
import { Roboto, Roboto_Mono, DM_Sans } from "next/font/google";
import Providers from "@/components/Themes/Providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { LoadingProvider } from "@/context/LoadingContext";
import LoadingLine from "@/components/Layout/LoadingLine";
import "../css/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        className={`${roboto.variable} ${robotoMono.variable} ${dmsans.variable} font-dmsans flex min-h-screen flex-col bg-white antialiased dark:bg-slate-950`}
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
