import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    if (command === "serve") { // dev
        return {
            plugins: [
                react(),
            ],
            build: {
                sourcemap: false,
            },
        };
    } else {
        // command === 'build'
        return {
            plugins: [
                react(),
                Sitemap(),
            ],
            esbuild: {
                drop: ["console", "debugger"],
            },
            build: {
                sourcemap: false,
            },
            server: {
                port: 5174,
                strictPort: true,
                host: true,
                origin: "http://0.0.0.0:5174",
            },
        };
    }
});
