import Image from "next/image";
import Link from "next/link";
import {
  ASSETS,
  BRAND_ALT,
  FOOTER_MANAGEMENT_LINKS,
  FOOTER_MEMBERSHIP_LINKS,
  SITE,
} from "@/data/site";

function XIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={props.className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      />
    </svg>
  );
}

function FacebookIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={props.className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
      />
    </svg>
  );
}

function YoutubeIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className={props.className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      />
    </svg>
  );
}

function InstagramIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={props.className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="page-footer"
      className="bg-[var(--color-subfooter-bg)] text-[var(--color-footer-text)]"
    >
      <section className="border-b border-[var(--color-subfooter-border)] py-12 lg:py-16">
        <div className="mx-auto max-w-[var(--site-content-width)] px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            <div>
              <div className="relative mb-6 w-full overflow-hidden rounded-sm bg-[var(--color-footer-bg-alt)]">
                <Image
                  src={ASSETS.logoBanner}
                  alt={BRAND_ALT}
                  width={ASSETS.logoBannerWidth}
                  height={ASSETS.logoBannerHeight}
                  className="h-auto w-full object-contain"
                  sizes="(max-width:768px) 100vw, 280px"
                />
              </div>
              <div
                className="flex flex-wrap gap-3 text-[var(--color-footer-link)]"
                style={{ gap: "0.5em" }}
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-footer-link-hover)]"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-footer-link-hover)]"
                  aria-label="Twitter"
                >
                  <XIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-footer-link-hover)]"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-footer-link-hover)]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[1.5rem] font-semibold leading-snug text-[var(--color-footer-heading)]">
                Membership
              </h3>
              <nav aria-label="Membership links">
                <ul className="flex flex-col gap-4 text-[var(--color-footer-link)]">
                  {FOOTER_MEMBERSHIP_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-[var(--color-footer-link-hover)]"
                      >
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-[1.5rem] font-semibold leading-snug text-[var(--color-footer-heading)]">
                Management
              </h3>
              <nav aria-label="Management links">
                <ul className="flex flex-col gap-4 text-[var(--color-footer-link)]">
                  {FOOTER_MANAGEMENT_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-[var(--color-footer-link-hover)]"
                      >
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-[1.5rem] font-semibold leading-snug text-[var(--color-footer-heading)]">
                Contact
              </h3>
              <div className="space-y-3 leading-relaxed text-[var(--color-footer-text)]">
                <p>Daily from 9 am to 4 pm</p>
                <p>
                  <a
                    href="tel:0092-343-400-0359"
                    className="font-bold text-[var(--color-footer-link)] hover:text-[var(--color-footer-link-hover)]"
                  >
                    +92-343-400-0359
                  </a>
                </p>
                <p>
                  <a
                    href="tel:0092-333-450-2519"
                    className="font-bold text-[var(--color-footer-link)] hover:text-[var(--color-footer-link-hover)]"
                  >
                    +92-333-450-2519
                  </a>
                </p>
                <p>
                  <strong>{SITE.email}</strong>
                </p>
                <p>
                  Villa No. 1, City Center, Near Passport Office, Sufi City,{" "}
                  <strong>Mandi Bahauaddin</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-[var(--color-subfooter-border)] pt-10 text-center text-[var(--color-footer-text)]">
            <p className="leading-relaxed">
              © All rights reserved by MBCST&I. Website Developed by Ikram Fareed.
              For website development services contact{" "}
              <a
                href="tel:+923040639535"
                className="text-[var(--color-footer-link)] hover:text-[var(--color-footer-link-hover)]"
              >
                0304-0639535
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
