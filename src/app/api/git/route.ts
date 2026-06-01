import { NextResponse } from "next/server";
import { execSync } from "child_process";

export async function GET() {
  try {
    // 1. Get commit count
    let commitCount = 0;
    try {
      const countOutput = execSync("git rev-list --count HEAD", {
        encoding: "utf8",
        timeout: 2000,
      });
      commitCount = parseInt(countOutput.trim(), 10) || 0;
    } catch (e) {
      console.warn("Failed to get git commit count, falling back to 0:", e);
    }

    // 2. Get recent commits
    let recentCommits: string[] = [];
    try {
      const logOutput = execSync("git log -n 5 --oneline", {
        encoding: "utf8",
        timeout: 2000,
      });
      recentCommits = logOutput
        .trim()
        .split("\n")
        .filter(Boolean)
        .map((line) => line.trim());
    } catch (e) {
      console.warn("Failed to get git logs, falling back to empty list:", e);
    }

    return NextResponse.json({
      commitCount,
      recentCommits,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
