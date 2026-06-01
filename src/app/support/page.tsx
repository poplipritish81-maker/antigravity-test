"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileDown, ShieldAlert, Phone, HelpCircle, FileText, CheckCircle2 } from "lucide-react";

const SAFETY_DOCS = [
  { name: "AAADM Daily Safety Checklist — Automatic Sliding Doors", type: "PDF", size: "340 KB", url: "/resources" },
  { name: "AAADM Daily Safety Checklist — Low Energy Swinging Doors", type: "PDF", size: "290 KB", url: "/resources" },
  { name: "AAADM Daily Safety Checklist — Automatic Revolving Doors", type: "PDF", size: "410 KB", url: "/resources" },
  { name: "Omega Commercial Warranty Program Summary & Conditions", type: "PDF", size: "180 KB", url: "/resources" }
];

export default function SupportPage() {
  const [ticketStatus, setTicketStatus] = useState<"idle" | "success">("idle");
  const [warrantyStatus, setWarrantyStatus] = useState<"idle" | "found" | "not_found">("idle");
  const [serialNumber, setSerialNumber] = useState("");

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketStatus("success");
  };

  const handleWarrantySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (serialNumber.trim().toUpperCase().startsWith("OM")) {
      setWarrantyStatus("found");
    } else {
      setWarrantyStatus("not_found");
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Technical Desk</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Support & Warranty Center</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Register commercial door warranties, download daily AAADM safety inspector checklists, or request technical support for opening systems.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Diagnostics & Daily Checks */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Warranty Lookup Form */}
            <div className="border border-slate-200 p-6 sm:p-8 rounded bg-white shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-900" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Commercial Warranty Registry Lookup</h3>
              </div>
              <p className="text-xs text-slate-500">
                Enter your system serial number (found on the door header control panel casing) to verify warranty eligibility.
              </p>
              
              <form onSubmit={handleWarrantySearch} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. OM-2000-89021"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  className="flex-grow bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer shadow-sm shrink-0"
                >
                  Check Registry Status
                </button>
              </form>

              {warrantyStatus === "found" && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs font-semibold space-y-1 mt-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                    Registry Confirmed: Warranty Active
                  </div>
                  <p className="text-[10px] text-emerald-700 mt-1">Series 2000 Slider Drive Unit • Coverage Valid until Dec 2028 • Factory parts guaranteed.</p>
                </div>
              )}

              {warrantyStatus === "not_found" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800 text-xs font-semibold mt-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold">
                    <ShieldAlert className="h-4.5 w-4.5" />
                    Serial Number Not Logged
                  </div>
                  <p className="text-[10px] text-red-700 mt-1">Make sure you are typing the complete code (must start with &apos;OM&apos;). For legacy doors, contact registrations.</p>
                </div>
              )}
            </div>

            {/* Safety Checklists */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-900" />
                AAADM Daily Owner Checklists
              </h3>
              <p className="text-xs text-slate-500">
                To protect pedestrian safety and maintain compliance standards, facility managers are advised to execute daily sensor sweeps. Download standard checklist templates below.
              </p>
              
              <div className="border border-slate-200 rounded divide-y divide-slate-100 overflow-hidden shadow-sm">
                {SAFETY_DOCS.map((doc) => (
                  <div key={doc.name} className="p-4 bg-white hover:bg-slate-50 flex items-center justify-between transition-colors">
                    <div className="pr-4">
                      <div className="text-xs font-bold text-slate-800">{doc.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{doc.type} • {doc.size}</div>
                    </div>
                    <Link
                      href={doc.url}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900/5 hover:bg-blue-900 border border-blue-900/10 hover:border-blue-900 rounded text-[10px] font-bold text-blue-900 hover:text-white transition-all"
                    >
                      <FileDown className="h-3.5 w-3.5" />
                      Download
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Request Service Ticket */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick service dispatcher details */}
            <div className="border border-slate-200 p-6 rounded bg-slate-50 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Emergency Support Desk</h4>
              <div className="space-y-3 font-semibold text-xs text-slate-600">
                <div className="flex gap-2 items-start">
                  <Phone className="h-4.5 w-4.5 text-blue-900 shrink-0" />
                  <div>
                    <span className="block text-slate-900 font-bold">24/7 Helpline Service</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">1-800-555-SERV (7378)</span>
                    <span className="block text-[10px] text-slate-400">Call for emergency tech dispatch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Dispatch Request Form */}
            <div className="border border-slate-200 p-6 rounded bg-white shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Request Technical Visit</h4>
              
              {ticketStatus === "success" ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h5 className="text-xs font-bold text-slate-900 uppercase">Support Request Logged</h5>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Our dispatch coordinators will contact you to confirm timing inside 1 hour.</p>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-slate-600 font-bold mb-1">Facility Name / Contact</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Jude Hospital"
                      className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-slate-600 font-bold mb-1">Telephone Number</label>
                    <input
                      type="text"
                      required
                      placeholder="1-555-234-9021"
                      className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-slate-600 font-bold mb-1">Issue / Fault Description</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Sliding panel remains open and will not recycle..."
                      className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:bg-white placeholder-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-[10px] font-bold uppercase tracking-wider rounded transition-all cursor-pointer shadow-sm"
                  >
                    Dispatch Service Call
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
