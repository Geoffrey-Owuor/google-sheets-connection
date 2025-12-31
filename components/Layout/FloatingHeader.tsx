import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, X } from "lucide-react";

type navLink = {
  Icon: LucideIcon;
  text: string;
};
type floatingHeaderProps = {
  showFloatingHeader: boolean;
  isScrolled: boolean;
  closeFloatingHeader: () => void;
  navLinks: navLink[];
};

const FloatingHeader = ({
  showFloatingHeader,
  isScrolled,
  closeFloatingHeader,
  navLinks,
}: floatingHeaderProps) => {
  return (
    <AnimatePresence>
      {isScrolled && showFloatingHeader && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="custom-blur fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-slate-950/80 shadow-lg sm:top-3 dark:bg-white/80"
        >
          <div className="mx-auto px-4">
            <div className="flex h-16 items-center justify-center gap-4">
              {/* Navigation Links */}
              <nav className="flex items-center gap-1">
                {navLinks.map(({ Icon, text }, index) => (
                  <button
                    key={index}
                    onClick={() => {}}
                    className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-white transition-colors hover:bg-slate-200 hover:text-slate-900 dark:text-black dark:hover:bg-slate-900 dark:hover:text-white"
                    title={text}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{text}</span>
                  </button>
                ))}
              </nav>
              <div className="flex items-center pr-2">
                <button
                  onClick={closeFloatingHeader}
                  className="rounded-full p-1 text-white hover:bg-gray-500/50 dark:text-black dark:hover:bg-gray-400/50"
                >
                  <X className="h-4 w-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingHeader;
