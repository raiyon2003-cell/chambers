"use client";

import { motion } from "framer-motion";

export function MousSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[var(--color-subfooter-border)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[var(--site-content-width)] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-[clamp(1.35rem,3vw,3rem)] font-semibold leading-none tracking-wide text-[var(--color-header-middle-text)] [padding-top:20px]"
        >
          MOU&apos;S BY MANDI BAHAUDDIN CHAMBER OF SMALL TRADERS &amp; SMALL INDUSTRY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mx-auto mb-10 max-w-[980px] text-justify text-[clamp(1rem,2vw,2rem)] font-normal leading-snug tracking-wide text-[var(--color-header-transparent-text-hover)]"
        >
          The Mandi Bahauddin Chamber of Small Traders &amp; Small Industry (MBCST&amp;I)
          regularly enters into Memorandums of Understanding (MOUs) with various
          stakeholders to foster economic growth, promote trade, and facilitate
          business collaborations in the region. These MOUs serve as formal
          agreements outlining mutual commitments and goals between MBCST&amp;I
          and its partners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative aspect-video w-full overflow-hidden rounded-md shadow-[0_5px_15px_rgba(0,0,0,.2)]"
        >
          <iframe
            title="Youtube video player"
            src="https://www.youtube.com/embed/-2TVcc-aGoI?autoplay=0&controls=1&mute=0"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
