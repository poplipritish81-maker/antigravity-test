"use client";

import React, { useState, useEffect } from "react";
import { ContextGauge } from "@/components/context-gauge";
import { KanbanBoard, TaskItem } from "@/components/kanban-board";
import { SimulatorPanel, GSDPhase } from "@/components/simulator-panel";
import { MetricCard, TokenAnalyticsChart } from "@/components/metric-card";
import {
  Activity,
  FolderGit2,
  PiggyBank,
  CheckCircle
} from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";

const DEFAULT_TASKS: TaskItem[] = [
  {
    id: "task-1",
    title: "[NEW] Create UI Components (src/components/context-gauge.tsx)",
    description: "Build radial token usage meter and context compression button.",
    status: "todo",
    fileLink: "src/components/context-gauge.tsx",
    logs: [
      "[INFO] Autonomous Resolver active for Task: Create UI Components",
      "[INFO] Reading design specifications for radial token usage meter",
      "[TOOL] call: write_to_file('src/components/context-gauge.tsx')",
      "[SUCCESS] File written to disk successfully.",
      "[TOOL] call: run_command('npm run build')",
      "[SUCCESS] Build succeeded without compilation warnings.",
      "[COMMIT] git commit -m 'feat: Add context-gauge.tsx radial token meter'"
    ],
    diff: `+ export function ContextGauge({
+   contextUsage,
+   isPruning,
+   onPrune,
+ }) {
+   const maxTokens = 200000;
+   const percentage = (contextUsage / maxTokens) * 100;
+   return (
+     <div className="radial-container">
+       <svg>...</svg>
+     </div>
+   );
+ }`
  },
  {
    id: "task-2",
    title: "[MODIFY] Optimize State Management (src/app/page.tsx)",
    description: "Connect context gauge state hook to the task simulator callback.",
    status: "todo",
    fileLink: "src/app/page.tsx",
    logs: [
      "[INFO] Autonomous Resolver active for Task: Optimize State Management",
      "[INFO] Checking existing state variables in src/app/page.tsx",
      "[TOOL] call: replace_file_content('src/app/page.tsx')",
      "[SUCCESS] State connection successfully mapped.",
      "[COMMIT] git commit -m 'refactor: Connect ContextGauge state and prune hooks'"
    ],
    diff: `@@ -12,5 +12,12 @@
- const [tokens, setTokens] = useState(0);
+ const [contextUsage, setContextUsage] = useState(145000);
+ const handlePrune = () => {
+   setIsPruning(true);
+   setTimeout(() => {
+     setContextUsage(25000);
+     setIsPruning(false);
+   }, 2000);
+ };`
  },
  {
    id: "task-3",
    title: "[NEW] Create Automated Unit Tests (tests/gauge.test.ts)",
    description: "Verify that token reduction subtraction logic matches math model.",
    status: "todo",
    fileLink: "tests/gauge.test.ts",
    logs: [
      "[INFO] Autonomous Resolver active for Task: Create Automated Unit Tests",
      "[TOOL] call: write_to_file('tests/gauge.test.ts')",
      "[SUCCESS] Created tests/gauge.test.ts successfully.",
      "[TOOL] call: run_command('npm run test')",
      "[SUCCESS] Test execution results:\n  ✓ ContextGauge token calculation works\n  ✓ Compression resets window to 25k\nTests: 2 passed, 2 total.",
      "[COMMIT] git commit -m 'test: Add unit tests for context window state updates'"
    ],
    diff: `+ import { calculatePercent } from "../src/lib/utils";
+ 
+ describe("Context Window calculations", () => {
+   it("should correctly handle token values", () => {
+     expect(calculatePercent(100000, 200000)).toBe(50);
+   });
+ });`
  }
];

export default function Home() {
  const [contextUsage, setContextUsage] = useState(145000);
  const [isPruning, setIsPruning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<GSDPhase>("idle");
  const [isRunningCycle, setIsRunningCycle] = useState(false);

  // Stats Counters
  const [statCommits, setStatCommits] = useState(5);
  const [statTokensSaved, setStatTokensSaved] = useState(120000);
  const [statCostSaved, setStatCostSaved] = useState(1.80);

  // Terminal Logs state
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // Tasks state
  const [tasks, setTasks] = useState<TaskItem[]>(DEFAULT_TASKS);

  // Chart state
  const [chartData] = useState([
    { step: "Init", tokens: 5000, prunedTokens: 5000 },
    { step: "Discuss", tokens: 20000, prunedTokens: 20000 },
    { step: "Plan", tokens: 35000, prunedTokens: 35000 },
    { step: "Execute", tokens: 60000, prunedTokens: 60000 },
    { step: "Prune 1", tokens: 95000, prunedTokens: 25000 },
    { step: "Code 1", tokens: 120000, prunedTokens: 40000 },
    { step: "Code 2", tokens: 155000, prunedTokens: 60000 },
    { step: "Prune 2", tokens: 180000, prunedTokens: 25000 },
    { step: "Verify", tokens: 195000, prunedTokens: 40000 },
  ]);

  // Utility to append log with timestamp
  const appendLog = (msg: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTerminalLogs((prev) => [...prev, `[${time}] ${msg}`]);
  };

  // 1. Handlers for context pruning
  const handlePrune = () => {
    if (isPruning) return;
    setIsPruning(true);
    appendLog("[SYSTEM] Context Pruning requested by user.");
    appendLog("[TOOL] call: run_command('gsd context-compress')");

    setTimeout(() => {
      appendLog("[INFO] Summarizing execution history...");
    }, 6000);

    setTimeout(() => {
      appendLog("[INFO] Compiling active metadata.json files...");
    }, 12000);

    setTimeout(() => {
      appendLog("[SUCCESS] Context compressed successfully!");
      const savedAmount = contextUsage - 25000;
      setStatTokensSaved((prev) => prev + savedAmount);
      // Cost savings: $0.015 per 1k tokens saved
      setStatCostSaved((prev) => prev + (savedAmount / 1000) * 0.015);
      setContextUsage(25000);
      setIsPruning(false);
      appendLog(`[SYSTEM] Context window tokens pruned: ${contextUsage.toLocaleString()} ➔ 25,000.`);
    }, 18000);
  };

  // 2. Handlers for running a specific GSD phase manually
  const triggerPhase = (phase: GSDPhase) => {
    if (isRunningCycle) return;
    setCurrentPhase(phase);

    switch (phase) {
      case "init":
        appendLog("[SYSTEM] Initializing GSD Project Spec...");
        appendLog("[TOOL] call: read_file('C:\\Users\\WIN10\\prd.md')");
        setTimeout(() => {
          appendLog("[SUCCESS] PRD parsed successfully. Found Next.js app details.");
          setContextUsage((c) => Math.min(200000, c + 8000));
        }, 1000);
        break;

      case "discuss":
        appendLog("[SYSTEM] GSD Discussion phase active...");
        appendLog("[TOOL] call: search_web('recharts Next.js hydration issues standard fixes')");
        setTimeout(() => {
          appendLog("[SUCCESS] Configured layout options: deep-dark mode dashboard.");
          setContextUsage((c) => Math.min(200000, c + 12000));
        }, 1000);
        break;

      case "plan":
        appendLog("[SYSTEM] GSD Planning phase active...");
        appendLog("[INFO] Formulating atomic task breakdown...");
        setTimeout(() => {
          appendLog("[SUCCESS] task.md and implementation_plan.md synced with backlog.");
          setContextUsage((c) => Math.min(200000, c + 10000));
        }, 1000);
        break;

      case "execute":
        appendLog("[SYSTEM] GSD Execution phase active...");
        appendLog("[TOOL] call: write_to_file('src/components/metric-card.tsx')");
        setTimeout(() => {
          appendLog("[SUCCESS] Compiled React code cleanly.");
          setStatCommits((c) => c + 1);
          setContextUsage((c) => Math.min(200000, c + 25000));
        }, 1000);
        break;

      case "verify":
        appendLog("[SYSTEM] GSD Verification phase active...");
        appendLog("[TOOL] call: run_command('npm run build')");
        setTimeout(() => {
          appendLog("[SUCCESS] Build OK. All tests passing green.");
          setContextUsage((c) => Math.min(200000, c + 15000));
        }, 1000);
        break;

      default:
        break;
    }
  };

  // 3. Handlers for Running Full GSD Cycle autonomously
  const runFullCycle = () => {
    if (isRunningCycle || currentPhase !== "idle") return;
    setIsRunningCycle(true);
    setTerminalLogs([]);
    appendLog("[SYSTEM] Starting Autonomous GSD Workflow Execution.");

    const runStep = (stepIdx: number) => {
      const steps: GSDPhase[] = ["init", "discuss", "plan", "execute", "verify"];
      if (stepIdx >= steps.length) {
        setTimeout(() => {
          setCurrentPhase("idle");
          setIsRunningCycle(false);
          appendLog("[SUCCESS] Autonomous GSD cycle finished successfully. Git clean.");
        }, 1000);
        return;
      }

      const active = steps[stepIdx];
      setCurrentPhase(active);

      // Logs sequence
      if (active === "init") {
        appendLog("[SYSTEM] Phase 1/5: INITIALIZE");
        appendLog("[TOOL] call: write_to_file('C:\\Users\\WIN10\\implementation_plan.md')");
        setContextUsage((c) => Math.min(200000, c + 10000));
      } else if (active === "discuss") {
        appendLog("[SYSTEM] Phase 2/5: DISCUSS");
        appendLog("[TOOL] call: search_web('Next.js tailwind layout instructions')");
        setContextUsage((c) => Math.min(200000, c + 15000));
      } else if (active === "plan") {
        appendLog("[SYSTEM] Phase 3/5: PLAN");
        appendLog("[TOOL] call: write_to_file('task.md')");
        setContextUsage((c) => Math.min(200000, c + 10000));
      } else if (active === "execute") {
        appendLog("[SYSTEM] Phase 4/5: EXECUTE");
        appendLog("[TOOL] call: write_to_file('src/components/kanban-board.tsx')");
        setStatCommits((c) => c + 1);
        setContextUsage((c) => Math.min(200000, c + 30000));
      } else if (active === "verify") {
        appendLog("[SYSTEM] Phase 5/5: VERIFY");
        appendLog("[TOOL] call: run_command('npm run build')");
        setContextUsage((c) => Math.min(200000, c + 15000));
      }

      setTimeout(() => {
        appendLog(`[SUCCESS] Completed phase: ${active.toUpperCase()}`);
        runStep(stepIdx + 1);
      }, 3000);
    };

    runStep(0);
  };

  // 4. Handlers for Kanban Board Task resolution
  const handleStartResolve = (task: TaskItem) => {
    // 1. Move task to in progress
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, status: "in_progress" } : t))
    );
    appendLog(`[SYSTEM] Initiating autonomous resolution of task: ${task.title}`);

    // Print logs sequentially
    task.logs?.forEach((log, index) => {
      setTimeout(() => {
        appendLog(log);
      }, (index + 1) * 1000);
    });

    // 2. Mark task complete after timeout
    const resolveTime = (task.logs?.length || 2) * 1000 + 500;
    setTimeout(() => {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, status: "done" } : t))
      );
      setStatCommits((c) => c + 1);
      setContextUsage((c) => Math.min(200000, c + 20000));
      appendLog(`[SUCCESS] Completed task "${task.title}". Git commit created.`);
    }, resolveTime);
  };

  const handleResetAll = () => {
    setTasks(DEFAULT_TASKS);
    setContextUsage(145000);
    setStatCommits(5);
    setTerminalLogs([]);
    setCurrentPhase("idle");
    setIsRunningCycle(false);
    appendLog("[SYSTEM] Board and stats reset to default states.");
  };

  // Initial greeting log
  useEffect(() => {
    const timer = setTimeout(() => {
      appendLog("[SYSTEM] Antigravity workflow monitor active.");
      appendLog("[SYSTEM] Warning: Context tokens above 140k. Prune context (GSD) recommended to avoid latency/costs.");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Poll live Git commit status
  useEffect(() => {
    const fetchGitStats = async () => {
      try {
        const res = await fetch("/api/git");
        if (res.ok) {
          const data = await res.json();
          if (typeof data.commitCount === "number") {
            setStatCommits(data.commitCount);
          }
        }
      } catch (err) {
        console.error("Failed to fetch git stats:", err);
      }
    };

    fetchGitStats();
    const interval = setInterval(fetchGitStats, 5000);
    return () => clearInterval(interval);
  }, []);

  // Listen to real-time workspace file events via SSE
  useEffect(() => {
    const eventSource = new EventSource("/api/workspace-events");

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "ping") return;

        const action = data.event.toUpperCase();
        appendLog(`[SYSTEM] Workspace file ${action}: ${data.path}`);
      } catch {
        // ignore JSON parse errors
      }
    };

    eventSource.onerror = (err) => {
      console.error("Workspace event source error:", err);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const completedTasksCount = tasks.filter((t) => t.status === "done").length;

  return (
    <TooltipProvider>
      <div className="flex-1 bg-zinc-950 text-zinc-100 min-h-screen pb-16">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f15_1px,transparent_1px),linear-gradient(to_bottom,#0f0f15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col gap-6 relative">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border/20 pb-5 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-base shadow shadow-indigo-500/30">
                  A
                </div>
                <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                  Antigravity Workflow Playground
                </h1>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Learn the autonomous agentic development loop: Planning, Task Board, Context Gauge, and Verification.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Agent Connected
              </span>
            </div>
          </div>

          {/* Stats Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Active Agent State"
              value={
                currentPhase === "idle"
                  ? "Idle"
                  : currentPhase.toUpperCase()
              }
              description="Current step in the GSD cycle"
              icon={<Activity className="h-5 w-5 text-indigo-400" />}
            />
            <MetricCard
              title="Completed Tasks"
              value={`${completedTasksCount} / ${tasks.length}`}
              description="Backlog tasks marked DONE by agent"
              change={completedTasksCount === 3 ? "100%" : `${Math.round((completedTasksCount / 3) * 100)}%`}
              trend="up"
              icon={<CheckCircle className="h-5 w-5 text-emerald-400" />}
            />
            <MetricCard
              title="Git Commits Created"
              value={statCommits}
              description="Atomic git savepoints pushed"
              icon={<FolderGit2 className="h-5 w-5 text-sky-400" />}
            />
            <MetricCard
              title="Autonomous Savings"
              value={`$${statCostSaved.toFixed(2)}`}
              description={`Pruned ${statTokensSaved.toLocaleString()} tokens`}
              change="+$0.45"
              trend="up"
              icon={<PiggyBank className="h-5 w-5 text-amber-400" />}
            />
          </div>

          {/* Middle Row: Simulator & Context Gauge */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SimulatorPanel
                currentPhase={currentPhase}
                terminalLogs={terminalLogs}
                onTriggerPhase={triggerPhase}
                onRunFullCycle={runFullCycle}
                isRunningCycle={isRunningCycle}
              />
            </div>
            <div>
              <ContextGauge
                contextUsage={contextUsage}
                isPruning={isPruning}
                onPrune={handlePrune}
              />
            </div>
          </div>

          {/* Bottom Row: Kanban Board & Token Analytics Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <KanbanBoard
                tasks={tasks}
                onStartResolve={handleStartResolve}
                onResetAll={handleResetAll}
              />
            </div>
            <div>
              <TokenAnalyticsChart data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
/ /   t e s t  
 