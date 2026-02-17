# Roblox Workshop Web

Web aplikace pro workshop v Roblox Studiu.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Struktura

- `app/` - stránky (`/`, `/checklist`, `/kody`, `/kody/[id]`)
- `components/` - UI komponenty
- `data/` - zdroj pravdy (checklisty, prefaby, kódy, kroky, tooltipy)
- `lib/` - typy a sdílená logika
- `docs/` - podklady k workshopu

## Spuštění

```bash
npm install
npm run dev
```

## Důležité příkazy

- `npm run dev` - lokální vývoj
- `npm run build` - produkční build
- `npm run start` - spuštění buildu
- `npm run lint` - lint
- `npm run check:texts` - kontrola poškozených znaků a podezřelých `?` v textech
- `npm run test` - placeholder

## Ukládání pokroku

Aplikace ukládá stav checklistu a zvolenou úroveň do `localStorage`.

## Jazyková pravidla

- České texty v UI a datech (`app/`, `components/`, `data/`) musí používat správnou českou diakritiku.
- Při úpravách textů neodstraňovat diakritiku kvůli kódování konzole nebo shellu.

## Nasazení

Aplikace je navržená pro statické nasazení na Vercel bez backendu.
