"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, ArrowRight } from "lucide-react";

interface Post {
  title: string;
  category: "Automation" | "Customer Experience" | "Reputation" | "Engineering";
  date: string;
  readTime: string;
  author: string;
  summary: string;
  desc: string;
}

const POSTS: Post[] = [
  {
    title: "How to Combat Context Rot in LLM-Based Customer Desks",
    category: "Engineering",
    date: "May 28, 2026",
    readTime: "6 min read",
    author: "Dr. Evelyn Ross",
    summary: "AI coding assistants and support agents suffer from performance decay as chat histories bloat. Read how atomic context pruning saves tokens and preserves response speed.",
    desc: "Discover how metadata segmentation and scheduled context resets allow support AI agents to retain absolute performance, high-speed accuracy, and low execution budgets without loss of detail."
  },
  {
    title: "The Ultimate Omnichannel Strategy for Customer Care Teams",
    category: "Customer Experience",
    date: "May 15, 2026",
    readTime: "8 min read",
    author: "Marcus Vance",
    summary: "Consolidating live chat, Slack threads, SMS, and email queues into a single system is no longer a luxury. Learn why thread synchronization prevents ticket duplicates.",
    desc: "A deep dive into operational routing. We audit the metrics behind unified inbox queues, demonstrating how multi-agent load allocation speeds up customer query resolutions by 5x."
  },
  {
    title: "Unifying Automated Reviews With AI Sentiment Classification",
    category: "Reputation",
    date: "Apr 22, 2026",
    readTime: "5 min read",
    author: "Alistair Vance",
    summary: "Auto-syncing directory reviews and generating response drafts requires guardrails. Explore sentiment classification triggers and risk escalation policies.",
    desc: "Why simple macro-responses alienate frustrated customers. We audit sentiment classification thresholds, outlining rules for escalating negative ratings to dedicated VIP managers."
  },
  {
    title: "Designing Fail-Safe Event Webhooks for B2B Operations",
    category: "Automation",
    date: "Mar 10, 2026",
    readTime: "10 min read",
    author: "Dr. Evelyn Ross",
    summary: "API triggers must survive connection dropouts and database timeouts. We inspect retry-queue designs, payload hashing, and webhook safety rules.",
    desc: "How to build resilient event queues using background processes and automated failover hooks. We walk through best practices for developers building mission-critical B2B integrations."
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Automation", "Customer Experience", "Reputation", "Engineering"];

  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden w-full py-16">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Insights & Resources</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Omega Insights
          </h1>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
            Thought leadership, design patterns, and engineering guides on B2B workflow automation, omni-channel customer support desking, and AI reputation scoring.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 border-b border-zinc-900/60 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-850 rounded-lg pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-600"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length === 0 ? (
          <div className="h-64 border border-dashed border-zinc-850 rounded-3xl flex flex-col justify-center items-center text-zinc-500 italic text-xs">
            No articles found matching your query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="bg-zinc-900/30 border border-zinc-850 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                    <span className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-white mt-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {post.summary}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                    {post.desc}
                  </p>
                </div>

                <div className="border-t border-zinc-850/60 mt-6 pt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-bold text-zinc-400 uppercase">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <span className="text-[10px] text-white font-bold block leading-none">{post.author}</span>
                      <span className="text-[8px] text-zinc-500 font-semibold block mt-0.5 leading-none">{post.readTime}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] text-indigo-400 font-bold hover:text-indigo-300 transition-colors cursor-pointer">
                    Read Article
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Signup Banner */}
        <div className="rounded-3xl border border-zinc-850 bg-gradient-to-br from-zinc-900/40 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Stay Ahead of the Operations Curve</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Get our latest system design guides, automation case studies, and compliance advisories sent straight to your inbox monthly.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="#footer-email"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer animate-bounce"
            >
              Sign Up for our Newsletter
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
