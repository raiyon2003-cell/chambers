import { EventsGallery } from "@/components/sections/events/EventsGallery";

export function EventsActivitiesSection() {
  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <EventsGallery variant="page" />
      </div>
    </section>
  );
}
