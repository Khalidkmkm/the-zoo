# The Zoo

En React-applikation byggd med TypeScript som hämtar och visar djur från API:t [animals.azurewebsites.net](https://animals.azurewebsites.net/api/animals). Djuren lagras lokalt i `localStorage` för snabbare åtkomst.

## Funktioner
- Hämtar och lagrar djurdata
- Visar djur med bild, namn och latinskt namn
- Responsiv design

## Teknologier
- React (TypeScript)
- Fetch API
- localStorage
- SCSS

## Projektstruktur
```
/the-zoo
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   ├── models/
│   ├── pages/
│   │   ├── AnimalPage.tsx
│   │   ├── Home.tsx
│   │   ├── Layout.tsx
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── routers.tsx
│   ├── vite-env.d.ts
│── .gitignore
│── README.md
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
```

