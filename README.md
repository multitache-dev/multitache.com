# 🚀 multitache.com

> Site vitrine de l'entreprise **MULTITACHE**.
>
> ⚠️ **Projet en cours de développement** — le site est loin d'être finalisé.

## Stack technique

| Couche         | Technologie                                                          |
| -------------- | -------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org/) (App Router, React 19, RSC)       |
| Langage        | TypeScript 7                                                         |
| Styling        | Tailwind CSS 4 (via PostCSS)                                         |
| Composants UI  | [shadcn/ui](https://ui.shadcn.com/) (style `base-nova`, Base UI)     |
| Icônes         | Lucide React                                                         |
| CMS            | [Keystatic](https://keystatic.com/) (stockage local, format Markdoc) |
| Rendu contenu  | Markdoc                                                              |
| Tests E2E      | Playwright (Chromium, Firefox, WebKit)                                |
| Linter         | Oxlint                                                               |
| Formatter      | Oxfmt                                                                |
| Package mgr    | pnpm (workspace)                                                     |
| CI             | GitHub Actions (lint, type-check, tests Playwright)                  |

## Architecture du site

Le site est **entièrement statique**, à l'exception du contenu éditable via l'interface d'administration Keystatic (`/keystatic`).

Les pages statiques sont des Server Components Next.js classiques. Les articles (collection `posts`) sont rédigés en Markdoc et gérés via Keystatic, qui fournit une interface d'édition visuelle.

## Arborescence

```
multitache.com/
├── app/
│   ├── layout.tsx              # Layout racine (police Geist)
│   ├── page.tsx                # Page d'accueil
│   ├── styles.css              # Styles globaux (Tailwind)
│   ├── reader.ts               # Reader Keystatic (accès aux collections)
│   ├── [slug]/
│   │   └── page.tsx            # Page dynamique d'un post (Markdoc → React)
│   ├── api/
│   │   └── keystatic/
│   │       └── [...params]/
│   │           └── route.ts    # API route pour l'admin Keystatic
│   └── keystatic/
│       ├── layout.tsx          # Layout de l'admin Keystatic
│       ├── keystatic.tsx       # Composant client Keystatic
│       └── [[...params]]/      # Catch-all pour l'UI admin
├── components/
│   └── ui/                     # Composants shadcn/ui (Button, Card, Sheet)
├── lib/
│   └── utils.ts                # Utilitaires (cn, etc.)
├── posts/                      # Contenu Markdoc des articles (géré par Keystatic)
├── tests/
│   └── example.spec.ts         # Tests E2E Playwright
├── keystatic.config.ts         # Configuration Keystatic (collections, schémas)
├── next.config.ts              # Configuration Next.js
├── playwright.config.ts        # Configuration Playwright
├── components.json             # Configuration shadcn/ui
├── tsconfig.json               # Configuration TypeScript
├── postcss.config.mjs          # Configuration PostCSS (Tailwind)
└── .github/
    └── workflows/
        └── code-quality.yml    # CI : lint, type-check, tests
```

## Endpoints utiles

| URL                                                                           | Description                        |
| ----------------------------------------------------------------------------- | ---------------------------------- |
| [localhost:3000](http://localhost:3000)                                        | Page d'accueil                     |
| [localhost:3000/keystatic](http://localhost:3000/keystatic)                    | 🔧 Interface d'administration CMS |
| [localhost:3000/{slug}](http://localhost:3000/{slug})                          | Page d'un article (ex: `/first-post`) |
| [localhost:3000/api/keystatic/[...params]](http://localhost:3000/api/keystatic)| API interne de Keystatic           |

## Démarrage rapide

```bash
# 1. Installer les dépendances
pnpm install

# 2. Configurer les variables d'environnement
cp .env.example .env

# 3. Lancer le serveur de développement
pnpm dev
```

Le site est disponible sur **http://localhost:3000**.

## Scripts disponibles

| Commande         | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Serveur de développement Next.js     |
| `pnpm build`     | Build de production                  |
| `pnpm start`     | Serveur de production (après build)  |
| `pnpm lint`      | Lancer Oxlint                        |
| `pnpm format`    | Formater le code avec Oxfmt          |

## Tests

```bash
# Installer les navigateurs Playwright (première fois)
pnpm exec playwright install --with-deps

# Lancer les tests E2E
pnpm exec playwright test
```

Les tests tournent sur Chromium, Firefox et WebKit. En CI, le build est effectué automatiquement avant l'exécution des tests.

## Variables d'environnement

Voir [`.env.example`](.env.example) pour la liste complète. Les variables Keystatic GitHub App sont nécessaires uniquement pour le mode GitHub (production).

## Licence

MIT
