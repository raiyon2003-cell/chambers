export type NavItem = {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
};

export const SITE = {
  name: "Mandi Bahauddin Chamber of Small Traders & Small Industry",
  shortName: "MBCST&I",
  phones: ["+92-343-400-0359", "+92-333-450-2519"],
  email: "cstim.info@gmail.com",
};

/** Official branding alt text for all logo/banner images */
export const BRAND_ALT = "Chamber of Small Traders & Small Industry";

export const ASSETS = {
  logoBanner: "/images/logo-banner.png",
  logoBannerWidth: 1024,
  logoBannerHeight: 455,
  logoIcon192: "/images/logo-icon-192.png",
  logoIcon512: "/images/logo-icon-512.png",
  logoAppleTouch: "/images/logo-apple-touch.png",
};

export const NAV_MAIN: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About",
    children: [
      { title: "Chamber Profile", href: "/chamber-profile" },
      { title: "President Message", href: "/president-message" },
      { title: "License", href: "/license" },
    ],
  },
  {
    title: "Team",
    children: [
      { title: "Office Bearers", href: "/office-bearers" },
      { title: "Secretariat Team", href: "/secretariat-team" },
      { title: "Executive Members", href: "/executive-members" },
      { title: "Leadership", href: "/leadership" },
      {
        title: "MBCST&I Former Presidents",
        href: "/former-presidents",
      },
    ],
  },
  {
    title: "Events",
    children: [
      { title: "Events & Activities", href: "/events-activities" },
      { title: "Press Releases", href: "/press-releases" },
    ],
  },
  {
    title: "Membership",
    children: [
      { title: "New Membership", href: "/new-membership" },
      { title: "Membership Classes", href: "/membership-classes" },
      { title: "Membership Renewal", href: "/membership-renewal" },
      {
        title: "Membership Fee Structure",
        href: "/membership-fee-structure",
      },
    ],
  },
  {
    title: "Services",
    children: [
      { title: "MOUs", href: "/mous" },
      {
        title: "Visa Application Form",
        href: "/visa-application-form",
      },
      {
        title: "Punjab Land Record Authority",
        href: "/punjab-land-record-authority",
      },
      { title: "Punjab Job Center", href: "/punjab-job-center" },
      {
        title: "Police Khidmet Markaz",
        href: "/police-khidmet-markaz",
      },
      { title: "NADRA", href: "/nadra" },
      { title: "E Sahulat", href: "/e-sahulat" },
    ],
  },
  {
    title: "Traders",
    children: [
      { title: "Importers", href: "/importers" },
      { title: "Exporters", href: "/exporters" },
    ],
  },
  {
    title: "Downloads",
    children: [
      {
        title: "Visa Recommendation Letter",
        href: "/visa-application-form",
      },
    ],
  },
  { title: "Contact", href: "/contact-us" },
];

export type LeadershipMember = {
  image: string;
  name?: string;
  role?: string;
  description?: string;
};

export type ExecutiveMember = {
  name: string;
  role?: string;
  company?: string;
};

/** Empty until executive members are added */
export const EXECUTIVE_MEMBERS: ExecutiveMember[] = [];

export type SecretariatMember = {
  name: string;
  role?: string;
  image?: string;
};

/** Empty until secretariat staff are added */
export const SECRETARIAT_MEMBERS: SecretariatMember[] = [];

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Chaudhary Abdul Waheed",
    role: "PRESIDENT, MBCST&I",
    image: "/images/president-chaudhary-abdul-waheed.png",
  },
  {
    name: "Muhammad Ali Khan",
    role: "Senior Vice President, MBCST&I",
    image: "/images/senior-vice-president.png",
  },
  {
    image: "/images/meeting-j-kim-islamabad.png",
    description:
      "Meeting with Mr. J Kim Economic Officer United States of America in Islamabad",
  },
];

export type ChamberEvent = {
  image: string;
  description: string;
  aspect?: string;
  layout?: "portrait" | "landscape" | "wide" | "hero-main" | "hero-side";
  objectFit?: "cover" | "contain";
  width?: number;
  height?: number;
};

export const EVENTS: ChamberEvent[] = [
  {
    image: "/images/chamber-outdoor-meeting.png",
    description:
      "President Mandi Bahauddin Chamber of Small Traders & Small Industry with Mr. Akhtar Zaman Chief Secretary Punjab",
    layout: "hero-main",
    width: 1024,
    height: 585,
  },
  {
    image: "/images/belarus-chamber-meeting.png",
    description:
      "Mr.abdul Waheed with focal person of Belarus chamber of commerce and Industry",
    layout: "hero-side",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/pak-canada-trade-association-meeting.png",
    description:
      "President Mandi Bahauddin Chamber of Small Traders & Small Industry Mr. Abdul Waheed with Miss Bushra Reman Chairman Pak-Canada Trade Association",
    layout: "wide",
    width: 1024,
    height: 652,
  },
  {
    image: "/images/chamber-formal-event.png",
    description:
      "President Chaudhary Abdul Waheed with Ambassador of Canada in Islamabad, Mr. Atif Ikram Sheikh President Federation of Pakistan Chambers of Commerce & Industry with Mr. Muhammad Aun Raza Patron in Chief Mandi Bahauddin Khushab Hafizabad CCI.",
    aspect: "aspect-[16/9]",
    layout: "wide",
  },
  {
    image: "/images/interior-minister-meeting.png",
    description:
      "President Mandi Bahauddin Chamber of Small Traders & Small Industry with Mr. Mohsin Naqvi Interior Minister along with Dr. Usman Anwar Inspector General Punjab",
    aspect: "aspect-[16/9]",
    layout: "wide",
  },
  {
    image: "/images/ambassador-america-welcome.png",
    description:
      "Chaudhary Abdul Waheed President Mandi Bahauddin Chamber of Small Traders and Small Industry welcome to the Ambassador of America Mr. William K Maclon",
    layout: "wide",
    width: 1024,
    height: 630,
  },
];

export const SERVICE_FLIPS = [
  {
    title: "E Sahulat",
    description:
      "E Sahulat: Access essential services conveniently through the Mandi Bahauddin Chamber of Small Traders & Small Industry.",
    image:
      "https://mbcci.com.pk/wp-content/uploads/2024/08/e-sahulat-logo-mbcci-pk.png",
    href: "/e-sahulat",
  },
  {
    title: "Punjab Job Center",
    description:
      "Punjab Job Center: Access essential services conveniently through the Mandi Bahauddin Chamber of Small Traders & Small Industry.",
    image:
      "https://mbcci.com.pk/wp-content/uploads/2024/08/punjab-job-center-mbcci-pk.png",
    href: "/punjab-job-center",
  },
  {
    title: "NADRA",
    description:
      "NADRA: Access essential services conveniently through the Mandi Bahauddin Chamber of Small Traders & Small Industry.",
    image:
      "https://mbcci.com.pk/wp-content/uploads/2024/08/nadra-logo-mbcci-pk.png",
    href: "/nadra",
  },
  {
    title: "Punjab Land Record Authority",
    description:
      "Punjab Land Record Authority: Access essential services conveniently through the Mandi Bahauddin Chamber of Small Traders & Small Industry.",
    image:
      "https://mbcci.com.pk/wp-content/uploads/2024/08/plra-logo-mbcci.png",
    href: "/punjab-land-record-authority",
  },
  {
    title: "Police Khidmat Markaz",
    description:
      "Police Khidmat Markaz: Access essential services conveniently through the Mandi Bahauddin Chamber of Small Traders & Small Industry.",
    image:
      "https://mbcci.com.pk/wp-content/uploads/2024/08/police-khidmat-markaz-mbcci-pk.png",
    href: "/police-khidmet-markaz",
  },
  {
    title: "Visa Application Form",
    description:
      "Visa Application Form: Access essential services conveniently through the Mandi Bahauddin Chamber of Small Traders & Small Industry.",
    image:
      "https://mbcci.com.pk/wp-content/uploads/2024/08/visa-application-form-mbcci-pk.png",
    href: "/visa-application-form",
  },
];

export const STATS = [
  { label: "Registered Members", value: 2200, suffix: "" },
  { label: "Total Members", value: 5000, suffix: "" },
  { label: "Years Completed", value: 30, suffix: "+" },
  { label: "Successful Events", value: 90, suffix: "" },
];

export const PARTNER_LOGOS = [
  "https://mbcci.com.pk/wp-content/uploads/2024/08/nadra-logo-mbcci-pk-150x150.png",
  "https://mbcci.com.pk/wp-content/uploads/2024/08/e-sahulat-logo-mbcci-pk-150x150.png",
  "https://mbcci.com.pk/wp-content/uploads/2024/08/police-khidmat-markaz-mbcci-pk-150x150.png",
  "https://mbcci.com.pk/wp-content/uploads/2024/08/punjab-job-center-mbcci-pk-150x150.png",
  "https://mbcci.com.pk/wp-content/uploads/2024/08/plra-logo-mbcci-pk-150x150.png",
  "https://mbcci.com.pk/wp-content/uploads/2024/08/visa-application-form-mbcci-pk-150x150.png",
];

export const FOOTER_MEMBERSHIP_LINKS = [
  { title: "New Membership at MBCST&I", href: "/new-membership" },
  { title: "Membership Classes", href: "/membership-classes" },
  { title: "Membership Renewal", href: "/membership-renewal" },
  {
    title: "Membership Fee Structure",
    href: "/membership-fee-structure",
  },
  { title: "Leadership", href: "/leadership" },
];

export const FOOTER_MANAGEMENT_LINKS = [
  { title: "Office Bearers", href: "/office-bearers" },
  { title: "Secretariat Team", href: "/secretariat-team" },
  { title: "Executive Members", href: "/executive-members" },
  { title: "Leadership", href: "/leadership" },
  {
    title: "MBCST&I Former Presidents",
    href: "/former-presidents",
  },
];
