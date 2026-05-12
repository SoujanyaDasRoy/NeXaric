"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NeXaric turned our scattered service offering into a website that feels clear, premium, and easy for clients to act on.",
    name: "Aarav Mehta",
    role: "Founder, growth consultancy",
    avatarClass: "bg-[linear-gradient(135deg,#dbeafe,#60a5fa)]",
  },
  {
    quote:
      "The design feels modern without being trendy. Our older clients trust it, and our younger audience still finds it sharp.",
    name: "Priya Sen",
    role: "Director, media company",
    avatarClass: "bg-[linear-gradient(135deg,#fce7f3,#818cf8)]",
  },
  {
    quote:
      "They understood the business side first. The final site gave us stronger messaging, better structure, and a cleaner lead flow.",
    name: "Rohan Kapoor",
    role: "Partner, local services firm",
    avatarClass: "bg-[linear-gradient(135deg,#ccfbf1,#4079fe)]",
  },
  {
    quote:
      "The motion is subtle, the pages are fast, and the whole experience feels far more established than our previous website.",
    name: "Anika Roy",
    role: "Co-founder, SaaS startup",
    avatarClass: "bg-[linear-gradient(135deg,#fde68a,#60a5fa)]",
  },
  {
    quote:
      "The team brought structure to our ideas and turned them into a digital presence that finally feels credible.",
    name: "Samantha Johnson",
    role: "CEO, service brand",
    avatarClass: "bg-[linear-gradient(135deg,#ddd6fe,#38bdf8)]",
  },
  {
    quote:
      "From strategy to launch, the process was calm, organized, and focused on what would actually move the business.",
    name: "Victoria Thompson",
    role: "Founder, product studio",
    avatarClass: "bg-[linear-gradient(135deg,#fbcfe8,#5795fe)]",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-[#dbe7ff] bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_58%,#eef5ff_100%)] px-5 py-16 text-black sm:px-6 sm:py-18 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl rounded-[1.25rem] border border-[#4079fe]/35 bg-white p-5 shadow-[0_24px_80px_rgba(37,99,235,0.1)] ring-1 ring-[#4079fe]/10 sm:rounded-[1.5rem] sm:p-8 lg:p-10"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-black py-1.5 pl-1.5 pr-4 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
              <Star className="size-3.5 fill-white text-white" strokeWidth={2.2} />
            </span>
            Rated 4/5 by founders and teams
          </div>
          <h2 className="mt-7 max-w-2xl text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl md:leading-[1.04]">
            Words of praise from others about our presence.
          </h2>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="min-h-[218px] rounded-2xl border border-white/10 bg-[#05070d] p-6 text-white shadow-[0_22px_58px_rgba(5,7,13,0.22)] transition-colors duration-300 hover:border-[#4079fe]/45 hover:shadow-[0_30px_76px_rgba(5,7,13,0.28)]"
            >
              <span className="relative inline-flex size-11 items-center justify-center rounded-full bg-[#4079fe] shadow-[0_14px_30px_rgba(64,121,254,0.28)]">
                <span className="absolute -right-1 -top-1 size-3 rounded-full bg-[#93c5fd]/70 blur-[1px]" />
                <span className="absolute inset-1 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.12)_48%,rgba(255,255,255,0)_100%)]" />
                <Quote className="relative size-5 text-white" strokeWidth={2.25} />
              </span>
              <p className="mt-5 text-sm font-medium leading-7 text-white/78">
                {item.quote}
              </p>
              <div className="mt-7 flex items-center gap-3">
                <div
                  className={`relative size-11 overflow-hidden rounded-full shadow-[0_12px_26px_rgba(64,121,254,0.22)] ${item.avatarClass}`}
                >
                  <span className="absolute left-1/2 top-2.5 size-4 -translate-x-1/2 rounded-full bg-white/88" />
                  <span className="absolute bottom-1 left-1/2 h-5 w-8 -translate-x-1/2 rounded-t-full bg-white/72" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-xs leading-5 text-white/48">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
