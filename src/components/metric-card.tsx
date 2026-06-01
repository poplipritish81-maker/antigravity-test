"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. MetricCard Component
interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  description,
  change,
  trend,
  icon,
}: MetricCardProps) {
  return (
    <Card className="relative overflow-hidden border border-border/40 bg-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
      <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        {icon}
      </div>
      <CardHeader className="pb-1 pt-4">
        <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          {title}
        </span>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight">{value}</span>
          {change && (
            <span
              className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5 border",
                trend === "up" && "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                trend === "down" && "bg-rose-500/10 text-rose-400 border-rose-500/20",
                trend === "neutral" && "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
              )}
            >
              {trend === "up" && <ArrowUpRight className="h-2.5 w-2.5" />}
              {trend === "down" && <ArrowDownRight className="h-2.5 w-2.5" />}
              {change}
            </span>
          )}
        </div>
        <p className="text-[11px] text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}

// 2. TokenAnalyticsChart Component
interface ChartDataPoint {
  step: string;
  tokens: number;
  prunedTokens: number;
}

interface TokenAnalyticsChartProps {
  data: ChartDataPoint[];
}

export function TokenAnalyticsChart({ data }: TokenAnalyticsChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="border border-border/40 bg-card/30 backdrop-blur-md p-6 flex flex-col justify-between h-[300px]">
        <div className="h-6 w-1/3 bg-zinc-900/30 rounded animate-pulse" />
        <div className="flex-1 mt-4 bg-zinc-900/10 rounded animate-pulse" />
      </Card>
    );
  }

  return (
    <Card className="border border-border/40 bg-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-500" />
            <CardTitle className="text-lg font-semibold tracking-tight">Token Consumption</CardTitle>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/30 border border-border/30 px-2 py-0.5 rounded-full font-medium">
            <Info className="h-3 w-3 text-indigo-400" />
            Prevents context rot
          </div>
        </div>
        <CardDescription className="text-xs text-muted-foreground">
          Telemetry of context window tokens with vs. without GSD pruning.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPruned" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-800/40" />
            <XAxis
              dataKey="step"
              tickLine={false}
              axisLine={false}
              className="text-[10px] fill-zinc-500 font-mono"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              className="text-[10px] fill-zinc-500 font-mono"
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#09090b",
                borderColor: "#27272a",
                borderRadius: "8px",
                fontSize: "11px",
                fontFamily: "monospace",
              }}
              labelStyle={{ color: "#a1a1aa", fontWeight: "bold" }}
            />
            <Area
              type="monotone"
              name="Standard (No Pruning)"
              dataKey="tokens"
              stroke="#ef4444"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTokens)"
            />
            <Area
              type="monotone"
              name="GSD Context Engine"
              dataKey="prunedTokens"
              stroke="#4f46e5"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPruned)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
