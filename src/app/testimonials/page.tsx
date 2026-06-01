import React from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews",
  description: "Read verified reviews from customer success managers, operations leads, and founders using Omega Automatics to scale CX.",
};

const TESTIMONIALS = [
  {
    name: "Hassan Al-Jamil",
    role: "Director of Ops, CloudScale",
    quote: "Omega's automated workflows removed 10 hours of manual data sync every week. The Slack integration is flawless.",
    rating: 5,
    platform: "Verified Customer"
  },
  {
    name: "Clara Vance",
    role: "VP Customer Experience, RetailFlow",
    quote: "We connected Google Reviews and Trustpilot to Omega. Positive reviews are automatically thanked, and critical reviews trigger internal Slack alerts immediately. Highly recommend.",
    rating: 5,
    platform: "G2 Crowd Review"
  },
  {
    name: "Tobias Kincaid",
    role: "Co-Founder, DevSync",
    quote: "Integrating our custom support queues with Jira via Omega API was incredibly simple. Took us under an hour.",
    rating: 5,
    platform: "Verified Customer"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, CareAccess",
    quote: "Omega's HIPAA compliance mode is exactly what we needed to streamline healthcare appointment notifications safely. Our patient no-shows fell 30%.",
    rating: 5,
    platform: "Trustpilot Review"
  },
  {
    name: "David Chen",
    role: "Product Manager, PayStream",
    quote: "The visual workflow tester is amazing. We were able to audit our customer onboarding logic before pushing it live to thousands of users.",
    rating: 5,
    platform: "Verified Customer"
  },
  {
    name: "Emma Watson",
    role: "Client Care Lead, ShopWise",
    quote: "Omnichannel customer messaging made our support team twice as fast. We respond to email, text, and chat in one unified thread.",
    rating: 5,
    platform: "Capterra Review"
  }
];

const PLATFORM_RATINGS = [
  { name: "G2 Crowd", rating: "4.8 / 5.0", badge: "Leader 2026" },
  { name: "Capterra", rating: "4.9 / 5.0", badge: "Best Usability" },
  { name: "Trustpilot", rating: "4.9 / 5.0", badge: "Excellent" }
];

export default function TestimonialsPage() {
  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Social Proof</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Loved by High-Performance Teams
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Don&apos;t take our word for it. Read verified reviews from support professionals, product engineers, and operations managers scaling their operations on Omega.
          </p>
        </div>

        {/* Aggregated ratings banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PLATFORM_RATINGS.map((plat) => (
            <div key={plat.name} className="bg-zinc-900/30 border border-zinc-850 rounded-2xl p-5 text-center flex flex-col justify-center items-center">
              <span className="text-xs font-bold text-white uppercase tracking-wider">{plat.name}</span>
              <div className="flex items-center text-amber-500 gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <div className="text-lg font-black text-white mt-2">{plat.rating}</div>
              <span className="text-[9px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase mt-2.5">
                {plat.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/20 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">
                    {t.platform}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-4 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-zinc-850/60 mt-5 pt-4">
                <span className="text-xs font-bold text-white block">{t.name}</span>
                <span className="text-[9px] text-zinc-500 font-semibold block mt-0.5">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Ready to Boost Your Reputation?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Unify your review capture systems and support workflows today. Scale client satisfaction automatically with custom automation rules.
          </p>
          <div className="mt-8">
            <Link
              href="/contact#book-demo"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Get Started for Free
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
