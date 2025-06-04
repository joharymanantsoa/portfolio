# Composant References - Installation

Un composant React portable pour afficher vos références professionnelles avec design futuriste.

## 🚀 Installation rapide

### 1. Copier les fichiers

```bash
# Copiez le dossier complet dans votre projet
cp -r components/References/ votre-projet/src/components/

# Créez le dossier pour les logos
mkdir votre-projet/public/logos/
```

### 2. Installer les dépendances

```bash
npm install prop-types
```

### 3. Vérifier TailwindCSS

Assurez-vous que TailwindCSS est configuré dans votre projet :

```bash
# Si TailwindCSS n'est pas installé
npm install -D tailwindcss @tailwindcss/vite
```

## 📁 Structure requise

```
votre-projet/
├── src/components/References/     # Dossier copié
└── public/logos/                  # Créé pour vos logos
    └── placeholder.png           # Image par défaut obligatoire
```

## 🎯 Utilisation

```jsx
import React from 'react';
import References from './components/References';

function App() {
  return (
    <div className="min-h-screen">
      <References />
    </div>
  );
}

export default App;
```

## ⚙️ Configuration des données

Modifiez `src/components/References/data/ReferenceData.js` avec vos informations :

```javascript
export const referencesData = [
  {
    id: 1,
    name: "VOTRE ENTREPRISE",
    logo: {
      src: "/logos/votre-logo.png",
      alt: "Logo description",
      placeholder: "/logos/placeholder.png"
    },
    position: "Votre poste",
    location: "Ville, Pays",
    period: {
      display: "Jan 2024 - présent"
    }
  },
  // Ajoutez minimum 4 références
];
```

## 🔧 Prérequis

- React 18+
- TailwindCSS configuré
- Dossier `public/logos/` avec vos images

## ✅ Vérification

Après installation, vérifiez que :
- [ ] Le composant s'affiche sans erreur
- [ ] Les animations du titre fonctionnent
- [ ] Les logos s'affichent correctement
- [ ] Le layout responsive fonctionne

## 🐛 Problèmes courants

**Images ne s'affichent pas ?**
```bash
# Vérifiez le dossier logos
ls public/logos/
```

**Animations manquantes ?**
- Vérifiez que TailwindCSS est bien configuré
- Redémarrez le serveur de développement

**Erreur PropTypes ?**
```bash
npm install prop-types
```