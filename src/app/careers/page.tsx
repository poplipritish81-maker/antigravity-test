"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";

interface Role {
  title: string;
  department: "Engineering" | "Design" | "Sales" | "Customer Care";
  location: string;
  salary: string;
  desc: string;
}

const OPEN_ROLES: Role[] = [
  {
    title: "Senior Full-Stack Engineer (Next.js & API)",
    department: "Engineering",
    location: "Remote (Canada/US)",
    salary: "$140k - $170k",
    desc: "Build scalable Next.js App Router applications, manage high-throughput event queues, and write secure database sync scripts using Node."
  },
  {
    title: "Senior Solutions Architect",
    department: "Sales",
    location: "Toronto, ON (Hybrid)",
    salary: "$130k - $160k + Equity",
    desc: "Partner with enterprise customers. Design custom data schemas, plan workflow integration pipelines, and write bespoke API connectors."
  },
  {
    title: "Lead Product Designer (UI/UX)",
    department: "Design",
    location: "Remote (Global)",
    salary: "$120k - $150k",
    desc: "Craft premium developer dashboards, visual timeline flows, and accessible analytics graphs. Expert in Figma, Tailwind, and typography."
  },
  {
    title: "Technical Account Manager (TAM)",
    department: "Customer Care",
    location: "Remote (Canada)",
    salary: "$90k - $110k",
    desc: "Support VIP enterprise accounts under strict SLA response rules. Perform quarterly systems performance reviews and coordinates with L3 engineering teams."
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const departments = ["All", "Engineering", "Design", "Sales", "Customer Care"];

  const filteredRoles = OPEN_ROLES.filter((role) => {
    return selectedDept === "All" || role.department === selectedDept;
  });

  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Careers at Omega</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Build the Engine of Customer Operations
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            We are a remote-first, high-velocity team based in Canada. We value operational integrity, pixel-perfect craftsmanship, and speed. Join us to help enterprises automate customer operations.
          </p>
        </div>

        {/* Perks Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 border-b border-zinc-900/60 pb-16">
          <div className="bg-zinc-900/20 border border-zinc-850 p-5 rounded-2xl">
            <span className="text-xs font-bold text-white uppercase block">Remote First Culture</span>
            <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
              Work from anywhere in Canada or the US. We provide a $2,500 workspace stipend to design your perfect home engineering setup.
            </p>
          </div>
          <div className="bg-zinc-900/20 border border-zinc-850 p-5 rounded-2xl">
            <span className="text-xs font-bold text-white uppercase block">Premium Health & Wealth</span>
            <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
              Comprehensive health & dental coverage, annual wellness stipends, and competitive base salaries with stock options.
            </p>
          </div>
          <div className="bg-zinc-900/20 border border-zinc-850 p-5 rounded-2xl">
            <span className="text-xs font-bold text-white uppercase block">Continuous Growth</span>
            <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
              We cover costs for operations training, conference attendance, technical books, and advanced software certifications.
            </p>
          </div>
        </div>

        {/* Jobs List Section */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-xl font-bold text-white tracking-tight">Open Job Opportunities</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    selectedDept === dept
                      ? "bg-indigo-600 border-indigo-500 text-white"
                      : "bg-zinc-900 border-zinc-850 text-zinc-450 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Roles Loop */}
          {filteredRoles.length === 0 ? (
            <div className="h-48 border border-dashed border-zinc-850 rounded-2xl flex items-center justify-center text-zinc-500 italic text-xs">
              No open roles currently matching this department.
            </div>
          ) : (
            <div className="flex flex-col gap-4 mb-16">
              {filteredRoles.map((role) => (
                <div
                  key={role.title}
                  className="bg-zinc-900/30 border border-zinc-850 rounded-2xl p-6 hover:border-zinc-800 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
                >
                  <div className="max-w-2xl">
                    <span className="text-[9px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full uppercase">
                      {role.department}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-3 group-hover:text-indigo-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-xs text-zinc-550 mt-1.5 leading-relaxed">
                      {role.desc}
                    </p>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap gap-4 text-[10px] text-zinc-500 mt-4 font-semibold">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {role.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> Full Time</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {role.salary}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer w-full sm:w-auto justify-center"
                  >
                    Apply Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
