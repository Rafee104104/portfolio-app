# Tasnim Munawar Rafee — Portfolio

A formal, editorial-style portfolio for Tasnim Munawar Rafee, a full-stack software engineer based in Dhaka, Bangladesh. It presents selected projects, professional experience, technical strengths, education, and research in a focused single-page experience.

Live site: [www.portfolio-app-lac-seven.vercel.app](https://www.portfolio-app-lac-seven.vercel.app)

## Stack

- Next.js 16 App Router and React 19
- TypeScript with strict type checking
- Tailwind CSS 4 for the design system and responsive layout
- Motion for React for restrained reveal and interaction animation
- shadcn/ui conventions with Radix UI primitives
- Lucide React icons
- `next/font`, `next/image`, and file-based Next.js metadata

The application deliberately keeps its visual primitives local. This makes the sections easier to reuse, avoids overlapping component-library dependencies, and keeps the final interface stylistically consistent.

## Architecture

```text
app/
  layout.tsx             Root document and shared metadata
  page.tsx               Server-rendered page composition
  globals.css            Tokens, themes, utilities, and global motion
  robots.ts              Search crawler policy
  sitemap.ts             Canonical route discovery
  opengraph-image.tsx    Generated social preview
components/
  *-section.tsx          Independent portfolio sections
  portfolio-page.tsx     Page-level section composition
  site-*.tsx             Header and footer
  ui/                    Reusable shadcn/Radix-style primitives
lib/
  portfolio-data.ts      Typed public portfolio content
  utils.ts               Shared class-name utilities
public/                  Approved public media
```

The route remains a Server Component while only interactive islands opt into client rendering. Portfolio content is centralized in typed data structures, and presentational sections consume that data without duplicating facts.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # Run ESLint
npm run typecheck # Run strict TypeScript checking
npm run check   # Run lint and type checking together
npm run build   # Create a production build
npm run start   # Serve the production build
```

## UI influence and rationale

shadcn/ui and Radix provide the accessibility and composition baseline. The broader component ecosystem in the original brief was used as a reference library, not imported wholesale:

- Skiper UI, Aceternity UI, Magic UI, React Bits, Fancy Components, BundUI, and Rombo informed small motion details and transitions.
- Launch UI, KokonutUI, Spectrum UI, Roadmap UI, Lukacho UI, Indie UI, Origin UI, LuxeUI, and shadcn block collections informed section rhythm, card density, and responsive composition.
- MynaUI, Achromatic, Dice UI, and Backseasy informed focused utility patterns, surfaces, and background restraint.
- NativeWind, GlueStack, and NativeWindUI are mobile-oriented references; their spacing and touch-target discipline informed responsive decisions, but they are not web runtime dependencies.

This selective approach preserves the strongest interaction ideas while avoiding a collage of unrelated styles. Animation is intentionally quiet: it supports hierarchy and feedback without competing with the work itself.

### Skiper UI attribution

The animated-link primitive is based on **Skiper 40** from [Skiper UI](https://skiper-ui.com/), added through the project’s shadcn registry configuration. Skiper UI requires attribution for use of its free component version. The local component remains editable so its styling can match this portfolio’s design language.

Registry command:

```bash
npx shadcn add @skiper-ui/skiper40
```

## Privacy

The source CV includes personal details and third-party reference contacts that are not appropriate for a public website. The public portfolio should expose only the owner-approved professional email, phone number, city-level location, and professional profile links. A street address, date of birth, marital status, nationality, and referees’ private contact details must remain unpublished unless explicit consent is provided.

Before every public deployment, review `lib/portfolio-data.ts` and `public/` for accidental sensitive data or unapproved documents.
