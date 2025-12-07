"use client";
import Link from "next/link";
import LoadingLine from "./LoadingLine";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <AnimatePresence>{loading && <LoadingLine />}</AnimatePresence>

      <div className="mt-20 flex items-center justify-center px-4 pt-10 text-black dark:text-white">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Retrieve Google Sheet Data
          </h2>
          <div className="mx-auto w-full max-w-3xl rounded-xl bg-slate-200 p-6 dark:bg-slate-800/50">
            <p className="text-center">
              This application utilizes Google Sheets as a lightweight yet
              highly flexible content management system (CMS). Instead of
              relying on a traditional database or a full-scale CMS platform, it
              connects directly to Google Sheets through the Google Sheets API
              to retrieve and manage content in real time. This approach allows
              content editors to easily update information within a familiar
              spreadsheet environment, while the application dynamically fetches
              and displays that content within the user interface. As a result,
              content changes can be made quickly without requiring code
              modifications or redeployments, making the system both efficient
              and user-friendly.
            </p>
          </div>

          <Link
            href="/sheetdata"
            onClick={() => setLoading(true)}
            className="rounded-xl bg-gray-900 px-4 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
          >
            View Data
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
