"use client";

import { motion } from "framer-motion";

export function GrowthBanner() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[#FFCE4B]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[var(--site-content-width)] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: [0.78, 0.13, 0.15, 0.86] as const,
          }}
        >
          <p className="text-[clamp(1.25rem,3vw,2rem)] font-semibold leading-tight text-[var(--color-chrome-toolbar)]">
            Empowering Businesses, Fueling Growth
          </p>
          <p className="mt-8 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight text-[var(--color-content-heading)]">
            Your Partner in Progress with MBCST&amp;I
          </p>
        </motion.div>
      </div>
    </section>
  );
}
