"use client";
import { ChevronLeft } from "lucide-react";

type PaginationUIProps = {
  recordsPerPage: number;
  setRecordsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  indexOfFirstRecord: number;
  indexOfLastRecord: number;
  rowLength: number;
};

const PaginationUI = ({
  recordsPerPage,
  setRecordsPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
  indexOfFirstRecord,
  indexOfLastRecord,
  rowLength,
}: PaginationUIProps) => {
  return (
    <>
      {/* Only show when total number of pages exceeds one page */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between py-3">
          <div className="flex flex-1 justify-between md:hidden">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-lg border border-gray-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-lg border border-gray-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="hidden border-r border-gray-400 pr-3 lg:flex dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Showing{" "}
                  <span className="font-semibold">
                    {indexOfFirstRecord + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold">
                    {Math.min(indexOfLastRecord, rowLength)}
                  </span>{" "}
                  of <span className="font-semibold">{rowLength}</span> results
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <label htmlFor="recordsPerPage">Records:</label>
                <select
                  name="recordsPerPage"
                  id="RecordsPerPage"
                  value={recordsPerPage}
                  onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                  className="rounded-md border border-gray-300 bg-white px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-slate-950"
                >
                  {[5, 10, 20, 30, 50, 100].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <nav className="flex items-center justify-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-50 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="mx-2 flex items-center gap-1">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;

                  // Show first page, last page, current page, and pages around current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 &&
                      pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg text-sm font-semibold ${
                          currentPage === pageNumber
                            ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return (
                      <span
                        key={pageNumber}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-50 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4 rotate-180" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default PaginationUI;
