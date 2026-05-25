"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PARTNER_LOGOS } from "@/data/site";

export function PartnersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 2000, stopOnInteraction: false })],
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const syncNav = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Embla viewport arrow sync on mount
    syncNav();
    emblaApi.on("reInit", syncNav).on("select", syncNav);
    return () => {
      emblaApi.off("reInit", syncNav).off("select", syncNav);
    };
  }, [emblaApi, syncNav]);

  return (
    <section className="w-full bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-[clamp(1.35rem,3vw,2.5rem)] font-semibold uppercase leading-none tracking-wide text-[var(--color-content-heading)] [padding-top:20px]"
        >
          OUR ESTEEMED PARTNERS
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex items-center [-webkit-touch-callout:none]">
              {PARTNER_LOGOS.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="flex min-w-0 shrink-0 flex-[0_0_100%] justify-center px-4 sm:flex-[0_0_50%] md:flex-[0_0_20%]"
                >
                  <div className="relative h-[88px] w-[88px] opacity-90 transition-opacity duration-300 hover:opacity-100">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="88px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 hidden items-center justify-center gap-3 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-content-border)] bg-[var(--color-content-bg-alt)] text-[var(--color-content-heading)] shadow-sm transition-opacity disabled:opacity-35"
              aria-label="Previous partners"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-content-border)] bg-[var(--color-content-bg-alt)] text-[var(--color-content-heading)] shadow-sm transition-opacity disabled:opacity-35"
              aria-label="Next partners"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
