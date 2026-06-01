"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, AlertCircle, Sparkles, Send, UserCheck, MessageSquare, AlertTriangle, ShieldCheck } from "lucide-react";

const FLOWS = {
  negativeReview: {
    trigger: { title: "Negative Rating Recieved", desc: "1-Star review detected on Google Reviews", icon: <AlertTriangle className="h-5 w-5 text-red-400" /> },
    condition: { title: "AI Sentiment Analysis", desc: "Evaluate language urgency and brand risk", icon: <Sparkles className="h-5 w-5 text-indigo-400" /> },
    action1: { title: "Draft AI Response", desc: "Apologize and request private resolution details", icon: <MessageSquare className="h-5 w-5 text-amber-400" /> },
    action2: { title: "Escalate to Customer Care", desc: "Instantly alert care managers via Slack", icon: <UserCheck className="h-5 w-5 text-emerald-400" /> }
  },
  cartAbandoned: {
    trigger: { title: "Cart Abandoned", desc: "Item added to cart, session inactive 45 min", icon: <AlertCircle className="h-5 w-5 text-amber-400" /> },
    condition: { title: "Customer Status Check", desc: "Determine if guest or returning VIP", icon: <ShieldCheck className="h-5 w-5 text-sky-400" /> },
    action1: { title: "Send SMS Coupon", desc: "Send 15% discount code directly to mobile phone", icon: <Send className="h-5 w-5 text-emerald-400" /> },
    action2: { title: "Schedule Email", desc: "Schedule recovery email to fire in 24 hours", icon: <Send className="h-5 w-5 text-indigo-400" /> }
  },
  newTicket: {
    trigger: { title: "Inbound Support Query", desc: "Customer emails support@omega.com", icon: <MessageSquare className="h-5 w-5 text-blue-400" /> },
    condition: { title: "Intelligent Routing", desc: "Classify topic (billing, technical, bug)", icon: <Sparkles className="h-5 w-5 text-indigo-400" /> },
    action1: { title: "Suggest FAQ Articles", desc: "Auto-reply with curated doc recommendations", icon: <Send className="h-5 w-5 text-teal-400" /> },
    action2: { title: "Route to Dev Queue", desc: "Move ticket to L3 Engineering team in Jira", icon: <UserCheck className="h-5 w-5 text-pink-400" /> }
  }
};

export function WorkflowDesigner() {
  const [selectedFlow, setSelectedFlow] = useState<keyof typeof FLOWS>("negativeReview");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState<"idle" | "trigger" | "condition" | "actions">("idle");

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setCurrentStep("trigger");

    setTimeout(() => {
      setCurrentStep("condition");
    }, 1500);

    setTimeout(() => {
      setCurrentStep("actions");
    }, 3000);

    setTimeout(() => {
      setIsPlaying(false);
      setCurrentStep("idle");
    }, 4800);
  };

  const flowData = FLOWS[selectedFlow];

  return (
    <div className="w-full bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden">
      
      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800/60 pb-5 justify-between items-center">
        <div className="flex gap-2">
          {Object.keys(FLOWS).map((flowKey) => (
            <button
              key={flowKey}
              onClick={() => {
                if (!isPlaying) setSelectedFlow(flowKey as keyof typeof FLOWS);
              }}
              disabled={isPlaying}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                selectedFlow === flowKey
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/10"
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
              } disabled:opacity-50`}
            >
              {flowKey === "negativeReview" && "Negative Review Response"}
              {flowKey === "cartAbandoned" && "Cart Abandonment Recovery"}
              {flowKey === "newTicket" && "Inbound Support Routing"}
            </button>
          ))}
        </div>

        {/* Play Button */}
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          Test Flow
        </button>
      </div>

      {/* Visual Canvas */}
      <div className="relative min-h-[250px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-4 py-6">
        
        {/* Step 1: Trigger */}
        <motion.div
          animate={{
            scale: currentStep === "trigger" ? 1.03 : 1,
            borderColor: currentStep === "trigger" ? "rgba(79, 70, 229, 0.6)" : "rgba(39, 39, 42, 0.6)"
          }}
          className={`w-full md:w-60 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 shadow-sm z-10 transition-all duration-300 ${
            currentStep === "trigger" && "shadow-indigo-500/10 border-indigo-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-900 rounded-lg">{flowData.trigger.icon}</div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-indigo-400 font-bold">Trigger</span>
              <div className="text-xs font-bold text-white mt-0.5">{flowData.trigger.title}</div>
            </div>
          </div>
          <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">{flowData.trigger.desc}</p>
        </motion.div>

        {/* Connector 1 */}
        <div className="hidden md:block flex-1 h-0.5 bg-zinc-800 relative min-w-[20px]">
          {currentStep !== "idle" && currentStep !== "trigger" && (
            <motion.div
              initial={{ left: 0 }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/80"
            />
          )}
        </div>

        {/* Step 2: Condition */}
        <motion.div
          animate={{
            scale: currentStep === "condition" ? 1.03 : 1,
            borderColor: currentStep === "condition" ? "rgba(99, 102, 241, 0.6)" : "rgba(39, 39, 42, 0.6)"
          }}
          className={`w-full md:w-60 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 shadow-sm z-10 transition-all duration-300 ${
            currentStep === "condition" && "shadow-indigo-500/10 border-indigo-500"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-900 rounded-lg">{flowData.condition.icon}</div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-indigo-400 font-bold">Condition</span>
              <div className="text-xs font-bold text-white mt-0.5">{flowData.condition.title}</div>
            </div>
          </div>
          <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">{flowData.condition.desc}</p>
        </motion.div>

        {/* Connector 2 Split */}
        <div className="hidden md:block flex-1 h-0.5 bg-zinc-800 relative min-w-[20px]">
          {currentStep === "actions" && (
            <motion.div
              initial={{ left: 0 }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/80"
            />
          )}
        </div>

        {/* Step 3: Actions Stack */}
        <div className="w-full md:w-64 flex flex-col gap-3 z-10">
          {/* Action 1 */}
          <motion.div
            animate={{
              scale: currentStep === "actions" ? 1.03 : 1,
              borderColor: currentStep === "actions" ? "rgba(16, 185, 129, 0.6)" : "rgba(39, 39, 42, 0.6)"
            }}
            className={`bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 shadow-sm transition-all duration-300 ${
              currentStep === "actions" && "shadow-emerald-500/10 border-emerald-500"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg">{flowData.action1.icon}</div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">Action</span>
                <div className="text-xs font-bold text-white mt-0.5">{flowData.action1.title}</div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">{flowData.action1.desc}</p>
          </motion.div>

          {/* Action 2 */}
          <motion.div
            animate={{
              scale: currentStep === "actions" ? 1.03 : 1,
              borderColor: currentStep === "actions" ? "rgba(16, 185, 129, 0.6)" : "rgba(39, 39, 42, 0.6)"
            }}
            className={`bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 shadow-sm transition-all duration-300 ${
              currentStep === "actions" && "shadow-emerald-500/10 border-emerald-500"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg">{flowData.action2.icon}</div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">Action</span>
                <div className="text-xs font-bold text-white mt-0.5">{flowData.action2.title}</div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed">{flowData.action2.desc}</p>
          </motion.div>
        </div>

      </div>

      {/* Decorative Canvas Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-56 w-56 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

    </div>
  );
}
