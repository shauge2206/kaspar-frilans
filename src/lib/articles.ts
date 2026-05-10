export type ThemeKey = "krim" | "arbeidsliv" | "kyst" | "samfunn" | "feature";

export const themes: Record<ThemeKey, { label: string; color: string }> = {
  krim: { label: "Krim", color: "#a4321c" },
  arbeidsliv: { label: "Arbeidsliv", color: "#4a6b8a" },
  kyst: { label: "Kyst", color: "#1f6b6b" },
  samfunn: { label: "Samfunn", color: "#7a5a2c" },
  feature: { label: "Feature", color: "#5a4a78" },
};

export type Article = {
  slug: string;
  title: string;
  publication: string;
  date: string;
  dateLabel: string;
  caption: string;
  photoCredit: string;
  excerpt: string;
  body: string[];
  themes: ThemeKey[];
  location: {
    name: string;
    region: string;
    lat: number;
    lng: number;
  };
  images: { src: string; alt: string }[];
};

export const articles: Article[] = [
  {
    slug: "utvik-senior",
    title:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    publication: "Fiskeribladet",
    date: "2025-04-07",
    dateLabel: "7. april 2025",
    caption:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    photoCredit: "Foto: Privat / Terje Jensen",
    excerpt:
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
    body: [
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978.",
      "Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt.",
      "De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
    ],
    themes: ["kyst", "samfunn", "feature"],
    location: {
      name: "Senja",
      region: "Troms",
      lat: 69.4,
      lng: 17.6,
    },
    images: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        alt: "Arnfinn Hay og de etterlatte etter Utvik Senior-forliset.",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        alt: "Utklipp fra publisert sak i Fiskeribladet.",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        alt: "Skjermbilde av saken på mobil.",
      },
    ],
  },
  {
    slug: "natt-pa-sotra",
    title:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    publication: "Bergens Tidende",
    date: "2023-08-22",
    dateLabel: "22. august 2023",
    caption:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    photoCredit: "Foto: Geir Martin Strande",
    excerpt:
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
    body: [
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden.",
      "Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
      "Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
    ],
    themes: ["krim", "samfunn"],
    location: {
      name: "Skogsvåg, Øygarden",
      region: "Vestland",
      lat: 60.27,
      lng: 4.97,
    },
    images: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        alt: "Thomas Olsen ved hjemmet sitt på Sotra.",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        alt: "Utklipp fra publisert sak i Bergens Tidende.",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        alt: "Mobilvisning av saken.",
      },
    ],
  },
  {
    slug: "bank-of-things",
    title: "Gratisbutikk for flyktninger får inn ødelagte klær",
    publication: "Bergens Tidende",
    date: "2023-07-31",
    dateLabel: "31. juli 2023",
    caption:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    photoCredit: "Foto: Jannica Luoto",
    excerpt:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
    body: [
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad.",
      "Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
    ],
    themes: ["samfunn", "feature"],
    location: {
      name: "Fyllingsdalen, Bergen",
      region: "Vestland",
      lat: 60.34,
      lng: 5.27,
    },
    images: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        alt: "Butikksjef Ljubov Novosad i bruktbutikken Bank of Things.",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        alt: "Mobilvisning av saken.",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        alt: "Mobilvisning av saken, andre utklipp.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatCoord(lat: number, lng: number): string {
  const fmt = (v: number, pos: string, neg: string) => {
    const dir = v >= 0 ? pos : neg;
    const abs = Math.abs(v);
    const deg = Math.floor(abs);
    const min = (abs - deg) * 60;
    return `${deg.toString().padStart(2, "0")}°${min
      .toFixed(2)
      .padStart(5, "0")}′${dir}`;
  };
  return `${fmt(lat, "N", "S")} · ${fmt(lng, "Ø", "V")}`;
}
