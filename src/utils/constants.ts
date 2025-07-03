export interface Philosopher {
  name: string;
  image: string;
  bio: string;
  lifespan: string;
  works: string[];
}

export interface PsychologyProps {
  title: string;
  description: string;
  icon: string;
}

export const PHILOSOPHER: Philosopher[] = [
  {
    name: "Aristoteles",
    image: "/images/aristoteles.jpg",
    bio: "Aristoteles adalah filsuf Yunani kuno yang memberikan kontribusi besar dalam berbagai bidang termasuk logika, metafisika, matematika, fisika, biologi, etika, politik, kedokteran, pertanian, dan teater.",
    lifespan: "384-322 SM",
    works: ["Metafisika", "Etika Nikomachea", "Politik", "Poetika"],
  },
  {
    name: "Marcus Aurelius",
    image: "/images/aurelius.jpg",
    bio: "Kaisar Romawi dan filsuf Stoik yang dikenal dengan pemikiran tentang pengendalian diri dan penerimaan takdir.",
    lifespan: "121-180 M",
    works: ["Meditasi", "Surat-surat kepada Fronto", "Catatan Harian"],
  },
  {
    name: "Seneca",
    image: "/images/seneca.jpg",
    bio: "Filsuf Romawi, negarawan, dan penulis drama yang merupakan salah satu tokoh utama Stoikisme.",
    lifespan: "4 SM - 65 M",
    works: [
      "Surat-surat kepada Lucilius",
      "Tentang Kemarahan",
      "Tentang Kehidupan yang Bahagia",
    ],
  },
  {
    name: "Sokrates",
    image: "/images/sokrates.jpg",
    bio: "Bapak Filsafat Barat yang terkenal dengan metode dialog dan pertanyaan kritisnya.",
    lifespan: "470-399 SM",
    works: ["Tidak meninggalkan tulisan", "Dikenal melalui muridnya Plato"],
  },
  {
    name: "Epictetus",
    image: "/images/epictitus.jpg",
    bio: "Filsuf Stoik yang mengajarkan bahwa kebebasan dan kebahagiaan dicapai dengan menerima apa yang tidak bisa dikendalikan.",
    lifespan: "50-135 M",
    works: ["Enchiridion", "Wacana", "Fragmen"],
  },
];

export const PSYCHOLOGY_TOPICS: PsychologyProps[] = [
  {
    title: "Stoicism & CBT",
    description:
      "How ancient Stoic practices influenced modern Cognitive Behavioral Therapy",
    icon: "🧠",
  },
  {
    title: "Mindfulness",
    description:
      "The psychological benefits of mindfulness meditation practices",
    icon: "🌿",
  },
  {
    title: "Virtue Ethics",
    description: "The impact of character development on mental wellbeing",
    icon: "⭐",
  },
  {
    title: "Attachment Theory",
    description:
      "How early relationships shape our emotional and social development",
    icon: "🤝",
  },
  {
    title: "Growth Mindset",
    description:
      "How believing in the ability to grow impacts motivation and resilience",
    icon: "🚀",
  },
  {
    title: "Neuroplasticity",
    description: "The brain's ability to rewire and adapt through experiences",
    icon: "🧬",
  },
  {
    title: "Emotional Intelligence",
    description:
      "Understanding and managing your own emotions and those of others",
    icon: "💡",
  },
  {
    title: "Positive Psychology",
    description:
      "The scientific study of human flourishing and optimal functioning",
    icon: "🌈",
  },
  {
    title: "Flow State",
    description: "Experiencing full immersion and focus in activities",
    icon: "🌊",
  },
  {
    title: "Resilience Psychology",
    description: "How individuals overcome adversity and grow from challenges",
    icon: "🛡️",
  },
  {
    title: "Cognitive Biases",
    description: "How mental shortcuts and distortions affect our thinking",
    icon: "🎭",
  },
  {
    title: "Behavioral Psychology",
    description: "How behavior is learned and shaped by reinforcement",
    icon: "🔁",
  },
  {
    title: "Trauma & Healing",
    description:
      "Understanding the psychological effects of trauma and pathways to recovery",
    icon: "💔",
  },
  {
    title: "Maslow's Hierarchy",
    description: "How human motivation is structured in a pyramid of needs",
    icon: "🧗",
  },
  {
    title: "Shadow Work",
    description: "Exploring and integrating the hidden parts of the psyche",
    icon: "🌑",
  },
];
