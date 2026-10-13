/**
 * All site content lives here. Edit this file to update the site.
 * Source: Haider's 2026 AI résumé, with older details from the master résumé
 * and Haider's own notes.
 */

export const profile = {
  name: "Haider Gillani",
  role: "AI Engineer",
  now: [
    { orgId: "hp", label: "AI Engineering Lead, HP" },
    { orgId: "miq", label: "Founder, miQ" },
  ] as const,
  intro:
    "I'm an AI engineer. I lead AI engineering on HP's scanning products and I'm building miQ, a way to turn phones into wireless microphones for live events. Studying at Minerva University meant living in seven countries in four years. The map shows where, and what I worked on in each place.",
  description:
    "AI engineer leading AI engineering on HP's scanning products and building miQ. Places lived and worked, 2021–2026.",
  email: "haidergillani@uni.minerva.edu",
  resume: "/Haider-Gillani-Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/haidergillaniii",
    github: "https://github.com/haidergillani",
  },
};

export type Org = {
  name: string;
  /** path under /public; orgs without an official logo get a lettered mark */
  logo?: string;
  /** "cover" for logos that are already a full square tile */
  fit?: "contain" | "cover";
  mark?: string;
};

export const orgs = {
  miq: { name: "miQ", logo: "/logos/miq.svg", fit: "cover" },
  hp: { name: "HP", logo: "/logos/hp.svg" },
  un: { name: "Pakistan Mission to the United Nations", logo: "/logos/pakistan-mission.png" },
  starcai: { name: "StarcAI", logo: "/logos/starcai.png", fit: "cover" },
  nohq: { name: "NO HQ", mark: "NO HQ" },
  uai: { name: "Universidad Abierta Interamericana", logo: "/logos/uai.png", fit: "cover" },
  tdda: { name: "Taiwan Digital Diplomacy Association", mark: "TDDA" },
  kakao: { name: "Kakao Ventures", logo: "/logos/kakao-ventures.png" },
  vibemap: { name: "Vibemap", logo: "/logos/vibemap.svg" },
  minerva: { name: "Minerva University", logo: "/logos/minerva.png" },
  cch: { name: "Cadet College Hasanabdal", logo: "/logos/cadet-college-hasanabdal.png" },
} satisfies Record<string, Org>;

export type OrgId = keyof typeof orgs;

export type Role = {
  id: string;
  orgId: OrgId;
  org: string;
  url?: string;
  title: string;
  period: string;
  place: string;
  placeId: string;
  body: string;
};

/** Current roles first, then by end date. */
export const roles: Role[] = [
  {
    id: "miq",
    orgId: "miq",
    org: "miQ",
    url: "https://trymiq.com",
    title: "Founder and full-stack engineer",
    period: "2026 – now",
    place: "Remote · pilots in Portland–Vancouver",
    placeId: "vancouver",
    body: "miQ turns attendees' phones into wireless microphones, with no hardware to rent and no AV installer. I designed the real-time audio path on WebRTC so that a 1,000-person event can run over ordinary venue Wi-Fi for under a dollar. We've run it at five events of about a hundred people each, with live transcription and an AI summary afterwards.",
  },
  {
    id: "hp",
    orgId: "hp",
    org: "HP",
    url: "https://www.hp.com/hp_ai",
    title: "AI Engineering Lead, HP AI",
    period: "2024 – now",
    place: "Vancouver, WA",
    placeId: "vancouver",
    body: "I built and launched HP's first two HP AI features, Precise Scan and Scan to Email Summary, working as both engineer and technical PM from first prototype through customer testing to the US launch. I created the HP AI subscription bundle, which reaches about a million small-business users a month, has handled more than 100 million scans, and cut scan time in half. I also built a knowledge base of scanned business documents that customers can query through HP AI, with OCR-driven routing and data extraction on Claude, TensorFlow and AWS Bedrock.",
  },
  {
    id: "un",
    orgId: "un",
    org: "Pakistan Mission to the United Nations",
    title: "Diplomat intern and AI engineer",
    period: "Summer 2025",
    place: "New York",
    placeId: "new-york",
    body: "I sat with Pakistan's delegation on the Security Council. Alongside the diplomatic work, I built an agentic workflow that pulls from UN records to help delegates and Permanent Representatives plan, condense meeting notes and draft communications. I also built pipelines that track each country's stated positions across Council sessions, on issues from the global economy to weapons of mass destruction, for Pakistan's Ministry of Foreign Affairs.",
  },
  {
    id: "starcai",
    orgId: "starcai",
    org: "StarcAI",
    url: "https://www.starcai.us",
    title: "Co-founder, AI and full-stack engineering",
    period: "2023 – 2025",
    place: "San Francisco",
    placeId: "san-francisco",
    body: "StarcAI adjusted the tone of companies' investor communications. I trained a six-dimension sentiment model, covering signals like investor confidence and investment likelihood, on more than 10,000 annotated reports and 10-K filings, and built the web app in React and Next.js. To keep the rewrites faithful, we checked them against the source with topic modeling and semantic similarity and tuned the model with RLHF.",
  },
  {
    id: "nohq",
    orgId: "nohq",
    org: "NO HQ",
    title: "Lead AI engineer",
    period: "2023 – 2024",
    place: "London",
    placeId: "london",
    body: "Hybrid work left companies paying for offices they rarely filled. NO HQ splits large leased offices into rooms that startups can book by the day: the original tenant earns back rent, and a small team gets a proper meeting room on the few days it comes in. I built the booking app on the MERN stack, covering more than 400 locations across the UK and Europe, and a ranking model on Airflow that matched teams to spaces by price, schedule, location and size.",
  },
  {
    id: "uai",
    orgId: "uai",
    org: "Universidad Abierta Interamericana",
    url: "https://www.uai.edu.ar",
    title: "Simulation for robotics prototyping",
    period: "2023",
    place: "Buenos Aires · Minerva civic project",
    placeId: "buenos-aires",
    body: "With inflation above 100%, Argentina's robotics teams were being priced out of national competitions by the cost of hardware. Working with the university's robotics lab, we built a system to model every candidate design, have the designs compete in simulation, and build only the winner. The lab went from eight to ten physical prototypes costing thousands of dollars to a single one costing a few hundred.",
  },
  {
    id: "tdda",
    orgId: "tdda",
    org: "Taiwan Digital Diplomacy Association",
    url: "https://github.com/haidergillani/War-In-Ukraine---Topic-Modeling-and-Sentiment-Analysis-of-Social-Media-",
    title: "AI/ML intern",
    period: "Fall 2022",
    place: "Taipei",
    placeId: "taipei",
    body: "I led three engineers studying how the war in Ukraine was communicated online. We collected more than 200,000 posts from Facebook, TikTok and Twitter with Spark pipelines, then used topic modeling and sentiment analysis to measure how messages from President Zelenskyy and Ukraine's foreign ministry landed with audiences at home and abroad. The findings went to Taiwan's government as guidance on communicating with citizens during a crisis.",
  },
  {
    id: "kakao",
    orgId: "kakao",
    org: "Kakao Ventures",
    title: "Software engineering team lead",
    period: "Spring 2022",
    place: "Seoul",
    placeId: "seoul",
    body: "We looked at what happens to public discussion when a product scales to a mainstream audience. My team studied echo chambers in Facebook's feed with topic modeling and sentiment analysis over 100,000 posts, then proposed an unsupervised genetic algorithm for recommending posts that reduces polarization, and presented it to reviewers from more than 75 countries.",
  },
  {
    id: "vibemap",
    orgId: "vibemap",
    org: "Vibemap",
    url: "https://vibemap.com",
    title: "Content recommendation",
    period: "2021 – 2022",
    place: "San Francisco",
    placeId: "san-francisco",
    body: "Vibemap helps cities and districts market themselves, and its app suggests places and events to visitors and locals based on the vibe they're after. I worked on content recommendation, using user data to decide which places and events to show each person.",
  },
];

export type Place = {
  id: string;
  city: string;
  country: string;
  /** [longitude, latitude] */
  coords: [number, number];
  /** which side of the marker the map label sits on */
  labelSide: "left" | "right";
  /** one line for the map callout */
  note: string;
  /** a few words for the index */
  index: string;
  /** organizations shown as logos for this place */
  orgs: OrgId[];
};

/** Sorted west to east, the order you read the map. */
export const places: Place[] = [
  {
    id: "vancouver",
    city: "Vancouver, WA",
    country: "United States",
    coords: [-122.6615, 45.6387],
    labelSide: "left",
    note: "With HP since 2024. miQ's first pilots ran in the Portland–Vancouver area.",
    index: "HP, miQ",
    orgs: ["hp", "miq"],
  },
  {
    id: "san-francisco",
    city: "San Francisco",
    country: "United States",
    coords: [-122.4194, 37.7749],
    labelSide: "left",
    note: "First year at Minerva, 2021, and recommendation work for Vibemap. Co-founded StarcAI here in 2023.",
    index: "Minerva, Vibemap, StarcAI",
    orgs: ["minerva", "vibemap", "starcai"],
  },
  {
    id: "new-york",
    city: "New York",
    country: "United States",
    coords: [-74.006, 40.7128],
    labelSide: "right",
    note: "Summer 2025 with Pakistan's delegation to the UN Security Council.",
    index: "United Nations",
    orgs: ["un"],
  },
  {
    id: "buenos-aires",
    city: "Buenos Aires",
    country: "Argentina",
    coords: [-58.3816, -34.6037],
    labelSide: "right",
    note: "A Minerva semester in 2023. For a Minerva civic project, built a simulation system that let UAI's robotics lab test designs without building them.",
    index: "Minerva, UAI robotics lab",
    orgs: ["minerva", "uai"],
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    coords: [-0.1276, 51.5072],
    labelSide: "left",
    note: "A Minerva semester, and AI engineering for NO HQ.",
    index: "Minerva, NO HQ",
    orgs: ["minerva", "nohq"],
  },
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    coords: [13.405, 52.52],
    labelSide: "right",
    note: "A Minerva semester.",
    index: "Minerva semester",
    orgs: ["minerva"],
  },
  {
    id: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    coords: [73.0479, 33.6844],
    labelSide: "left",
    note: "Home. Finished school at Cadet College Hasanabdal in 2021.",
    index: "Home",
    orgs: ["cch"],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    country: "India",
    coords: [78.4867, 17.385],
    labelSide: "right",
    note: "A Minerva semester.",
    index: "Minerva semester",
    orgs: ["minerva"],
  },
  {
    id: "taipei",
    city: "Taipei",
    country: "Taiwan",
    coords: [121.5654, 25.033],
    labelSide: "right",
    note: "Fall 2022. NLP research for the Taiwan Digital Diplomacy Association, a talk on AI at the Global Youth Trends Forum, and a visit to TSMC's labs.",
    index: "TDDA, Global Youth Trends Forum",
    orgs: ["minerva", "tdda"],
  },
  {
    id: "seoul",
    city: "Seoul",
    country: "South Korea",
    coords: [126.978, 37.5665],
    labelSide: "right",
    note: "Spring 2022. Led a software team at Kakao Ventures.",
    index: "Kakao Ventures",
    orgs: ["minerva", "kakao"],
  },
];

export type Project = {
  name: string;
  year: string;
  body: string;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Karahi House voice receptionist",
    year: "2026",
    url: "https://github.com/haidergillani/Karahi-House",
    body: "A phone agent that takes orders for a Pakistani restaurant in San Francisco. Off-the-shelf voice bots hear “chicken karahi” as “chicken curry”, so I built a phonetic matcher for South Asian accents and dish names, and an ordering flow grounded in the menu so it never invents a price.",
  },
  {
    name: "Fitter",
    year: "2024",
    body: "A 3D fit preview for buying clothes online. It measures the body from a phone's LiDAR scan and strips facial and skin data from the model.",
  },
  {
    name: "StockAI",
    year: "2023",
    url: "https://github.com/haidergillani/StockAI-Tech-Stocks-Prediction-using-AI",
    body: "A stock research tool built on a Bayesian neural network, trained on twenty years of Apple and Google data across company, industry and market-sentiment signals.",
  },
  {
    name: "Recall",
    year: "2022",
    url: "https://github.com/haidergillani/Recall--Remote-SOS-Engine-for-Lost-Phones",
    body: "An Android and iOS app that sounds an alarm on a lost phone and sends back its location by text message, even with mobile data and location turned off.",
  },
  {
    name: "Vaccine distribution model",
    year: "2022",
    url: "https://github.com/haidergillani/Prototype-Optimized-COVID-Vaccine-Distribution",
    body: "Genetic and greedy algorithms for allocating COVID-19 vaccines across Uttar Pradesh. In SIR simulations the plan reached 45% more people than the existing distribution.",
  },
];

export const recognition: { what: string; detail: string }[] = [
  {
    what: "Future of Print award, HP",
    detail: "Presented by HP President Anneliese Olson.",
  },
  {
    what: "AI Native Thinker award, HP",
    detail: "Presented by HP President Anneliese Olson.",
  },
  {
    what: "Speaker, Global Youth Trends Forum, Taiwan, 2022",
    detail:
      "Led seminars on AI and LLMs for business at a four-day forum with Stan Shih, Audrey Tang and participants from 30+ countries.",
  },
  {
    what: "5th nationwide, Pakistan's national exams, 2021",
    detail: "Out of roughly 200,000 students.",
  },
];

export const education: { orgId: OrgId; school: string; detail: string; year: string }[] = [
  {
    orgId: "minerva",
    school: "Minerva University",
    detail:
      "B.Sc. Computational Sciences (AI & ML) and Business (Strategic Finance). Classes and work placements in San Francisco, Seoul, Hyderabad, Berlin, Buenos Aires, London and Taipei.",
    year: "2025",
  },
  {
    orgId: "cch",
    school: "Cadet College Hasanabdal",
    detail: "Higher secondary school, Pakistan.",
    year: "2021",
  },
];
