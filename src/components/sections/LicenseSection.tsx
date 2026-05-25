import Image from "next/image";

const LICENSE_IMAGE = "/images/mbcsti-license.png";
const LICENSE_WIDTH = 723;
const LICENSE_HEIGHT = 1024;

export function LicenseSection() {
  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <h1 className="mb-4 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
          License
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-[var(--color-content-text)]">
          Official trade organisation licence issued by the Government of Pakistan,
          Ministry of Commerce, for the Mandi Bahauddin Chamber of Small Traders
          &amp; Small Industry.
        </p>

        <div className="mx-auto max-w-[min(900px,100%)] overflow-hidden rounded-sm border border-[var(--color-content-border)] bg-[var(--color-content-bg-alt)] p-4 shadow-[0_4px_24px_rgba(0,0,0,0.1)] sm:p-6">
          <Image
            src={LICENSE_IMAGE}
            alt="MBCST&I trade organisation licence — Government of Pakistan, Ministry of Commerce, Licence No. 352"
            width={LICENSE_WIDTH}
            height={LICENSE_HEIGHT}
            className="h-auto w-full"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
