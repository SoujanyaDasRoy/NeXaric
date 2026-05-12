"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import logoImg from "@/public/nexaric-logo-new.png";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Selected work", href: "/work" },
      { label: "Start a project", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Process", href: "/#services" },
    ],
  },
  {
    title: "Focus",
    links: [
      { label: "SEO-friendly websites", href: "/#services" },
      { label: "Product UI design", href: "/#services" },
      { label: "Landing pages", href: "/#services" },
      { label: "Growth systems", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "NeXaric", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Book a call", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#05070d] px-5 pb-10 text-white sm:px-6 sm:pb-12 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden border-x border-white/8 px-5 pb-8 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
              <Sparkles className="size-3.5 fill-white text-white" strokeWidth={2.2} />
            </span>
            Build with clarity
          </div>
          <h2 className="mt-7 max-w-2xl text-3xl font-semibold leading-[1.08] text-white sm:text-4xl md:text-5xl md:leading-[1.04]">
            Ready to turn your digital presence into measurable trust?
          </h2>
          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-[#5997ff] hover:text-white"
            >
              Start now
            </Link>
            <Link
              href="/work"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/24 px-5 text-sm font-semibold text-white transition-colors hover:border-[#5997ff] hover:bg-[#5997ff] hover:text-white"
            >
              View work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 grid gap-10 border-t border-white/10 pt-10 lg:mt-14 lg:grid-cols-[1.15fr_1.85fr]"
        >
          <div>
            <Link href="/" aria-label="NeXaric home" className="inline-flex">
              <span className="relative block h-14 w-44 overflow-hidden">
                <Image
                  src={logoImg}
                  alt="NeXaric Logo"
                  className="absolute -left-[98px] -top-[86px] h-[247px] w-[370px] max-w-none object-contain brightness-0 invert"
                  draggable={false}
                  priority={false}
                />
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
              NeXaric designs premium websites, product interfaces, and growth
              systems for teams that want a sharper online presence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-sm font-semibold text-white/86">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={`${group.title}-${link.label}`}
                      href={link.href}
                      className="text-sm text-white/52 transition-colors hover:text-[#75aaff]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} NeXaric. All rights reserved.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Designed for clarity, trust, and measurable growth
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
