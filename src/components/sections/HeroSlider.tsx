"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ASSETS, BRAND_ALT } from "@/data/site";

const SLIDES = [ASSETS.logoBanner];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFCE4B]">
      <div
        className="relative mx-auto w-full max-w-[1400px]"
        style={{
          aspectRatio: `${ASSETS.logoBannerWidth} / ${ASSETS.logoBannerHeight}`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={SLIDES[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Image
              src={SLIDES[index]}
              alt={BRAND_ALT}
              fill
              priority
              quality={95}
              className="object-contain object-center"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
