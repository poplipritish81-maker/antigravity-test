"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContextGaugeProps {
  contextUsage: number;
  isPruning: boolean;
  onPrune: () => void;
}

export function ContextGauge({
  contextUsage,
  isPruning,
  onPrune,
}: ContextGaugeProps) {
  const maxTokens = 200000;
  const percentage = Math.min(100, Math.max(0, (contextUsage / maxTokens) * 100));

  // Determine status color and text
  let statusText = "Healthy";
  let statusColor = "text-emerald-500 dark:text-emerald-400";
  let ringColor = "stroke-emerald-500 dark:stroke-emerald-400";
  let ringBgColor = "stroke-emerald-500/10 dark:stroke-emerald-400/10";
  let glowColor = "shadow-emerald-500/10";
  let Icon = CheckCircle;

  if (contextUsage >= 140000) {
    statusText = "Context Rot Risk";
    statusColor = "text-red-500 dark:text-red-400";
    ringColor = "stroke-red-500 dark:stroke-red-400";
    ringBgColor = "stroke-red-500/10 dark:stroke-red-400/10";
    glowColor = "shadow-red-500/10";
    Icon = AlertTriangle;
  } else if (contextUsage >= 70000) {
    statusText = "High Usage";
    statusColor = "text-amber-500 dark:text-amber-400";
    ringColor = "stroke-amber-500 dark:stroke-amber-400";
    ringBgColor = "stroke-amber-500/10 dark:stroke-amber-400/10";
    glowColor = "shadow-amber-500/10";
    Icon = Zap;
  }

  // SVG parameters for circle
  const radius = 55;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className={cn("relative overflow-hidden border border-border/40 bg-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg", glowColor)}>
      {/* Decorative gradient overlay */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Zap className="h-5 w-5 text-indigo-500" />
          Context Window
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Visualizing active token count and rot danger.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center py-4">
        {/* Radial Progress Gauge */}
        <div className="relative flex items-center justify-center">
          <svg className="h-36 w-36 transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="72"
              cy="72"
              r={radius}
              className={cn("transition-colors duration-500", ringBgColor)}
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Foreground progress ring */}
            <circle
              cx="72"
              cy="72"
              r={radius}
              className={cn("transition-all duration-1000 ease-out", ringColor)}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Core label overlay */}
          <div className="absolute flex flex-col items-center text-center">
            <span className="text-2xl font-bold tracking-tight">
              {contextUsage.toLocaleString()}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              / {maxTokens.toLocaleString()} tkn
            </span>
          </div>
        </div>

        {/* Status indicator */}
        <div className={cn("mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background/50 border border-border/30", statusColor)}>
          <Icon className="h-3.5 w-3.5" />
          {statusText}
        </div>
      </CardContent>

      <div className="border-t border-border/30 bg-muted/20 p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Context Health Score:</span>
          <span className="font-semibold">
            {Math.round(100 - percentage)}%
          </span>
        </div>
        <Button
          variant={contextUsage >= 140000 ? "default" : "outline"}
          onClick={onPrune}
          disabled={isPruning || contextUsage < 30000}
          className="w-full mt-2 font-medium cursor-pointer transition-all duration-300"
        >
          {isPruning ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin text-primary-foreground" />
              Compressing Context...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Prune Context (GSD)
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
