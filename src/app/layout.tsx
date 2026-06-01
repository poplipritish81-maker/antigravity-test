import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Omega Automatics",
    default: "Omega Automatics | Commercial Automatic Doors & Entrance Automation",
  },
  description:
    "Omega Automatics designs, manufactures, and services premium commercial automatic sliding doors, swing door operators, and revolving door systems. Architectural-grade openings engineered for safety, compliance, and heavy pedestrian traffic.",
  metadataBase: new URL("https://www.omegaautomatics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omega Automatics | Commercial Automatic Doors & Entrance Automation",
    description:
      "Omega Automatics designs, manufactures, and services premium commercial automatic sliding doors, swing door operators, and revolving door systems.",
    url: "https://www.omegaautomatics.com",
    siteName: "Omega Automatics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omega Automatics | Commercial Automatic Doors & Entrance Automation",
    description:
      "Omega Automatics designs, manufactures, and services premium commercial automatic sliding doors, swing door operators, and revolving door systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-900/10 selection:text-blue-900">
        <div className="relative flex flex-col min-h-screen w-full">
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
