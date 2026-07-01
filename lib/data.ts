/**
 * Single source of truth for all site content.
 * Everything on the page is driven from this file — edit here to update the site.
 *
 * Content sourced from Haider's master + AI résumés. Verify + edit freely.
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
  tagline:
    "Bridging the gap between technology and human sustenance — one city at a time.",
  location: "San Francisco, California",
  summary:
    "AI Engineer at HP and founder of StarcAI. A Computational Sciences (AI & ML) and Strategic Finance graduate of Minerva University — the college with no single campus — I spent four years living and building across seven countries on four continents, from a UN mission in New York to digital-diplomacy work in Taipei. This map is where it all happened.",
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
      "Where the journey began and where it returns. First-year Minerva city, the home of StarcAI, and the launchpad for what comes next.",
    featured: true,
    highlights: [
      {
        org: "Google",
        role: "Data Science Intern · Google Cloud, Sunnyvale",
        url: "https://cloud.google.com",
        note: "Summer 2026",
      },
      {
        org: "StarcAI",
        role: "CEO & Co-Founder — AI for financial communications",
        url: "https://github.com/haidergillani",
      },
      { org: "iD Tech", role: "AI & Python Instructor", url: "https://www.idtech.com" },
      {
        org: "Minerva University",
        role: "B.Sc. Computational Sciences & Strategic Finance",
        url: "https://www.minerva.edu",
      },
    ],
  },
  {
    id: "new-york",
    city: "New York",
    country: "United States",
    flag: "🇺🇸",
    coordinates: [-74.006, 40.7128],
    chapter: "Diplomacy meets AI",
    years: "2025",
    blurb:
      "A summer inside the United Nations Security Council — representing Pakistan's delegation and building agentic AI to give diplomats their time back.",
    featured: true,
    highlights: [
      {
        org: "United Nations",
        role: "Diplomat Intern & AI Engineer — Pakistan Mission to the UN",
        note: "Jun – Sep 2025",
      },
    ],
  },
  {
    id: "vancouver",
    city: "Vancouver, WA",
    country: "United States",
    flag: "🇺🇸",
    coordinates: [-122.6615, 45.6387],
    chapter: "Enterprise AI at scale",
    years: "2024 – present",
    blurb:
      "Shipping AI features to a million-plus users a month at HP — where research turns into production at real scale.",
    featured: true,
    highlights: [
      {
        org: "HP Inc.",
        role: "AI Engineer & Technical PM — HP AI",
        url: "https://www.hp.com",
        note: "~100M+ scan jobs / mo",
      },
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
      "Inside Korea's tech ecosystem — venture capital, algorithmic research on social polarization, and curating ideas worth spreading.",
    featured: true,
    highlights: [
      { org: "Kakao Ventures", role: "SWE Team Lead — social-graph analysis", url: "https://www.kakao.vc" },
      { org: "TEDxSeoul", role: "Curator — speaker training & review" },
      { org: "Samsung", role: "AI Forum contributor", url: "https://www.samsung.com" },
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
      "Civic-tech and digital diplomacy at the world's semiconductor capital — and a seat at the table with the people shaping it.",
    featured: true,
    highlights: [
      {
        org: "Taiwan Digital Diplomacy × Meta",
        role: "AI/ML Intern — War-in-Ukraine analysis",
        note: "200k+ posts",
      },
      {
        org: "Global Youth Forum",
        role: "Student speaker — with Stan Shih & Audrey Tang",
      },
      { org: "TSMC", role: "Valuation & financial case study", url: "https://www.tsmc.com" },
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
      "Machine learning against a real crisis — optimizing COVID-19 vaccine distribution to reach far more people, faster.",
    highlights: [
      {
        org: "Vaccine Distribution",
        role: "Genetic & greedy algorithms · SIR modeling",
        url: "https://github.com/haidergillani",
        note: "+45% reach",
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
      "A South-American chapter on global systems, governance, and the economics of emerging markets.",
    highlights: [
      { org: "Minerva University", role: "Complex systems & global governance", url: "https://www.minerva.edu" },
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
      "Europe's startup capital — sustainability, design thinking, and the politics of technology up close.",
    highlights: [
      { org: "Minerva University", role: "Sustainability & design thinking", url: "https://www.minerva.edu" },
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
      "Where finance meets product. Led AI and strategy for NO HQ, matching businesses to workspaces across Europe.",
    highlights: [
      {
        org: "NO HQ for Business",
        role: "Lead AI Engineer & Business Strategy",
        note: "400+ locations",
      },
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
      "Home. Where the curiosity was formed — national exams, early ventures, and the leap to a university spread across the world.",
    featured: true,
    highlights: [
      { org: "Cadet College Hasanabdal", role: "Top 5 nationwide · ~200k students" },
      { org: "Early ventures", role: "Finance & business consulting" },
    ],
  },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  url: string;
  metric?: string;
};

export const projects: Project[] = [
  {
    name: "StarcAI",
    tag: "Founder · FinTech AI",
    description:
      "AI that rewrites corporate financial communications for optimism, confidence, and trust — a 6-scale sentiment model fine-tuned on annotated financial text, deployed as a full-stack SaaS.",
    stack: ["FinBERT", "NLP", "NVIDIA CUDA", "Next.js", "PostgreSQL"],
    url: "https://github.com/haidergillani",
    metric: "+31% investor confidence",
  },
  {
    name: "HP AI — Scan to Email",
    tag: "AI Engineer · HP",
    description:
      "AI features shipping to a million-plus monthly SMB and home users — auto-routing and summarizing documents into a queryable knowledge base at global scale.",
    stack: ["TensorFlow", "AWS Bedrock", "LLMs", "MLOps"],
    url: "https://www.hp.com",
    metric: "~100M+ scan jobs / month",
  },
  {
    name: "War-in-Ukraine Analysis",
    tag: "Research · Meta × TDDA",
    description:
      "Led three engineers analyzing 200,000+ wartime social posts — including President Zelenskyy's — to map how leadership sustains public morale, informing Taiwan's digital-diplomacy playbook.",
    stack: ["NLP", "Apache Spark", "NVIDIA CUDA", "Python"],
    url: "https://github.com/haidergillani",
    metric: "1M+ people reached",
  },
  {
    name: "UN Agentic AI Workflow",
    tag: "Pakistan Mission to the UN",
    description:
      "A one-step agentic workflow with chain-of-thought reasoning that extracts and structures Security Council proceedings into decision-ready briefings for the Ministry of Foreign Affairs.",
    stack: ["Agents", "LLMs", "ML Pipelines", "RAG"],
    url: "https://github.com/haidergillani",
  },
  {
    name: "StockAI",
    tag: "Founder · Quant AI",
    description:
      "A stock-prediction and research engine — a Bayesian neural network trained on 20 years of data across company, industry, and market-sentiment layers using FinBERT and GPT-4.",
    stack: ["Bayesian NN", "Vertex AI", "TensorFlow", "GPT-4"],
    url: "https://github.com/haidergillani",
  },
  {
    name: "NO HQ — Workspace Copilot",
    tag: "Lead AI Engineer",
    description:
      "A MERN platform matching SMEs to workspaces across 400+ European locations, ranking options with an AI algorithm on Airflow and a fine-tuned LLM sales assistant.",
    stack: ["MERN", "OpenAI API", "Airflow", "React"],
    url: "https://github.com/haidergillani",
    metric: "400+ locations",
  },
];

/** Compact "also built" line under the featured projects. */
export const alsoBuilt: string[] = [
  "Fitter — 3D try-on with LIDAR (−70% returns)",
  "Recall — remote SOS for lost phones",
  "e-connect — de-polarizing social feeds",
  "COVID vaccine distribution optimizer",
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
  "United Nations",
  "iD Tech",
  "Minerva University",
  "Taiwan Digital Diplomacy Assoc.",
  "Pakistan Mission to the UN",
];
