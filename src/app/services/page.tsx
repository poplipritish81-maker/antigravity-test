"use client";

import React from "react";
import Link from "next/link";
import { Wrench, Clock, CheckCircle2, Phone } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  specs: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    title: "AAADM Certified Installation",
    desc: "Our installers ensure automatic doors are mounted, glazed, and calibrated to meet ANSI standards. We handle the complete setup including structural framing and safety sensor configurations.",
    specs: [
      "Rigid mounting of headers and sliding tracks",
      "Storefront glass glazing and door panel alignment",
      "Wiring of activation presence sensors and backup systems",
      "Mandatory AAADM commissioning checklist execution"
    ]
  },
  {
    title: "Preventive Maintenance Contracts",
    desc: "Planned maintenance contracts significantly reduce unexpected entrance failures and extend structural service life. We custom-tailor maintenance intervals to your annual cycle counts.",
    specs: [
      "Full mechanical inspect of rollers, tracks, and pivots",
      "Sensor detection field calibration under ANSI criteria",
      "Belt tension adjustments and backup battery checks",
      "Complete lubrication of gears and structural alignments"
    ]
  },
  {
    title: "AAADM Compliance Auditing",
    desc: "Federal regulations and liability standards require pedestrian doors to be inspected annually by a certified AAADM tester. We execute checks and issue compliance decals.",
    specs: [
      "Validation of safety sensor detection zones",
      "Measurement of opening/closing force and delay timings",
      "Egress breakout force testing and verify safety decal signage",
      "Official inspection report logs filed for building records"
    ]
  },
  {
    title: "24/7 Commercial Emergency Dispatch",
    desc: "A jammed entrance locks customers out and violates fire codes. Omega offers round-the-clock emergency dispatch with technicians carrying standard manufacturer replacement parts.",
    specs: [
      "Guaranteed 2-hour dispatch for contract clients",
      "Technicians carry certified spare locks, belts, and sensors",
      "Mechanical breakout diagnostics and frame repairs",
      "Emergency securement in cases of structural facility damage"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Technical Support</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Installation & Service Programs</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Ensure opening longevity, occupant safety, and strict building code compliance with our AAADM-certified services, preventative contracts, and emergency field fleet.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.title}
              className="border border-slate-200 p-6 sm:p-8 rounded bg-white shadow-sm flex flex-col justify-between hover:border-blue-900/30 transition-all duration-300"
            >
              <div>
                <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center text-blue-900 mb-5">
                  <Wrench className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{srv.title}</h2>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{srv.desc}</p>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">Service Deliverables</span>
                <ul className="space-y-2">
                  {srv.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-[11px] text-slate-600 font-semibold leading-normal">
                      <CheckCircle2 className="h-4 w-4 text-blue-900 shrink-0 mt-0.5" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch banner */}
        <div className="border border-slate-200 rounded p-6 sm:p-10 bg-slate-50 text-center">
          <Clock className="h-10 w-10 text-blue-900 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Facing an Inoperable Egress Right Now?</h2>
          <p className="text-slate-500 text-xs mt-3 max-w-xl mx-auto leading-relaxed">
            Omega operates 24/7 service coordinators. Call our emergency dispatch line to route a certified service truck immediately.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call 1-800-555-OMEG
            </Link>
            <Link
              href="/contact#quote"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider rounded transition-all"
            >
              Request Service Quote
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
