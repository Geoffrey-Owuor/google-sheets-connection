import { Loader2 } from "lucide-react";
const SavingSpinner = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 text-gray-900 dark:bg-black/50 dark:text-white">
      <div className="flex items-center gap-2">
        <Loader2 className="h-12 w-12 animate-spin" strokeWidth={1} />
        <span className="text-lg">Saving...</span>
      </div>
    </div>
  );
};

export default SavingSpinner;
