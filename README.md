# Titel

🎨 Random Color Generator

## Beskrivning av projektet

Detta projekt är en minimal React-app designad för att demonstrera moderna metoder för enhets- och integrationstestning med hjälp av **Vitest** och **React Testing Library**.

Appen genererar en slumpmässig bakgrundsfärg vid varje knapptryckning och visar den motsvarande hex-koden på skärmen. Smidiga CSS-övergångar används för en behaglig användarupplevelse.

## Komponenter

Projektet består av följande huvudkomponenter:

- **App.tsx:** Huvudkomponenten som samlar ihop de andra komponenterna och hanterar applikationens tillstånd.
- **ColorBackground.tsx:** Ansvarar för att visa bakgrundsfärgen.
- **ColorDisplay.tsx:** Visar den aktuella hex-koden.
- **RandomColorButton.tsx:** En knapp som triggar genereringen av en ny färg.

## Filstruktur

Projektet är organiserat med en **komponentbaserad struktur**, där varje komponent har sin egen testfil placerad bredvid huvudfilen.

```text
├── components/
│   ├── ColorBackground.test.tsx
│   ├── ColorBackground.tsx
│   ├── ColorDisplay.test.tsx
│   ├── ColorDisplay.tsx
│   ├── RandomColorButton.test.tsx
│   ├── RandomColorButton.tsx
├── styles/
│   ├── App.css
├── App.test.tsx
└── App.tsx
```

---

## Installation

### Klona repot

Kör följande kommando i din terminal:
`git clone https://github.com/Peter-WebDev/random-color-generator.git`

Kör `npm install` för att installera alla paket.

## Utveckling

Kör `npm run dev` för att starta utvecklingsservern.

---

## Testning

### Teststrategi

- **Vitest:** Används som test-runner, känd för sin snabbhet och enkla konfiguration.
- **React Testing Library:** Fokuserar på att testa komponenternas beteende ur ett användarperspektiv, vilket gör testerna mer robusta.
- **Vi.spyOn & Mocking:** Visar hur man mockar inbyggda JavaScript-funktioner som `Math.random` för att skapa förutsägbara testresultat, vilket är avgörande för att testa logik som involverar slumpmässighet.

### Kommandon

Kör `npm test` för att köra testerna. Kan köras utan att utvecklingsservern är igång.

Kör `npm run coverage` för att generera en testtäckningsrapport.

---

## Coverage

Kör `npm run coverage` för att se hur stor del av kodbasen som testerna täcker.

Observera att det nu finns en mapp [coverage](./coverage) med en massa filer (en hemsida). Du kan starta [index.html](./coverage/index.html) filen med live server för att öppna hemsidan. Där ser du mer detaljer om vad dina tester faktiskt testar och inte.
