import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Omega Automatics. Understand licensing agreements, billing conditions, SLA rules, and governing laws.",
};

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden w-full py-16 text-zinc-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-zinc-900 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Legal Center</span>
          <h1 className="text-3xl font-black text-white mt-2 tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500 text-xs mt-2 font-semibold">Last Updated: June 1, 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 leading-relaxed">
          <div>
            <h2 className="text-sm font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By creating an account, accessing our cloud console dashboard, or deploying automation pipelines, you agree to be bound by these Terms of Service. If you do not agree to all terms, you are prohibited from utilizing our platform services.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">2. License Grant & Seat Management</h2>
            <p>
              We grant you a non-exclusive, non-transferable, revocable license to access our platform dashboard and configure automation workflows for your internal operations:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Each user account seat is dedicated to a single employee and cannot be shared.</li>
              <li>You may not decompile, reverse-engineer, or scrape our workflow designer interfaces.</li>
              <li>You may not use our endpoints to send unsolicited mass messages (spam) or abuse API thresholds.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">3. Fees, Billing, & Renewals</h2>
            <p>
              We offer Starter, Pro, and Enterprise subscription plans:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Billing</strong>: Paid via credit card, Stripe, or corporate invoice monthly or annually.</li>
              <li><strong>Renewals</strong>: Accounts auto-renew unless cancelled at least 3 business days prior to the billing date.</li>
              <li><strong>Refunds</strong>: All transaction charges are non-refundable except where legally mandated.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">4. SLA & Uptime Commitments</h2>
            <p>
              For Pro and Enterprise tiers, we strive to maintain a 99.9% service uptime rating. If you require formal 15-minute response SLA guarantees, dedicated TAM routing, and penalty credits for breaches, you must contract under our Enterprise Tier agreement.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              Our platform services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranty of any kind. We do not warrant that automation webhooks will be completely error-free or that third-party directory connectors will never experience connection failures.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall Omega Automatics be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or reputation) arising out of your utilization of our software pipelines.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">7. Governing Law</h2>
            <p>
              These Terms of Service and any associated legal disputes shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
