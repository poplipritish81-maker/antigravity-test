import React from "react";
import Link from "next/link";
import { Clock, ShieldCheck, ArrowRight, Building, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrance Automation Case Studies | Omega Automatics",
  description: "Read how Omega Automatics designs and installs automatic doors across aviation, healthcare, retail, and corporate high-rise projects.",
};

const CASES = [
  {
    client: "Metro International Airport Terminal 3",
    logo: "M",
    vertical: "Aviation & Terminals",
    kpiValue: "-14%",
    kpiDesc: "Reduction in Lobby HVAC Expenditure",
    metric1: "22.4M Annual Cycle Load Limit",
    metric2: "Miami-Dade Wind-Load Certified",
    summary: "Managing climate control inside an airport terminal with millions of travelers is a severe engineering challenge. Omega replaced broken slide systems with 4 heavy-duty Series 9000 revolving doors, forming an airtight thermal seal that prevented drafts and stabilized lobby temperatures.",
    challenge: "High pedestrian traffic leading to constant draft-induced HVAC energy losses and structural guide alignment wear.",
    solution: "Airlock revolving configurations paired with telescopic automatic slider backups for peak travel surges.",
    quote: "\"Omega's revolving doors solved our vestibule draft issues overnight. The temperature in the main lobby remains perfectly stable regardless of external winds.\"",
    author: "Douglas Vance, Chief Facilities Officer"
  },
  {
    client: "St. Jude Hospital ICU Pavilion",
    logo: "H",
    vertical: "Healthcare & Isolation Wards",
    kpiValue: "99.9%",
    kpiDesc: "Airtight Pressure Containment Rating",
    metric1: "NFPA 105 Smoke-Leakage Compliant",
    metric2: "0\" Flush Floor Track Guides",
    summary: "Isolation rooms and surgical suites require absolute infection control. Omega engineered a custom package of 18 hermetically compressed automatic sliding door systems. Flush floor guide rails prevent patient gurney bumps while maintaining airtight room seal compression.",
    challenge: "Maintaining strict air isolation pressures while accommodating rapid bed transport and wheelchair ADA clearances.",
    solution: "Hermetic compress-and-drop sliding systems coupled with manual override panic breakout capabilities.",
    quote: "\"The flush trackless floor design has completely eliminated gurney transport vibrations. The airtight seals perform well above cleanroom thresholds.\"",
    author: "Dr. Evelyn Ross, P.Eng, Medical Operations Director"
  },
  {
    client: "Dominion Financial Tower Lobby",
    logo: "D",
    vertical: "Corporate & Commercial High-Rise",
    kpiValue: "+33%",
    kpiDesc: "Increase in Peak Traffic Flow Width",
    metric1: "Integrated SAML Access Controls",
    metric2: "14-Foot Custom Glass Facade",
    summary: "Dominion needed to integrate secure employee badge entry controls without blocking high-volume commuter flows. Omega designed a custom structural glass storefront facade integrating space-saving bi-parting telescopic automatic sliders.",
    challenge: "Severe corridor space limits and high pedestrian commute surges requiring custom badge reader synchronizations.",
    solution: "Synchronized multi-panel telescopic doors interfaced directly with Okta and physical card access systems.",
    quote: "\"Omega coordinated with our security providers and glaziers seamlessly. The telescopic sliders maximize the entryway path beautifully.\"",
    author: "Marcus Sterling, Lead Architect & Project Developer"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Project Performance</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Engineering Case Studies</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Examine the structural parameters, challenge resolutions, and measured HVAC and flow metrics achieved across our main commercial automatic door installations.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Proven Operational Efficiency</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight uppercase">
            Real-World Entrance Upgrades
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-4 leading-relaxed">
            All case studies detail actual installations commissioned by factory-certified AAADM inspectors.
          </p>
        </div>

        {/* Case Studies list */}
        <div className="space-y-16">
          {CASES.map((cs, idx) => (
            <div
              key={cs.client}
              className={`border border-slate-200 rounded p-6 sm:p-10 bg-white shadow-sm flex flex-col lg:flex-row gap-10 items-stretch ${
                idx % 2 === 1 ? "lg:flex-row-reverse bg-slate-50/40" : ""
              }`}
            >
              {/* Left Column: Big metric */}
              <div className="lg:w-1/3 bg-slate-55 bg-slate-50 border border-slate-200 rounded p-6 flex flex-col justify-between items-center text-center">
                <div className="w-full">
                  <div className="h-12 w-12 rounded bg-blue-900 flex items-center justify-center font-bold text-white shadow mx-auto">
                    {cs.logo}
                  </div>
                  <span className="text-[9px] text-blue-900 font-bold uppercase tracking-wider block mt-4 bg-blue-900/5 px-2 py-0.5 border border-blue-900/10 rounded">{cs.vertical}</span>
                </div>

                <div className="my-8">
                  <div className="text-5xl font-black text-blue-900 tracking-tight">
                    {cs.kpiValue}
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mt-2 leading-snug max-w-[200px] mx-auto">
                    {cs.kpiDesc}
                  </p>
                </div>

                <div className="w-full border-t border-slate-200 pt-4 flex flex-col gap-2">
                  <div className="text-[10px] font-semibold text-slate-600 flex items-center gap-1.5 justify-center">
                    <Clock className="h-4 w-4 text-blue-900" />
                    {cs.metric1}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 flex items-center gap-1.5 justify-center">
                    <ShieldCheck className="h-4 w-4 text-blue-900" />
                    {cs.metric2}
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Quote */}
              <div className="lg:w-2/3 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{cs.client}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{cs.summary}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div className="p-3 bg-slate-50 rounded border border-slate-200/50">
                      <div className="text-[9px] uppercase font-bold text-slate-400 flex items-center gap-1">
                        <Building className="h-3.5 w-3.5 text-blue-900" />
                        The Challenge:
                      </div>
                      <p className="text-[10px] text-slate-600 font-semibold mt-1 leading-normal">{cs.challenge}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border border-slate-200/50">
                      <div className="text-[9px] uppercase font-bold text-slate-400 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-blue-900" />
                        The Solution:
                      </div>
                      <p className="text-[10px] text-slate-600 font-semibold mt-1 leading-normal">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <blockquote className="text-xs text-slate-600 italic leading-relaxed pl-4 border-l-2 border-blue-900 bg-slate-50/50 py-2.5 pr-2">
                    {cs.quote}
                  </blockquote>
                  <cite className="text-[9px] text-slate-400 font-bold uppercase block mt-3 not-italic pl-4">
                    — {cs.author}
                  </cite>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Estimation CTA Banner */}
        <div className="rounded border border-slate-200 bg-slate-50 p-8 sm:p-12 text-center mt-20">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Need a Custom Entrance Study for Your Bid?</h2>
          <p className="text-slate-500 text-xs mt-3 max-w-lg mx-auto leading-relaxed font-semibold">
            Our specifications group will review your drawings to supply traffic reports, energy-saving models, and custom section details.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm cursor-pointer"
            >
              Consult with estimation engineers
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
