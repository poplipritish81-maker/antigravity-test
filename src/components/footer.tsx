"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded bg-white text-blue-900 flex items-center justify-center font-bold text-sm shadow-md">
                Ω
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-wider text-white leading-none">
                  Omega
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                  Automatics
                </span>
              </div>
            </Link>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
              Omega Automatics is a leading manufacturer of architectural entrance automation systems. We engineer automatic sliding, swinging, and revolving doors that meet AAADM, ANSI A156.10, and ADA compliance standards.
            </p>
            
            {/* Contact details */}
            <div className="space-y-2 mt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Sales: 1-800-555-OMEG (6634)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>specifications@omegaautomatics.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Headquarters: 4500 Industrial Pkwy, Toronto, ON, Canada</span>
              </div>
            </div>
          </div>

          {/* Column 1: Product Lines */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white">Product Lines</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/products#sliding" className="hover:text-white transition-colors">
                  Automatic Sliding Doors
                </Link>
              </li>
              <li>
                <Link href="/products#swing" className="hover:text-white transition-colors">
                  Swing Operators
                </Link>
              </li>
              <li>
                <Link href="/products#revolving" className="hover:text-white transition-colors">
                  Revolving Doors
                </Link>
              </li>
              <li>
                <Link href="/products#telescopic" className="hover:text-white transition-colors">
                  Telescopic Sliders
                </Link>
              </li>
              <li>
                <Link href="/products#hospital" className="hover:text-white transition-colors">
                  ICU Hospital Doors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Architectural Resources */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white">Specification Specs</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/resources#cad" className="hover:text-white transition-colors">
                  CAD Drawings (DWG / PDF)
                </Link>
              </li>
              <li>
                <Link href="/resources#specs" className="hover:text-white transition-colors">
                  CSI 3-Part Specs (Division 08)
                </Link>
              </li>
              <li>
                <Link href="/resources#bim" className="hover:text-white transition-colors">
                  Revit BIM Files
                </Link>
              </li>
              <li>
                <Link href="/resources#download" className="hover:text-white transition-colors">
                  Product Catalogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Maintenance & Support */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white">Support & Service</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/services#installation" className="hover:text-white transition-colors">
                  Entrance Installation
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-white transition-colors">
                  Preventive Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#aaadm" className="hover:text-white transition-colors">
                  AAADM Inspections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Service Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate & Compliance */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white">Compliance</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Omega
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <span className="block text-slate-500 font-semibold uppercase text-[9px] mt-2">Certified to standards</span>
                <span className="block text-[10px] text-slate-300 mt-1">ANSI/BHMA A156.10 / A156.19</span>
                <span className="block text-[10px] text-slate-300">UL 325 Listed</span>
                <span className="block text-[10px] text-slate-300">ADA Compliant</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Socials & Copy */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} Omega Automatics Inc. All rights reserved. AAADM Member and Registered Architect Provider.
          </span>
          <div className="flex gap-4 text-[10px]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
