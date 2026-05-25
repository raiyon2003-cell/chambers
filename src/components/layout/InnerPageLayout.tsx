import { BackToTop } from "@/components/BackToTop";
import { PagePreloader } from "@/components/PagePreloader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function InnerPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PagePreloader />
      <SiteHeader />
      <main id="page-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
