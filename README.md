# AWSDC website

Website for the Africa World Schools Debating Championships (AWSDC).
Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 and Headless UI.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Routes

| Route                       | Content                                                        |
| --------------------------- | -------------------------------------------------------------- |
| `/`                         | AWSDC 2027 home                                                |
| `/about`                    | Introduction, letter from the conveners, social events         |
| `/tournament`               | Overview, host city, venues                                    |
| `/take-part`                | Registration, fees and deadlines, contact                      |
| `/team`                     | 2027 team with photos                                          |
| `/schedule`                 | Seven-day schedule                                             |
| `/travel`                   | Airport, visas, hotel and accommodation options                |
| `/partners`                 | Organisers and partners                                        |
| `/archive`, `/archive/2026` | Previous editions; frozen 2026 site (team, schedule, partners) |

## Updating the 2027 information

All 2027 content lives in **`src/data/awsdc-2027.ts`**, taken from the official 2027 booklet:
dates, venue, team (`team[].members`), schedule (`schedule`), fees and deadlines (`details`),
accommodation (`details.stayOptions`), partners and contact details.
Images are in `src/images/` (`booklet/`, `people/`, `logos/`). Portraits are 4:5, about 800x1000 px.

The 2026 archive is in **`src/data/awsdc-2026.ts`**. Treat it as read-only.

## Brand

Colours and fonts are defined in `src/styles/tailwind.css` (`bark`, `clay`, `saffron`, `rust`, `sand`),
sampled from the AWSDC logo. Fonts are self-hosted in `src/fonts/`.
