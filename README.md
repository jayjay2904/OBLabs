# One Better Labs website

The official marketing website for One Better Labs, built with Next.js, TypeScript and the App Router.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configuration

Copy `.env.example` to `.env.local` when configuration differs from production.

- `NEXT_PUBLIC_SITE_URL` controls canonical, sitemap and structured-data URLs.
- `CONTACT_EMAIL` controls the public contact address.

The contact form currently validates in the browser but does not transmit or store data. Connect an approved server-side email provider before launch and update the confirmation behaviour accordingly.

## Content and assets

- Brand assets: `public/brand`
- Approved reference board: `docs/brand/ob-labs-brand-board.png`
- Products, principles, navigation and updates: `data/site.ts`

## Before launch

- Request production-ready Jasper Blue exports of the OB Labs mark and full logo. The supplied SVG files embed raster artwork, so the approved originals remain unchanged while surrounding website treatments use the new palette.
- Supply and approve John’s founder biography and portrait.
- Replace the legal placeholders with reviewed privacy, cookie and terms copy.
- Configure and test contact-form delivery and abuse protection.
- Add verified social profile links only when they are available.
- Add real product visuals when approved; current treatments are intentionally abstract and do not imply finished interfaces.
