"use client";

import React, { useState } from "react";
import { FileDown, Search, ShieldCheck, FileText } from "lucide-react";

interface ResourceFile {
  name: string;
  category: "CAD" | "CSI Spec" | "BIM File" | "Brochure";
  format: "DWG" | "PDF" | "RVT" | "DOCX";
  size: string;
  productLine: string;
  fileName: string;
}

const RESOURCES_FILES: ResourceFile[] = [
  { name: "Series 2000 Slider CAD Plan View", category: "CAD", format: "DWG", size: "2.4 MB", productLine: "Sliding Doors", fileName: "Series-2000-CAD.dwg" },
  { name: "Series 2000 Slider Section Detail", category: "CAD", format: "PDF", size: "1.1 MB", productLine: "Sliding Doors", fileName: "Series-2000-Detail.pdf" },
  { name: "Series 2000 Sliding Door CSI 3-Part Spec", category: "CSI Spec", format: "DOCX", size: "120 KB", productLine: "Sliding Doors", fileName: "CSI-084229-Spec.docx" },
  { name: "Series 2000 Revit BIM Model", category: "BIM File", format: "RVT", size: "12.8 MB", productLine: "Sliding Doors", fileName: "Series-2000-Slider.rvt" },
  
  { name: "Series 4000 Swing Operator Mount Details", category: "CAD", format: "DWG", size: "1.8 MB", productLine: "Swing Operators", fileName: "Series-4000-Swing.dwg" },
  { name: "Series 7000 Swing Operator CSI 3-Part Spec", category: "CSI Spec", format: "DOCX", size: "95 KB", productLine: "Swing Operators", fileName: "CSI-087113-Spec.docx" },
  
  { name: "Series 9000 Revolving Door Canopy Details", category: "CAD", format: "DWG", size: "3.2 MB", productLine: "Revolving Doors", fileName: "Series-9000-Revolver.dwg" },
  { name: "Series 9000 Revolver CSI 3-Part Spec", category: "CSI Spec", format: "DOCX", size: "140 KB", productLine: "Revolving Doors", fileName: "CSI-084233-Spec.docx" },
  
  { name: "Series 2003 Telescopic Slider CSI Spec", category: "CSI Spec", format: "DOCX", size: "110 KB", productLine: "Telescopic Doors", fileName: "CSI-084236-Spec.docx" },
  
  { name: "Specialty Hermetic cleanroom door details", category: "CAD", format: "PDF", size: "2.8 MB", productLine: "Hermetic Doors", fileName: "Hermetic-Clean-CAD.dwg" },
  { name: "ICU Hospital Breakout Package Layout", category: "CAD", format: "DWG", size: "4.1 MB", productLine: "Hospital Doors", fileName: "Series-ICU-Slider.dwg" },
  
  { name: "Omega Commercial Entrance General Brochure", category: "Brochure", format: "PDF", size: "5.4 MB", productLine: "General", fileName: "Omega-General-Brochure.pdf" }
];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadClick = (fileName: string) => {
    setDownloadSuccess(fileName);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const filteredFiles = RESOURCES_FILES.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          file.productLine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || file.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Architect Center</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Technical Resource Center</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Access building submittal documents, specifications, Revit BIM models, and CAD drawings. All specifications are organized to meet CSI MasterFormat guidelines.
          </p>
        </div>
      </section>

      {/* Main Download Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch mb-10">
          
          {/* Search bar */}
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search by product name or file type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 pl-10 text-xs text-slate-900 focus:outline-none focus:border-blue-900 placeholder-slate-400"
            />
            <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 items-center">
            {["All", "CAD", "CSI Spec", "BIM File", "Brochure"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded border cursor-pointer transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-900 border-blue-900 text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {cat === "All" ? "All Formats" : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Download notification */}
        {downloadSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
            <ShieldCheck className="h-4.5 w-4.5" />
            File download initiated successfully: <span className="underline">{downloadSuccess}</span>
          </div>
        )}

        {/* File Lists */}
        <div className="border border-slate-200 rounded overflow-hidden bg-white shadow-sm">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 text-[10px] uppercase font-bold tracking-wider border-b border-slate-800">
            <div className="col-span-5 sm:col-span-6">File Name</div>
            <div className="col-span-2">Format</div>
            <div className="col-span-2">Size</div>
            <div className="col-span-3 sm:col-span-2 text-right">Action</div>
          </div>

          {filteredFiles.length > 0 ? (
            <div className="divide-y divide-slate-100 font-semibold text-xs text-slate-600">
              {filteredFiles.map((file) => (
                <div key={file.name} className="grid grid-cols-12 p-4 items-center hover:bg-slate-50 transition-colors">
                  <div className="col-span-5 sm:col-span-6 pr-4">
                    <div className="text-slate-900 font-bold truncate">{file.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{file.productLine} • {file.category}</div>
                  </div>
                  <div className="col-span-2 text-slate-500 font-mono text-[10px] uppercase">{file.format}</div>
                  <div className="col-span-2 text-slate-500 font-mono text-[10px]">{file.size}</div>
                  <div className="col-span-3 sm:col-span-2 text-right">
                    <button
                      onClick={() => handleDownloadClick(file.fileName)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900/5 hover:bg-blue-900 border border-blue-900/10 hover:border-blue-900 rounded text-[10px] font-bold text-blue-900 hover:text-white transition-all cursor-pointer"
                    >
                      <FileDown className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              No architectural files matching search tags found.
            </div>
          )}
        </div>
      </section>

      {/* CSI Specifications Notice */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight">Need Custom CSI Drafts?</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If your commercial project demands non-standard frame widths, thermal barrier break values, or complex fire-rated egress pathways, our estimating team will write custom CSI 3-part specifications (Section 08 42 29) to match your blueprint requirements.
            </p>
          </div>
          <div className="sm:text-right">
            <a
              href="/contact#quote"
              className="inline-flex items-center gap-1.5 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm"
            >
              <FileText className="h-4.5 w-4.5" />
              Request Custom Specification
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
