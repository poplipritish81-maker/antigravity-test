"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  desc: string;
  priceMonthly: number;
  priceAnnually: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    desc: "Essential automation and support for growing teams.",
    priceMonthly: 49,
    priceAnnually: 39,
    features: [
      "Up to 15 active workflows",
      "Consolidated email & live chat support desk",
      "1 Google Reviews sync integration",
      "Standard analytics dashboard",
      "1,000 automated actions / mo"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Pro",
    desc: "Advanced multi-channel workflows and reputation intelligence.",
    priceMonthly: 149,
    priceAnnually: 119,
    features: [
      "Unlimited active workflows",
      "Email, live chat, SMS, and Slack support desk",
      "Sync Google, Trustpilot, G2, and Capterra",
      "AI Sentiment Classification engine",
      "25,000 automated actions / mo",
      "Priority customer care channel access"
    ],
    cta: "Get Started Now",
    popular: true
  },
  {
    name: "Enterprise",
    desc: "Bespoke integrations, custom scale, and SLA-backed safety.",
    priceMonthly: 499,
    priceAnnually: 399,
    features: [
      "Bespoke system API integrations",
      "Dedicated Technical Account Manager (TAM)",
      "Guaranteed 15-minute response time SLA",
      "SOC 2 compliance certification audits",
      "Unlimited automated actions",
      "Custom employee training workshops"
    ],
    cta: "Contact Enterprise Sales"
  }
];

const FEATURES_MATRIX = [
  { name: "Active Workflows", starter: "15", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Support Channels", starter: "Email & Chat", pro: "Email, Chat, SMS, Slack", enterprise: "All Channels + Phone" },
  { name: "Review Platforms Sync", starter: "1 Platform", pro: "4 Platforms", enterprise: "All Platforms + Custom" },
  { name: "AI Response Drafting", starter: "—", pro: "Included", enterprise: "Bespoke Tuning" },
  { name: "Response SLA Guarantee", starter: "—", pro: "—", enterprise: "15-Minute Guaranteed" },
  { name: "Dedicated TAM", starter: "—", pro: "—", enterprise: "Included" },
  { name: "HIPAA Compliance Mode", starter: "—", pro: "Optional Add-on", enterprise: "Included" }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");

  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Glow effect */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Simple Pricing</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Plans Built to Scale With Your Team
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            All plans include core workflow monitoring. Choose a plan to unlock advanced multi-channel support channels, AI sentiment filters, and custom API connections.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center items-center gap-3">
            <span className={`text-xs font-semibold ${billingCycle === "monthly" ? "text-white" : "text-zinc-500"}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
              aria-label="Toggle Billing Cycle"
              className="w-12 h-6 bg-zinc-800 rounded-full p-0.5 relative transition-colors cursor-pointer"
            >
              <div
                className={`w-5 h-5 bg-indigo-600 rounded-full transition-all ${
                  billingCycle === "annually" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${billingCycle === "annually" ? "text-white" : "text-zinc-500"} flex items-center gap-1.5`}>
              Billed Annually
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
          {PLANS.map((plan) => {
            const price = billingCycle === "annually" ? plan.priceAnnually : plan.priceMonthly;
            return (
              <div
                key={plan.name}
                className={`glow-border bg-zinc-900/30 border rounded-3xl p-6 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  plan.popular
                    ? "border-indigo-500/30 shadow-xl shadow-indigo-500/5 bg-gradient-to-b from-zinc-900/60 via-zinc-950 to-zinc-950"
                    : "border-zinc-850/60 hover:border-zinc-800"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider uppercase text-white bg-indigo-600 px-3 py-1 rounded-full shadow-md z-20">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="text-base font-bold text-white mt-2">{plan.name}</div>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed min-h-[40px]">{plan.desc}</p>
                  
                  {/* Price */}
                  <div className="mt-5 flex items-baseline">
                    <span className="text-3xl font-black text-white">${price}</span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-medium">/ user / mo</span>
                  </div>
                  {billingCycle === "annually" && (
                    <span className="text-[9px] font-semibold text-emerald-400 block mt-1">Billed annually (${price * 12}/yr)</span>
                  )}

                  {/* Feature list */}
                  <ul className="mt-6 space-y-3.5 border-t border-zinc-850/60 pt-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal">
                        <Check className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/contact#book-demo"}
                    className={`block w-full py-2.5 rounded-xl text-center text-xs font-semibold transition-all ${
                      plan.popular
                        ? "btn-glow bg-indigo-600 text-white"
                        : "bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="border-t border-zinc-900/60 pt-16 mb-16">
          <h2 className="text-xl sm:text-2xl font-black text-white text-center mb-8">Compare Plan Features</h2>
          <div className="glow-border overflow-x-auto border border-zinc-850/60 rounded-2xl bg-zinc-900/10">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-850 bg-zinc-900/50 font-bold text-white">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5">Starter</th>
                  <th className="p-4 sm:p-5">Pro</th>
                  <th className="p-4 sm:p-5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-850/40 text-zinc-300 font-medium">
                {FEATURES_MATRIX.map((row) => (
                  <tr key={row.name} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 sm:p-5 text-white font-semibold">{row.name}</td>
                    <td className="p-4 sm:p-5">{row.starter}</td>
                    <td className="p-4 sm:p-5">{row.pro}</td>
                    <td className="p-4 sm:p-5">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
