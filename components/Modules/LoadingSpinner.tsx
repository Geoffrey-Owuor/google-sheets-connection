// import { Loader2 } from "lucide-react";

// type spinnerProps = {
//   isLoading: boolean;
// };

// export default function LoadingSpinner({ isLoading }: spinnerProps) {
//   if (!isLoading) return null;
//   return (
//     <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 dark:bg-black/50">
//       <Loader2
//         strokeWidth={1}
//         className="h-20 w-20 animate-spin text-gray-900 dark:text-white"
//       />
//     </div>
//   );
// }

type spinnerProps = {
  isLoading: boolean;
};

export default function LoadingSpinner({ isLoading }: spinnerProps) {
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 dark:bg-black/50">
      <div className="relative h-20 w-20">
        <svg
          className="animate-spin"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            className="stroke-gray-200 dark:stroke-gray-700"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            className="stroke-gray-900 dark:stroke-white"
            strokeWidth="8"
            strokeDasharray="283"
            strokeDashoffset="150"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
