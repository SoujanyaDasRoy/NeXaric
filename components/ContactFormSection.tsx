"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const projectTypes = ["Website", "Product UI", "Landing page", "Growth system"];

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl gap-8 rounded-[1.25rem] border border-white/10 bg-[#05070d] p-5 shadow-[0_24px_80px_rgba(5,7,13,0.22)] sm:rounded-[1.5rem] sm:p-6 md:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:p-10"
      >
        <div className="flex flex-col justify-between gap-10">
          <div>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pl-1.5 pr-4 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.1)] sm:text-sm">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
                <Sparkles className="size-3.5 fill-white text-white" strokeWidth={2.2} />
              </span>
              Start the conversation
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.06] text-white sm:text-4xl md:text-5xl md:leading-[1.04]">
              Tell us what you want your website to do next.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/58">
              Share a little context and we will help shape the next practical
              move, whether that is a new site, a focused landing page, or a
              sharper product interface.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white text-black">
                <Mail className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Prefer email?</p>
                <p className="mt-1 text-sm text-white/54">Use the form and we will follow up with next steps.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="grid gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white">
              Name
              <input
                name="name"
                required
                autoComplete="name"
                className="h-12 rounded-xl border border-white/12 bg-white/[0.06] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/36 focus:border-[#4079fe] focus:bg-white/10"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-12 rounded-xl border border-white/12 bg-white/[0.06] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/36 focus:border-[#4079fe] focus:bg-white/10"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-white">
            Project type
            <select
              name="projectType"
              className="h-12 rounded-xl border border-white/12 bg-white/[0.06] px-4 text-sm text-white outline-none transition-colors focus:border-[#4079fe] focus:bg-white/10"
              defaultValue=""
            >
              <option value="" disabled>
                Select a focus
              </option>
              {projectTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-white">
            What are you building?
            <textarea
              name="message"
              required
              className="min-h-36 resize-none rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/36 focus:border-[#4079fe] focus:bg-white/10"
              placeholder="Tell us about the site, audience, timeline, or business goal."
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#5997ff] hover:text-white"
          >
            Send project details
            <ArrowRight className="size-4" />
          </button>

          {isSubmitted ? (
            <p className="rounded-xl border border-[#4079fe]/30 bg-[#4079fe]/12 px-4 py-3 text-sm font-medium text-white/76">
              Thanks. Your project details are ready for follow-up.
            </p>
          ) : null}
        </motion.form>
      </motion.div>
    </section>
  );
}
