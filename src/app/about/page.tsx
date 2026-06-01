"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Compass, Building, ArrowRight } from "lucide-react";

const LEADERS = [
  {
    name: "Robert Vance",
    role: "President & CEO",
    bio: "Over 25 years of manufacturing operations experience. Formerly Director of Openings at Ingersoll Rand. Champion of robust engineering standards.",
    avatar: "RV"
  },
  {
    name: "Evelyn Ross, P.Eng.",
    role: "VP of Engineering & Design",
    bio: "Ph.D. in Structural Engineering. Oversees all ANSI compliance, wind-load testing, and Revit BIM catalog developments.",
    avatar: "ER"
  },
  {
    name: "Marcus Vance",
    role: "Director of Field Services",
    bio: "Factory certified AAADM inspector. Coordinates our emergency service fleet and preventive maintenance networks.",
    avatar: "MV"
  }
];

const VALUES = [
  {
    title: "Engineering Precision",
    desc: "We manufacture automatic doors using structural grade aluminum, heavy-duty guide tracks, and industrial controllers designed for millions of cycles.",
    icon: <SettingsIcon />
  },
  {
    title: "Safety & Compliance First",
    desc: "Every system we build is designed to comply with ANSI/BHMA A156.10/19 standards, UL listings, NFPA life safety, and ADA accessibility guidelines.",
    icon: <ShieldCheck className="h-5 w-5 text-blue-900" />
  },
  {
    title: "Service Excellence",
    desc: "Omega doors are backed by a certified network of factory-trained service technicians, available 24/7/365 for inspections and maintenance.",
    icon: <Compass className="h-5 w-5 text-blue-900" />
  }
];

function SettingsIcon() {
  return (
    <svg className="h-5 w-5 text-blue-900 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Omega Heritage</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">About Omega Automatics</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Omega Automatics is a leading manufacturer of architectural entrance automation systems, designing heavy-duty sliding, swinging, and revolving entrances since 2001.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Manufacturing Leaders</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Precision-Built Commercial Entrances</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Founded in 2001, Omega Automatics operates from our primary manufacturing and assembly facility in Toronto. We engineering robust entrance systems that meet strict structural building codes and fire safety ratings. 
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our products are trusted across major infrastructure projects including hospital expansions, retail chains, airport terminals, and government headquarters, serving general contractors, architects, and facilities managers.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 rounded flex items-center gap-4">
            <Building className="h-10 w-10 text-blue-900 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">Manufacturing Plant</h4>
              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                4500 Industrial Pkwy, Toronto, ON. Equipped with CNC machinery, custom glass glazing tracks, and an on-site ANSI cycle-testing laboratory.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-slate-200 pt-16 mb-20">
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight text-center mb-12">Core Manufacturing Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val) => (
              <div key={val.title} className="border border-slate-200 p-6 rounded bg-white hover:border-blue-900/20 hover:shadow-sm transition-all duration-300">
                <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{val.title}</h4>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="border-t border-slate-200 pt-16 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight">Executive Management</h3>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
              Led by entrance manufacturing experts, registered professional engineers, and field technicians.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="border border-slate-200 rounded overflow-hidden bg-white shadow-sm hover:border-blue-900/30 transition-all duration-300">
                <div className="h-44 bg-slate-100 flex items-center justify-center text-3xl font-black text-blue-900 select-none">
                  {leader.avatar}
                </div>
                <div className="p-5">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{leader.name}</h4>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mt-0.5">{leader.role}</span>
                  <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers CTA */}
        <div className="border border-slate-200 rounded bg-slate-50 p-8 text-center mt-12">
          <h2 className="text-lg font-bold text-slate-900 uppercase">Join Our Engineering Team</h2>
          <p className="text-slate-500 text-xs mt-2 max-w-md mx-auto leading-relaxed">
            We are always seeking certified AAADM technicians, mechanical engineers, and specifications experts.
          </p>
          <div className="mt-6">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm cursor-pointer"
            >
              Browse Open Roles
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
