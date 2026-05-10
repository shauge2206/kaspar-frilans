export type Article = {
  slug: string;
  number: string;
  title: string;
  publication: string;
  date: string;
  dateIso: string;
  caption: string;
  photoCredit: string;
  excerpt: string;
  paragraphs: string[];
  category: string;
  images: { src: string; alt: string }[];
};

export const articles: Article[] = [
  {
    slug: "utvik-senior",
    number: "01",
    title:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    publication: "Fiskeribladet",
    date: "07.04.2025",
    dateIso: "2025-04-07",
    caption:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    photoCredit: "Foto: Privat / Terje Jensen",
    excerpt:
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
    category: "Reportasje",
    paragraphs: [
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978.",
      "Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt.",
      "De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
    ],
    images: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        alt: "Arnfinn Hay, en av de etterlatte etter Utvik Senior-forliset.",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        alt: "Utklipp fra Fiskeribladets nettside om saken.",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        alt: "Skjermbilde fra mobilversjonen av artikkelen.",
      },
    ],
  },
  {
    slug: "natt-paa-sotra",
    number: "02",
    title:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    publication: "Bergens Tidende",
    date: "22.08.2023",
    dateIso: "2023-08-22",
    caption:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    photoCredit: "Foto: Geir Martin Strande",
    excerpt:
      "Thomas Olsen sier at både han og flere naboer ble skutt på under et dramatisk hendelsesforløp natt til tirsdag på Skogsvåg i Øygarden.",
    category: "Nyhet",
    paragraphs: [
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden.",
      "Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
      "Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
    ],
    images: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        alt: "Thomas Olsen på stedet hvor hendelsen fant sted på Sotra.",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        alt: "Utklipp fra Bergens Tidendes nettside om saken.",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        alt: "Skjermbilde fra mobilversjonen av artikkelen.",
      },
    ],
  },
  {
    slug: "bank-of-things",
    number: "03",
    title: "Gratisbutikk for flyktninger får inn ødelagte klær",
    publication: "Bergens Tidende",
    date: "31.07.2023",
    dateIso: "2023-07-31",
    caption:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    photoCredit: "Foto: Jannica Luoto",
    excerpt:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
    category: "Feature",
    paragraphs: [
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad.",
      "Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
    ],
    images: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        alt: "Butikksjef Ljubov Novosad i lokalet til Bank of things.",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        alt: "Skjermbilde fra mobilversjonen av artikkelen.",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        alt: "Andre skjermbilde fra mobilversjonen.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
