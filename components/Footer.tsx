import React from "react";
import Link from "next/link";
import { Github, Linkedin, Send } from "lucide-react";

// shadcn/ui Button – make sure you have installed shadcn/ui or swap with your own button component
import { Button } from "@/components/ui/button";

import { ContactForm } from "@/app/components/contact-form";

/**
 * Improved Footer component
 * - Expanded max width for large screens
 * - Stronger visual hierarchy and balanced spacing
 * - Gradient text with Tailwind “text-transparent bg-clip-text”
 * - Single CTA button linking to the form section
 * - Accessible focus states & aria‑labels
 * - Lucide icons instead of static SVGs for consistency and theming
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-neutral-900 to-black/80 px-6 py-14 shadow-2xl backdrop-blur-lg"
    >
      {/* Decorative gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="size-full animate-pulse-slow bg-[radial-gradient(circle_at_50%_100%,rgba(255,42,169,0.35)_0,transparent_70%)]" />
        <div className="size-full bg-[radial-gradient(ellipse_at_top_left,rgba(20,213,255,0.15)_0,transparent_70%)]" />
      </div>

      {/* Headline & sub‑copy */}
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-balance bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
          Ready to elevate your next project?
        </h2>

        <p className="max-w-2xl text-pretty font-medium text-sky-300 md:text-lg">
          Whether you need a blazing‑fast landing page, a secure full‑stack application, or a captivating 3D interactive experience — I can help turn ideas into shipped features.
        </p>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="group gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/50"
        >
          <Link href="#talk" aria-label="Jump to contact form">
            Let’s talk
            <Send className="size-4 -rotate-45 transition-all group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>

      {/* Contact form */}
      <div className="mt-14">
        <ContactForm />
      </div>

      {/* Social & copyright */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <div className="flex gap-5">
          <Link
            href="https://github.com/rr3s1"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 p-3 transition hover:scale-105 hover:shadow-neon focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/50"
          >
            <Github className="size-6 drop-shadow" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/raressilviulazar/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 p-3 transition hover:scale-105 hover:shadow-neon focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/50"
          >
            <Linkedin className="size-6 drop-shadow" />
          </Link>
        </div>

        <p className="text-xs font-light tracking-wider text-neutral-400">
          © {year} Rares Silviu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
