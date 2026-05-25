import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { LicenseSection } from "@/components/sections/LicenseSection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `License – ${SITE.name}`,
  description: `Official trade organisation licence for ${SITE.shortName}.`,
};

export default function LicensePage() {
  return (
    <InnerPageLayout>
      <LicenseSection />
    </InnerPageLayout>
  );
}
