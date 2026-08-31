# CV Studio

Plateforme de création, gestion et partage de CV.

## Stack

- Vite + React + TypeScript
- Supabase Auth + PostgreSQL + Storage
- Lucide React

## Développement

```bash
npm install
cp .env.example .env
npm run dev
```

## Configuration Supabase

Le projet Supabase `cv-studio` est déjà préparé avec les tables `profiles` et `resumes`, les politiques RLS et le bucket `cv-images`.

Pour Google et Microsoft, activez les fournisseurs correspondants dans Supabase Auth et renseignez leurs identifiants OAuth. Le flux Microsoft utilise le fournisseur Azure.

## Fonctionnalités v1

- Authentification e-mail, Google et Microsoft
- Dashboard multi-CV
- Duplication et suppression de CV
- Éditeur structuré par sections et lignes
- Ajout de lignes et sections
- Réorganisation des sections
- Liens avec ancre personnalisée
- Images par URL
- Aperçu public
- Impression / export PDF via le navigateur
- Thèmes clair, sombre et système
- Interface responsive
