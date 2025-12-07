"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

type SheetsWrapperProps = {
  headers: string[]; //Array of header strings
  rowData: string[][]; //Array of rows - Each row has an array of strings
};

const SheetsWrapper = ({ headers, rowData }: SheetsWrapperProps) => {
  const rows = rowData;
  //   State for setting the query to search
  const [searchQuery, setSearchQuery] = useState("");

  //   Logic for filtering the rows based on the search query
  const filteredRows = rows.filter((row) =>
    row.some((cell) =>
      cell.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
    ),
  );

  // Display the retrieved data
  return (
    <main className="mt-20 min-h-screen bg-white px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Google Sheet Data Integration
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Displaying {filteredRows.length}{" "}
              {filteredRows.length === 1 ? "record" : "records"} from your
              spreadsheet
            </p>
          </div>
          <Link
            href="/"
            className="mr-2 flex items-center gap-1.5 rounded-xl bg-slate-100 p-2 transition-colors hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-800/50"
          >
            <ArrowLeft className="h-4 w-4" />
            HomePage
          </Link>
        </div>

        {/* The search input field */}
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search across all columns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-800/50">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase dark:text-gray-300"
                    >
                      <div className="truncate" title={header}>
                        {header}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                {filteredRows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100"
                      >
                        <div className="truncate" title={cell}>
                          {cell}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredRows.length > 10 && (
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Showing all {filteredRows.length} records
          </div>
        )}
      </div>
    </main>
  );
};

export default SheetsWrapper;
