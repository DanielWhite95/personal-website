/**
 * Root path the site is served from, mirroring `basePath` in `next.config.ts`.
 *
 * Next.js already prefixes `_next/*` assets and `<Link>` hrefs with the base
 * path. Use this helper for anything Next.js does not rewrite for you, e.g.
 * files in `public/`, `<img src>`, `fetch()` calls or metadata URLs.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative path (e.g. `/og.png`) with the deploy base path. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
