"use client";
import { View } from "lucide-react";
import ThemeToggle from "../Themes/ThemeToggle";
import LoadingLine from "./LoadingLine";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [loading, setLoading] = useState(false);

  // UseEffect to automatically set loading to false after a certain time since the header is never unmounted
  useEffect(() => {
    if (!loading) return;

    const id = setTimeout(() => setLoading(false), 400);

    return () => clearTimeout(id);
  }, [loading, setLoading]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setLoading(true);
  };
  return (
    <>
      <AnimatePresence>{loading && <LoadingLine />}</AnimatePresence>

      <div className="fixed top-0 right-0 left-0 z-50 bg-white/50 text-black backdrop-blur-sm dark:bg-gray-950/50 dark:text-white">
        <div className="header-gradient m-4 flex items-center justify-between rounded-xl px-4 py-3">
          <span className="text-xl font-semibold sm:text-2xl">
            GoogleSheetApi
          </span>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10">
              <ThemeToggle />
            </div>
            <Link
              href="/sheetdata"
              onClick={handleLinkClick}
              className="flex text-gray-700 sm:hidden dark:text-gray-300"
            >
              <View />
            </Link>
            <Link
              href="/sheetdata"
              onClick={handleLinkClick}
              className="hidden rounded-xl bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 sm:flex dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
            >
              View Data
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
