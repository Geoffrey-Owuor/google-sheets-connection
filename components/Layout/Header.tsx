"use client";
import {
  Settings,
  Database,
  FileSpreadsheet,
  Download,
  RefreshCw,
  Club,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "../Themes/ThemeToggle";
import { useLoading } from "@/context/LoadingContext";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const { startLoading } = useLoading();
  const [scrolledUp, setScrolledUp] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const isOnSheetData = pathname === "/sheetdata";

  const handleLinkClick = () => {
    if (!isOnSheetData) {
      startLoading();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setScrolledUp(currentScrollY < lastScrollY.current);

      lastScrollY.current = currentScrollY;
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

  // boolean logical conjunction
  const hasBlur = scrolledUp && isScrolled;
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${scrolledUp ? "translate-y-0" : "-translate-y-full"} ${hasBlur ? "custom-blur bg-white/50 shadow-sm dark:bg-slate-950/50" : ""}`}
    >
      <div className="custom:px-12 mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group relative flex items-center gap-2">
            <div className="flex h-8 w-8 rotate-45 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600 transition-transform group-hover:scale-105"></div>
            <FileSpreadsheet className="absolute left-[7.6px] h-4.5 w-4.5 text-white" />
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
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
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
                className="flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Club className="h-6 w-6" />
              </Link>
            </div>

            {/* Desktop View Data Button */}
            <Link
              onClick={handleLinkClick}
              href={isOnSheetData ? "#" : "/sheetdata"}
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition-all hover:bg-blue-700 hover:shadow-lg md:flex"
            >
              Playground
              <Club className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
