import Image from "next/image";
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
}: {
  event: ChamberEvent;
  imageFrameClass?: string;
  sizes: string;
}) {
  const usesNaturalSize = Boolean(event.width && event.height);

  return (
    <article className="flex h-full w-full flex-col">
      <div
        className={cn(
          "mb-5 w-full overflow-hidden rounded-sm border border-[var(--color-content-border)] bg-[var(--color-content-bg-alt)] shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          !usesNaturalSize && cn("relative h-full min-h-[220px]", event.aspect ?? "aspect-[3/4]"),
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
              event.layout === "hero-main"
                ? "h-auto object-contain"
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
      <p className="px-2 text-center text-[15px] font-light leading-relaxed text-[var(--color-content-heading)] sm:text-base">
        {event.description}
      </p>
    </article>
  );
}

export function EventsActivitiesSection() {
  const heroMain = EVENTS.find((e) => e.layout === "hero-main");
  const heroSide = EVENTS.find((e) => e.layout === "hero-side");
  const gridEvents = EVENTS.filter(
    (e) => e.layout !== "hero-main" && e.layout !== "hero-side",
  );

  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <h1 className="mb-4 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
          Events &amp; Activities
        </h1>
        <p className="mx-auto mb-12 max-w-4xl text-center text-[var(--color-content-text)]">
          Events and activities organized by MBCST&amp;I.
        </p>

        {heroMain && heroSide ? (
          <div className="mb-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="lg:col-span-2">
              <EventCard
                event={heroMain}
                imageFrameClass="min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]"
                sizes="(max-width: 1024px) 66vw, 760px"
              />
            </div>
            <div className="mx-auto w-full max-w-[360px] lg:max-w-none">
              <EventCard
                event={heroSide}
                imageFrameClass="min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]"
                sizes="(max-width: 1024px) 33vw, 360px"
              />
            </div>
          </div>
        ) : null}

        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {gridEvents.map((event, index) => {
            const layout = eventLayoutClasses(event);

            return (
              <li
                key={event.description ?? index}
                className={cn("flex justify-center", layout.item)}
              >
                <div className={cn("flex w-full flex-col items-center", layout.frame)}>
                  <EventCard event={event} sizes={layout.sizes} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
