"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Cpu, MessageSquare, Shield, HelpCircle, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownLink {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const SOLUTIONS: DropdownLink[] = [
  {
    title: "Workflow Automation",
    description: "Connect APIs, automate tasks, and sync B2B data flows instantly.",
    href: "/solutions#automation",
    icon: <Cpu className="h-5 w-5 text-indigo-400" />,
  },
  {
    title: "Omni-channel CX Support",
    description: "Support clients via email, SMS, live chat, and Slack from one dashboard.",
    href: "/solutions#support",
    icon: <MessageSquare className="h-5 w-5 text-emerald-400" />,
  },
  {
    title: "Review & Reputation Management",
    description: "Collect reviews, monitor ratings, and reply automatically with AI.",
    href: "/solutions#reviews",
    icon: <Layers className="h-5 w-5 text-amber-400" />,
  },
];

const INDUSTRIES: DropdownLink[] = [
  {
    title: "B2B SaaS",
    description: "Scale self-serve conversions and manage custom enterprise success loops.",
    href: "/industries#saas",
    icon: <Cpu className="h-4 w-4 text-sky-400" />,
  },
  {
    title: "Retail & E-commerce",
    description: "Recover carts, send shipping updates, and capture reviews post-purchase.",
    href: "/industries#ecommerce",
    icon: <Layers className="h-4 w-4 text-pink-400" />,
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant automation for scheduling, surveys, and support.",
    href: "/industries#healthcare",
    icon: <Shield className="h-4 w-4 text-red-400" />,
  },
  {
    title: "Financial Services",
    description: "Secure pipelines for onboarding, compliance monitoring, and advisory alerts.",
    href: "/industries#finance",
    icon: <HelpCircle className="h-4 w-4 text-emerald-400" />,
  },
];

const COMPANY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Testimonials", href: "/testimonials" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "industries" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-indigo-500/10 shadow-lg shadow-zinc-950/40"
          : "bg-transparent"
      )}
    >
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            Ω
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Omega Automatics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-expanded={activeDropdown === "solutions"}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white py-2 cursor-pointer transition-colors",
                activeDropdown === "solutions" && "text-white"
              )}
            >
              Solutions
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeDropdown === "solutions" && "rotate-180")} />
            </button>
            {activeDropdown === "solutions" && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-80 bg-zinc-900 border border-zinc-800/80 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="space-y-4">
                  {SOLUTIONS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex gap-3 hover:bg-zinc-950/65 border border-transparent hover:border-zinc-800/50 p-2.5 rounded-xl transition-all duration-200"
                    >
                      <div className="mt-0.5 group-hover:scale-105 transition-transform">{item.icon}</div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">{item.title}</div>
                        <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-expanded={activeDropdown === "industries"}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white py-2 cursor-pointer transition-colors",
                activeDropdown === "industries" && "text-white"
              )}
            >
              Industries
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeDropdown === "industries" && "rotate-180")} />
            </button>
            {activeDropdown === "industries" && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[340px] bg-zinc-900 border border-zinc-800/80 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="grid grid-cols-1 gap-3">
                  {INDUSTRIES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex gap-3 hover:bg-zinc-950/65 border border-transparent hover:border-zinc-800/50 p-2.5 rounded-xl transition-all duration-200"
                    >
                      <div className="mt-1 bg-zinc-850/60 group-hover:bg-zinc-850 p-1.5 rounded-md h-fit group-hover:scale-105 transition-all">{item.icon}</div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">{item.title}</div>
                        <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/services" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Case Studies
          </Link>
          
          {/* Company Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white py-2 cursor-pointer transition-colors">
              Company
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute hidden group-hover:block top-8 left-0 w-44 bg-zinc-900 border border-zinc-800/80 rounded-xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150">
              {COMPANY_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-xs text-zinc-300 hover:text-indigo-400 hover:bg-zinc-950/40 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Blog
          </Link>
        </nav>

        {/* Desktop CTA Action buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/contact#book-demo"
            className="btn-glow inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg transition-all"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-900 animate-in fade-in duration-200">
          <nav aria-label="Mobile Navigation" className="px-4 pt-2 pb-6 space-y-4">
            <div>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Solutions</div>
              <div className="grid grid-cols-1 gap-1.5 mt-1 pl-2">
                {SOLUTIONS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white py-2"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Industries</div>
              <div className="grid grid-cols-1 gap-1.5 mt-1 pl-2">
                {INDUSTRIES.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white py-2"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">General</div>
              <div className="grid grid-cols-2 gap-3 mt-1 pl-3">
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xs text-zinc-300 hover:text-white py-1">
                  Services
                </Link>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-xs text-zinc-300 hover:text-white py-1">
                  Pricing
                </Link>
                <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-xs text-zinc-300 hover:text-white py-1">
                  Case Studies
                </Link>
                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-xs text-zinc-300 hover:text-white py-1">
                  Blog
                </Link>
                {COMPANY_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-zinc-300 hover:text-white py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/contact#book-demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/20 transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
