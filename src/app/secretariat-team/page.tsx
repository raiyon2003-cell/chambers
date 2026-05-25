import type { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { SecretariatAdministrationSection } from "@/components/sections/SecretariatAdministrationSection";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Secretariat Team – ${SITE.name}`,
  description: `Secretariat Team of ${SITE.shortName}.`,
};

export default function SecretariatTeamPage() {
  return (
    <InnerPageLayout>
      <SecretariatAdministrationSection />
    </InnerPageLayout>
  );
}
