"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { LeadershipCard } from "@/components/sections/LeadershipCard";
import { LEADERSHIP } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.78, 0.13, 0.15, 0.86] as const,
    },
  },
};

export function WelcomeLeadership() {
  return (
    <section className="bg-[var(--color-content-bg)] pb-14 pt-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-3 flex gap-2 text-[var(--color-content-primary)]"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-current"
                aria-hidden
                strokeWidth={0}
              />
            ))}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mb-12 max-w-[1100px] text-center text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-snug tracking-[0.04em] text-[var(--color-content-heading)]"
          >
            Welcome to Mandi Bahauddin Chamber of Small Traders & Small Industry (MBCST&I)
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="grid w-full gap-12 md:grid-cols-3 md:gap-16"
          >
            {LEADERSHIP.map((person, index) => (
              <motion.div
                key={person.name ?? person.description ?? index}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <LeadershipCard person={person} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
