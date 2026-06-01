"use client";

import React, { useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, RefreshCw, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type GSDPhase = "init" | "discuss" | "plan" | "execute" | "verify" | "idle";

interface SimulatorPanelProps {
  currentPhase: GSDPhase;
  terminalLogs: string[];
  onTriggerPhase: (phase: GSDPhase) => void;
  onRunFullCycle: () => void;
  isRunningCycle: boolean;
}

export function SimulatorPanel({
  currentPhase,
  terminalLogs,
  onTriggerPhase,
  onRunFullCycle,
  isRunningCycle,
}: SimulatorPanelProps) {
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal logs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  const phases = [
    { id: "init", label: "Init", desc: "Define PRD & scope" },
    { id: "discuss", label: "Discuss", desc: "Align layout/style" },
    { id: "plan", label: "Plan", desc: "Break into tasks" },
    { id: "execute", label: "Execute", desc: "Write code" },
    { id: "verify", label: "Verify", desc: "Build & test" },
  ];

  return (
    <Card className="flex flex-col border border-border/40 bg-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg h-full min-h-[500px]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-indigo-500" />
            <CardTitle className="text-lg font-semibold tracking-tight">GSD Simulator</CardTitle>
          </div>
          <Button
            size="xs"
            onClick={onRunFullCycle}
            disabled={isRunningCycle || currentPhase !== "idle"}
            className="cursor-pointer font-semibold bg-indigo-600 hover:bg-indigo-500 text-white border-0 px-3 shadow"
          >
            {isRunningCycle ? (
              <>
                <RefreshCw className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                Simulating...
              </>
            ) : (
              <>
                <Play className="mr-1.5 h-3.5 w-3.5 fill-current" />
                Run Full GSD Cycle
              </>
            )}
          </Button>
        </div>
        <CardDescription className="text-xs text-muted-foreground">
          Step through the GSD (Get Shit Done) framework cycle.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        {/* Visual Stepper */}
        <div className="grid grid-cols-5 gap-1.5 bg-background/50 border border-border/30 rounded-lg p-2.5">
          {phases.map((ph, idx) => {
            const isActive = currentPhase === ph.id;
            const isCompleted =
              phases.findIndex((p) => p.id === currentPhase) > idx && currentPhase !== "idle";

            return (
              <div key={ph.id} className="flex flex-col items-center text-center relative group">
                <div
                  onClick={() => !isRunningCycle && onTriggerPhase(ph.id as GSDPhase)}
                  className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer border",
                    isActive
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30 scale-105"
                      : isCompleted
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
                      : "bg-background border-border/60 text-muted-foreground hover:border-indigo-500/40"
                  )}
                >
                  {isCompleted ? "✓" : idx + 1}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-bold mt-1.5 tracking-tight transition-colors",
                    isActive ? "text-indigo-400" : isCompleted ? "text-emerald-500" : "text-muted-foreground"
                  )}
                >
                  {ph.label}
                </span>
                {/* Micro tooltip */}
                <div className="absolute top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-300 rounded px-1.5 py-0.5 z-10 whitespace-nowrap shadow-md">
                  {ph.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Console Terminal */}
        <div className="flex flex-col flex-1 bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden shadow-inner font-mono text-xs text-zinc-200 min-h-[300px]">
          {/* Console Header */}
          <div className="flex items-center justify-between bg-zinc-900/90 px-3 py-1.5 border-b border-zinc-900 text-[10px] text-zinc-400 select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-1 font-semibold text-zinc-300 tracking-wide">antigravity@gsd-shell</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-500">Live Logs</span>
          </div>

          {/* Console Output */}
          <div className="flex-1 p-3 overflow-y-auto max-h-[350px] space-y-1.5 scrollbar-thin">
            {terminalLogs.length === 0 ? (
              <div className="h-full flex items-center justify-center text-zinc-500 italic text-[11px] animate-pulse">
                Terminal idle. Click a phase above or run a GSD cycle.
              </div>
            ) : (
              terminalLogs.map((log, idx) => {
                let colorClass = "text-zinc-300";
                if (log.includes("[ERROR]")) colorClass = "text-rose-400";
                else if (log.includes("[SUCCESS]")) colorClass = "text-emerald-400 font-medium";
                else if (log.includes("[TOOL]")) colorClass = "text-indigo-400";
                else if (log.includes("[COMMIT]")) colorClass = "text-sky-400 font-semibold";
                else if (log.includes("[SYSTEM]")) colorClass = "text-yellow-400/90 font-medium";

                return (
                  <div key={idx} className={cn("leading-relaxed break-all", colorClass)}>
                    {log}
                  </div>
                );
              })
            )}
            <div ref={terminalEndRef} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
