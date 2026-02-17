/// <reference types="node" />
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";
import { join } from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// Plugin para GitHub Pages: copia index.html a 404.html para que las rutas
// del SPA funcionen al refrescar o al abrir enlaces directos.
function copyIndexTo404() {
  return {
    name: "copy-index-to-404",
    closeBundle() {
      const outDir = join(process.cwd(), "dist");
      const index = join(outDir, "index.html");
      const notFound = join(outDir, "404.html");
      if (existsSync(index)) {
        copyFileSync(index, notFound);
        console.log("Copied index.html to 404.html for GitHub Pages SPA routing.");
      }
    },
  };
}

export default defineConfig({
  plugins: [checker({ typescript: true }), react(), copyIndexTo404()],
  base: "/dashboard-layout-react/",
  build: {
    outDir: "dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
});
