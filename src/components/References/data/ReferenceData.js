export const referencesData = [
  {
    id: 1,
    name: "BANQUE MONDIALE",
    logo: {
      src: "/logos/banque-mondiale.png",
      alt: "Logo Banque Mondiale",
      placeholder: "/logos/placeholder.png"
    },
    position: "Expert en Cybersécurité",
    location: "Madagascar",
    period: {
      start: "2025-05",
      end: "present",
      display: "Mai 2025 - à présent"
    },
    technologies: ["Cybersécurité", "International Banking", "Policy Development", "Risk Management"],
    featured: true
  },
  {
    id: 2,
    name: "ACCES BANQUE",
    logo: {
      src: "/public/logos/acces-banque.png",
      alt: "Logo Accès Banque",
      placeholder: "/logos/placeholder.png"
    },
    position: "Lead Ingénieur Cybersécurité",
    location: "Madagascar",
    period: {
      start: "2024-05",
      end: "present",
      display: "Mai 2024 - à présent"
    },
    technologies: ["Cybersécurité", "Banking", "Infrastructure"],
    featured: true
  },
  {
    id: 3,
    name: "GROUPE AXIAN / PULSE",
    logo: {
      src: "/public/logos/axian.png",
      alt: "Logo Groupe Axian",
      placeholder: "/logos/placeholder.png"
    },
    position: "Ingénieur en cybersécurité",
    location: "Madagascar",
    period: {
      start: "2022-03",
      end: "2024-03",
      display: "Mars 2022 - Mars 2024"
    },
    technologies: ["Cybersécurité", "Infrastructure", "Consulting"],
    featured: false
  },
  {
    id: 4,
    name: "BANQUE BGFI",
    logo: {
      src: "/public/logos/bgfi.png",
      alt: "Logo BGFI Bank",
      placeholder: "/logos/placeholder.png"
    },
    position: "Consultant Développeur",
    location: "Madagascar",
    period: {
      start: "2021-12",
      end: "2022-03",
      display: "Décembre 2021 - Mars 2022"
    },
    technologies: ["Développement", "Banking", "Consulting"],
    featured: false
  },
  {
    id: 5,
    name: "EASYTECH / RHWS OUTSOURCING",
    logo: {
      src: "/public/logos/bewys.png",
      alt: "Logo EastTech",
      placeholder: "/logos/placeholder.png"
    },
    position: "Lead Ingénieur Cybersécurité",
    location: "Madagascar",
    period: {
      start: "2019-01",
      end: "2021-01",
      display: "Janvier 2019 - Janvier 2021"
    },
    technologies: ["Cybersécurité", "Leadership", "Outsourcing"],
    featured: false
  }
];

// Utilitaires
export const getFeaturedReferences = () => 
  referencesData.filter(ref => ref.featured);

export const getReferencesCount = () => referencesData.length;