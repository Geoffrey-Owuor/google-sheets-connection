import { getSheetData } from "@/lib/googleSheets";
import SheetsWrapper from "../SheetsWrapper/SheetsWrapper";

const DisplaySheetData = async () => {
  // Fetch directly in this server component
  const sheetData = await getSheetData();

  // Checking if the data is indeed available
  if (!sheetData || sheetData.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-gray-600 dark:text-gray-400">
            No Data Found or Failed to Fetch
          </p>
        </div>
      </div>
    );
  }

  //   Separate headers (First Row) from the body (Rest of the rows)
  const headers = sheetData[0];
  const rows = sheetData.slice(1);

  //pass retrieved data to a wrapper
  return <SheetsWrapper headers={headers} rowData={rows} />;
};

export default DisplaySheetData;
