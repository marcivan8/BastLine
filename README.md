# BastLine

Plateforme de mise en relation entre entreprises du BTP et intérimaires — projet de fin d'études (Epitech).

L'idée : une entreprise du bâtiment publie une mission, et l'application lui propose des intérimaires qualifiés et disponibles à proximité, grâce à un système de matching par compétences, zone géographique et disponibilité.

Ce dépôt contient le **frontend** (React + TypeScript, avec Vite).

## Lancer le projet

```bash
npm install
npm run dev
```

L'application tourne ensuite sur http://localhost:5173.

Autres commandes utiles :

```bash
npm run build   # build de production
npm run lint    # vérifie le code avec ESLint
```

## Où en est le projet

On est en train de construire une bibliothèque de composants réutilisables (le "design system") avant d'assembler les vraies pages. Ce qui existe déjà dans `src/components/` :

- `Button` — bouton principal / secondaire
- `Tag` — étiquette pour les compétences, filtres, etc.
- `MissionCard` — carte d'une mission (dashboard candidat)
- `MissionFilters` — barre de filtres de recherche de missions
- `StatCard` / `StatGrid` — cartes de statistiques (candidatures, revenus...)
- `Avatar` — photo de profil avec pastille de statut
- `StatusBadge` — étiquette de statut (disponible, urgent, en cours...)
- `CandidateCard` — carte d'un candidat (recherche de profils)
- `FeatureHighlight` / `FeatureHighlightGrid` — bloc icône + titre + description
- `SkillBar` — barre de compétence avec pourcentage
- `Tabs` — onglets accessibles au clavier

Chaque composant a été vérifié niveau accessibilité (RGAA) : contraste des couleurs, navigation au clavier, structure sémantique. Les couleurs, espacements et autres variables communes sont centralisés dans `src/styles/tokens.css`, pour ne pas avoir à les redéfinir à chaque composant.

## Prochaines étapes

- Assembler les vraies pages (dashboard candidat, dashboard entreprise, recherche de candidats) avec les composants déjà prêts
- Formulaire multi-étapes de création de mission
- Brancher les pages sur l'API une fois le backend disponible
