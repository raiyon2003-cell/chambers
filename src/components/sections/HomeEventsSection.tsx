import { EventsGallery } from "@/components/sections/events/EventsGallery";

export function HomeEventsSection() {
  return (
    <section className="border-y border-[var(--color-content-border)] bg-[var(--color-content-bg-alt)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <EventsGallery variant="home" />
      </div>
    </section>
  );
}
