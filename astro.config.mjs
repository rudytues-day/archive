import { defineConfig } from 'astro/config';
// import astroMetaTags from "astro-meta-tags";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  devToolbar: {
    enabled: true
  }
});

