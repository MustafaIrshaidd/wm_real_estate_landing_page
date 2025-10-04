import path from "path";
import fs from "fs";
import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";
import { createRequire } from "module";

const isNetlify = process.env.NETLIFY === "true";
const hasWorkerEntry = fs.existsSync(path.resolve(__dirname, "./src/worker/index.ts"));
const includeCloudflare = !isNetlify && hasWorkerEntry;

export default defineConfig(() => {
  const mocha = mochaPlugins(process.env as unknown as Record<string, string>) as unknown;
  const mochaList = (Array.isArray(mocha) ? mocha : [mocha]) as PluginOption[];
  const basePlugins: PluginOption[] = [...mochaList, react()];

  if (includeCloudflare) {
    const require = createRequire(import.meta.url);
    const { cloudflare } = require("@cloudflare/vite-plugin");
    basePlugins.push(cloudflare());
  }

  return {
    plugins: basePlugins,
    server: {
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
