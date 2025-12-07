"use client";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider enableSystem defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
