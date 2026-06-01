"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";

interface Role {
  title: string;
  department: "Engineering" | "Operations" | "Sales" | "Field Services";
  location: string;
  salary: string;
  desc: string;
}

const OPEN_ROLES: Role[] = [
  {
    title: "AAADM Certified Field Service Technician",
    department: "Field Services",
    location: "Toronto, ON (Mobile)",
    salary: "$65k - $80k + Service Van",
    desc: "Perform preventive maintenance, emergency repairs, and AAADM certification inspections on automated commercial entrances."
  },
  {
    title: "Commercial Estimation Engineer",
    department: "Sales",
    location: "Toronto, ON (Hybrid)",
    salary: "$75k - $95k",
    desc: "Review blueprints, door schedules, and architectural specifications to prepare accurate bidding submittals for contractors."
  },
  {
    title: "Mechanical Design Engineer (P.Eng.)",
    department: "Engineering",
    location: "Toronto, ON (Plant)",
    salary: "$90k - $120k",
    desc: "Design aluminum profiles, guide rollers, and mechanical drive systems. Run wind-load simulation tests and design Revit BIM assets."
  },
  {
    title: "Assembly Line Production Supervisor",
    department: "Operations",
    location: "Toronto, ON (Plant)",
    salary: "$70k - $85k",
    desc: "Coordinate framing fabrication, glazing schedules, and QA compliance testing for automatic door packages before shipping."
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const departments = ["All", "Engineering", "Operations", "Sales", "Field Services"];

  const filteredRoles = OPEN_ROLES.filter((role) => {
    return selectedDept === "All" || role.department === selectedDept;
  });

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Join Omega</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Careers in Entrance Automation</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Build the next generation of architectural openings. Partner with our teams in engineering, operations, and field service fleet to build entrance systems.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 border-b border-slate-200 pb-16">
          <div className="border border-slate-200 p-5 rounded bg-white">
            <span className="text-xs font-bold text-slate-900 uppercase block">State-of-the-Art Plant</span>
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              Work inside our Toronto assembly plant equipped with modern CNC machines, structural glaze lines, and automated testing jigs.
            </p>
          </div>
          <div className="border border-slate-200 p-5 rounded bg-white">
            <span className="text-xs font-bold text-slate-900 uppercase block">Health & Insurance</span>
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              Full dental, optical, and medical coverage, coupled with retirement matching plans and factory tooling allowances.
            </p>
          </div>
          <div className="border border-slate-200 p-5 rounded bg-white">
            <span className="text-xs font-bold text-slate-900 uppercase block">AAADM Certification</span>
            <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
              We cover full testing costs and ongoing training certifications for our field service technicians to remain certified AAADM inspectors.
            </p>
          </div>
        </div>

        {/* Roles List */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Open Job Opportunities</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    selectedDept === dept
                      ? "bg-blue-900 border-blue-900 text-white"
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Roles Loop */}
          {filteredRoles.length === 0 ? (
            <div className="h-48 border border-dashed border-slate-200 rounded flex items-center justify-center text-slate-400 italic text-xs">
              No open roles currently matching this department.
            </div>
          ) : (
            <div className="flex flex-col gap-4 mb-16">
              {filteredRoles.map((role) => (
                <div
                  key={role.title}
                  className="border border-slate-200 rounded p-6 bg-white hover:border-blue-900/30 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
                >
                  <div className="max-w-2xl">
                    <span className="text-[9px] font-bold text-blue-900 bg-blue-900/5 border border-blue-900/10 px-2.5 py-0.5 rounded uppercase">
                      {role.department}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-3 group-hover:text-blue-900 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {role.desc}
                    </p>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap gap-4 text-[10px] text-slate-400 mt-4 font-semibold">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-blue-900" /> {role.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-blue-900" /> Full Time</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-blue-900" /> {role.salary}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer w-full sm:w-auto justify-center shadow-sm"
                  >
                    Apply Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
