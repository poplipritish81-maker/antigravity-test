import React from "react";
import Link from "next/link";
import { FileDown, CheckCircle2, ShieldCheck, ArrowRight, Settings } from "lucide-react";
import { notFound } from "next/navigation";

interface ProductData {
  title: string;
  csi: string;
  headline: string;
  description: string;
  maxWeight: string;
  profileDepth: string;
  windLoad: string;
  compliances: string;
  features: string[];
  specDraft: string;
  cadFile: string;
}

const PRODUCTS_MAP: Record<string, ProductData> = {
  sliding: {
    title: "Automatic Sliding Doors",
    csi: "Section 08 42 29.23",
    headline: "Series 2000 Linear Sliding Systems",
    description: "Omega Series 2000 linear automatic sliding doors represent the highest standard of reliability and thermal insulation for high-volume pedestrian corridors. Deployed with heavy-duty microprocessor control units and certified presence sensors.",
    maxWeight: "Up to 150 kg per leaf (single-slide or bi-parting)",
    profileDepth: "165 mm / 6.5 inches structural casing header",
    windLoad: "Certified to ASTM E330 standards",
    compliances: "ANSI/BHMA A156.10, UL 325 Listed, ADA Compliant",
    features: [
      "Microprocessor control self-diagnoses drive rail positions",
      "Full emergency breakout pivots on sliding and sidelite panels",
      "Industrial belt drive with high-torque brushless DC motor",
      "Integrated dual infrared motion & presence safety sensors"
    ],
    specDraft: "SECTION 08 42 29.23 - AUTOMATIC SLIDING GLASS DOORS\nPart 1 - GENERAL: Systems must be certified by an AAADM inspector to ANSI A156.10 criteria prior to operational handover. Header casing shall be heavy-duty extruded aluminum alloy 6063-T6.\nPart 2 - PRODUCTS: Motor operator shall be 1/4 HP DC brushless gear-motor. Microprocessor board must support full self-diagnostic calibrations and alarm signals.",
    cadFile: "Series-2000-CAD.dwg"
  },
  swing: {
    title: "Swing Door Operators",
    csi: "Section 08 71 13",
    headline: "Series 4000 Heavy Duty Swing Automation",
    description: "Automate existing manual openings or build new high-load automated entrances. Deployed as overhead concealed or surface-mounted profiles, ideal for barrier-free access corridors and high external wind-pressures.",
    maxWeight: "Up to 250 kg per door leaf",
    profileDepth: "127 mm / 5.0 inches profile header casing",
    windLoad: "High-torque spring closing resistance",
    compliances: "ANSI/BHMA A156.19 (Low Energy), ANSI A156.10 (Full Power)",
    features: [
      "Low energy push-and-go activation mode for accessibility",
      "Adjustable opening speed, closing speed, and latching force settings",
      "Obstruction detection sensor system triggers automatic safety reverses",
      "Fail-safe mechanical spring close action during utility alerts"
    ],
    specDraft: "SECTION 08 71 13 - AUTOMATIC DOOR OPERATORS\nPart 1 - GENERAL: Operators must conform to low-energy pedestrian standards (ANSI A156.19) or high-load power criteria (ANSI A156.10).\nPart 2 - PRODUCTS: Surface casing constructed from structural anodized aluminum. Drive train utilizes hardened helical gears in bath lubrication.",
    cadFile: "Series-4000-Swing.dwg"
  },
  revolving: {
    title: "Automatic Revolving Doors",
    csi: "Section 08 42 33",
    headline: "Series 9000 Automatic Revolving Systems",
    description: "Omega Revolving Entrance Systems act as continuous airlock seals. Deployed in hotels and terminal lobbies to maximize HVAC containment, control pressure differentials, and manage huge pedestrian surges.",
    maxWeight: "N/A (Three or Four-Wing structural frame package)",
    profileDepth: "300 mm architectural canopy casing header",
    windLoad: "Continuous structural airtight weather insulation",
    compliances: "ANSI/BHMA A156.27, NFPA 101 Life Safety",
    features: [
      "Continuous climate isolation reduces HVAC thermal leakage",
      "Power-assist rotation with canopy speed limiter safety brakes",
      "Emergency book-fold center breakout collapsible wings",
      "Canopy sensors and bumper strips prevent pedestrian entrapment"
    ],
    specDraft: "SECTION 08 42 33 - AUTOMATIC REVOLVING GLASS DOORS\nPart 1 - GENERAL: Revolver system must operate under ANSI A156.27 safety regulations. Wings must support center-fold collapsing under NFPA panic egress.\nPart 2 - PRODUCTS: Glazing glass shall be tempered security glass. Dynamic speed controls must slow wings down if detection zones are tripped.",
    cadFile: "Series-9000-Revolver.dwg"
  },
  telescopic: {
    title: "Telescopic Sliding Doors",
    csi: "Section 08 42 36",
    headline: "Series 2003 Space-Saving Telescopic Doors",
    description: "Maximize clear opening widths within constrained structural openings. Synchronized multi-panel tracking provides up to 33% wider clear passage widths compared to standard sliding doors.",
    maxWeight: "Up to 100 kg per panel leaf",
    profileDepth: "220 mm / 8.7 inches telescopic guide tracks header",
    windLoad: "ASTM E330 Certified",
    compliances: "ANSI/BHMA A156.10, ADA Compliant, UL 325 Listed",
    features: [
      "Synchronized multi-panel linkage carriage system",
      "Compact structural header profile fits narrow openings",
      "Emergency breakout override hinges for emergency egress paths",
      "High-speed drive controllers optimize building insulation"
    ],
    specDraft: "SECTION 08 42 36 - TELESCOPIC AUTOMATIC GLASS DOORS\nPart 1 - GENERAL: Drive systems must comply with ANSI A156.10 and deliver coordinated movement across interlocking sliding panels.\nPart 2 - PRODUCTS: Telescopic rollers must be structural composite wheels running on continuous field-replaceable tracking guides.",
    cadFile: "Series-2003-Telescopic.dwg"
  },
  hermetic: {
    title: "Hermetic Cleanroom Doors",
    csi: "Section 08 42 43.13",
    headline: "Series 8000 Hermetically Sealed Airtight Doors",
    description: "Engineered specifically for operating rooms, cleanroom isolation wards, and pharmaceutical production facilities. Sealed perimeter gaskets compress against structural frames to prevent pressure leaks.",
    maxWeight: "Up to 120 kg per sliding panel",
    profileDepth: "Flush-mount sealed compression frame guides",
    windLoad: "Positive/Negative room pressure compressed sealing",
    compliances: "ISO 14644 Class 3 Cleanroom Certified, EN 16005",
    features: [
      "Airtight compress-and-drop structural perimeter sealing gaskets",
      "Hygienic flush-panel framing prevents dust collection",
      "Touchless wave-to-open proximity sensors prevent contamination",
      "Anti-microbial and anti-static structural finishes"
    ],
    specDraft: "SECTION 08 42 43.13 - HERMETIC DOORS\nPart 1 - GENERAL: Sealed entrances must maintain pressurized air containment compliant with ISO cleanroom specifications.\nPart 2 - PRODUCTS: Perimeter seals must use continuous neoprene or silicone compression gaskets. Flush safety viewing windows must be dry-glazed.",
    cadFile: "Hermetic-Clean-CAD.dwg"
  },
  hospital: {
    title: "Hospital ICU Doors",
    csi: "Section 08 42 43",
    headline: "Series ICU-Slider Manual & Automatic Entrances",
    description: "Trackless patient room sliding configurations designed for isolation wards (ICU/CCU). Clear observation glass allows constant visual patient checkups while quick breakout hinges facilitate fast bed transfer.",
    maxWeight: "Up to 110 kg per panel",
    profileDepth: "Trackless transition floor profile guides",
    windLoad: "NFPA 105 smoke gasket isolation rated",
    compliances: "NFPA 101, NFPA 105, ADA Accessible",
    features: [
      "Trackless bottom guide profiles prevent wheel alignment bumps",
      "Swing-open breakout hinges on all panels during crash states",
      "NFPA 105 certified smoke gaskets and pressure ratings",
      "Integrated micro-privacy blinds within double-glazed glass"
    ],
    specDraft: "SECTION 08 42 43 - HOSPITAL AND ICU DOOR SYSTEMS\nPart 1 - GENERAL: System must comply with NFPA 101 egress paths. Assemblies must remain trackless at thresholds to prevent patient cart disruptions.\nPart 2 - PRODUCTS: Smoke gaskets must hold seal pressure. Breakout pivot mechanisms must release at less than 50 lbs force.",
    cadFile: "Series-ICU-Slider.dwg"
  },
  retail: {
    title: "Retail Entrance Systems",
    csi: "Section 08 42 29",
    headline: "Series Retail-Store Supermarket Entrances",
    description: "High-durability automated entries built to absorb supermarket cart bumps and continuous pedestrian cycles. Dynamic motor controls limit false triggers to save store HVAC heating costs.",
    maxWeight: "Up to 160 kg per leaf",
    profileDepth: "Heavy-duty steel-jacketed carriage roll guides",
    windLoad: "Structural reinforcement buffer guides",
    compliances: "ANSI/BHMA A156.10, UL 325 Listed",
    features: [
      "Reinforced steel steel bumper guards protect glass tracks",
      "Advanced motion sensors filters out cross-traffic trigger signals",
      "High-speed drive controllers reduce corridor draft timing",
      "Extra wide clearance path optimized for supermarket shopping carts"
    ],
    specDraft: "SECTION 08 42 29 - HIGH TRAFFIC RETAIL ENTRANCE SYSTEMS\nPart 1 - GENERAL: Storefront entrance must verify ANSI A156.10 compliance and absorb cart impacts without alignment failures.\nPart 2 - PRODUCTS: Aluminum frame thickness must be minimum 1/8 inch at structural joints. Bumper guards must be mounted directly to glass columns.",
    cadFile: "Series-Retail-Store.dwg"
  },
  commercial: {
    title: "Commercial Entrance Systems",
    csi: "Section 08 42 00",
    headline: "Series Commercial-Facade Architectural Facades",
    description: "Complete facade storefront packages integrating automated doors within custom glass facades, structural curtain walls, and corporate badge access controls.",
    maxWeight: "Bespoke structural engineering facade calculations",
    profileDepth: "Thermal-break structural framing profiles",
    windLoad: "Custom wind load engineering to structural specifications",
    compliances: "ASTM Facade guidelines, ADA, local code ratings",
    features: [
      "Thermal-break structural aluminum profiles reduce energy losses",
      "Integrated card readers, badge scanners, and emergency alarms",
      "Pre-engineered glass joints and custom cladding color finishes",
      "Dynamic weather seals block high-altitude external drafts"
    ],
    specDraft: "SECTION 08 42 00 - COMMERCIAL AND DECORATIVE GLASS ENTRANCES\nPart 1 - GENERAL: Architect facade systems must coordinate structural load factors with local building wind zone ratings.\nPart 2 - PRODUCTS: Framing columns must include thermal barriers. Glass panel thickness and thermal value to be specified on schedules.",
    cadFile: "Series-Commercial-Facade.dwg"
  }
};

export async function generateStaticParams() {
  return [
    { slug: "sliding" },
    { slug: "swing" },
    { slug: "revolving" },
    { slug: "telescopic" },
    { slug: "hermetic" },
    { slug: "hospital" },
    { slug: "retail" },
    { slug: "commercial" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_MAP[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-900/40 px-2.5 py-0.5 rounded border border-blue-900/30">
              {product.csi}
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Division 08 Openings</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">{product.title}</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {product.headline} — Manufactured to exact architectural specifications.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Section */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold uppercase text-slate-900 tracking-tight">Product Overview</h2>
              <p className="text-xs text-slate-500 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="border-t border-slate-200 pt-10 space-y-4">
              <h3 className="text-sm font-bold uppercase text-slate-900 tracking-tight">Key Engineering Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold text-slate-600 text-xs">
                {product.features.map((feat) => (
                  <div key={feat} className="flex gap-2 p-3 border border-slate-100 rounded bg-slate-50 leading-relaxed">
                    <CheckCircle2 className="h-4.5 w-4.5 text-blue-900 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="border-t border-slate-200 pt-10 space-y-4">
              <h3 className="text-sm font-bold uppercase text-slate-900 tracking-tight">Performance Specifications</h3>
              <div className="border border-slate-200 rounded overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left border-collapse text-xs font-semibold text-slate-600">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[10px] w-1/3">Max Panel Leaf Weight</td>
                      <td className="p-4">{product.maxWeight}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[10px] w-1/3">Header Casing Depth</td>
                      <td className="p-4">{product.profileDepth}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[10px] w-1/3">Wind Load Rating</td>
                      <td className="p-4">{product.windLoad}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[10px] w-1/3">Compliance standards</td>
                      <td className="p-4">{product.compliances}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CSI Copy-Paste Section */}
            <div className="border-t border-slate-200 pt-10 space-y-4">
              <h3 className="text-sm font-bold uppercase text-slate-900 tracking-tight">CSI 3-Part Specification Draft</h3>
              <p className="text-xs text-slate-500">Copy the technical specifications paragraph below to include in your project blueprint notes.</p>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded font-mono text-[10px] leading-relaxed text-slate-600 select-all max-h-48 overflow-y-auto whitespace-pre-line">
                {product.specDraft}
              </div>
            </div>

          </div>

          {/* Right Column: Files & Bid request */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Drawings & submittals */}
            <div className="border border-slate-200 p-6 rounded bg-slate-50 space-y-4 shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Settings className="h-4.5 w-4.5 text-blue-900" />
                Technical Downloads
              </h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Download the blueprint layout files for your CAD drafting software.
              </p>
              <div className="space-y-3 font-semibold text-xs">
                <Link
                  href="/resources#specs"
                  className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-900 text-[10px] font-bold text-blue-900 transition-colors"
                >
                  <span>CSI 3-Part Specs (.docx)</span>
                  <FileDown className="h-4 w-4 text-slate-400" />
                </Link>
                <Link
                  href="/resources#cad"
                  className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded hover:border-blue-900 text-[10px] font-bold text-blue-900 transition-colors"
                >
                  <span className="truncate">{product.cadFile}</span>
                  <FileDown className="h-4 w-4 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Shield certification logo */}
            <div className="border border-slate-200 p-6 rounded bg-white space-y-3 text-center">
              <ShieldCheck className="h-10 w-10 text-blue-900 mx-auto" />
              <h4 className="text-xs font-bold text-slate-900 uppercase">AAADM Certified Handover</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                All Omega entrance systems must be tested and stickered by a factory-certified inspector prior to site handover.
              </p>
            </div>

            {/* Estimating Consultation Form Request */}
            <div className="border border-slate-200 p-6 rounded bg-slate-900 text-white space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">Request Project Bids</h4>
              <p className="text-[10px] text-slate-350 leading-relaxed">
                Need customized framing dimensions or access control integrations? Submit drawings to our estimation engineers.
              </p>
              <Link
                href="/contact#quote"
                className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-[10px] font-bold uppercase tracking-wider rounded transition-all text-center block shadow-sm"
              >
                Request Custom Specs Bid
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Back to Products navigation */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase hover:text-blue-800 transition-colors"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to all product lines
        </Link>
      </section>

    </div>
  );
}
