"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSETS, BRAND_ALT } from "@/data/site";

export function PagePreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      const done = () => setVisible(false);
      if (document.readyState === "complete") {
        window.setTimeout(done, 450);
      } else {
        window.addEventListener(
          "load",
          () => window.setTimeout(done, 450),
          { once: true },
        );
      }
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[var(--color-content-bg-alt)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.78, 0.13, 0.15, 0.86] as const,
          }}
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={ASSETS.logoBanner}
              alt={BRAND_ALT}
              width={ASSETS.logoBannerWidth}
              height={ASSETS.logoBannerHeight}
              className="h-auto w-[min(320px,85vw)] object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
