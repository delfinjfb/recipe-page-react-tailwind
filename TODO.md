# Open action items

- **Check the Vercel deploy of the Vite migration before merging to `main`**: raised 2026-11-07,
  open. The build output folder (`build/`) and the `npm run build` script are unchanged, but the
  Vercel project settings (framework preset, build command override, Node version) could not be
  read. Needs: Delfin pushes `chore/vite-migration`, then on the preview deployment checks a
  direct load of `/recipes/pancakes`, the fonts, and the footer links.
- **Upgrade Node from 20.18 (end of life since 2026-04-30) to 22 or 24 LTS**: raised 2026-11-07,
  open. The toolchain is held at Vite 6, Vitest 4, jsdom 26 and ESLint 9 (deprecated) because
  their newer majors need Node ≥ 20.19 or ≥ 22. Needs: Delfin upgrades Node locally and on Vercel,
  then bumps ESLint to 10 (and optionally Vite to 8) and adds an `engines` field.
