"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, FileDown, Settings, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownLink {
  title: string;
  description: string;
  href: string;
}

const PRODUCTS: DropdownLink[] = [
  { title: "Automatic Sliding Doors", description: "Premium sliding entrances including Series 2000 Linear Sliding Systems.", href: "/products#sliding" },
  { title: "Swing Door Operators", description: "Heavy-duty operators for automated swing pedestrian gates and doors.", href: "/products#swing" },
  { title: "Revolving Doors", description: "Energy-efficient automatic revolving doors for airports, hotels, and retail.", href: "/products#revolving" },
  { title: "Telescopic Doors", description: "Space-saving telescopic systems optimizing clear door openings.", href: "/products#telescopic" },
  { title: "Hermetic Cleanroom Doors", description: "Hermetically sealed automated doors for cleanrooms and laboratories.", href: "/products#hermetic" },
  { title: "Hospital ICU Doors", description: "Specialty manual and automated breakout door systems for ICU environments.", href: "/products#hospital" },
  { title: "Retail Entrance Systems", description: "Rugged automated sliding entrances designed for high-traffic supermarkets.", href: "/products#retail" },
  { title: "Commercial Entrance Systems", description: "Complete custom security and automated entrances for corporate facades.", href: "/products#commercial" }
];

const INDUSTRIES: DropdownLink[] = [
  { title: "Healthcare Facilities", description: "ICU, patient room doors, and hermetic surgical entrances.", href: "/industries#healthcare" },
  { title: "Aviation & Airports", description: "Heavy-duty, secure automatic doors handling millions of annual visitors.", href: "/industries#aviation" },
  { title: "Hospitality & Hotels", description: "Architectural revolving entrances and luxury vestibule systems.", href: "/industries#hospitality" },
  { title: "Retail & Shopping Centers", description: "Reliable, high-speed automated sliding doors optimizing energy costs.", href: "/industries#retail" },
  { title: "Corporate & Commercial", description: "Architectural glass entrances with integrated access controls.", href: "/industries#corporate" }
];

const RESOURCES = [
  { title: "CAD & BIM Downloads", href: "/resources#cad", description: "Architectural drawings in DWG, PDF, and Revit formats." },
  { title: "CSI 3-Part Specifications", href: "/resources#specs", description: "Customizable specifications mapped to Division 08." },
  { title: "Product Manuals", href: "/resources#manuals", description: "Operation and installation manuals for building engineers." }
];

const SERVICES = [
  { title: "Installation Services", href: "/services#installation", description: "AAADM-certified technicians executing standard setups." },
  { title: "Preventive Maintenance", href: "/services#maintenance", description: "Planned maintenance contracts to extend operational life." },
  { title: "AAADM Certified Inspections", href: "/services#aaadm", description: "Compliance testing ensuring safety under ANSI standards." }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | "industries" | "resources" | "services" | "company" | null>(null);
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
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm"
          : "bg-white border-transparent"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded bg-blue-900 flex items-center justify-center font-bold text-white shadow-sm group-hover:bg-blue-800 transition-colors">
            Ω
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black uppercase tracking-wider text-blue-900 leading-none">
              Omega
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
              Automatics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-expanded={activeDropdown === "products"}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-blue-900 py-3 cursor-pointer transition-colors",
                activeDropdown === "products" && "text-blue-900"
              )}
            >
              Products
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "products" && "rotate-180")} />
            </button>
            {activeDropdown === "products" && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] bg-white border border-slate-200 rounded p-4 shadow-lg grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-1 duration-150">
                {PRODUCTS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group hover:bg-slate-50 p-2.5 rounded transition-all"
                  >
                    <div className="text-[11px] font-bold text-slate-800 group-hover:text-blue-900">{item.title}</div>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{item.description}</p>
                  </Link>
                ))}
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
                "flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-blue-900 py-3 cursor-pointer transition-colors",
                activeDropdown === "industries" && "text-blue-900"
              )}
            >
              Industries
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "industries" && "rotate-180")} />
            </button>
            {activeDropdown === "industries" && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] bg-white border border-slate-200 rounded p-4 shadow-lg flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                {INDUSTRIES.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group hover:bg-slate-50 p-2.5 rounded transition-all"
                  >
                    <div className="text-[11px] font-bold text-slate-800 group-hover:text-blue-900">{item.title}</div>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-expanded={activeDropdown === "resources"}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-blue-900 py-3 cursor-pointer transition-colors",
                activeDropdown === "resources" && "text-blue-900"
              )}
            >
              Resources
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "resources" && "rotate-180")} />
            </button>
            {activeDropdown === "resources" && (
              <div className="absolute top-10 left-0 w-80 bg-white border border-slate-200 rounded p-3 shadow-lg flex flex-col gap-2 animate-in fade-in slide-in-from-top-1 duration-150">
                {RESOURCES.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group hover:bg-slate-50 p-2 rounded transition-all"
                  >
                    <div className="text-[11px] font-bold text-slate-800 group-hover:text-blue-900 flex items-center gap-1.5">
                      <FileDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-900" />
                      {item.title}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed pl-5">{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              aria-expanded={activeDropdown === "services"}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-blue-900 py-3 cursor-pointer transition-colors",
                activeDropdown === "services" && "text-blue-900"
              )}
            >
              Services
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === "services" && "rotate-180")} />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-10 left-0 w-80 bg-white border border-slate-200 rounded p-3 shadow-lg flex flex-col gap-2 animate-in fade-in slide-in-from-top-1 duration-150">
                {SERVICES.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group hover:bg-slate-50 p-2 rounded transition-all"
                  >
                    <div className="text-[11px] font-bold text-slate-800 group-hover:text-blue-900 flex items-center gap-1.5">
                      <Settings className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-900" />
                      {item.title}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed pl-5">{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/projects" className="text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-blue-900 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-blue-900 transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop CTA Action buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/contact"
            className="text-xs font-bold text-slate-600 hover:text-blue-900 flex items-center gap-1 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            1-800-555-OMEG
          </Link>
          <Link
            href="/contact#quote"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 rounded transition-all shadow-sm"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden flex items-center justify-center p-2.5 rounded text-slate-500 hover:text-blue-900 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 animate-in fade-in duration-200">
          <nav aria-label="Mobile Navigation" className="px-4 pt-2 pb-6 space-y-4">
            <div>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Products</div>
              <div className="grid grid-cols-1 gap-1 pl-3">
                {PRODUCTS.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-slate-600 py-1.5 block hover:text-blue-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Industries</div>
              <div className="grid grid-cols-1 gap-1 pl-3">
                {INDUSTRIES.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-slate-600 py-1.5 block hover:text-blue-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 px-3">
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-slate-600 hover:text-blue-900">
                Services
              </Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-slate-600 hover:text-blue-900">
                Resources
              </Link>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-slate-600 hover:text-blue-900">
                Projects
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-slate-600 hover:text-blue-900">
                About
              </Link>
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-600 border border-slate-200 rounded hover:bg-slate-50 transition-all"
              >
                Contact Sales
              </Link>
              <Link
                href="/contact#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 rounded shadow-sm"
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
