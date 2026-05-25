import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { SITE_PAGES } from "@/data/pages";
import { SITE } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(SITE_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SITE_PAGES[slug];
  if (!page) return { title: SITE.name };

  return {
    title: `${page.title} – ${SITE.name}`,
    description: page.intro,
  };
}

export default async function SitePage({ params }: PageProps) {
  const { slug } = await params;
  const page = SITE_PAGES[slug];
  if (!page) notFound();

  return (
    <InnerPageLayout>
      <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
        <div className="mx-auto max-w-[var(--site-content-width)] px-6">
          <h1 className="mb-6 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
            {page.title}
          </h1>
          <p className="mx-auto max-w-3xl text-center text-[var(--color-content-text)]">
            {page.intro}
          </p>
        </div>
      </section>
    </InnerPageLayout>
  );
}
