"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, FileDown, Shield, Clock, Wrench, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCard {
  title: string;
  csi: string;
  description: string;
  imageAlt: string;
  features: string[];
}

const PRODUCTS_LIST: ProductCard[] = [
  {
    title: "Automatic Sliding Doors",
    csi: "Section 08 42 29.23",
    description: "Architectural sliding glass systems featuring heavy-duty operators, safety sensors, and elegant structural configurations (Series 2000 Linear).",
    imageAlt: "Automatic sliding glass entrance in retail center",
    features: ["Heavy-duty belt drive", "Bi-parting or single-slide", "Full emergency breakout capability"]
  },
  {
    title: "Swing Door Operators",
    csi: "Section 08 71 13",
    description: "Electro-hydraulic and electro-mechanical operators that automate standard pedestrian swinging doors for hands-free, high-load usage.",
    imageAlt: "Low energy swing operator on healthcare entrance",
    features: ["ADA compliant activation", "Low-energy push/go modes", "Heavy-load wind resistance"]
  },
  {
    title: "Automatic Revolving Doors",
    csi: "Section 08 42 33",
    description: "Three and four-wing revolving door systems that maintain clean lobby insulation, optimize HVAC efficiency, and handle immense foot traffic.",
    imageAlt: "Revolving glass doors at hotel main lobby entrance",
    features: ["Continuous airlock seal", "Integrated speed control", "Emergency center-fold breakout"]
  },
  {
    title: "Telescopic Sliding Doors",
    csi: "Section 08 42 36",
    description: "Telescopic multi-panel configurations offering up to 33% wider clear opening space than standard sliders within the same rough opening width.",
    imageAlt: "Telescopic automatic door system in airport terminal",
    features: ["Space-saving track profile", "Synchronized interlocking panels", "AAADM safety compliant"]
  },
  {
    title: "Hermetic Cleanroom Doors",
    csi: "Section 08 42 43.13",
    description: "Airtight automatic doors engineered for laboratories, pharmaceutical cleanrooms, and operating theatres requiring airlock pressure integrity.",
    imageAlt: "Hermetically sealed automatic cleanroom sliding door",
    features: ["Airtight perimeter compression", "Antibacterial laminate coatings", "Hands-free touchless sensors"]
  },
  {
    title: "Hospital ICU/CCU Doors",
    csi: "Section 08 42 43",
    description: "Manual sliding and telescopic ICU door packages featuring wide-track breakout options, smoke seals, and trackless transition thresholds.",
    imageAlt: "Intensive care unit hospital glass break-out door package",
    features: ["Manual breakout slide-and-swing", "NFPA 105 smoke-leakage rated", "Trackless bottom guide guides"]
  },
  {
    title: "Retail Entrance Systems",
    csi: "Section 08 42 29",
    description: "High-durability sliding entrances built to withstand structural bumps from shopping carts, heavy continuous cycling, and large shopping baskets.",
    imageAlt: "Automatic glass slider entrance for busy supermarket",
    features: ["Structural impact buffers", "Wide entry clearance path", "Integrated safety light barriers"]
  },
  {
    title: "Commercial Entrance Systems",
    csi: "Section 08 42 00",
    description: "Turnkey exterior glass facades, automated security vestibules, and custom aluminum frames engineered for architectural prestige.",
    imageAlt: "Modern commercial building glass entrance automated",
    features: ["Custom corporate blue/grey finishes", "SAML access control compatibility", "Thermal break glass options"]
  }
];

const INDUSTRIES_SERVED = [
  { name: "Hospitals & Healthcare", desc: "ICU doors, cleanrooms, and touchless surgical operators meeting UL/ANSI standards." },
  { name: "Airports & Transportation", desc: "High-volume secure revolving and telescoping doors designed for non-stop cycles." },
  { name: "Supermarkets & Retail", desc: "Heavy-duty sliding entrances providing cost-effective building temperature containment." },
  { name: "Hotels & Hospitality", desc: "Prestigious architectural revolving doors that elevate main lobbies and lobbies." },
  { name: "Commercial & Office Buildings", desc: "Automated storefronts, secure employee entry zones, and custom glass facades." }
];

const COMPLIANCE_ITEMS = [
  { title: "ANSI/BHMA A156.10", desc: "Standard for Power Operated Pedestrian Doors (Sliding & Revolving)." },
  { title: "ANSI/BHMA A156.19", desc: "Standard for Power Assist & Low Energy Power Operated Swinging Doors." },
  { title: "AAADM Certified Installers", desc: "All Omega installation teams are certified by the American Association of Automatic Door Manufacturers." },
  { title: "ADA Accessibility Standards", desc: "Entrance opening widths, timings, and low force compliance meeting federal accessibility acts." }
];

export default function Home() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("success");
  };

  return (
    <div className="relative w-full bg-white text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Value Prop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/40 border border-blue-800 text-xs font-bold uppercase tracking-wider text-blue-300">
                <Shield className="h-3.5 w-3.5" />
                ANSI/BHMA A156.10 & AAADM Certified
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
                Architectural Entrance Systems. <br />
                <span className="text-blue-400">Engineered for Safety.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Omega Automatics manufactures and services commercial automatic door systems. We deliver AAADM-commissioned sliding, swinging, and revolving doors for hospitals, airports, retail storefronts, and corporate facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#quote"
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all text-center font-semibold"
                >
                  Request Commercial Quote
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider rounded transition-all text-center flex items-center justify-center gap-2 font-semibold"
                >
                  Browse Product Catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Compliance Badges */}
              <div className="pt-8 border-t border-slate-800/80 flex flex-wrap gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-400">
                <div>✓ UL 325 Listed</div>
                <div>✓ ADA Accessible</div>
                <div>✓ NFPA 101 Life Safety</div>
                <div>✓ Miami-Dade Wind Load</div>
              </div>
            </motion.div>

            {/* Quick Consultation Request Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded shadow-xl"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Request Specification Specs</h3>
              <p className="text-[10px] text-slate-400 mb-6 font-semibold">Need CAD files or pricing? Complete the architectural submittal form.</p>
              
              {submitStatus === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white uppercase">Specs Request Submitted</h4>
                  <p className="text-xs text-slate-400">Our commercial estimation team will respond with CSI specs and catalogs in 1 business hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">Project Engineer / Architect Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe, AIA"
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-900 placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">Company / Firm</label>
                    <input
                      type="text"
                      required
                      placeholder="Architectural Associates Ltd"
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-900 placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">Work Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="j.doe@firm.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-900 placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold mb-1.5">Door System Required</label>
                    <select
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-blue-900 cursor-pointer"
                    >
                      <option>Automatic Sliding Doors</option>
                      <option>Swing Door Operators</option>
                      <option>Automatic Revolving Doors</option>
                      <option>Hospital ICU Breakout Packages</option>
                      <option>Telescopic Door Systems</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer"
                  >
                    Submit specs inquiry
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Product Directory Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Commercial Openings</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Commercial Automated Door Catalog
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-4 leading-relaxed">
            All Omega systems are manufactured in compliance with standard building codes and undergo rigorous testing. Filtered by CSI MasterFormat division guides.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS_LIST.map((prod) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ y: -5, borderColor: "rgba(15, 46, 92, 0.4)", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}
              key={prod.title}
              className="bg-white border border-slate-200 p-5 rounded flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span className="text-[9px] font-mono font-bold text-blue-900 bg-blue-900/5 px-2 py-0.5 rounded border border-blue-900/10">
                  {prod.csi}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-3">{prod.title}</h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{prod.description}</p>
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {prod.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[10px] text-slate-600 font-semibold">
                      <Check className="h-3.5 w-3.5 text-blue-900 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <Link
                  href={`/products/${prod.title.toLowerCase().includes("sliding") ? "sliding" : prod.title.toLowerCase().includes("swing") ? "swing" : prod.title.toLowerCase().includes("revolving") ? "revolving" : prod.title.toLowerCase().includes("telescopic") ? "telescopic" : prod.title.toLowerCase().includes("hermetic") ? "hermetic" : prod.title.toLowerCase().includes("hospital") ? "hospital" : prod.title.toLowerCase().includes("retail") ? "retail" : "commercial"}`}
                  className="inline-flex items-center gap-1 text-[10px] text-blue-900 font-bold uppercase hover:text-blue-800 transition-colors"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  Specs & Details
                </Link>
                <Link
                  href="/contact#quote"
                  className="text-[10px] font-bold text-slate-400 hover:text-blue-900 transition-colors"
                >
                  Get Pricing
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Product Comparison Matrix */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Engineering Comparison</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
              Entrance System Capability Matrix
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 leading-relaxed">
              Technical parameters to guide architects and contractors in selecting the correct automated openings.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-900 text-white uppercase font-bold tracking-wider text-[10px]">
                  <th className="p-4 sm:p-5">Entrance Type</th>
                  <th className="p-4 sm:p-5">Pedestrian Traffic Capacity</th>
                  <th className="p-4 sm:p-5">ADA Compliance Rating</th>
                  <th className="p-4 sm:p-5">Clear Opening Width Limits</th>
                  <th className="p-4 sm:p-5">Recommended Industries</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-semibold">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 text-slate-900 font-bold">Automatic Sliding Doors</td>
                  <td className="p-4 sm:p-5">High to Continuous</td>
                  <td className="p-4 sm:p-5">Fully Compliant (A156.10)</td>
                  <td className="p-4 sm:p-5">36&quot; to 96&quot; (Bi-Parting)</td>
                  <td className="p-4 sm:p-5">Retail, Healthcare, Commercial</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 text-slate-900 font-bold">Swing Door Operators</td>
                  <td className="p-4 sm:p-5">Low to Medium</td>
                  <td className="p-4 sm:p-5">Fully Compliant (A156.19)</td>
                  <td className="p-4 sm:p-5">32&quot; to 48&quot; (Single Leaf)</td>
                  <td className="p-4 sm:p-5">Hospitals, Corridors, Office Entries</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 text-slate-900 font-bold">Automatic Revolving Doors</td>
                  <td className="p-4 sm:p-5">Continuous (Maximum Volume)</td>
                  <td className="p-4 sm:p-5">Compliant (Safety Assist)</td>
                  <td className="p-4 sm:p-5">Varies (6ft to 12ft Diameter)</td>
                  <td className="p-4 sm:p-5">Hotels, Airport Terminals, Banks</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 text-slate-900 font-bold">Telescopic Sliding Doors</td>
                  <td className="p-4 sm:p-5">High</td>
                  <td className="p-4 sm:p-5">Fully Compliant (A156.10)</td>
                  <td className="p-4 sm:p-5">48&quot; to 120&quot; (Multi-Panel)</td>
                  <td className="p-4 sm:p-5">Airports, Cleanrooms, Narrow Entrances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Industries Served Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Sectors & Facilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Engineering Entrances for Every Industry
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Pedestrian doors dictate security and thermal insulation. We deploy specialized opening assemblies configured for the operating pressures and regulatory codes of specific commercial industries.
            </p>
            <div className="pt-4">
              <Link
                href="/industries"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase hover:text-blue-800 transition-colors"
              >
                Explore Industry Configurations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {INDUSTRIES_SERVED.map((ind) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.02, borderColor: "rgba(15, 46, 92, 0.25)" }}
                key={ind.name}
                className="p-5 border border-slate-200 rounded bg-white hover:shadow-sm transition-all duration-300"
              >
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{ind.name}</h4>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. Project Showcase Gallery */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Omega Installations</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
                Architectural Project Showcase
              </h2>
            </div>
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded transition-all shrink-0"
            >
              View Full Gallery
            </Link>
          </div>

          {/* Project Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -4 }}
              className="bg-slate-950 border border-slate-850 p-6 rounded"
            >
              <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Healthcare</div>
              <h3 className="text-sm font-bold text-white mt-2">St. Jude Medical ICU Pavilion</h3>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Installed 18 hermetically sealed manual breakout ICU sliders (Series 08-ICU) and low-energy automatic swing operators to automate corridor entrances.
              </p>
              <div className="mt-4 text-[10px] text-slate-500 font-bold font-mono">Completed: 2025 | Spec: Division 08 42 43</div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -4 }}
              className="bg-slate-950 border border-slate-850 p-6 rounded"
            >
              <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Aviation</div>
              <h3 className="text-sm font-bold text-white mt-2">Metro International Airport Terminal 3</h3>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Rebuilt the baggage claim entrance using 8 high-traffic bi-parting sliding doors (Series 2000) and 4 heavy-duty three-wing automatic revolving doors.
              </p>
              <div className="mt-4 text-[10px] text-slate-500 font-bold font-mono">Completed: 2026 | Spec: Division 08 42 33</div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -4 }}
              className="bg-slate-950 border border-slate-850 p-6 rounded"
            >
              <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Corporate</div>
              <h3 className="text-sm font-bold text-white mt-2">Dominion Financial Tower Lobby</h3>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Designed a custom 14-foot architectural glass facade vestibule integrated with automatic telescopic glass sliding systems and access controllers.
              </p>
              <div className="mt-4 text-[10px] text-slate-500 font-bold font-mono">Completed: 2024 | Spec: Division 08 42 36</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Technical Specifications & Safety Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Safety Certifications</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
                Safety and Building Code Compliance
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Entrance safety is a primary liability. Omega designs all automatic openings to meet and exceed ANSI/BHMA testing procedures, ensuring commercial facilities remain compliant with fire safety and accessibility codes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">UL 325 Listed</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Electrical safety standards tested by underwriters laboratories.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">AAADM Inspections</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Mandatory safety checks performed by factory certified inspectors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded border border-slate-200/80">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">ANSI/BHMA Standards</h3>
            <div className="space-y-4">
              {COMPLIANCE_ITEMS.map((item) => (
                <div key={item.title} className="p-4 bg-white border border-slate-200/60 rounded">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">{item.title}</div>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Installation Process & Service Network */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Omega Service Fleet</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                24/7 Commercial Support Network
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Automatic door failures block building entrances and create safety hazards. Omega operates a national fleet of AAADM-certified technicians providing preventive maintenance and emergency repair service calls.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all inline-block shadow-sm"
                >
                  Schedule Service Call
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 p-5 rounded">
                <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center text-blue-900 mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">2 Hour Dispatch</h3>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                  Rapid dispatch for commercial contract clients facing emergency exit door lockups or sensor failure blocks.
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded">
                <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center text-blue-900 mb-4">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AAADM Technicians</h3>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                  All repairs are certified to ANSI standards by factory-trained technicians carrying structural spares.
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded">
                <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center text-blue-900 mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">PM Service Contracts</h3>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                  Planned maintenance schedules providing cleaning, sensor calibrations, and structural checkups to prevent wear.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Quote Request / Detailed Lead Form Section */}
      <section id="quote" className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
        <div className="bg-white border border-slate-200 shadow-md rounded p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Request Architectural Bid</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">Request Quote & Specification Bids</h2>
            <p className="text-slate-500 text-xs mt-3 leading-relaxed">
              Submit your project blueprints, door schedules, or CSI specification requirements. Our estimating engineers deliver quotes in 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">First & Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Company / Agency</label>
                <input
                  type="text"
                  required
                  placeholder="Vanguard Contracting Corp"
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="j.smith@vanguard.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Telephone Number</label>
                <input
                  type="text"
                  required
                  placeholder="1-555-789-0122"
                  className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Entrance Project Scope</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your opening dimensions, door schedule, estimated cycle count, or request customized CSI specifications..."
                className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <span className="text-[10px] text-slate-400">
                🔒 Data security: Information is used solely for commercial estimation proposals.
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-sm shrink-0 cursor-pointer"
              >
                Submit Project Estimation Request
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}