/**
 * Single source of truth for all site content.
 * Everything on the page is driven from this file — edit here to update the site.
 *
 * Content reconstructed from public sources (Minerva alumni interview, GitHub,
 * press). Verify + edit freely — this is your data.
 */

export type Highlight = {
  org: string;
  role: string;
  url?: string;
  note?: string;
};

export type Location = {
  id: string;
  city: string;
  country: string;
  flag: string;
  /** [longitude, latitude] */
  coordinates: [number, number];
  /** short label shown as the pin's headline */
  chapter: string;
  years?: string;
  blurb: string;
  highlights: Highlight[];
  /** anchor pins that get a slightly larger dot / priority label */
  featured?: boolean;
};

export const profile = {
  name: "Haider Gillani",
  initials: "HG",
  role: "AI Engineer",
  tagline: "I build at the seam between technology and human sustenance.",
  location: "San Francisco, California",
  summary:
    "Computational Sciences graduate of Minerva University — the university with no single campus. Over four years I lived and worked across seven cities on four continents, shipping AI and machine-learning work with the companies and institutions I found along the way. This map is where it happened.",
  email: "haidergillani@uni.minerva.edu",
  socials: {
    github: "https://github.com/haidergillani",
    linkedin: "https://www.linkedin.com/in/haider-gillani-b87b90210/",
    instagram: "https://www.instagram.com/haidergillaniii/",
  },
};

export const locations: Location[] = [
  {
    id: "san-francisco",
    city: "San Francisco",
    country: "United States",
    flag: "🇺🇸",
    coordinates: [-122.4194, 37.7749],
    chapter: "Home base · Silicon Valley",
    years: "2021 – present",
    blurb:
      "Where the journey began and where it comes home. First-year Minerva city, and now the base for my work in AI.",
    featured: true,
    highlights: [
      { org: "HP", role: "AI Engineer", url: "https://www.hp.com" },
      {
        org: "Google",
        role: "Data Science Intern · Google Cloud (Sunnyvale)",
        url: "https://cloud.google.com",
        note: "Summer 2026",
      },
      {
        org: "StarcAI",
        role: "Founder — AI financial-communications software",
        url: "https://github.com/haidergillani",
      },
      { org: "iD Tech", role: "AI & Python Instructor", url: "https://www.idtech.com" },
      { org: "Vibemap", role: "Collaborator", url: "https://vibemap.com" },
      { org: "Minerva University", role: "B.S. Computational Sciences", url: "https://www.minerva.edu" },
    ],
  },
  {
    id: "seoul",
    city: "Seoul",
    country: "South Korea",
    flag: "🇰🇷",
    coordinates: [126.978, 37.5665],
    chapter: "Minerva semester",
    blurb:
      "A semester inside Korea's tech ecosystem — venture capital, hardware giants, and a crash course in East-Asian innovation.",
    featured: true,
    highlights: [
      { org: "Kakao Ventures", role: "Startup & venture exposure", url: "https://www.kakao.vc" },
      { org: "Samsung", role: "Industry exposure", url: "https://www.samsung.com" },
    ],
  },
  {
    id: "taipei",
    city: "Taipei",
    country: "Taiwan",
    flag: "🇹🇼",
    coordinates: [121.5654, 25.033],
    chapter: "Minerva semester",
    blurb:
      "Civic-tech and digital diplomacy at the world's semiconductor capital — studying how leaders hold morale together in wartime.",
    featured: true,
    highlights: [
      {
        org: "Taiwan Digital Diplomacy Association",
        role: "Civic Project Partner",
        note: "Analyzed 200k+ posts on wartime communication",
      },
      {
        org: "Meta",
        role: "Research collaboration — War-in-Ukraine analysis",
        url: "https://about.meta.com",
      },
      { org: "TSMC", role: "Industry exposure", url: "https://www.tsmc.com" },
    ],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    country: "India",
    flag: "🇮🇳",
    coordinates: [78.4867, 17.385],
    chapter: "Minerva semester",
    blurb:
      "Applied machine learning against real problems — vaccine logistics — and taught AI to hundreds of students an ocean away.",
    highlights: [
      {
        org: "NVIDIA × UPenn",
        role: "AI-Python curriculum for 500+ students",
        url: "https://www.nvidia.com",
      },
      {
        org: "COVID Vaccine Distribution",
        role: "ML optimization research",
        url: "https://github.com/haidergillani",
      },
    ],
  },
  {
    id: "buenos-aires",
    city: "Buenos Aires",
    country: "Argentina",
    flag: "🇦🇷",
    coordinates: [-58.3816, -34.6037],
    chapter: "Minerva semester",
    blurb:
      "A South-American chapter on global governance and democratic systems — perspective you can't get from a textbook.",
    highlights: [
      { org: "Minerva University", role: "Global governance & democracy studies", url: "https://www.minerva.edu" },
    ],
  },
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    flag: "🇩🇪",
    coordinates: [13.405, 52.52],
    chapter: "Minerva semester",
    blurb:
      "Europe's startup capital — design, sustainability, and the politics of technology up close.",
    highlights: [
      { org: "Minerva University", role: "Sustainability minor coursework", url: "https://www.minerva.edu" },
    ],
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    coordinates: [-0.1276, 51.5072],
    chapter: "Minerva semester",
    blurb:
      "Finance meets tech. A semester in one of the world's great capitals of both.",
    highlights: [
      { org: "Minerva University", role: "Finance & technology studies", url: "https://www.minerva.edu" },
    ],
  },
  {
    id: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    flag: "🇵🇰",
    coordinates: [73.0479, 33.6844],
    chapter: "Where it started",
    blurb:
      "Home. Where the curiosity was formed — and the diplomacy work that pointed me outward began.",
    featured: true,
    highlights: [
      {
        org: "Pakistan Mission to the UN",
        role: "Intern",
      },
    ],
  },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  url: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "StarcAI",
    tag: "Founder · FinTech AI",
    description:
      "An AI system that helps companies communicate with shareholders and investors — automated sentiment modeling to build trust and confidence in financial messaging.",
    stack: ["Python", "NLP", "LLMs", "Flask"],
    url: "https://github.com/haidergillani",
    accent: "#d9b168",
  },
  {
    name: "War-in-Ukraine Social Analysis",
    tag: "Research · Meta × TDDA",
    description:
      "Studied 200,000+ social posts from officials including President Zelenskyy to understand how wartime leadership sustains public morale — for Taiwan's digital-diplomacy playbook.",
    stack: ["Python", "Sentiment Analysis", "Data Viz"],
    url: "https://github.com/haidergillani",
    accent: "#6fa8dc",
  },
  {
    name: "e-connect",
    tag: "AI · Social Good",
    description:
      "An unsupervised genetic algorithm designed to reduce social-media polarization and increase openness to opposing viewpoints.",
    stack: ["Python", "Genetic Algorithms", "ML"],
    url: "https://github.com/haidergillani",
    accent: "#93c47d",
  },
  {
    name: "AI-Python Curriculum",
    tag: "Education · NVIDIA × UPenn",
    description:
      "Authored and delivered Python and AI coursework to 500+ students in collaboration with NVIDIA and the University of Pennsylvania.",
    stack: ["Python", "Curriculum", "Teaching"],
    url: "https://github.com/haidergillani",
    accent: "#c27ba0",
  },
  {
    name: "COVID Vaccine Optimization",
    tag: "ML · Public Health",
    description:
      "Machine-learning models to optimize COVID-19 vaccine distribution across India's supply and demand constraints.",
    stack: ["Python", "Optimization", "ML"],
    url: "https://github.com/haidergillani",
    accent: "#e69138",
  },
  {
    name: "AI Workspace Copilot",
    tag: "Founder · Product",
    description:
      "A copilot for SMEs to discover and book workspaces anywhere in the world — bringing the everywhere-office to small teams.",
    stack: ["React", "LLMs", "Product"],
    url: "https://github.com/haidergillani",
    accent: "#76a5af",
  },
];

/** Logos wall — the names encountered along the way. */
export const companies: string[] = [
  "HP",
  "Google",
  "NVIDIA",
  "Meta",
  "Samsung",
  "TSMC",
  "Kakao Ventures",
  "UPenn",
  "iD Tech",
  "Minerva University",
  "Taiwan Digital Diplomacy Assoc.",
  "Pakistan Mission to the UN",
];
