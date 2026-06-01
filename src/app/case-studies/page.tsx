import React from "react";
import Link from "next/link";
import { Clock, ShieldCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Customer Success Metrics",
  description: "Read how companies like SaaSify, GlobalCart, and CareNetwork scale B2B automation and omnichannel CX using Omega Automatics.",
};

const CASES = [
  {
    client: "SaaSify Inc.",
    logo: "S",
    vertical: "B2B SaaS / Developer Tools",
    kpiValue: "+42%",
    kpiDesc: "Increase in Trial Conversion Rate",
    metric1: "5x Faster Support Resolution",
    metric2: "94% CSAT Rating Score",
    summary: "SaaSify was struggling with slow bug escalations and trial churn. By deploying Omega's automated Jira routes and sentiment tracking, they unified support queues and automated customer apology discounts.",
    quote: "\"Omega transformed how our developer care and engineering teams coordinate. We recovered 150+ high-value accounts in the first 30 days.\"",
    author: "Elena Rostova, VP of Customer Success"
  },
  {
    client: "GlobalCart",
    logo: "G",
    vertical: "Retail & E-commerce",
    kpiValue: "$1.4M",
    kpiDesc: "Recovered Revenue in 6 Months",
    metric1: "28% Cart Recovery Rate",
    metric2: "+35% Review Capture Boost",
    summary: "GlobalCart integrated Shopify cart abandons and shipment trackers into Omega workflows. They automated personalized SMS discount recovery codes and auto-solicited post-delivery review submissions.",
    quote: "\"The post-purchase automated review pipeline alone paid for the entire platform license within our first week of operation.\"",
    author: "Marcus Aurelius, Founder & Operations Dir."
  },
  {
    client: "CareNetwork",
    logo: "C",
    vertical: "Healthcare / Patient Portals",
    kpiValue: "-32%",
    kpiDesc: "Decrease in Patient Appointment No-Shows",
    metric1: "100% HIPAA Compliance Score",
    metric2: "45% Lower Admin Support Time",
    summary: "CareNetwork wanted secure patient appointment coordination and accessibility rating audits. They used Omega's HIPAA-compliant encryption pipelines to trigger alerts and automate satisfaction surveys.",
    quote: "\"Omega automated patient communications securely, removing administrative burden from clinic coordinators completely.\"",
    author: "Dr. Sarah Jenkins, Operations Advisor"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Glow background */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Success Stories</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Real Customer Success. Proven Metrics.
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            See how high-growth startups and enterprise operations use Omega&apos;s automation engine to decrease ticket volume, improve rating reviews, and boost conversion rates.
          </p>
        </div>

        {/* Case Studies list */}
        <div className="space-y-12">
          {CASES.map((cs) => (
            <div
              key={cs.client}
              className="bg-zinc-900/30 border border-zinc-850 rounded-3xl p-8 hover:border-zinc-800 transition-all duration-300 flex flex-col lg:flex-row gap-8 items-stretch"
            >
              {/* Left Column: Big metric */}
              <div className="lg:w-1/3 bg-zinc-950 border border-zinc-850/80 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-black text-white shadow">
                    {cs.logo}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mt-4">{cs.vertical}</span>
                </div>

                <div className="my-6">
                  <div className="text-4xl sm:text-5xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                    {cs.kpiValue}
                  </div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1 leading-normal max-w-[180px]">
                    {cs.kpiDesc}
                  </p>
                </div>

                <div className="w-full border-t border-zinc-850/60 pt-4 flex flex-col gap-2">
                  <div className="text-[10px] font-bold text-zinc-400 flex items-center gap-1.5 justify-center">
                    <Clock className="h-3.5 w-3.5 text-indigo-500" />
                    {cs.metric1}
                  </div>
                  <div className="text-[10px] font-bold text-zinc-400 flex items-center gap-1.5 justify-center">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    {cs.metric2}
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Quote */}
              <div className="lg:w-2/3 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">{cs.client} Case Study</h2>
                  <p className="text-xs text-zinc-450 mt-3 leading-relaxed">{cs.summary}</p>
                </div>

                <div className="mt-6 border-t border-zinc-850/60 pt-6">
                  <blockquote className="text-xs text-zinc-300 italic leading-relaxed">
                    {cs.quote}
                  </blockquote>
                  <cite className="text-[10px] text-zinc-500 font-bold uppercase block mt-3 not-italic">
                    — {cs.author}
                  </cite>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-8 sm:p-12 text-center mt-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Ready to Write Your Success Story?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Schedule a solutions roadmap call. We will audit your current support setup, outline automation opportunities, and forecast performance savings.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#book-demo"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Book a Strategy Call
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
