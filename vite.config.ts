// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import checker from "vite-plugin-checker";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  // Specify the base directory for the build
  root: "src",
  // Define the output directory
  build: {
    outDir: "../dist",
    // Specify the format for the output
    lib: {
      entry: "index.ts", // Entry file for your library
      name: "evoke-ui", // Name of your library
      fileName: format => `evoke-ui.${format}.js`, // Output file name
      formats: ["es", "umd"], // Output formats
    },
    // Minify the output
    minify: true,
    // Rollup options for advanced configurations
    rollupOptions: {
      // External dependencies that should not be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    checker({ typescript: true }),
    react(), // Enables React support
    dts({
      // Plugin to generate TypeScript declaration files
      insertTypesEntry: true, // Automatically include a types entry in package.json
      outDir: "../dist/types", // Output directory for types
      exclude: "**/*.stories.tsx", // Exclude stories from type generation
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  // Optional: Define any server options
  server: {
    port: 3000, // Development server port
  },
});
