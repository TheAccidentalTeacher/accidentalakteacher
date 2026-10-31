# The Accidental Teacher

Generated deployment mirror for [accidentalakteacher.com](https://accidentalakteacher.com/). The homepage offers Studio, Builder and Explorer as three views of the same curriculum portfolio. Each view has18 pages and a persistent matching-page design switcher.

“I Build Around the Child” lives at `/i-build-around-the-child`, with equivalent article pages in all three views, a homepage/About introduction and an entry in the chooser. The article has a shared canonical address, social preview, structured Article metadata and a sitemap entry.

The source of truth is `Jumpdrive/NCHO/store/landing/style-lab-2026-10-29`. Do not hand-edit generated HTML or CSS in this delivery repository.

Build in the source project: run the three `src/themes/<theme>/build.mjs` generators, then `npm run build`, `npm run test:sites` and `node release-v2-identity-2026-10-31/prepare-production.mjs`. Copy the reviewed named candidate files to this delivery mirror. Source and release-v1 history remain retained.

The existing Vercel accidentalakteacher project deploys this mirror's main branch. Explicit redirects preserve legacy routes; the clean essay address rewrites to its Studio view. There is no form backend or new signup service.
