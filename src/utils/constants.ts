export interface Philosopher {
  name: string;
  image: string;
  bio: string;
  lifespan: string;
  works: string[];
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
