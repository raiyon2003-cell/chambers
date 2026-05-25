import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Mandi Bahauddin Chamber of Small Traders & Small Industry – Welcome to Mandi Bahauddin Chamber of Small Traders & Small Industry",
  description:
    "Welcome to Mandi Bahauddin Chamber of Small Traders & Small Industry (MBCST&I). Empowering businesses and fueling growth in Mandi Bahauddin.",
  icons: {
    icon: [
      { url: "/images/logo-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/logo-apple-touch.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#00897b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
