"use client";

import React from "react";
import { Cpu, MessageSquare, Shield, Layers, HelpCircle, Activity } from "lucide-react";

interface Integration {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const INTEGRATIONS: Integration[] = [
  { name: "Salesforce", category: "CRM", icon: <Cpu className="h-6 w-6" />, color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
  { name: "Stripe", category: "Payments", icon: <Layers className="h-6 w-6" />, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
  { name: "Slack", category: "Chat", icon: <MessageSquare className="h-6 w-6" />, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
  { name: "Shopify", category: "E-commerce", icon: <Shield className="h-6 w-6" />, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { name: "HubSpot", category: "Marketing", icon: <Layers className="h-6 w-6" />, color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
  { name: "Zendesk", category: "Support", icon: <HelpCircle className="h-6 w-6" />, color: "text-teal-400 bg-teal-500/10 border-teal-500/20" },
  { name: "Jira", category: "Engineering", icon: <Activity className="h-6 w-6" />, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { name: "Notion", category: "Docs", icon: <Layers className="h-6 w-6" />, color: "text-zinc-300 bg-zinc-400/10 border-zinc-400/20" },
];

export function IntegrationMarquee() {
  // Duplicate list to make infinite scrolling seam-free
  const doubleList = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <div className="w-full overflow-hidden relative py-4">
      {/* Fade overlays on the sides */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee slider container */}
      <div className="flex w-max gap-6 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {doubleList.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${item.color} backdrop-blur-sm min-w-[170px] select-none hover:scale-[1.02] hover:border-white/20 transition-all duration-300`}
          >
            <div className="shrink-0">{item.icon}</div>
            <div>
              <div className="text-xs font-bold text-white leading-none">{item.name}</div>
              <span className="text-[9px] text-zinc-500 tracking-wider font-semibold uppercase block mt-1 leading-none">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Inject custom style for keyframes to support custom marquee behavior dynamically */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
