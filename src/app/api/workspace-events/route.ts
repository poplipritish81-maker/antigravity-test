import { NextRequest } from "next/server";
import chokidar from "chokidar";

export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Watch current directory recursively
      const watcher = chokidar.watch(".", {
        ignored: [
          "**/node_modules/**",
          "**/.next/**",
          "**/.git/**",
          "**/tmp/**",
        ],
        persistent: true,
        ignoreInitial: true,
      });

      const sendEvent = (event: string, path: string) => {
        try {
          const payload = JSON.stringify({ event, path: path.replace(/\\/g, "/") });
          controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
        } catch (err) {
          console.error("Error sending SSE payload:", err);
        }
      };

      watcher
        .on("add", (path) => sendEvent("add", path))
        .on("change", (path) => sendEvent("change", path))
        .on("unlink", (path) => sendEvent("unlink", path));

      // Keep-alive heartbeats to prevent proxy/browser timeouts
      const pingInterval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`data: {"event":"ping"}\n\n`));
        } catch {
          // ignore
        }
      }, 15000);

      // Clean up resources upon disconnection
      const cleanup = () => {
        clearInterval(pingInterval);
        watcher.close();
      };

      request.signal.addEventListener("abort", () => {
        cleanup();
      });
    },
    cancel() {
      // Executed if the stream itself is canceled
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    },
  });
}
