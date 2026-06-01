import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "Query parameter 'file' is required" },
        { status: 400 }
      );
    }

    let diffContent = "";
    try {
      // 1. Try to get active diff relative to HEAD (staged or unstaged)
      const diffOutput = execSync(`git diff HEAD -- "${file}"`, {
        encoding: "utf8",
        timeout: 2000,
      });
      diffContent = diffOutput.trim();
    } catch (e) {
      console.warn("Failed to run git diff relative to HEAD:", e);
    }

    // 2. If active diff is empty, try to get the last commit's diff for this file
    if (!diffContent) {
      try {
        const logOutput = execSync(`git log -p -1 -- "${file}"`, {
          encoding: "utf8",
          timeout: 2000,
        });
        
        // Strip the commit metadata header to only show the diff
        const lines = logOutput.split("\n");
        const diffStartIndex = lines.findIndex(line => line.startsWith("diff --git"));
        if (diffStartIndex !== -1) {
          diffContent = lines.slice(diffStartIndex).join("\n").trim();
        } else {
          diffContent = logOutput.trim();
        }
      } catch (e) {
        console.warn("Failed to get last commit diff for file:", e);
      }
    }

    return NextResponse.json({
      file,
      diff: diffContent || null,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
