import React from "react";
import Link from "next/link";
import { Cpu, MessageSquare, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Automation & CX Features",
  description: "Explore Omega Automatics solutions. Learn about Workflow Automation, Omni-channel Support Desks, and automated review management pipelines.",
};

const SOLUTIONS_DETAIL = [
  {
    id: "automation",
    badge: "Process Optimization",
    title: "Workflow Automation Platform",
    desc: "Build cross-application automation flows in seconds. Connect webhooks, configure complex branch logic, schedule sync intervals, and monitor active pipelines from an intuitive drag-and-drop builder interface.",
    features: [
      "Dynamic webhook triggers and conditional filters",
      "OAuth API integrations for all leading CRMs",
      "Fail-safe execution logs and history recovery",
      "High-throughput data queueing and load balancing"
    ],
    bgIcon: <Cpu className="h-44 w-44 text-indigo-500/5" />
  },
  {
    id: "support",
    badge: "Customer Success",
    title: "Omni-channel CX Support Desk",
    desc: "Unify your support channels in a single workspace. Give agents a single stream containing live WebChat, Email queries, SMS alerts, and Slack threads. Keep chat histories tight and prevent context rot.",
    features: [
      "Consolidated multi-channel shared inbox",
      "Slack-first thread synchronization",
      "Dynamic agent routing and load allocation",
      "Pre-rendered FAQ article integration triggers"
    ],
    bgIcon: <MessageSquare className="h-44 w-44 text-emerald-500/5" />
  },
  {
    id: "reviews",
    badge: "Brand Reputation",
    title: "Review & Reputation Management",
    desc: "Auto-sync reviews from Google Business, Trustpilot, G2, and Capterra. Automatically analyze sentiment, instantly alert managers to critical 1-star reviews, and generate contextual AI response drafts in seconds.",
    features: [
      "Multi-platform directory rating synchronization",
      "AI semantic sentiment risk scoring",
      "Slack/email alert triggers for negative reviews",
      "Auto-response generator and templates editor"
    ],
    bgIcon: <Layers className="h-44 w-44 text-amber-500/5" />
  }
];

export default function SolutionsPage() {
  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Designed for Operational Excellence
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Eliminate isolated support tools and messy data pipelines. Omega unites workflow design, omnichannel user messaging, and reputation tracking in a single luxury interface.
          </p>
        </div>

        {/* Detailed Solutions list */}
        <div className="space-y-16">
          {SOLUTIONS_DETAIL.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`relative rounded-3xl border border-zinc-850 bg-zinc-900/30 p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-center overflow-hidden hover:border-zinc-800 transition-all duration-300 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Backing decorative icon */}
              <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-40 group-hover:scale-105 transition-transform duration-500">
                {sol.bgIcon}
              </div>

              <div className="flex-1 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">{sol.badge}</span>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-2 tracking-tight">{sol.title}</h2>
                <p className="text-xs text-zinc-450 mt-4 leading-relaxed">{sol.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact#book-demo"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
                  >
                    Request Demo
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border border-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold hover:bg-zinc-900/50 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full z-10 border-t md:border-t-0 md:border-l border-zinc-850/80 pt-6 md:pt-0 md:pl-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-4">Core Functionality</span>
                <ul className="space-y-3">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl border border-indigo-500/10 bg-gradient-to-br from-indigo-950/15 to-zinc-950 p-8 sm:p-12 text-center mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Need a Custom Automation Flow?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Our engineers can design customized webhooks, integrations, and escalation workflows during a private architecture consultation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#book-demo"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer animate-pulse"
            >
              Consult with an Architect
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
