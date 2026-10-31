This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploying to GitHub Pages

The site is built as a static export (`output: "export"` in `next.config.ts`), so
`next build` writes a fully static site to `out/`. Because GitHub Pages serves
project sites from `https://<user>.github.io/<repo>`, every link and asset has to
be prefixed with that sub-path.

The root path is controlled by a single environment variable,
`NEXT_PUBLIC_BASE_PATH`, which `next.config.ts` feeds into `basePath`:

```bash
# Project site: https://<user>.github.io/personal-website
NEXT_PUBLIC_BASE_PATH=/personal-website npm run build

# User site (https://<user>.github.io) or local: no prefix
npm run build
```

Notes:

- The value is inlined into the client bundles at build time, so changing it
  requires a rebuild.
- Next.js prefixes `_next/*` assets, `favicon`, fonts and `<Link>` hrefs on its
  own. For anything it does not rewrite (files in `public/`, `<img src>`,
  `fetch()`, metadata URLs) use `withBasePath()` from `app/lib/base-path.ts`.
- `cacheComponents` (PPR) and `partialPrefetching` are disabled because they
  require a Node.js server and cannot be combined with a static export.
- The GitHub Actions workflow (`.github/workflows/nextjs.yml`) derives the base
  path from the repository name and passes it to the build, so no manual step is
  needed there.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
