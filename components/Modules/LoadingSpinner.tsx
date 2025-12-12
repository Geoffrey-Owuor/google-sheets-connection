import { Loader2 } from "lucide-react";
import { useEffect } from "react";

type spinnerProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoadingSpinner({
  isLoading,
  setIsLoading,
}: spinnerProps) {
  useEffect(() => {
    if (!isLoading) return;
    const id = setTimeout(() => setIsLoading(false), 800);

    return () => clearTimeout(id);
  }, [isLoading, setIsLoading]);

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
