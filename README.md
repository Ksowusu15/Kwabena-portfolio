# Kwabena Owusu Soadwa — Production Portfolio

A production-ready portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Motion, Resend, and Vercel Analytics.

## Included

- Responsive light/dark portfolio
- Animated hero with profile image
- About, skills, experience, projects, contact, and premium footer
- Static project case-study pages
- Online resume plus PDF download
- Resend contact form with validation, honeypot spam protection, and basic rate limiting
- Dynamic Open Graph image and favicon
- Sitemap, robots.txt, canonical metadata, Twitter/Open Graph cards, and JSON-LD
- Loading, 404, and global error screens
- Vercel Analytics
- Security response headers

## Local setup

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Fill in the environment variables.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

## Required production environment variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=kwabena6037@gmail.com
CONTACT_FROM_EMAIL=Kwabena Portfolio <portfolio@your-domain.com>
```

`CONTACT_FROM_EMAIL` should use a sender address verified in Resend. During initial testing, Resend's onboarding sender may be used subject to Resend account restrictions.

## Validate before deployment

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the four environment variables under Project Settings → Environment Variables.
4. Deploy.
5. Set `NEXT_PUBLIC_SITE_URL` to the final Vercel or custom-domain URL and redeploy.
6. Verify the sender domain in Resend and update `CONTACT_FROM_EMAIL`.

## Content to review

- Confirm every project repository and live-demo URL in `data/site.ts`.
- Replace or update `public/Kwabena-Owusu-Soadwa-CV.pdf` when your resume changes.
- Confirm certification wording and employment details before publishing.

## Premium case studies

Each project page now includes recruiter-focused product storytelling:

- Browser and responsive device previews
- Problem, solution, role, and product overview
- System architecture flow
- Responsibilities and outcomes
- Features, engineering challenges, and planned improvements
- Lessons learned and next-project navigation

The loading route also includes a branded animated progress experience with reduced-motion support.
