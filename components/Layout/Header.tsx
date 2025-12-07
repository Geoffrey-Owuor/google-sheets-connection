"use client";
import { View } from "lucide-react";
import ThemeToggle from "../Themes/ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="custom-blur fixed top-0 right-0 left-0 z-50 bg-white/50 text-black dark:bg-slate-950/50 dark:text-white">
      <div className="header-gradient m-4 flex items-center justify-between rounded-xl px-4 py-3 shadow-sm">
        <span className="text-xl font-semibold sm:text-2xl">
          GoogleSheetApi
        </span>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10">
            <ThemeToggle />
          </div>
          <Link
            href="/sheetdata"
            className="flex text-gray-700 sm:hidden dark:text-gray-300"
          >
            <View />
          </Link>
          <Link
            href="/sheetdata"
            className="hidden rounded-xl bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-gray-800 sm:flex dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
          >
            View Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
