import DisplaySheetData from "@/components/DisplaySheetData/DisplaySheetData";
import { Suspense } from "react";
import SheetsLoadingSkeleton from "@/components/Skeletons/SheetsLoadingSkeleton";

const page = () => {
  return (
    <Suspense fallback={<SheetsLoadingSkeleton />}>
      <DisplaySheetData />
    </Suspense>
  );
};

export default page;
