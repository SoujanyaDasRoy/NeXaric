"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe,
  MonitorCheck,
  PanelsTopLeft,
  PenTool,
  ScanText,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const capabilities: {
  description: string;
  icon: LucideIcon;
  title: string;
}[] = [
  {
    icon: MonitorCheck,
    title: "Business Websites",
    description:
      "Fast, credible websites with sharp messaging, responsive layouts, and a technical SEO foundation.",
  },
  {
    icon: PanelsTopLeft,
    title: "Product UI Design",
    description:
      "Dashboards, landing pages, and product surfaces that feel modern, calm, and easy to trust.",
  },
  {
    icon: ScanText,
    title: "Brand Content",
    description:
      "Positioning, page structure, and copy that make your offer easier to understand and act on.",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    description:
      "Clear journeys, conversion points, and analytics-ready pages designed around qualified leads.",
  },
  {
    icon: PenTool,
    title: "Landing Pages",
    description:
      "Focused campaign and launch pages with polished visuals, strong hierarchy, and direct calls to action.",
  },
  {
    icon: Globe,
    title: "Search Optimization",
    description:
      "Metadata, structure, performance, and content planning that helps your website show up with confidence.",
  },
];

function CapabilityIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="relative inline-flex size-13 items-center justify-center rounded-full bg-[#4079fe] shadow-[0_14px_30px_rgba(64,121,254,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
      <span className="absolute -right-1 -top-1 size-3 rounded-full bg-[#93c5fd]/70 blur-[1px]" />
      <span className="absolute inset-1 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.12)_48%,rgba(255,255,255,0)_100%)]" />
      <Icon className="relative size-5.5 text-white" strokeWidth={2.25} />
    </span>
  );
}

export function Services() {
  return (
    <section id="services" className="w-full bg-[#f7faff] text-black">
      <div className="border-b border-[#dbe7ff] bg-[linear-gradient(135deg,#f7faff_0%,#ffffff_48%,#eef5ff_100%)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="max-w-xl text-3xl font-semibold leading-[1.06] text-black sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/52">
                Comprehensive web design, product UI, and growth systems tailored
                to elevate your online presence and turn attention into trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                asChild
                size="lg"
                className="h-11 w-full rounded-full bg-black px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] hover:bg-[#75aaff] hover:text-white sm:w-auto"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const isFeatured = index === 0;

              return (
                <motion.article
                  key={capability.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group min-h-[182px] rounded-2xl border p-6 shadow-[0_14px_40px_rgba(37,99,235,0.055)] transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured
                      ? "rotate-[-1.5deg] border-black/10 bg-[#10141b] text-white shadow-[0_22px_52px_rgba(15,23,42,0.18)] hover:rotate-0"
                      : "border-[#dbe7ff] bg-white/88 text-black backdrop-blur hover:bg-white"
                  }`}
                >
                  <CapabilityIcon Icon={capability.icon} />
                  <h3
                    className={`mt-5 text-base font-semibold leading-tight ${
                      isFeatured ? "text-white" : "text-black"
                    }`}
                  >
                    {capability.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      isFeatured ? "text-white/68" : "text-black/54"
                    }`}
                  >
                    {capability.description}
                  </p>
                  <Link
                    href="/contact"
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
                      isFeatured
                        ? "text-[#75aaff] hover:text-white"
                        : "text-black/72 hover:text-[#4079fe]"
                    }`}
                  >
                    Learn more
                    <ArrowRight className="size-3.5" strokeWidth={2.2} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#eef5ff_0%,#f7faff_44%,#ffffff_100%)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[1.25rem] bg-[#05070d] p-6 text-white shadow-[0_24px_90px_rgba(5,7,13,0.22)] sm:rounded-[1.5rem] md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:text-sm">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
                  <Sparkles className="size-3.5 fill-white text-white" strokeWidth={2.2} />
                </span>
                Ready for a website clients can trust
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.06] sm:text-4xl md:text-5xl md:leading-[1.04]">
                Build a premium website that supports search, sales, and long-term credibility.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                We keep the interface clean, the message direct, and the
                technical foundation practical enough for real business use
                after launch.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="h-11 w-full rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-[#75aaff] hover:text-white sm:w-auto"
            >
              <Link href="/contact">
                Discuss your build
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
