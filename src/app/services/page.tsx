import React from "react";
import Link from "next/link";
import { Wrench, Rocket, GraduationCap, Headphones, ArrowRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Services",
  description: "Accelerate your setup with Omega Automatics Professional Services. Bespoke API integrations, custom onboarding, and SLA-backed support.",
};

const SERVICES = [
  {
    title: "Bespoke API Integrations",
    desc: "Our senior solutions engineers design custom data bridges connecting your proprietary internal databases and legacy CRMs straight into Omega pipelines.",
    icon: <Wrench className="h-6 w-6 text-indigo-400" />,
    specs: ["Custom OAuth flows", "Real-time webhook sync", "High-throughput database piping", "Enterprise security audits"]
  },
  {
    title: "CX Strategy & Implementation",
    desc: "Accelerate your transition. We audit your existing support workflows, design efficient response rules, and map automation triggers to reduce response times by 80%.",
    icon: <Rocket className="h-6 w-6 text-emerald-400" />,
    specs: ["SLA target mapping", "Automated escalation routing", "AI response drafting templates", "Reputation score strategies"]
  },
  {
    title: "Dedicated TAM & SLA Support",
    desc: "Get priority access. Enterprise accounts get a dedicated Technical Account Manager (TAM) and guaranteed 15-minute response times under formal SLAs.",
    icon: <Headphones className="h-6 w-6 text-amber-400" />,
    specs: ["24/7/365 priority phone/Slack access", "Quarterly business reviews", "Incident response monitoring", "Root-cause analysis logs"]
  },
  {
    title: "Enterprise Training Workshops",
    desc: "Equip your operations and support staff. We host custom training sessions, workspace configuration walkthroughs, and custom handbook creation.",
    icon: <GraduationCap className="h-6 w-6 text-pink-400" />,
    specs: ["Live instructor-led cohorts", "Recorded custom tutorials", "Workflows playground exercises", "Operations certifications"]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Services & Support</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Accelerate Integration, Maximize Value
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Ensure custom integrations, optimized workflow architectures, and priority support. Partner with our dedicated systems engineers to configure a platform tailored to your exact business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((srv) => (
            <div key={srv.title} className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-3xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
              <div>
                <div className="h-12 w-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-5 border border-zinc-850 shadow-inner">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-white">{srv.title}</h3>
                <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed">{srv.desc}</p>
              </div>

              <div className="border-t border-zinc-850/60 mt-6 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-3">Service Deliverables</span>
                <ul className="space-y-2">
                  {srv.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-zinc-400">
                      <ShieldCheck className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action banner */}
        <div className="rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">Need a Custom Solutions Architecture?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Our enterprise architects are available to map custom data schemas, plan pipeline logic, and outline transition timelines.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact#book-demo"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Book an Advisory Session
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
