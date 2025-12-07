import DisplaySheetData from "@/components/DisplaySheetData/DisplaySheetData";

// Revalidate every 10 minutes
export const revalidate = 600;
const page = () => {
  return <DisplaySheetData />;
};

export default page;
