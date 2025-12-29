"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";

export const Hero = () => {
  const router = useRouter();
  const { startLoading } = useLoading();

  const handleRouting = (path: string) => {
    startLoading();
    router.push(path);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto mt-8 max-w-7xl px-4 py-20 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Spreadsheet-Powered CMS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white"
          >
            Turn Your Google Sheets Into a{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dynamic CMS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
          >
            No database setup, no complex admin panels. Just connect your
            spreadsheet and watch your content come alive in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => handleRouting("/sheetdata")}
              className="group relative cursor-pointer overflow-hidden rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
            >
              <span className="relative z-10">Explore Data Playground</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10"
                initial={false}
              />
            </button>
            <a
              href="https://github.com/Geoffrey-Owuor/google-sheets-connection"
              target="_blank"
              rel="noopener noreferrer"
              className="font-roboto-mono rounded-full border border-slate-300 bg-transparent px-8 py-4 font-semibold text-black transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-800"
            >
              View Repository
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
