"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logoImg from "@/public/nexaric-logo-new.png";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/",          scrollTo: "top" as const },
  { label: "Services", href: "/#services",  scrollTo: "services" as const },
  { label: "About", href: "/about" },
  { label: "Work",     href: "/work" },
  { label: "Contact",  href: "/contact" },
];

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, link: (typeof navLinks)[0]) => {
    setIsMenuOpen(false);

    if (link.scrollTo === "top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (link.scrollTo === "services") {
      e.preventDefault();
      if (pathname === "/") {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#services");
      }
      return;
    }
  };
  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full select-none border-b border-black/10 bg-white/94 backdrop-blur-xl",
        className
      )}
    >
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full flex-1 items-center justify-start"
        >
          <span className="relative block h-10 w-32 overflow-hidden sm:h-12 sm:w-36">
            <Image
              src={logoImg}
              alt="NeXaric Logo"
              className="absolute -left-[73px] -top-[63px] h-[182px] w-[273px] max-w-none object-contain sm:-left-[82px] sm:-top-[71px] sm:h-[205px] sm:w-[307px]"
              priority
              draggable={false}
            />
          </span>
        </motion.div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium text-black/62 md:flex">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.38,
                delay: 0.12 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={link.href}
                onClick={link.scrollTo ? (e) => handleNavClick(e, link) : undefined}
                className="transition-colors duration-200 hover:text-[#4079fe]"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 items-center justify-end gap-2"
        >
          <Link
            href="/contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#5997ff] hover:text-white sm:inline-flex"
          >
            Get a quote
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-colors hover:bg-black hover:text-white md:hidden"
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </motion.div>

        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-5 right-5 top-[78px] rounded-2xl border border-black/10 bg-white p-3 shadow-[0_22px_60px_rgba(15,23,42,0.16)] md:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.scrollTo ? (e) => handleNavClick(e, link) : () => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-black/70 transition-colors hover:bg-[#f7faff] hover:text-[#4079fe]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-black px-4 text-sm font-semibold text-white transition-colors hover:bg-[#5997ff]"
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
    </motion.header>
  );
}
