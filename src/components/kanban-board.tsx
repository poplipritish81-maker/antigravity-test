"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Play, CheckCircle2, Circle, Loader2, Code2, Terminal } from "lucide-react";

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
  diff?: string;
  logs?: string[];
  fileLink?: string;
}

interface KanbanBoardProps {
  tasks: TaskItem[];
  onStartResolve: (task: TaskItem) => void;
  onResetAll: () => void;
}

export function KanbanBoard({ tasks, onStartResolve, onResetAll }: KanbanBoardProps) {
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [activeDiff, setActiveDiff] = useState<string>("");
  const [isLoadingDiff, setIsLoadingDiff] = useState<boolean>(false);

  const handleViewDiff = async (task: TaskItem) => {
    setSelectedTask(task);
    setActiveDiff(task.diff || "");
    if (task.fileLink) {
      setIsLoadingDiff(true);
      try {
        const res = await fetch(`/api/git/diff?file=${encodeURIComponent(task.fileLink)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.diff) {
            setActiveDiff(data.diff);
          }
        }
      } catch (err) {
        console.error("Failed to fetch active git diff:", err);
      } finally {
        setIsLoadingDiff(false);
      }
    }
  };

  const columns = [
    { id: "todo", title: "To Do", bg: "bg-zinc-500/5", border: "border-zinc-500/10", badgeBg: "bg-zinc-500/10 text-zinc-400" },
    { id: "in_progress", title: "In Progress", bg: "bg-blue-500/5", border: "border-blue-500/10", badgeBg: "bg-blue-500/10 text-blue-400" },
    { id: "done", title: "Done", bg: "bg-emerald-500/5", border: "border-emerald-500/10", badgeBg: "bg-emerald-500/10 text-emerald-400" },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-border/30 pb-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <Code2 className="h-5 w-5 text-indigo-500" />
            Task Backlog Board
          </h2>
          <p className="text-xs text-muted-foreground">
            Watch the agent take, code, test, and commit tasks.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onResetAll} className="cursor-pointer">
          Reset Board
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.id);
          return (
            <div
              key={col.id}
              className={`rounded-xl border ${col.border} ${col.bg} p-4 flex flex-col gap-3 min-h-[300px]`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wide text-foreground/80">
                  {col.title}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${col.badgeBg}`}>
                  {colTasks.length}
                </span>
              </div>

              <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[450px] pr-1">
                {colTasks.length === 0 ? (
                  <div className="h-24 border border-dashed border-border/40 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                    No tasks
                  </div>
                ) : (
                  colTasks.map((task) => (
                    <Card
                      key={task.id}
                      className="border border-border/30 bg-card/60 hover:bg-card hover:border-indigo-500/30 transition-all duration-200 group/card relative shadow-sm"
                    >
                      <CardHeader className="p-3 pb-1">
                        <div className="flex justify-between items-start gap-1">
                          <span className="text-xs font-semibold tracking-tight text-foreground line-clamp-1">
                            {task.title}
                          </span>
                          {task.status === "done" && (
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                          )}
                          {task.status === "in_progress" && (
                            <Loader2 className="h-4 w-4 text-blue-500 animate-spin shrink-0" />
                          )}
                          {task.status === "todo" && (
                            <Circle className="h-4 w-4 text-zinc-500 hover:text-indigo-500 transition-colors shrink-0" />
                          )}
                        </div>
                        <CardDescription className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                          {task.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-3 pt-2 flex flex-col gap-2">
                        {task.fileLink && (
                          <div className="text-[10px] font-mono text-indigo-400 bg-indigo-500/5 py-0.5 px-2 rounded w-fit border border-indigo-500/10 truncate max-w-full">
                            {task.fileLink}
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-2 mt-1">
                          {task.status === "done" && task.diff && (
                            <Button
                              variant="ghost"
                              size="xs"
                              onClick={() => handleViewDiff(task)}
                              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
                            >
                              View Code Diff
                            </Button>
                          )}

                          {task.status === "todo" && (
                            <Button
                              variant="default"
                              size="xs"
                              onClick={() => onStartResolve(task)}
                              className="w-full text-[11px] font-semibold flex items-center justify-center gap-1 cursor-pointer hover:bg-primary/95"
                            >
                              <Play className="h-3 w-3 fill-current" />
                              Let Agent Resolve
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Task Diff & Inspection Modal */}
      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && setSelectedTask(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-zinc-950 text-zinc-200 border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-zinc-100 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-indigo-400" />
              Code Changes: {selectedTask?.title}
            </DialogTitle>
            <DialogDescription className="text-zinc-400 text-xs">
              File: {selectedTask?.fileLink} | Status: Completed by Agent
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-3">
            <div>
              <h3 className="text-xs font-semibold uppercase text-zinc-400 mb-1 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" />
                Execution Logs
              </h3>
              <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-3 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto">
                {selectedTask?.logs?.map((log, idx) => (
                  <div key={idx} className={log.startsWith("ERROR") ? "text-rose-400" : log.startsWith("SUCCESS") ? "text-emerald-400" : "text-zinc-300"}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase text-zinc-400 mb-1 flex items-center justify-between">
                <span>Git Diff Output</span>
                {isLoadingDiff && <Loader2 className="h-3 w-3 animate-spin text-indigo-400" />}
              </h3>
              <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-3 overflow-x-auto max-h-[300px]">
                <pre className="font-mono text-[11px] leading-tight text-zinc-300">
                  {activeDiff.split("\n").map((line, idx) => {
                    let className = "text-zinc-400";
                    if (line.startsWith("+")) className = "text-emerald-400 bg-emerald-950/20";
                    else if (line.startsWith("-")) className = "text-rose-400 bg-rose-950/20";
                    else if (line.startsWith("@@")) className = "text-indigo-400 bg-indigo-950/10";
                    return (
                      <div key={idx} className={`py-0.5 px-1 rounded-sm ${className}`}>
                        {line}
                      </div>
                    );
                  })}
                </pre>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
