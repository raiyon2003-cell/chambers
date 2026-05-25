"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function FormerPresidents() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-header-top-text)] pb-16 pt-[min(15vmin,120px)] lg:pb-24">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[15vmin] min-h-[48px] text-[var(--color-header-top-text)]"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 4 64 4"
          preserveAspectRatio="none"
          className="absolute bottom-full left-0 right-0 h-[15vmin] w-full translate-y-[1px] text-[var(--color-content-bg)]"
        >
          <path
            fill="currentColor"
            d="M64 6 C32 0 32 12 0 6 L0 8 L64 8 Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[var(--site-content-width)] px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <h2 className="mb-6 text-left text-[clamp(1.25rem,2.8vw,2.5rem)] font-semibold uppercase leading-none tracking-wide text-[var(--color-header-middle-bg)] [padding-top:20px]">
            DELVE INTO THE ESTEEMED LINEAGE OF OUR FORMER PRESIDENTS
          </h2>
          <p className="mb-8 text-justify text-[clamp(1rem,2vw,2rem)] font-normal leading-snug tracking-wide text-[var(--color-content-heading)]">
            Discover the legacy of leadership and vision through our Former
            Presidents section. Explore the profiles and contributions of past
            leaders who have steered MBCST&amp;I towards excellence and shaped
            the trajectory of regional commerce and industry. Gain insight into
            their achievements, initiatives, and lasting impact on our vibrant
            business community.
          </p>
          <PrimaryButton href="/former-presidents">
            View All Presidents
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
