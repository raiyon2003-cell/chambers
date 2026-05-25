import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Leadership – ${SITE.name}`,
  description: `Leadership of ${SITE.shortName}.`,
};

export default function LeadershipPage() {
  return (
    <InnerPageLayout>
      <LeadershipSection />
    </InnerPageLayout>
  );
}
