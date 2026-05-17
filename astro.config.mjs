import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL ?? "https://zaciszeturawa.com";

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap()],
});
