# accidentalakteacher.com

Generated deployment mirror for Scott Somers, the Accidental Teacher. The homepage offers Studio, Builder, and Explorer as three views of the same complete curriculum portfolio. Each view has 17 pages and a persistent design switcher.

The source of truth is Jumpdrive/NCHO/store/landing/style-lab-2026-10-29. Do not hand-edit generated HTML or CSS in this repository.

Build in the source project: npm ci, run each src/themes/<theme>/build.mjs generator, then npm run build and node release-v1/prepare-production.mjs. Copy the resulting release-v1/candidate files into this mirror and publish the reviewed commit.

Static hosting uses the existing Vercel accidentalakteacher project. Legacy public routes redirect to equivalent Studio pages. No form backend or signup service is added.
