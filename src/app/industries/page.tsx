import React from "react";
import Link from "next/link";
import { Cpu, ShoppingCart, ShieldAlert, BadgeDollarSign, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Omega Automatics",
  description: "Learn how Omega Automatics builds custom B2B automation and omnichannel CX solutions for SaaS, E-commerce, Healthcare, and Finance.",
};

const INDUSTRIES = [
  {
    id: "saas",
    title: "B2B SaaS & Tech",
    desc: "Accelerate user activation and drive self-serve conversions. Connect sign-up events directly to onboarding campaigns, route bugs to engineering teams in Jira, and auto-engage low-activity accounts to prevent churn.",
    kpi: "38% Reduction in Churn Rate",
    icon: <Cpu className="h-6 w-6 text-indigo-400" />,
    bullets: ["Auto-route bugs to developer backlogs", "In-app support and Slack notifications", "Sentiment alerts for VIP enterprise trials"]
  },
  {
    id: "ecommerce",
    title: "Retail & E-commerce",
    desc: "Turn transactional events into marketing opportunities. Recover abandoned carts with instant SMS promotions, send shipping updates directly to WhatsApp, and collect positive ratings post-delivery automatically.",
    kpi: "18% Spike in Cart Recovery",
    icon: <ShoppingCart className="h-6 w-6 text-emerald-400" />,
    bullets: ["Instant SMS and WhatsApp cart alerts", "Post-purchase automatic review loops", "Seamless Shopify/Magento product sync"]
  },
  {
    id: "healthcare",
    title: "Healthcare Access",
    desc: "HIPAA-compliant B2B workflow systems. Schedule client onboarding, distribute check-up reminders securely, gather patient accessibility ratings, and automate administrative follow-ups safely.",
    kpi: "45% Lower Administrative Load",
    icon: <ShieldAlert className="h-6 w-6 text-amber-400" />,
    bullets: ["End-to-end data encryption", "Secure scheduling integration", "Patient satisfaction feedback audits"]
  },
  {
    id: "finance",
    title: "Financial Services",
    desc: "Secure automation for onboarding, compliance monitoring, and client care. Automatically flag VIP clients needing human assistance and orchestrate transactional advisory reports safely.",
    kpi: "99.99% Compliance Security Uptime",
    icon: <BadgeDollarSign className="h-6 w-6 text-sky-400" />,
    bullets: ["Strict multi-tenant security controls", "Automated client onboarding alerts", "Audit trails for all workflow executions"]
  }
];

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Target Verticals</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Tailored for High-Growth Verticals
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Every industry has unique workflow pipelines and compliance parameters. Omega provides pre-configured templates and custom integrations optimized for your industry&apos;s standards.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-3xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 relative overflow-hidden group"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="h-11 w-11 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-850">
                    {ind.icon}
                  </div>
                  <span className="text-[9px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase">
                    {ind.kpi}
                  </span>
                </div>
                <h2 className="text-base font-bold text-white mt-5">{ind.title}</h2>
                <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed">{ind.desc}</p>
              </div>

              <div className="border-t border-zinc-850/60 mt-6 pt-5">
                <ul className="space-y-2">
                  {ind.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Need a Custom Industry Configuration?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Connect with our systems integration engineers to outline custom schema designs, data storage parameters, and compliant security safeguards.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#book-demo"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Consult with our Solutions Team
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
