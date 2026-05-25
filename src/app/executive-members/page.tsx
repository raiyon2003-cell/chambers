import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { ExecutiveMembersSection } from "@/components/sections/ExecutiveMembersSection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Executive Members – ${SITE.name}`,
  description: `Executive Members of ${SITE.shortName}.`,
};

export default function ExecutiveMembersPage() {
  return (
    <InnerPageLayout>
      <ExecutiveMembersSection />
    </InnerPageLayout>
  );
}
