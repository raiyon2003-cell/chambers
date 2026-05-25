"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SERVICE_FLIPS } from "@/data/site";

export function ServiceFlipGrid() {
  const cols: (typeof SERVICE_FLIPS)[] = [
    SERVICE_FLIPS.slice(0, 2),
    SERVICE_FLIPS.slice(2, 4),
    SERVICE_FLIPS.slice(4, 6),
  ];

  return (
    <section className="relative bg-[#FFCE4B] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {cols.map((column, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: ci * 0.06,
                duration: 0.5,
                ease: [0.78, 0.13, 0.15, 0.86] as const,
              }}
              className="flex flex-col gap-10"
            >
              {column.map((svc) => (
                <article key={svc.href} className="group perspective-[1200px]">
                  <div className="relative min-h-[260px]">
                    <div className="flip-inner relative h-full min-h-[260px] w-full">
                      <div className="flip-face absolute inset-0 flex flex-col items-center justify-center rounded-md bg-white p-8 shadow-[0_5px_15px_rgba(0,0,0,.12)]">
                        <div className="relative h-[140px] w-[140px]">
                          <Image
                            src={svc.image}
                            alt={svc.title}
                            fill
                            className="object-contain"
                            sizes="140px"
                          />
                        </div>
                      </div>
                      <div
                        className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-md bg-[var(--color-header-middle-bg)] p-8 text-center text-[var(--color-header-middle-text)] shadow-[0_5px_15px_rgba(0,0,0,.12)]"
                      >
                        <p className="text-[17px] font-light leading-relaxed">
                          {svc.description}
                        </p>
                        <PrimaryButton href={svc.href}>Read More</PrimaryButton>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
