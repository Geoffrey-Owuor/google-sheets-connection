"use client";
import { motion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

// Loading line that displays at the top of the web page when a page is loading
const LoadingLine = () => {
  const { loading } = useLoading();
  return (
    <>
      {loading && (
        <motion.div
          className="fixed top-0 right-0 left-0 z-60 h-[3px] bg-linear-to-r from-blue-500 via-blue-600 to-blue-700"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{
            scaleX: [0, 0.3, 0.6, 0.8, 0.95],
            transition: {
              duration: 2,
              times: [0, 0.3, 0.6, 0.8, 1],
              ease: "easeOut",
            },
          }}
          exit={{
            scaleX: 1,
            transition: { duration: 0.2 },
          }}
        >
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 blur-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default LoadingLine;
