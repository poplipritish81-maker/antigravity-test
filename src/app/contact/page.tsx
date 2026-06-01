"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, Mail, MapPin, FileText } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    role: "Architect / Specifier",
    csi: "Section 08 42 29.23 (Sliding)",
    projectLocation: "",
    schedule: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("success");
  };

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Request Submittal</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Contact Specifications Team</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Request pricing estimates, product submittal files, custom CAD specifications, or schedule emergency preventive service technicians.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-6 sm:p-10 rounded shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">Request Specification Bid</h2>
            <p className="text-xs text-slate-500 mb-8">
              Submit your architectural schedules or blueprints. Our engineering estimating team reviews details to deliver compliance-checked proposals in 24 hours.
            </p>

            {submitStatus === "success" ? (
              <div className="py-16 text-center space-y-4 bg-slate-50 border border-slate-200/60 rounded">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-900 uppercase">Specs Inquiry Received</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for submitting your project specs. An Omega estimating engineer has been assigned and will contact you shortly with drawings.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 text-xs font-bold text-blue-900 hover:text-blue-800 uppercase tracking-wider"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">First & Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Company / Firm Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Vanguard Contracting Corp"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="j.smith@vanguard.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Phone Number</label>
                    <input
                      type="text"
                      required
                      placeholder="1-555-789-0122"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Professional Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-900 focus:bg-white cursor-pointer"
                    >
                      <option>Architect / Specifier</option>
                      <option>General Contractor</option>
                      <option>Developer / Builder</option>
                      <option>Facility Manager</option>
                      <option>Sub-Contractor Glazier</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Target CSI Section</label>
                    <select
                      value={formData.csi}
                      onChange={(e) => setFormData({ ...formData, csi: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-900 focus:bg-white cursor-pointer"
                    >
                      <option>Section 08 42 29.23 (Sliding Doors)</option>
                      <option>Section 08 71 13 (Swing Operators)</option>
                      <option>Section 08 42 33 (Revolving Doors)</option>
                      <option>Section 08 42 36 (Telescopic Doors)</option>
                      <option>Section 08 42 43 (ICU Hospital Doors)</option>
                      <option>Custom Storefront / Glazing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Project Location City & State</label>
                  <input
                    type="text"
                    required
                    placeholder="Memphis, TN"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">Door Schedule & Rough Openings Scope</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details on rough openings, traffic estimates, fire-rating guidelines, or access control specifications..."
                    value={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400">
                    🔒 Certified Security: Blueprints and schedules are confidential.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-sm shrink-0 cursor-pointer"
                  >
                    Submit Specs for Estimator Review
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contacts */}
            <div className="border border-slate-200 rounded p-6 bg-slate-50 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Corporate Contacts</h4>
              
              <div className="space-y-3 font-semibold text-xs text-slate-600">
                <div className="flex gap-2 items-start">
                  <Phone className="h-4.5 w-4.5 text-blue-900 shrink-0" />
                  <div>
                    <span className="block text-slate-900 font-bold">Sales & Specifications Office</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">1-800-555-OMEG (6634)</span>
                    <span className="block text-[10px] text-slate-400">Mon-Fri, 8AM - 5PM EST</span>
                  </div>
                </div>

                <div className="flex gap-2 items-start border-t border-slate-200/60 pt-3">
                  <Phone className="h-4.5 w-4.5 text-blue-900 shrink-0" />
                  <div>
                    <span className="block text-slate-900 font-bold">24/7 Dispatch Service Fleet</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">1-800-555-SERV (7378)</span>
                    <span className="block text-[10px] text-slate-400">Emergency dispatch for contract clients</span>
                  </div>
                </div>

                <div className="flex gap-2 items-start border-t border-slate-200/60 pt-3">
                  <Mail className="h-4.5 w-4.5 text-blue-900 shrink-0" />
                  <div>
                    <span className="block text-slate-900 font-bold">Estimating Department</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">specifications@omegaautomatics.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing HQ details */}
            <div className="border border-slate-200 rounded p-6 bg-white space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="h-4.5 w-4.5 text-blue-900" />
                Manufacturing HQ
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Omega Automatics Inc.<br />
                4500 Industrial Pkwy,<br />
                Toronto, ON, Canada
              </p>
              <div className="text-[9px] text-slate-400 font-semibold uppercase pt-2 border-t border-slate-100 flex items-center gap-1.5">
                <FileText className="h-4 w-4" />
                Factory pickups: Loading Dock A
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
