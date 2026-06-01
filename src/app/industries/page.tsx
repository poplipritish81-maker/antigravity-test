"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Building } from "lucide-react";

interface IndustryItem {
  id: string;
  title: string;
  desc: string;
  standard: string;
  bullets: string[];
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare & Hospitals",
    desc: "Surgical corridors, cleanroom laboratories, and patient ICU zones demand strict infection control and touchless activation. We engineer hermetically sealed pressure sliders and manual breakout patient doors that ensure ADA barrier-free access and smoke-containment compliance.",
    standard: "NFPA 105 & Joint Commission Compliant",
    bullets: [
      "ICU manual breakout doors for immediate patient bed transfers",
      "Touchless wave-to-open sensors to preserve surgical hygiene",
      "Hermetically sealed gaskets to maintain laboratory room pressure"
    ]
  },
  {
    id: "aviation",
    title: "Aviation & Airports",
    desc: "Airport baggage claims, security check gates, and terminal entrances operate continuously under severe load. Our automatic revolving doors and telescopic sliders are engineered with structural tracking and smart sensors to manage heavy pedestrian surges safely.",
    standard: "ANSI A156.10 High-Traffic Tested",
    bullets: [
      "Multi-point presence safety sensors prevent passenger entrapment",
      "Continuous cycle-tested sliding doors with heavy-duty carriage rollers",
      "Panic breakout revolving wings that fold flat during emergency evacuation"
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality & Hotels",
    desc: "First impressions are vital. We design grand architectural automatic revolving entrances and luxury glass storefront vestibules that enhance lobby acoustics, eliminate exterior street drafts, and reduce building thermal losses.",
    standard: "Custom Architectural Finishes Available",
    bullets: [
      "Power-assist revolving door configurations with speed control limits",
      "Custom anodized, brass, or corporate color cladding finishes",
      "Narrow-profile glass joints maximizing interior lobby natural light"
    ]
  },
  {
    id: "retail",
    title: "Retail & Shopping Centers",
    desc: "Retail entrances must endure constant cart collisions, seasonal weather gusts, and continuous traffic. Omega automatic sliding storefront packages combine cost-effective building draft mitigation with robust steel bumper guards.",
    standard: "ADA Compliant Entryways",
    bullets: [
      "Integrated structural buffer rails to absorb shopping cart bumps",
      "High-speed drive operators that close quickly to block wind gusts",
      "Bi-parting entrances offering wide opening clearances for shoppers"
    ]
  },
  {
    id: "corporate",
    title: "Corporate & Government Offices",
    desc: "Streamline secure employee routing with automated entrances integrated into security badges, card readers, and fire alarm networks. We construct complete exterior facade vestibules that maintain clean architectural lines.",
    standard: "Security Access Control Ready",
    bullets: [
      "Dry-glaze structural glass panels engineered for wind loads",
      "Bidirectional interface with Okta, SAML, and physical card badges",
      "Fail-safe automatic lockouts during emergency building alerts"
    ]
  }
];

export default function IndustriesPage() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Sectors We Support</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Entrance Automation Industries</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Omega Automatics delivers sector-specific entrance packages engineered to meet local building codes, HVAC requirements, and security criteria.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INDUSTRIES_LIST.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="border border-slate-200 p-6 sm:p-8 rounded bg-white shadow-sm flex flex-col justify-between hover:border-blue-900/30 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center text-blue-900">
                    <Building className="h-5 w-5" />
                  </div>
                  <span className="text-[9px] font-bold text-blue-900 bg-blue-900/5 border border-blue-900/10 px-2 py-0.5 rounded">
                    {ind.standard}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mt-5">{ind.title}</h2>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{ind.desc}</p>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-5">
                <ul className="space-y-2">
                  {ind.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-[11px] text-slate-600 font-semibold leading-normal">
                      <CheckCircle2 className="h-4 w-4 text-blue-900 shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom requirements */}
        <div className="border border-slate-200 rounded p-6 sm:p-10 bg-slate-50 text-center">
          <ShieldCheck className="h-10 w-10 text-blue-900 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Need a Custom Industry Entrance Setup?</h2>
          <p className="text-slate-500 text-xs mt-3 max-w-xl mx-auto leading-relaxed">
            Our estimating engineers consult directly with architectural firms and general contractors to customize structural dimensions, glass thermal values, and safety compliance setups.
          </p>
          <div className="mt-6">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm"
            >
              Consult with estimation team
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
