import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@image": "/src/assets/psd_exported_to_image_layers/layers",
    },
  },
});
