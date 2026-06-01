"use client";

import React from "react";
import Link from "next/link";
import { FileDown, CheckCircle, ShieldCheck, Info } from "lucide-react";

interface ProductLine {
  id: string;
  name: string;
  csi: string;
  headline: string;
  description: string;
  features: string[];
  applications: string[];
  specDoc: string;
  cadDoc: string;
}

const PRODUCT_LINES: ProductLine[] = [
  {
    id: "sliding",
    name: "Automatic Sliding Doors",
    csi: "Section 08 42 29.23",
    headline: "High-Traffic Architectural Sliding Openings",
    description: "Our sliding doors are designed for heavy pedestrian traffic in retail, healthcare, and corporate environments. Featuring microprocessor controllers, safety beam sensors, and whisper-quiet belt drives.",
    features: [
      "Heavy-duty 1/4 HP motor with advanced microprocessor control",
      "Breakout panels for emergency egress compliance (NFPA 101)",
      "High-durability aluminum framing with custom anodized finishes",
      "Motion/Presence sensor array compliant with ANSI A156.10"
    ],
    applications: ["Supermarket Entrances", "Hospital Main Lobbies", "Airport Baggage Claims", "Commercial Storefronts"],
    specDoc: "CSI-084229-Spec.docx",
    cadDoc: "Series-2000-CAD.dwg"
  },
  {
    id: "swing",
    name: "Swing Door Operators",
    csi: "Section 08 71 13",
    headline: "Low Energy and Heavy Duty Swing Automation",
    description: "Automate manual swinging doors with our overhead concealed or surface-mounted operators. Perfect for ADA barrier-free accessibility and high wind-load external entrances.",
    features: [
      "Low energy push-and-go activation (ANSI A156.19 compliant)",
      "Adjustable opening/closing speeds and latching force settings",
      "Obstruction detection sensor auto-reverses to protect pedestrians",
      "Heavy-duty spring closers built for high wind environments"
    ],
    applications: ["ADA Accessible Restrooms", "Hospital Corridors", "Office Lobby Interior Doors", "School Entrances"],
    specDoc: "CSI-087113-Spec.docx",
    cadDoc: "Series-4000-Swing.dwg"
  },
  {
    id: "revolving",
    name: "Automatic Revolving Doors",
    csi: "Section 08 42 33",
    headline: "Climate Control & High Volume Traffic Entrances",
    description: "Omega Revolving Doors maintain an airtight lobby seal, minimizing heating/cooling losses. Available in 3-wing and 4-wing configurations with integrated security access controls.",
    features: [
      "Always open, always closed airlock configuration",
      "Power-assist rotation with speed limiter control safety braking",
      "Center-fold book-fold wings for emergency egress breakout",
      "Security sensor array in canopy and posts prevents entrapment"
    ],
    applications: ["Hotel Main Entrances", "Corporate Headquarters Lobbies", "Financial Institutions", "Airport Terminals"],
    specDoc: "CSI-084233-Spec.docx",
    cadDoc: "Series-9000-Revolver.dwg"
  },
  {
    id: "telescopic",
    name: "Telescopic Sliding Doors",
    csi: "Section 08 42 36",
    headline: "Maximum Egress in Narrow Rough Openings",
    description: "Optimize tight entrances with multi-panel telescopic doors. Synchronized sliding panels provide up to a third wider clear opening space than standard automatic sliding doors.",
    features: [
      "Synchronized telescoping panel drive mechanism",
      "Compact structural header profile for low ceiling clearances",
      "ANSI A156.10 compliant safety sensors and safety lights",
      "Breakout capability for panic emergency breakout"
    ],
    applications: ["Hospital Emergency Rooms", "Narrow Storefront Vestibules", "Cleanroom Ante-Rooms", "Corridors"],
    specDoc: "CSI-084236-Spec.docx",
    cadDoc: "Series-2003-Telescopic.dwg"
  },
  {
    id: "hermetic",
    name: "Hermetic Cleanroom Doors",
    csi: "Section 08 42 43.13",
    headline: "Pressurized Airtight Sliders for Laboratories",
    description: "Specifically engineered for clinical laboratories, research cleanrooms, and pharmaceutical manufacturing facilities. Perimeter gaskets seals compress against the frame to maintain room pressure.",
    features: [
      "Airtight compress-and-drop sealing mechanism",
      "Smooth, flush panel surfaces preventing dust accumulation",
      "Touchless wave-to-open sensors for hygienic operation",
      "ISO 14644-3 Class 3 cleanroom rating certified"
    ],
    applications: ["Operating Theatres", "Pharmaceutical Cleanrooms", "Research Laboratories", "Burn Units"],
    specDoc: "CSI-084243.13-Spec.docx",
    cadDoc: "Hermetic-Clean-CAD.dwg"
  },
  {
    id: "hospital",
    name: "Hospital ICU/CCU Doors",
    csi: "Section 08 42 43",
    headline: "ICU Manual and Automated Patient Openings",
    description: "Trackless sliding and folding ICU door packages. Clear tempered glass panels allow constant patient observation, while emergency breakout allows fast bed transfer.",
    features: [
      "Trackless threshold design eliminates patient cart bumps",
      "Standard swing-out breakout capability on all panels",
      "NFPA 105 certified smoke gaskets and ratings",
      "Integral privacy blinds and sound dampening options"
    ],
    applications: ["Intensive Care Units", "Cardiac Care Units", "Patient Recovery Rooms", "Examination Rooms"],
    specDoc: "CSI-084243-Spec.docx",
    cadDoc: "Series-ICU-Slider.dwg"
  },
  {
    id: "retail",
    name: "Retail Entrance Systems",
    csi: "Section 08 42 29",
    headline: "Heavy Duty Retail Storefront Entrances",
    description: "Specially configured automatic sliding door assemblies designed to handle continuous cycles, cart collisions, and heavy grocery bags typical in retail storefronts.",
    features: [
      "Structural steel bumper bars protect glass panels",
      "High-speed drive controllers reduce building draft times",
      "Energy-conservation sensors prevent false triggers",
      "Dual heavy-duty roller wheels on tracking systems"
    ],
    applications: ["Supermarkets", "Big Box Retail Stores", "Department Stores", "Shopping Centers"],
    specDoc: "CSI-084229-Retail-Spec.docx",
    cadDoc: "Series-Retail-Store.dwg"
  },
  {
    id: "commercial",
    name: "Commercial Entrance Systems",
    csi: "Section 08 42 00",
    headline: "Bespoke Office and Facade Automated Entrances",
    description: "Complete architectural facade systems, combining automated entry operators with custom curtain walls, security badge systems, and glass panels.",
    features: [
      "Thermal-break structural aluminum columns",
      "Dry-glaze structural glass panels for wind load",
      "Badge scanner and security lock integration options",
      "Polished, brushed, or corporate color anodized finishes"
    ],
    applications: ["Corporate Headquarters", "High-Rise Office Towers", "Government Buildings", "University Lobbies"],
    specDoc: "CSI-084200-Spec.docx",
    cadDoc: "Series-Commercial-Facade.dwg"
  }
];

export default function ProductsPage() {
  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Division 08 Openings</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">Automatic Door Product Lines</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Omega Automatics manufactures commercial entrance doors to exact project specifications. All products are ANSI/BHMA compliant and shipped with complete CSI specs and CAD drawings.
          </p>
        </div>
      </section>

      {/* Main Directory List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {PRODUCT_LINES.map((prod, idx) => (
          <div
            id={prod.id}
            key={prod.id}
            className={`border border-slate-200 rounded p-6 sm:p-10 bg-white shadow-sm flex flex-col lg:flex-row gap-10 items-start ${
              idx % 2 === 1 ? "lg:flex-row-reverse bg-slate-50/50" : ""
            }`}
          >
            {/* Info details */}
            <div className="flex-1 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-900/5 px-2.5 py-0.5 rounded border border-blue-900/10">
                  {prod.csi}
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">UL Listed</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{prod.name}</h2>
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">{prod.headline}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{prod.description}</p>
              
              <div className="border-t border-slate-200/60 pt-5">
                <h5 className="text-[10px] uppercase font-bold tracking-wider text-slate-800 mb-3">Key Engineering Features:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {prod.features.map((feat) => (
                    <div key={feat} className="flex gap-2 text-[10px] text-slate-600 font-semibold leading-normal">
                      <CheckCircle className="h-4 w-4 text-blue-900 shrink-0 mt-0.5" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application sectors & downloads */}
            <div className="w-full lg:w-80 bg-slate-50 border border-slate-200 p-5 rounded space-y-6 shrink-0">
              <div>
                <h5 className="text-[10px] uppercase font-bold tracking-wider text-slate-800 mb-3 flex items-center gap-1">
                  <Info className="h-4 w-4 text-blue-900" />
                  Target Applications
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {prod.applications.map((app) => (
                    <span
                      key={app}
                      className="text-[9px] font-bold text-slate-700 bg-slate-200/60 px-2 py-1 rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-5 space-y-3">
                <h5 className="text-[10px] uppercase font-bold tracking-wider text-slate-800 mb-2">Architectural Files:</h5>
                <Link
                  href={`/resources#download?file=${prod.specDoc}`}
                  className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-900 text-[10px] font-bold text-blue-900 transition-colors"
                >
                  <span className="truncate">{prod.specDoc}</span>
                  <FileDown className="h-4 w-4 shrink-0 text-slate-400" />
                </Link>
                <Link
                  href={`/resources#download?file=${prod.cadDoc}`}
                  className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-900 text-[10px] font-bold text-blue-900 transition-colors"
                >
                  <span className="truncate">{prod.cadDoc}</span>
                  <FileDown className="h-4 w-4 shrink-0 text-slate-400" />
                </Link>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <Link
                  href="/contact#quote"
                  className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-all text-center block shadow-sm"
                >
                  Request Specs Proposal
                </Link>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Trust banner */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <ShieldCheck className="h-10 w-10 text-blue-900 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 uppercase">Omega Quality Commissioning</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            All Omega automatic doors must be certified on-site by a registered AAADM inspector prior to handover, verifying compliance with safety parameters outlined in ANSI A156.10.
          </p>
        </div>
      </section>

    </div>
  );
}
