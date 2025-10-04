import path from "path";
import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";

const isNetlify = process.env.NETLIFY === "true";
const hasWorkerEntry = fs.existsSync(path.resolve(__dirname, "./src/worker/index.ts"));
const includeCloudflare = !isNetlify && hasWorkerEntry;

export default defineConfig(async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const basePlugins: any[] = [
    ...mochaPlugins(process.env as any),
    react(),
  ];

  if (includeCloudflare) {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    basePlugins.push(cloudflare());
  }

  return {
    plugins: basePlugins,
    server: {
      allowedHosts: true,
    },
    build: {
      chunkSizeWarningLimit: 5000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
