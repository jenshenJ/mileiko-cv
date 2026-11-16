import { defineConfig } from 'astro/config';

// Vercel exposes the production domain at build time. SITE_URL overrides it
// for custom domains or local builds.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL || (vercelHost ? `https://${vercelHost}` : undefined);

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
