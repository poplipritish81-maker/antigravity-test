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
    default: "Omega Automatics | B2B Workflow Automation & Omni-Channel CX Platform",
  },
  description:
    "Accelerate operations with Omega Automatics, the luxury enterprise SaaS B2B platform. Automate complex workflows, manage review reputation, and resolve omnichannel customer support requests effortlessly.",
  metadataBase: new URL("https://www.omegaautomatics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omega Automatics | B2B Workflow Automation & Omni-Channel CX Platform",
    description:
      "Accelerate operations with Omega Automatics, the luxury enterprise SaaS B2B platform. Automate complex workflows, manage review reputation, and resolve omnichannel customer support requests effortlessly.",
    url: "https://www.omegaautomatics.com",
    siteName: "Omega Automatics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omega Automatics | B2B Workflow Automation & Omni-Channel CX Platform",
    description:
      "Accelerate operations with Omega Automatics, the luxury enterprise SaaS B2B platform. Automate complex workflows, manage review reputation, and resolve omnichannel customer support requests.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
        {/* Global decorative background elements */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-70 z-0" />
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none z-0" />
        <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-emerald-600/5 blur-3xl pointer-events-none z-0" />
        
        <div className="relative z-10 flex flex-col min-h-screen w-full">
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
