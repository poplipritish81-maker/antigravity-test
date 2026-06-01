"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Plus,
  Minus
} from "lucide-react";
import { WorkflowDesigner } from "@/components/workflow-designer";
import { IntegrationMarquee } from "@/components/integration-marquee";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What exactly is Omega Automatics?",
    answer: "Omega Automatics is an enterprise-grade customer experience (CX) and B2B workflow automation platform. We help operations, support, and marketing teams connect their services, automate customer recovery flows, analyze reviews, and sync data in real-time without bloated development cycles."
  },
  {
    question: "How does the AI Sentiment analysis work?",
    answer: "Our built-in LLM scanner audits incoming customer feedback, ticket logs, and reviews in real-time. It automatically classifies sentiment (positive, neutral, negative), alerts managers to urgent brand-risk ratings, and drafts contextually accurate, compliant responses."
  },
  {
    question: "Can we integrate with our existing CRMs and Help Desks?",
    answer: "Yes. Omega is designed for seamless connectivity. We integrate out-of-the-box with Salesforce, HubSpot, Zendesk, Stripe, Slack, Shopify, and Jira, allowing bidirectional data synchronization."
  },
  {
    question: "Is Omega HIPAA and GDPR compliant?",
    answer: "Absolutely. Security is our priority. We maintain HIPAA compliance safeguards, strict GDPR user rights guidelines, data encryption at rest and in transit, and multi-tenant access control credentials."
  }
];

const TRUST_LOGOS = [
  { name: "Acme Corp", icon: "A" },
  { name: "Globex", icon: "G" },
  { name: "Initech", icon: "I" },
  { name: "Umbrella", icon: "U" },
  { name: "Hooli", icon: "H" }
];

export default function Home() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden w-full pb-20">
      
      {/* JSON-LD Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Omega Automatics",
            "url": "https://www.omegaautomatics.com",
            "description": "Enterprise B2B Workflow Automation & Omni-Channel CX Support Platform.",
            "sameAs": [
              "https://twitter.com/omegaautomatics",
              "https://linkedin.com/company/omegaautomatics"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-OMEG",
              "contactType": "customer service",
              "email": "support@omega.com"
            }
          })
        }}
      />

      {/* Global layouts are applied by RootLayout in layout.tsx */}

      {/* 1. Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Omni-channel CX & Automation Platform
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
        >
          Connect Customer Workflows. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400">
            Automate Brand Experience.
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Omega Automatics synchronizes customer feedback loops, AI-driven reviews escalation, and operations pipelines in a unified luxury workspace built for the next generation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
        >
          <Link
            href="/contact#book-demo"
            className="btn-glow w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm text-center"
          >
            Request Enterprise Demo
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-1.5"
          >
            View Pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-12 flex justify-center items-center gap-6"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-7 w-7 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                U{i}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
              <span className="text-xs font-bold text-white ml-1.5">4.9 / 5.0 Rating</span>
            </div>
            <p className="text-[10px] text-zinc-500 mt-0.5">Powering CX for 40,000+ businesses globally</p>
          </div>
        </motion.div>

        {/* Hero Visual Mockup Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-4 sm:p-6 backdrop-blur-md shadow-2xl relative max-w-5xl mx-auto"
        >
          {/* Glass Window header */}
          <div className="flex items-center justify-between border-b border-zinc-850 pb-4 mb-6">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="text-[10px] font-mono text-zinc-500 ml-2">omega-cloud-console v2.8</span>
            </div>
            <div className="h-5 w-24 bg-zinc-800/40 rounded-full border border-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* KPI 1 */}
            <div className="bg-zinc-950 border border-zinc-850 rounded-2xl p-4 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Reputation Score</span>
              <div className="text-2xl font-black text-white mt-1">98.4%</div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
                <TrendingUp className="h-3 w-3" /> +2.4% this quarter
              </div>
            </div>
            {/* KPI 2 */}
            <div className="bg-zinc-950 border border-zinc-850 rounded-2xl p-4 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Active Workflows</span>
              <div className="text-2xl font-black text-white mt-1">1,480 / active</div>
              <div className="flex items-center gap-1 text-[10px] text-indigo-400 mt-1">
                <CheckCircle className="h-3 w-3" /> 100% operational uptime
              </div>
            </div>
            {/* KPI 3 */}
            <div className="bg-zinc-950 border border-zinc-850 rounded-2xl p-4 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Average Resolution Time</span>
              <div className="text-2xl font-black text-white mt-1">1m 45s</div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
                <TrendingUp className="h-3 w-3" /> -12s speed optimization
              </div>
            </div>
          </div>

          {/* Large mock graph representation */}
          <div className="mt-4 h-48 bg-zinc-950 border border-zinc-850 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
              <span>Customer Satisfaction (CSAT) vs SLA response time</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Live Telemetry</span>
            </div>
            <div className="flex-grow flex items-end gap-2.5 pt-4">
              {[40, 55, 45, 60, 75, 65, 80, 95, 85, 98].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col gap-1 items-center">
                  <div
                    className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-md transition-all duration-500"
                    style={{ height: `${val * 1.2}px` }}
                  />
                  <span className="text-[8px] font-mono text-zinc-600 mt-1">Q{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Client Logo Cloud */}
      <section className="border-y border-zinc-900/50 py-10 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-6">
            Trusted by operators at world-leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-55">
            {TRUST_LOGOS.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 text-white font-bold text-base tracking-wider hover:opacity-100 transition-opacity">
                <div className="h-6 w-6 rounded bg-zinc-800 flex items-center justify-center text-xs">{logo.icon}</div>
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Omega Automatics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Enterprise Engine</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Why Modern Teams Trust Omega
          </h2>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Legacy support systems bloat your context, slow down operations, and fail to scale. Omega uses atomic workflow segmentation to preserve speed and optimize conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glow-border bg-zinc-900/30 border border-zinc-850/65 p-6 rounded-2xl hover:border-zinc-800 transition-all duration-300">
            <div className="h-10 w-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Advanced Flow Architecture</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Create trigger-based branches for customer actions. Filter ratings, route to queues, and coordinate communications instantly.
            </p>
          </div>
          <div className="glow-border bg-zinc-900/30 border border-zinc-850/65 p-6 rounded-2xl hover:border-zinc-800 transition-all duration-300">
            <div className="h-10 w-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-4">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Omnichannel Communication</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Stream communications across Slack, SMS, Live chat, and Email. Keep historical logs clean and context tight.
            </p>
          </div>
          <div className="glow-border bg-zinc-900/30 border border-zinc-850/65 p-6 rounded-2xl hover:border-zinc-800 transition-all duration-300">
            <div className="h-10 w-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 mb-4">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white">SOC 2 Level Integrity</h3>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Fully compliant data storage, role management, secure integrations, and end-to-end audit history tracking.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Features Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Review Management */}
          <div className="glow-border lg:col-span-2 bg-gradient-to-br from-zinc-900/60 to-zinc-950 border border-zinc-850/65 rounded-3xl p-6 relative overflow-hidden group">
            <div className="max-w-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Reputation Builder</span>
              <h3 className="text-xl font-bold text-white mt-1">Review & Rating Management</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Connect your business profiles across search engines and directories. Auto-escalate negative feedback to support managers, auto-reply to positive feedback using contextual AI models, and drive CSAT up.
              </p>
            </div>
            {/* Visual */}
            <div className="mt-8 bg-zinc-950 border border-zinc-850 rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-[10px] text-zinc-500">
                <span>Google Reviews Stream</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="h-1.5 w-1.5 bg-emerald-500 rounded-full" /> Auto-Synced</span>
              </div>
              <div className="border border-zinc-850 bg-zinc-900/40 rounded-xl p-3 flex justify-between items-start gap-4">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    Sarah Jenkins <span className="text-[9px] text-zinc-500 font-normal">via Google</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 mt-1">&quot;The response speed from support was incredible. Solved my issue in minutes!&quot;</p>
                </div>
                <div className="flex text-amber-500 shrink-0">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
 
          {/* Card 2: AI Sentiment Classifier */}
          <div className="glow-border bg-gradient-to-br from-zinc-900/60 to-zinc-950 border border-zinc-850/65 rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400">AI Engine</span>
              <h3 className="text-xl font-bold text-white mt-1">Sentiment Classifier</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Categorize incoming queries instantly. Flag frustrated or high-churn-risk user emails to prevent SLA breaches.
              </p>
            </div>
            {/* Visual List */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center justify-between p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400">
                <span>&quot;System down, billing failed&quot;</span>
                <span className="text-[9px] font-bold uppercase bg-red-500/20 px-2 py-0.5 rounded-full">Negative</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs text-zinc-400">
                <span>&quot;How do I add a new seat?&quot;</span>
                <span className="text-[9px] font-bold uppercase bg-zinc-850 px-2 py-0.5 rounded-full">Neutral</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-400">
                <span>&quot;We love the new workflows!&quot;</span>
                <span className="text-[9px] font-bold uppercase bg-emerald-500/20 px-2 py-0.5 rounded-full">Positive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Automation Workflows Interactive Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Visual Designer</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Design Complex Customer Journeys
          </h2>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Click one of the trigger paths below to simulate how Omega routes user touchpoints, processes logic steps, and fires automated multi-channel responses.
          </p>
        </div>
        <WorkflowDesigner />
      </section>

      {/* 6. Partner Integrations Marquee */}
      <section className="py-16 bg-zinc-950/40 border-y border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Connect Everywhere</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-tight">
            Compatible With Your Entire Stack
          </h2>
        </div>
        <IntegrationMarquee />
      </section>

      {/* 7. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Frequently Asked Questions</span>
          <h2 className="text-3xl font-black text-white mt-2 tracking-tight">Have Questions? We Have Answers.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFAQIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/30 border border-zinc-850 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-bold text-sm cursor-pointer hover:bg-zinc-900/50 transition-colors"
                >
                  {faq.question}
                  {isOpen ? <Minus className="h-4 w-4 text-indigo-400 shrink-0" /> : <Plus className="h-4 w-4 text-indigo-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-400 text-xs leading-relaxed border-t border-zinc-850/60 pt-4 animate-in slide-in-from-top-1 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="glow-border relative rounded-3xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-950/10 via-zinc-950 to-zinc-950 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Get Started Today</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            Ready to Automate Your Brand Experience?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-4 leading-relaxed max-w-xl mx-auto">
            Book an enterprise consulting session with our engineering architects today. Design custom data pipelines, configure reputation triggers, and streamline CX scaling.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact#book-demo"
              className="btn-glow px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-xs text-center w-full sm:w-auto"
            >
              Book My Architecture Session
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white font-semibold text-xs transition-all text-center w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}