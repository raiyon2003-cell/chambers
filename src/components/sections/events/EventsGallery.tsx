import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ChamberEvent } from "@/data/site";
import { EVENTS } from "@/data/site";

function eventLayoutClasses(event: ChamberEvent) {
  switch (event.layout) {
    case "wide":
      return {
        item: "sm:col-span-2 lg:col-span-3",
        frame: "max-w-full",
        sizes: "(max-width: 1024px) 100vw, 1140px",
      };
    case "landscape":
      return {
        item: "",
        frame: "max-w-[min(560px,100%)]",
        sizes: "(max-width: 640px) 100vw, 560px",
      };
    default:
      return {
        item: "",
        frame: "max-w-[min(360px,100%)]",
        sizes: "(max-width: 640px) 100vw, 360px",
      };
  }
}

function EventCard({
  event,
  imageFrameClass,
  sizes,
  compact,
}: {
  event: ChamberEvent;
  imageFrameClass?: string;
  sizes: string;
  compact?: boolean;
}) {
  const usesNaturalSize = Boolean(event.width && event.height);

  return (
    <article className="flex h-full w-full flex-col">
      <div
        className={cn(
          "w-full overflow-hidden rounded-sm border border-[var(--color-content-border)] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          compact ? "mb-3" : "mb-5",
          !usesNaturalSize &&
            cn("relative h-full min-h-[200px]", event.aspect ?? "aspect-[3/4]"),
          imageFrameClass,
        )}
      >
        {usesNaturalSize ? (
          <Image
            src={event.image}
            alt={event.description}
            width={event.width!}
            height={event.height!}
            className={cn(
              "w-full object-center",
              event.layout === "hero-main" ||
              event.objectFit === "contain" ||
              event.layout === "wide"
                ? "h-auto max-h-[420px] object-contain sm:max-h-[480px]"
                : "h-full object-cover",
            )}
            sizes={sizes}
          />
        ) : (
          <Image
            src={event.image}
            alt={event.description}
            fill
            sizes={sizes}
            className={cn(
              "object-center",
              event.objectFit === "contain" ? "object-contain" : "object-cover",
            )}
          />
        )}
      </div>
      <p
        className={cn(
          "text-center font-light leading-relaxed text-[var(--color-content-heading)]",
          compact
            ? "px-1 text-[14px] sm:text-[15px]"
            : "px-2 text-[15px] sm:text-base",
        )}
      >
        {event.description}
      </p>
    </article>
  );
}

type EventsGalleryProps = {
  variant?: "page" | "home";
};

export function EventsGallery({ variant = "page" }: EventsGalleryProps) {
  const isHome = variant === "home";
  const heroMain = EVENTS.find((e) => e.layout === "hero-main");
  const heroSide = EVENTS.find((e) => e.layout === "hero-side");
  const gridEvents = EVENTS.filter(
    (e) => e.layout !== "hero-main" && e.layout !== "hero-side",
  );

  const HeadingTag = isHome ? "h2" : "h1";

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-12">
        <HeadingTag
          className={cn(
            "font-bold uppercase tracking-wide text-[var(--color-content-heading)]",
            isHome
              ? "text-[clamp(1.5rem,3.5vw,2.25rem)]"
              : "text-[clamp(1.75rem,4vw,2.75rem)]",
          )}
        >
          Events &amp; Activities
        </HeadingTag>
        <p className="max-w-3xl text-[var(--color-content-text)]">
          Events and activities organized by MBCST&amp;I.
        </p>
        {isHome ? (
          <Link
            href="/events-activities"
            className="text-[15px] font-normal uppercase tracking-wide text-[var(--color-content-primary)] transition-colors hover:text-[var(--color-content-link-hover)]"
          >
            View full events page →
          </Link>
        ) : null}
      </div>

      {heroMain && heroSide ? (
        <div className="mb-10 grid grid-cols-1 items-stretch gap-6 lg:mb-12 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <EventCard
              event={heroMain}
              imageFrameClass="min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]"
              sizes="(max-width: 1024px) 66vw, 760px"
              compact={isHome}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px] lg:max-w-none">
            <EventCard
              event={heroSide}
              imageFrameClass="min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]"
              sizes="(max-width: 1024px) 33vw, 360px"
              compact={isHome}
            />
          </div>
        </div>
      ) : null}

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {gridEvents.map((event, index) => {
          const layout = eventLayoutClasses(event);

          return (
            <li
              key={event.description ?? index}
              className={cn("flex justify-center", layout.item)}
            >
              <div
                className={cn("flex w-full flex-col items-center", layout.frame)}
              >
                <EventCard
                  event={event}
                  sizes={layout.sizes}
                  compact={isHome}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
