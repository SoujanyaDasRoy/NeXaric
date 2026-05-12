"use client";

import { motion } from "motion/react";
import { ArrowRight, ClipboardCheck, DraftingCompass, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    eyebrow: "01",
    title: "Map the signal",
    description:
      "We clarify your audience, offer, trust markers, and the pages that need to move people from attention to action.",
  },
  {
    icon: DraftingCompass,
    eyebrow: "02",
    title: "Shape the experience",
    description:
      "We turn the strategy into clean layouts, sharp copy hierarchy, responsive components, and a calm visual system.",
  },
  {
    icon: Rocket,
    eyebrow: "03",
    title: "Launch with care",
    description:
      "We build the final site with performance, accessibility, SEO basics, and handoff details ready for real business use.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-[#f7faff] px-5 py-16 text-black sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
                <Sparkles className="size-3.5 fill-white text-white" strokeWidth={2.2} />
              </span>
              How we work
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.06] sm:text-4xl md:text-5xl md:leading-[1.04]">
              A focused path from rough ideas to a website people trust.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-black/56 lg:justify-self-end">
            The process stays simple on purpose: understand the business, design
            the right experience, then build with enough structure for the site
            to grow without becoming hard to manage.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group min-h-[238px] rounded-2xl border border-white/10 bg-[#05070d] p-6 text-white shadow-[0_22px_58px_rgba(5,7,13,0.2)] transition-colors duration-300 hover:border-[#4079fe]/45 hover:shadow-[0_30px_76px_rgba(5,7,13,0.26)] sm:min-h-[252px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-semibold leading-none text-[#75aaff]">
                    {step.eyebrow}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white text-black shadow-[0_12px_26px_rgba(255,255,255,0.08)] transition-colors group-hover:bg-[#4079fe] group-hover:text-white">
                    <Icon className="size-5" strokeWidth={2.1} />
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/78">
                  Next step
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
