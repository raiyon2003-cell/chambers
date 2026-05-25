"use client";

import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 right-6 z-[300] flex h-12 w-12 items-center justify-center rounded-md bg-black/30 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[var(--color-content-primary)] min-[901px]:bottom-10 min-[901px]:right-10"
          aria-label="Back to top"
          onClick={scrollTop}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
