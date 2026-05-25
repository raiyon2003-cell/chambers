"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";

function StatCell({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setN(Math.round(latest));
      },
    });
    return () => ctrl.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 text-[clamp(2rem,4vw,3rem)] font-light tabular-nums text-[var(--color-content-primary)]">
        {n}
        {suffix ? (
          <span className="align-top text-[0.65em] font-semibold">{suffix}</span>
        ) : null}
      </div>
      <h3 className="text-[15px] font-normal uppercase tracking-wide text-[var(--color-content-heading)]">
        {label}
      </h3>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <h2 className="mb-12 text-center text-[clamp(1.35rem,3vw,3rem)] font-semibold uppercase leading-none tracking-wide text-[var(--color-header-middle-bg)] [padding-top:20px]">
          MANDI BAHAUDDIN CHAMBER OF SMALL TRADERS &amp; SMALL INDUSTRY AT A GLANCE
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {STATS.map((s) => (
            <StatCell key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
