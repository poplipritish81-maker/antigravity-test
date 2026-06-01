"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900/60 relative overflow-hidden text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-md">
                Ω
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Omega Automatics
              </span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              The next-generation B2B automation and omnichannel customer experience platform. Powering business workflows, feedback systems, and integrations in a single workspace.
            </p>
            
            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 max-w-sm mt-2">
              <label htmlFor="footer-email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="footer-email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/80 focus:bg-zinc-900/80 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-glow bg-indigo-600 text-white rounded-xl px-4 py-2 text-xs font-semibold disabled:opacity-50 flex items-center justify-center min-w-[90px]"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : status === "success" ? (
                    "Subscribed"
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              {status === "success" && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Thank you for subscribing!
                </div>
              )}
            </form>
          </div>

          {/* Column 1: Platform Solutions */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">Solutions</span>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/solutions#automation" className="hover:text-white transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions#support" className="hover:text-white transition-colors">
                  Omni-channel CX Support
                </Link>
              </li>
              <li>
                <Link href="/solutions#reviews" className="hover:text-white transition-colors">
                  Review & Feedback
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">Industries</span>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/industries#saas" className="hover:text-white transition-colors">
                  B2B SaaS
                </Link>
              </li>
              <li>
                <Link href="/industries#ecommerce" className="hover:text-white transition-colors">
                  E-commerce & Retail
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare" className="hover:text-white transition-colors">
                  Healthcare Access
                </Link>
              </li>
              <li>
                <Link href="/industries#finance" className="hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">Company</span>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Resources */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">Resources</span>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Socials & Copy */}
        <div className="border-t border-zinc-900/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Omega Automatics Inc. All rights reserved. Made in Canada.
          </span>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Omega on Twitter" className="text-zinc-650 hover:text-white transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Omega on LinkedIn" className="text-zinc-650 hover:text-white transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Omega on GitHub" className="text-zinc-650 hover:text-white transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Omega on YouTube" className="text-zinc-655 hover:text-white transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
