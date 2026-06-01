"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building, MapPin, Calendar, FileText } from "lucide-react";

interface ProjectCase {
  title: string;
  location: string;
  client: string;
  sector: "Healthcare" | "Aviation" | "Corporate" | "Retail";
  scope: string;
  csiCode: string;
  year: string;
  description: string;
}

const PROJECT_CASES: ProjectCase[] = [
  {
    title: "St. Jude Medical ICU Pavilion",
    location: "Memphis, TN",
    client: "Healthcare Systems Inc.",
    sector: "Healthcare",
    scope: "18 Hermetic ICU Sliding Assemblies, 6 Automatic Corridor Swing Operators",
    csiCode: "Section 08 42 43 (ICU Entrances)",
    year: "2025",
    description: "Architectural commission replacing manual swing doors with hermetically sealed sliding ICU packages. Enhanced cleanroom dust mitigation and allowed full manual bed-breakout capabilities."
  },
  {
    title: "Metro International Airport Terminal 3",
    location: "Atlanta, GA",
    client: "Department of Aviation",
    sector: "Aviation",
    scope: "8 Series 2000 Bi-Parting Sliders, 4 Series 9000 Revolving Doors",
    csiCode: "Section 08 42 33 (Revolving Doors)",
    year: "2026",
    description: "Designed for continuous high-load operations. Installed heavy-duty automatic revolving entrances to optimize thermal lockouts, resulting in a 14% drop in terminal HVAC expenditure."
  },
  {
    title: "Dominion Financial Tower Lobby",
    location: "Toronto, ON",
    client: "Dominion Property Partners",
    sector: "Corporate",
    scope: "14ft Custom Glass Facade, 2 Series 2003 Telescopic Sliding Doors",
    csiCode: "Section 08 42 36 (Telescopic Doors)",
    year: "2024",
    description: "Constructed an automated entrance vestibule integrating access controls. Space-saving telescopic doors accommodated high traffic within a limited corridor entry path."
  },
  {
    title: "Maplewood Commercial Retail Galleria",
    location: "Vancouver, BC",
    client: "Westcoast Developers",
    sector: "Retail",
    scope: "12 Heavy-Duty Storefront Sliding Entrances with Buffer Rails",
    csiCode: "Section 08 42 29 (Sliding Entrances)",
    year: "2025",
    description: "Deployed structural retail slider packages engineered to absorb supermarket cart bumps and continuous high-speed cycling, protecting door alignments."
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = PROJECT_CASES.filter((project) => {
    return activeFilter === "All" || project.sector === activeFilter;
  });

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Omega Installations</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Commercial Projects Gallery</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Omega Automatics doors are trusted by developers and builders globally. Explore our real-world project portfolio spanning major airports, hospital expansions, and commercial towers.
          </p>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 items-center justify-center mb-12">
          {["All", "Healthcare", "Aviation", "Corporate", "Retail"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4.5 py-2 text-xs font-bold rounded border cursor-pointer transition-colors ${
                activeFilter === filter
                  ? "bg-blue-900 border-blue-900 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {filter === "All" ? "All Projects" : `${filter} Sector`}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="border border-slate-200 rounded p-6 sm:p-8 bg-white shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-blue-900 bg-blue-900/5 px-2 py-0.5 rounded border border-blue-900/10">
                    {project.sector}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">{project.csiCode}</span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
                <p className="text-xs text-slate-500 leading-relaxed">{project.description}</p>
                
                <div className="border-t border-slate-100 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[10px] font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-blue-900 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building className="h-4 w-4 text-blue-900 shrink-0" />
                    <span className="truncate">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-blue-900 shrink-0" />
                    <span>Completed: {project.year}</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-150 p-4 rounded text-[10px] leading-relaxed text-slate-500">
                  <span className="block font-bold text-slate-700 uppercase tracking-wider mb-1">Equipment Installed:</span>
                  {project.scope}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1 text-[10px] text-blue-900 font-bold uppercase hover:text-blue-800 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  View specs file used
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Quote Banner */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="text-lg font-bold text-slate-900 uppercase">Have a Similar Project?</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our architectural consultants review schematic layouts, door schedules, and traffic estimates to recommend the correct door configurations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact#quote"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm"
            >
              Request Architectural Bid
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
