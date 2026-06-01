import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Omega Automatics. Understand our data storage, encryption standards, and GDPR compliance policies.",
};

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden w-full py-16 text-zinc-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-zinc-900 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Legal Center</span>
          <h1 className="text-3xl font-black text-white mt-2 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-xs mt-2 font-semibold">Last Updated: June 1, 2026</p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 leading-relaxed">
          <div>
            <h2 className="text-sm font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Omega Automatics (&quot;Omega&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, store, share, and process the personal information of users who access our website, platform services, or configure workflows.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">2. Data We Collect</h2>
            <p>
              We collect information to provide premium services, run automated customer experience systems, and maintain platform security.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Account Credentials</strong>: Name, email address, password, company name, size, billing details, and OAuth credentials for linked third-party applications (Slack, Zendesk, Salesforce).</li>
              <li><strong>Usage Data</strong>: Device characteristics, IP addresses, browser specifications, page views, click telemetry, and workflow performance metrics.</li>
              <li><strong>Customer Conversation Data</strong>: Ticketing queries, chat history content, SMS details, and reviews retrieved from public directories to operate your omnichannel desks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">3. How We Use Your Data</h2>
            <p>
              We process personal data under legitimate business interests, compliance requirements, or customer consent:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To initialize and host the automation workflows and review synchronizations.</li>
              <li>To secure database pipelines, detect anomalies, and prevent fraudulent actions.</li>
              <li>To route and optimize customer messages, training AI sentiment classifiers on incoming streams.</li>
              <li>To process payments and verify licensing subscription plans.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">4. Data Security & Encryption</h2>
            <p>
              Security is our core engineering value. We maintain strict SOC 2 type safeguards:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Encryption</strong>: All data is encrypted in transit using TLS 1.3 and at rest using AES-256 keys.</li>
              <li><strong>Compliance</strong>: HIPAA compliance isolation configurations are available for health sector accounts.</li>
              <li><strong>Audits</strong>: Detailed system log streams and audit trails track all user activity and workflow executions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">5. GDPR & CCPA Compliance</h2>
            <p>
              Under GDPR and CCPA, you have the right to access, amend, delete, or export your personal data at any time. To exercise these rights, please contact our data controller department at <strong>privacy@omega.com</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-3">6. Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material adjustments, we will notify you by email or through a banner notification on our cloud console dashboard.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
