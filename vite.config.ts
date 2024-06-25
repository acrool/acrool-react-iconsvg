import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import {visualizer} from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        react(),
        dts({
            insertTypesEntry: true,
        }),
        visualizer() as Plugin,
    ],
    css: {
        devSourcemap: process.env.NODE_ENV === 'production',
        modules: {
            localsConvention: 'camelCase',
            scopeBehaviour: 'local',
            generateScopedName: 'acrool-react-iconsvg__[local]',
        }
    },
    build: {
        sourcemap: process.env.NODE_ENV !== 'production',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: (format) => `acrool-react-iconsvg.${format}.js`,
        },
        cssTarget: 'chrome61',
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
