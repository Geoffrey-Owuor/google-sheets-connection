import { Loader2 } from "lucide-react";

type spinnerProps = {
  isLoading: boolean;
};

export default function LoadingSpinner({ isLoading }: spinnerProps) {
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 dark:bg-black/50">
      <Loader2
        strokeWidth={1}
        className="h-20 w-20 animate-spin text-gray-900 dark:text-white"
      />
    </div>
  );
}
