import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { EventsActivitiesSection } from "@/components/sections/EventsActivitiesSection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Events & Activities – ${SITE.name}`,
  description: `Events and activities organized by ${SITE.shortName}.`,
};

export default function EventsActivitiesPage() {
  return (
    <InnerPageLayout>
      <EventsActivitiesSection />
    </InnerPageLayout>
  );
}
