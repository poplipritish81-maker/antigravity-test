import React from "react";
import Link from "next/link";
import { ShieldCheck, Compass, Zap, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, values, and leadership behind Omega Automatics, the leading B2B automation and omnichannel CX platform.",
};

const LEADERS = [
  {
    name: "Alistair Vance",
    role: "Co-Founder & CEO",
    bio: "Former VP of Product at Salesforce and Intercom. Obsessed with B2B optimization and clean, atomic operations.",
    avatar: "AV"
  },
  {
    name: "Dr. Evelyn Ross",
    role: "Chief Technology Officer",
    bio: "Ph.D. in Distributed Systems. Led automation and data infrastructure scaling efforts at Stripe and Linear.",
    avatar: "ER"
  },
  {
    name: "Marcus Vance",
    role: "Head of Customer Experience",
    bio: "Pioneered customer recovery models at Zendesk. Architect of Omega's omnichannel AI escalation loops.",
    avatar: "MV"
  }
];

const VALUES = [
  {
    title: "Uncompromising Integrity",
    desc: "We build secure, private-by-default pipelines. Your customer relationship is your most valuable asset.",
    icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />
  },
  {
    title: "Velocity as a Product",
    desc: "Speed prevents context rot. We design workflows to react within milliseconds, optimizing conversion touchpoints.",
    icon: <Zap className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Obsessive Craftsmanship",
    desc: "From API integrations to visual timelines, we ensure every detail is premium, accessible, and clean.",
    icon: <Compass className="h-5 w-5 text-amber-400" />
  }
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Story</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Pioneering the Future of Customer Operations
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Founded in 2024 in Toronto, Omega Automatics was born out of a simple frustration: customer experience platforms had become slow, complex, and isolated. We set out to design a unified, lightning-fast automation system that treats customer feedback as active operations.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-zinc-900/60 pt-16 mb-20">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-8 text-center">Core Principles That Guide Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val) => (
              <div key={val.title} className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-2xl">
                <div className="h-10 w-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800">
                  {val.icon}
                </div>
                <h3 className="text-sm font-bold text-white">{val.title}</h3>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="border-t border-zinc-900/60 pt-16 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-white">Executive Leadership</h2>
            <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
              Led by seasoned SaaS operators, technology architects, and customer success pioneers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="bg-zinc-900/30 border border-zinc-850 rounded-2xl overflow-hidden group">
                <div className="h-44 bg-gradient-to-br from-indigo-950 to-zinc-900 flex items-center justify-center text-3xl font-black text-indigo-400 select-none group-hover:from-indigo-900 group-hover:to-zinc-850 transition-all duration-300">
                  {leader.avatar}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-white">{leader.name}</h3>
                  <span className="text-[10px] text-zinc-500 font-semibold block mt-0.5">{leader.role}</span>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-8 text-center mt-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Join Our Global Team</h2>
          <p className="text-zinc-400 text-xs mt-2 max-w-md mx-auto leading-relaxed">
            We are always looking for smart, ambitious engineers, designers, and support professionals to build next-generation CX systems.
          </p>
          <div className="mt-6">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Browse Open Roles
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
