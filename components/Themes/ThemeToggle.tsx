"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle Theme"
      className="rounded-full p-2 text-gray-700 transition hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-800"
    >
      {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  );
};

export default ThemeToggle;
