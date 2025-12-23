"use client";
import {
  Settings,
  Database,
  FileSpreadsheet,
  Download,
  RefreshCw,
  Club,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "../Themes/ThemeToggle";
import { useLoading } from "@/context/LoadingContext";
import Link from "next/link";
import FloatingHeader from "./FloatingHeader";

const Header = () => {
  const pathname = usePathname();
  const { startLoading } = useLoading();
  const [isScrolled, setIsScrolled] = useState(false);
  const isOnSheetData = pathname === "/sheetdata";

  const handleLinkClick = () => {
    if (!isOnSheetData) {
      startLoading();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { Icon: Database, text: "Database" },
    { Icon: RefreshCw, text: "Refresh" },
    { Icon: Download, text: "Export" },
    { Icon: Settings, text: "Settings" },
  ];

  return (
    <>
      <FloatingHeader navLinks={navLinks} isScrolled={isScrolled} />
      <header
        className={`${isScrolled ? "hidden" : "fixed top-0 right-0 left-0 z-50"}`}
      >
        <div className="containerizing mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600 transition-transform group-hover:scale-105">
                <FileSpreadsheet className="h-5 w-5 text-white" />
              </div>
              <span className="font-roboto-mono hidden text-lg font-semibold tracking-tight text-gray-900 sm:block dark:text-white">
                GoogleSheetApi
              </span>
            </Link>

            {/* Desktop Navigation Icons */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map(({ Icon, text }, index) => (
                <button
                  key={index}
                  onClick={() => {}}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  title={text}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden lg:inline">{text}</span>
                </button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="h-9 w-9">
                <ThemeToggle />
              </div>

              {/* Mobile View Data Icon */}
              <div className="h-9 w-9 md:hidden">
                <Link
                  onClick={handleLinkClick}
                  href={isOnSheetData ? "#" : "/sheetdata"}
                  className="flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <Club className="h-6 w-6" />
                </Link>
              </div>

              {/* Desktop View Data Button */}
              <Link
                onClick={handleLinkClick}
                href={isOnSheetData ? "#" : "/sheetdata"}
                className="hidden items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-all hover:bg-blue-700 hover:shadow-lg md:flex"
              >
                Playground
                <Club className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
