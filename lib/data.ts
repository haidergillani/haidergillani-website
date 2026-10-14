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
    "I'm an AI engineer from Pakistan. I lead AI engineering for HP's scanning products, and in the hours left over I'm building miQ, which turns the phones already in a room into its microphones. Minerva University kept me moving, to a new city every few months for four years, and in each one I went looking for real work. The map below is where that led.",
  description:
    "Haider Gillani is an AI engineer from Pakistan, AI Engineering Lead at HP and founder of miQ. A map of where he has lived and built, from San Francisco to Seoul.",
  email: "haidergillani@uni.minerva.edu",
  resume: "/Haider-Gillani-Resume.pdf",
  photo: {
    src: "/photos/speaking.jpg",
    width: 1087,
    height: 1359,
    alt: "Haider Gillani presenting StarcAI at SF Tech Week, microphone in hand",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/haidergillaniii",
    github: "https://github.com/haidergillani",
  },
};

export type Org = {
  name: string;
  /** path under /public; orgs without a logo get a lettered mark */
  logo?: string;
  /** "cover" for logos that are already a full square tile */
  fit?: "contain" | "cover";
  mark?: string;
};

export const orgs = {
  miq: { name: "miQ", logo: "/logos/miq.svg", fit: "cover" },
  hp: { name: "HP", logo: "/logos/hp.svg" },
  un: { name: "Pakistan Mission to the United Nations", logo: "/logos/un.png" },
  starcai: { name: "StarcAI", logo: "/logos/starcai.png", fit: "cover" },
  nohq: { name: "NO HQ", logo: "/logos/nohq.png", fit: "cover" },
  uai: { name: "Universidad Abierta Interamericana", logo: "/logos/uai.png", fit: "cover" },
  tdda: { name: "Taiwan Digital Diplomacy Association", logo: "/logos/tdda.png" },
  kakao: { name: "Kakao Ventures", logo: "/logos/kakao-ventures.png", fit: "cover" },
  vibemap: { name: "Vibemap", logo: "/logos/vibemap.png", fit: "cover" },
  minerva: { name: "Minerva University", logo: "/logos/minerva.png" },
  cch: { name: "Cadet College Hasanabdal", logo: "/logos/cadet-college-hasanabdal.png" },
  gytf: { name: "Global Youth Trends Forum", logo: "/logos/gytf.png", fit: "cover" },
  pkedu: {
    name: "Ministry of Federal Education and Professional Training, Pakistan",
    logo: "/logos/pakistan-education.png",
    fit: "cover",
  },
} satisfies Record<string, Org>;

export type OrgId = keyof typeof orgs;

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

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
  photo?: Photo;
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
    body: "Every Q&A has the same pause while a microphone travels across the room. miQ removes it by turning the audience's own phones into wireless mics, with nothing to rent and no AV crew to hire. The hard part was the audio. I built a WebRTC pipeline lean enough that a thousand-person event can run over ordinary venue Wi-Fi for less than a dollar. We've run it at five events of about a hundred people each, with live transcription during the event and a summary waiting afterwards.",
    photo: {
      src: "/photos/shark-tank-ces.jpg",
      width: 1200,
      height: 1600,
      alt: "Haider Gillani pointing to the Shark Tank sign at CES",
      caption: "Shark Tank at CES, Las Vegas",
    },
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
    body: "I shipped HP's first two HP AI features, Precise Scan and Scan to Email Summary, and owned them end to end as engineer and technical PM: the first prototype, the customer testing, the US launch. I also created the HP AI subscription bundle. It now reaches about a million small-business users a month, has processed more than 100 million scans, and has cut the time a scan takes in half. Underneath it sits a knowledge base of customers' scanned documents that they can ask questions of, with routing and data extraction built on Claude, TensorFlow and AWS Bedrock.",
    photo: {
      src: "/photos/ces-hp.jpg",
      width: 1200,
      height: 1600,
      alt: "Haider Gillani beside a large HP logo at CES, holding his HP staff badge",
      caption: "At CES with HP, Las Vegas",
    },
  },
  {
    id: "un",
    orgId: "un",
    org: "Pakistan Mission to the United Nations",
    title: "Diplomat intern and AI engineer",
    period: "Summer 2025",
    place: "New York",
    placeId: "new-york",
    body: "Pakistan sits on the Security Council for 2025–26, and I spent the summer with its delegation in New York. The diplomatic work came first: following sessions and keeping track of where every country stood. Alongside it I built an agentic workflow on top of UN records that helps delegates and Permanent Representatives prepare, condense their notes and draft communications. I also built pipelines that follow each country's positions from one session to the next, on issues from the global economy to weapons of mass destruction, for Pakistan's Ministry of Foreign Affairs.",
    photo: {
      src: "/photos/un-security-council.jpg",
      width: 738,
      height: 984,
      alt: "Haider Gillani speaking from Pakistan's seat in the UN Security Council chamber",
      caption: "At Pakistan's seat in the Security Council chamber",
    },
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
    body: "The same quarterly results can read as a warning or as confidence, depending on how they're written. StarcAI rewrote public companies' investor communications so they landed the way they were meant to. I trained a six-dimension sentiment model, measuring things like investor confidence and the likelihood of investing, on more than 10,000 annotated reports and 10-K filings, and built the product in React and Next.js. A rewrite is worthless if it changes the facts, so every output was checked against its source with topic modeling and semantic similarity, and the model was tuned with RLHF to keep it honest.",
    photo: {
      src: "/photos/speaking.jpg",
      width: 1087,
      height: 1359,
      alt: "Haider Gillani presenting StarcAI at SF Tech Week, microphone in hand",
      caption: "Presenting StarcAI at SF Tech Week",
    },
  },
  {
    id: "nohq",
    orgId: "nohq",
    org: "NO HQ",
    title: "Lead AI engineer",
    period: "2023 – 2024",
    place: "London",
    placeId: "london",
    body: "After the pandemic, plenty of companies were still paying for floors of offices that sat mostly empty. NO HQ rents that space out by the day to startups. The tenant earns back some of its rent, and a small team gets a proper meeting room on the few days a week it actually comes in. I built the booking platform on the MERN stack, covering more than 400 locations across the UK and Europe, and a ranking model on Airflow that matches each team to a space by price, schedule, location and size.",
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
    body: "In 2023 Argentina's inflation passed 100%, and in a country that loves its robotics competitions, teams were being priced out of the hardware. With the robotics lab at Universidad Abierta Interamericana, we built a system that models every candidate design, lets the designs compete in simulation, and leaves only the winner to be built. The lab went from eight or ten physical prototypes, thousands of dollars in parts, to a single one that cost a few hundred.",
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
    body: "In the first year of the war in Ukraine, Taiwan was paying close attention to how a government keeps its people's trust under pressure. I led three engineers through more than 200,000 posts from Facebook, TikTok and Twitter, gathered with Spark pipelines, and used topic modeling and sentiment analysis to see how messages from President Zelenskyy and Ukraine's foreign ministry were received at home and abroad. What we found went to Taiwan's government as guidance for speaking to its own citizens in a crisis.",
  },
  {
    id: "kakao",
    orgId: "kakao",
    org: "Kakao Ventures",
    title: "Software engineering team lead",
    period: "Spring 2022",
    place: "Seoul",
    placeId: "seoul",
    body: "What happens to public conversation once a product stops being niche and everyone is on it? My team studied that question through Facebook's feed, running topic modeling and sentiment analysis over 100,000 posts to find where echo chambers formed. We proposed an unsupervised genetic algorithm for recommending posts that draws people out of them, and presented it to reviewers from more than 75 countries.",
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
    body: "Vibemap helps cities and districts market themselves, and its app helps visitors and locals find places and events that match the mood they're in. I worked on the recommendations, using what we knew about each person to decide what they'd want to see next.",
  },
];

export type Place = {
  id: string;
  city: string;
  country: string;
  /** ISO 3166 numeric code, used to shade the country on the map */
  countryCode: string;
  /** [longitude, latitude] */
  coords: [number, number];
  /** which side of the marker the map label sits on */
  labelSide: "left" | "right";
  /** one or two lines for the map callout */
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
    countryCode: "840",
    coords: [-122.6615, 45.6387],
    labelSide: "left",
    note: "Home base since joining HP in 2024. miQ's first events were here and across the river in Portland.",
    index: "HP, miQ",
    orgs: ["hp", "miq"],
  },
  {
    id: "san-francisco",
    city: "San Francisco",
    country: "United States",
    countryCode: "840",
    coords: [-122.4194, 37.7749],
    labelSide: "left",
    note: "Where Minerva started me off, in 2021. I worked on recommendations at Vibemap that first year, and came back to co-found StarcAI in 2023.",
    index: "Minerva, Vibemap, StarcAI",
    orgs: ["minerva", "vibemap", "starcai"],
  },
  {
    id: "new-york",
    city: "New York",
    country: "United States",
    countryCode: "840",
    coords: [-74.006, 40.7128],
    labelSide: "right",
    note: "Summer 2025, with Pakistan's delegation to the UN Security Council.",
    index: "United Nations",
    orgs: ["un"],
  },
  {
    id: "buenos-aires",
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "032",
    coords: [-58.3816, -34.6037],
    labelSide: "right",
    note: "A semester with Minerva in 2023, and a civic project with the robotics lab at UAI.",
    index: "Minerva, UAI robotics lab",
    orgs: ["minerva", "uai"],
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    countryCode: "826",
    coords: [-0.1276, 51.5072],
    labelSide: "left",
    note: "A semester with Minerva, and leading AI engineering at NO HQ.",
    index: "Minerva, NO HQ",
    orgs: ["minerva", "nohq"],
  },
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    countryCode: "276",
    coords: [13.405, 52.52],
    labelSide: "right",
    note: "A semester with Minerva.",
    index: "Minerva semester",
    orgs: ["minerva"],
  },
  {
    id: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    countryCode: "586",
    coords: [73.0479, 33.6844],
    labelSide: "left",
    note: "Home. I finished school nearby at Cadet College Hasanabdal in 2021.",
    index: "Home",
    orgs: ["cch"],
  },
  {
    id: "taipei",
    city: "Taipei",
    country: "Taiwan",
    countryCode: "158",
    coords: [121.5654, 25.033],
    labelSide: "right",
    note: "Fall 2022: research for the Taiwan Digital Diplomacy Association, a talk on AI at the Global Youth Trends Forum, and a look inside TSMC.",
    index: "TDDA, Global Youth Trends Forum",
    orgs: ["minerva", "tdda"],
  },
  {
    id: "seoul",
    city: "Seoul",
    country: "South Korea",
    countryCode: "410",
    coords: [126.978, 37.5665],
    labelSide: "right",
    note: "Spring 2022, leading a software team at Kakao Ventures.",
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
    body: "Off-the-shelf voice bots hear “chicken karahi” as “chicken curry.” I built a phone receptionist for Karahi House in San Francisco that doesn't. A phonetic matcher tuned to South Asian accents and dish names understands the order, and a flow tied to the menu takes it, so it never makes up a price.",
  },
  {
    name: "Fitter",
    year: "2024",
    body: "Clothes bought online come back when they don't fit. Fitter builds a 3D model of your body from a phone's LiDAR scan so you can see the fit first, and strips facial and skin detail from the model to keep it private.",
  },
  {
    name: "StockAI",
    year: "2023",
    url: "https://github.com/haidergillani/StockAI-Tech-Stocks-Prediction-using-AI",
    body: "A research tool for tech stocks, built on a Bayesian neural network that reads twenty years of Apple and Google data across company, industry and market-sentiment signals.",
  },
  {
    name: "Recall",
    year: "2022",
    url: "https://github.com/haidergillani/Recall--Remote-SOS-Engine-for-Lost-Phones",
    body: "Finding a lost phone usually needs it to be online with location turned on. Recall doesn't. A text message sets off an alarm on the phone and sends back where it is, even with data and location switched off.",
  },
  {
    name: "Vaccine distribution model",
    year: "2022",
    url: "https://github.com/haidergillani/Prototype-Optimized-COVID-Vaccine-Distribution",
    body: "A plan for getting COVID-19 vaccines across Uttar Pradesh, built with genetic and greedy algorithms. In SIR simulations it reached 45% more people than the distribution in place at the time.",
  },
];

export const recognition: { orgId: OrgId; what: string; detail: string }[] = [
  {
    orgId: "hp",
    what: "Future of Print award, HP",
    detail: "From HP President Anneliese Olson.",
  },
  {
    orgId: "hp",
    what: "AI Native Thinker award, HP",
    detail: "From HP President Anneliese Olson.",
  },
  {
    orgId: "gytf",
    what: "Speaker, Global Youth Trends Forum, Taiwan, 2022",
    detail:
      "Led sessions on AI and large language models for business at a four-day forum alongside Stan Shih, Audrey Tang and people from more than 30 countries.",
  },
  {
    orgId: "pkedu",
    what: "5th in Pakistan's national exams, 2021",
    detail: "Out of roughly 200,000 students.",
  },
];

export const education: { orgId: OrgId; school: string; detail: string; year: string }[] = [
  {
    orgId: "minerva",
    school: "Minerva University",
    detail:
      "Computational Sciences (AI and machine learning) and Business (strategic finance). Classes and work placements in San Francisco, Seoul, Taipei, Buenos Aires, Berlin and London.",
    year: "2025",
  },
  {
    orgId: "cch",
    school: "Cadet College Hasanabdal",
    detail: "Higher secondary school, Pakistan.",
    year: "2021",
  },
];
