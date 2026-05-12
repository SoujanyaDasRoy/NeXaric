import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeXaric | Web Design, Product UI, SEO and Growth Systems",
  description:
    "NeXaric designs and builds premium, SEO-friendly websites, product interfaces, and conversion-focused digital systems for startups, service businesses, and established teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><ScrollToTop />{children}</body>
    </html>
  );
}
