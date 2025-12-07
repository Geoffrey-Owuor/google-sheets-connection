import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SheetsLoadingSkeleton = () => {
  return (
    <main className="mt-20 min-h-screen bg-white px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto">
        {/* Header Section Skeleton */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="h-8 w-80 animate-pulse rounded-lg bg-gray-200 dark:bg-slate-800"></div>
            <div className="mt-2 h-4 w-56 animate-pulse rounded-lg bg-gray-200 dark:bg-slate-800"></div>
          </div>
          <Link
            href="/"
            className="mr-2 flex items-center gap-1.5 rounded-xl bg-slate-200 p-2 transition-colors hover:bg-slate-200/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
          >
            <ArrowLeft className="h-4 w-4" />
            HomePage
          </Link>
        </div>

        {/* Search Input Skeleton */}
        <div className="mb-4 flex justify-center">
          <div className="h-10 w-80 animate-pulse rounded-lg bg-gray-200 dark:bg-slate-800"></div>
        </div>

        {/* Table Skeleton */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header Skeleton */}
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100 dark:border-slate-800 dark:bg-slate-950">
                  {[...Array(6)].map((_, index) => (
                    <th key={index} className="px-6 py-4">
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-300 dark:bg-slate-700"></div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body Skeleton */}
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                {[...Array(10)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {[...Array(6)].map((_, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4">
                        <div
                          className="h-4 animate-pulse rounded bg-gray-200 dark:bg-slate-800"
                          style={{
                            width: `${Math.floor(Math.random() * 40) + 60}%`,
                            animationDelay: `${(rowIndex * 6 + cellIndex) * 50}ms`,
                          }}
                        ></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Skeleton */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 dark:border-slate-800">
          <div className="flex flex-1 justify-between sm:hidden">
            <div className="h-10 w-24 animate-pulse rounded-md bg-gray-200 dark:bg-slate-800"></div>
            <div className="h-10 w-24 animate-pulse rounded-md bg-gray-200 dark:bg-slate-800"></div>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="h-5 w-64 animate-pulse rounded bg-gray-200 dark:bg-slate-800"></div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="h-10 w-10 animate-pulse rounded-md bg-gray-200 dark:bg-slate-800"
                  style={{ animationDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SheetsLoadingSkeleton;
