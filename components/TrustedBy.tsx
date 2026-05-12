"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const clientLogos = [
  {
    title: "HooHaap",
    path: "/trusted_by_brands/hoophaap.png",
  },
  {
    title: "IndiaHint",
    path: "/trusted_by_brands/indiahint.png",
  },
  {
    title: "AutoScoop",
    path: "/trusted_by_brands/autoscoop.png",
  },
  {
    title: "GenX Computer",
    path: "/trusted_by_brands/genx_computer.png",
  },
  {
    title: "Sthanio Songbad",
    path: "/trusted_by_brands/sthanio_songbad.png",
  },
  {
    title: "The Narmada Express",
    path: "/trusted_by_brands/the_narmada_express.png",
  },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-[#dbe7ff] bg-[#f7faff] px-5 py-16 text-black sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(87,149,254,0.12),transparent_40%),linear-gradient(180deg,rgba(247,250,255,0.96),rgba(241,246,255,0.72))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4079fe]/28 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-black py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
            <Sparkles className="size-3.5 fill-white text-white" strokeWidth={2.2} />
          </span>
          Trusted by teams with real audiences
        </div>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.08] md:text-5xl md:leading-[1.04]">
          Digital foundations for companies people already depend on.
        </h2>
      </motion.div>

      <div className="relative mx-auto mt-12 max-w-7xl">
        <InfiniteMovingCards
          items={clientLogos}
          speed="slow"
          pauseOnHover={false}
          className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        />
      </div>
    </section>
  );
}
