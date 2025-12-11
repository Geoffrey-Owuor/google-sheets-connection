"use client";
import Link from "next/link";
import { useLoading } from "@/context/LoadingContext";

const HomePage = () => {
  const { startLoading } = useLoading();
  return (
    <div className="mt-20 flex items-center justify-center px-4 pt-10 text-black dark:text-white">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Retrieve & Manage Google Sheet Data
        </h2>
        <div className="mx-auto w-full max-w-3xl rounded-xl bg-slate-200 p-6 dark:bg-slate-800/50">
          <p className="text-left">
            This application uses Google Sheets as its secret weapon - a
            lightweight, surprisingly powerful mini-CMS. Instead of spinning up
            a full database or wrestling with a heavy-duty CMS, it simply taps
            into the Google Sheets API and pulls content straight from a
            spreadsheet in real time. That means your content editors don&apos;t
            need to learn any new tools - if they can edit a spreadsheet, they
            can shape the entire app. Update a cell, tweak a value, hit save...
            and the application instantly reflects those changes. No code edits,
            no deployments, no stress. It&apos;s a simple, flexible, and
            delightfully efficient setup - turning an everyday spreadsheet into
            a dynamic content engine.
          </p>
          <h4 className="mt-4 mb-2 text-xl font-semibold sm:text-lg">
            Features included
          </h4>
          <ul className="list-disc space-y-2 pl-5 italic marker:text-blue-500 dark:marker:text-blue-300">
            <li>Retreiving google sheet data</li>
            <li>Inserting new data into sheets</li>
            <li>Updating existing sheet data</li>
          </ul>
        </div>

        <Link
          onClick={startLoading}
          href="/sheetdata"
          className="rounded-xl bg-gray-900 px-4 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
        >
          Data Playground
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
