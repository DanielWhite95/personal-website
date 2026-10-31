import type { NextConfig } from "next";

/**
 * Root path the site is served from.
 *
 * GitHub Pages serves project sites from `https://<user>.github.io/<repo>`, so
 * the app needs to know about that sub-path. Set `NEXT_PUBLIC_BASE_PATH` at
 * build time (e.g. `/personal-website`) to deploy under a sub-path; leave it
 * empty for local development or for a root deployment.
 *
 * The value is inlined into the client bundles, so it can only be changed by
 * rebuilding.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a fully static site into `out/`.
  output: "export",
  basePath,
  // Emit `about/index.html` instead of `about.html`, which is what static hosts
  // like GitHub Pages expect.
  trailingSlash: true,
  // Image optimization needs a server, so it is unavailable in a static export.
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  // `cacheComponents` (PPR) and `partialPrefetching` need a server and cannot be
  // combined with `output: "export"`, so they are off for this static site.
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
