import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    if (command === 'serve') {
        return {
            plugins: [
                react()
            ],
            build: {
                sourcemap: false,
            }
        }
    } else {
        // command === 'build'
        return {
            plugins: [
                react()
            ],
            esbuild: {
                drop: ['console', 'debugger'],
            },
            build: {
                sourcemap: false,
            }
        }
    }
})
