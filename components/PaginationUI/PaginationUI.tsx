"use client";
import { ArrowLeft } from "lucide-react";

type PaginationUIProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  indexOfFirstRecord: number;
  indexOfLastRecord: number;
  rowLength: number;
};

const PaginationUI = ({
  currentPage,
  setCurrentPage,
  totalPages,
  indexOfFirstRecord,
  indexOfLastRecord,
  rowLength,
}: PaginationUIProps) => {
  return (
    <div className="mt-4 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 dark:border-slate-800">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-medium">{indexOfFirstRecord + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastRecord, rowLength)}
            </span>{" "}
            of <span className="font-medium">{rowLength}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-xl shadow-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-xl border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800"
            >
              <span className="sr-only">Previous</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // Show first page, last page, current page, and pages around current
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                      currentPage === pageNumber
                        ? "z-10 border-blue-500 bg-blue-50 text-blue-600 dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-400"
                        : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800"
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
                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-400"
                  >
                    ...
                  </span>
                );
              }
              return null;
            })}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-xl border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800"
            >
              <span className="sr-only">Next</span>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationUI;
