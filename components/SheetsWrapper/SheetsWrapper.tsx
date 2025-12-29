"use client";
import { useEffect, useState, useMemo } from "react";
import { useTransition } from "react";
import { AnimatePresence } from "framer-motion";
import { updateSheetsData } from "@/ServerActions/updateSheetsData";
import { useLoading } from "@/context/LoadingContext";
import Link from "next/link";
import ThemeToggle from "../Themes/ThemeToggle";
import PaginationUI from "../PaginationUI/PaginationUI";
import LoadingSpinner from "../Modules/LoadingSpinner";
import { ArrowLeft, Plus, RefreshCcw, Search, X } from "lucide-react";
import SheetFormModal from "./SheetFormModal/SheetFormModal";

type SheetsWrapperProps = {
  headers: string[]; //Array of header strings
  rowData: string[][]; //Array of rows - Each row has an array of strings
};

const SheetsWrapper = ({ headers, rowData }: SheetsWrapperProps) => {
  const { stopLoading } = useLoading();

  //Stopping loading line on mount of this component
  useEffect(() => {
    stopLoading();
  }, [stopLoading]);

  const rows = rowData;
  //   State for setting the query to search
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, startTransition] = useTransition();

  //   Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  // Modeal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string[]>(Array(20).fill(""));
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>(rows.length);

  // Logic for filtering the rows based on the search query
  const filteredRows = useMemo(() => {
    if (!searchQuery) return rows;
    const lowerQuery = searchQuery.toLowerCase();

    return rows.filter((row) =>
      row.some((cell) => cell.toLowerCase().includes(lowerQuery)),
    );
  }, [searchQuery, rows]);

  // handle search query
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Refreshing data by invalidating stored cache
  const handleSheetRefresh = () =>
    startTransition(async () => await updateSheetsData());

  // Handle Update Click
  const handleRowClick = (row: string[], originalIndex: number) => {
    setSelectedRow(row);
    setSelectedRowIndex(originalIndex);
    setIsModalOpen(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(Array(20).fill(""));
    setSelectedRowIndex(rows.length + 1);
  };

  //   Get total pages to show and other pagination logic
  const totalPages = Math.ceil(filteredRows.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRows.slice(
    indexOfFirstRecord,
    Math.min(indexOfLastRecord, filteredRows.length),
  );

  // Display the retrieved data
  return (
    <>
      <LoadingSpinner isLoading={isRefreshing} />

      {/* Row Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedRow && (
          <SheetFormModal
            isOpen={isModalOpen}
            updateData={selectedRowIndex < rows.length}
            onClose={handleCloseModal}
            headers={headers}
            rowData={selectedRow}
            rowIndex={selectedRowIndex}
          />
        )}
      </AnimatePresence>
      <main className="fixed inset-0 m-2 h-[calc(100vh-5rem)] overflow-auto rounded-xl border border-gray-100 px-4 py-4 shadow-sm sm:h-[calc(100vh-1rem)] dark:border-gray-800">
        <div className="mx-auto max-w-7xl">
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

            <div className="hidden items-center gap-2 px-2 md:flex">
              <ThemeToggle />
              <button
                onClick={handleSheetRefresh}
                className="flex cursor-pointer items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2 text-white transition-colors hover:bg-slate-800 dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300"
              >
                <RefreshCcw className="h-4 w-4" />
                Refresh
              </button>
              <button
                onClick={() => handleRowClick(selectedRow, rows.length + 1)}
                className="flex cursor-pointer items-center gap-1 rounded-full bg-slate-950 px-4 py-2 text-white transition-colors hover:bg-slate-800 dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300"
              >
                <Plus className="h-4 w-4" />
                Add
              </button>
              <Link
                href="/"
                className="flex cursor-pointer items-center gap-1 rounded-full bg-slate-950 px-4 py-2 text-white transition-colors hover:bg-slate-800 dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300"
              >
                <ArrowLeft className="h-4 w-4" />
                HomePage
              </Link>
            </div>
          </div>

          {/* The search input field */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search across all columns..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-80 rounded-full border border-gray-300 bg-white py-3 pr-4 pl-11 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
              />
              <div
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white pb-3 dark:border-slate-800 dark:bg-slate-900/50">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100 dark:border-slate-800 dark:bg-slate-950">
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
                {currentRecords.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    onClick={() => handleRowClick(row, Number(row[0]))}
                    className="cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800/30"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="max-w-[200px] truncate px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100"
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

          {/* Pagination UI */}
          <PaginationUI
            recordsPerPage={recordsPerPage}
            setRecordsPerPage={setRecordsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            indexOfFirstRecord={indexOfFirstRecord}
            indexOfLastRecord={indexOfLastRecord}
            rowLength={filteredRows.length}
          />
        </div>
      </main>
    </>
  );
};

export default SheetsWrapper;
