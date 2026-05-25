import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ href, children, className }: BtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-w-[8rem] items-center justify-center rounded-[0.3em] bg-[var(--color-content-primary)] px-8 py-4 text-base font-bold leading-tight text-white shadow-none transition-colors duration-300",
        "hover:bg-[var(--color-content-secondary)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
