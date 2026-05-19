export type Sak = {
  slug: string;
  caseNumber: string;
  caseClassification: string;
  shortLabel: string;
  title: string;
  publication: string;
  date: string;
  dateline: string;
  bildetekst: string;
  fotograf: string;
  excerpt: string[];
  keywords: string[];
  images: { src: string; alt: string; note: string }[];
  stamps: string[];
  field: string;
};

export const saker: Sak[] = [
  {
    slug: "utvik-senior",
    caseNumber: "SAK NR. 042/78",
    caseClassification: "GRAVING · ARBEIDSLIV / SJØ",
    shortLabel: "UTVIK SENIOR",
    title:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    publication: "Fiskeribladet",
    date: "7. april 2025",
    dateline: "SENJA / OSLO",
    bildetekst:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    fotograf: "Privat / Terje Jensen",
    excerpt: [
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978.",
      "Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt.",
      "De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
    ],
    keywords: ["forlis", "etterlatte", "kollisjon", "stortinget"],
    images: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        alt: "Arnfinn Hay i felt",
        note: "Hovedbilde – Senja, mars 2025",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        alt: "Utklipp fra Fiskeribladet sin nettside",
        note: "Skjermutklipp – Fiskeribladet.no",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        alt: "Skjermbilde fra mobil",
        note: "Mobilvisning – publisert 07.04.2025",
      },
    ],
    stamps: ["GRAVING", "ARKIVERT"],
    field: "Senja, Troms",
  },
  {
    slug: "sotra-natten",
    caseNumber: "SAK NR. 087/23",
    caseClassification: "KRIMINAL · ØYGARDEN",
    shortLabel: "SOTRA-NATTEN",
    title:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    publication: "Bergens Tidende",
    date: "22. august 2023",
    dateline: "SKOGSVÅG / ØYGARDEN",
    bildetekst:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    fotograf: "Geir Martin Strande",
    excerpt: [
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden.",
      "Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
      "Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
    ],
    keywords: ["vold", "vitne", "siktelse", "natt"],
    images: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        alt: "Thomas Olsen ved gjerningsstedet",
        note: "Hovedbilde – Skogsvåg, 22.08.2023",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        alt: "Utklipp fra Bergens Tidende sin nettside",
        note: "Skjermutklipp – bt.no",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        alt: "Skjermbilde mobil – Bergens Tidende",
        note: "Mobilvisning – publisert 22.08.2023",
      },
    ],
    stamps: ["VITNEAVHØR", "KONFIDENSIELT"],
    field: "Skogsvåg, Øygarden",
  },
  {
    slug: "bank-of-things",
    caseNumber: "SAK NR. 113/23",
    caseClassification: "REPORTASJE · FYLLINGSDALEN",
    shortLabel: "BANK OF THINGS",
    title: "Gratisbutikk for flyktninger får inn ødelagte klær",
    publication: "Bergens Tidende",
    date: "31. juli 2023",
    dateline: "FYLLINGSDALEN, BERGEN",
    bildetekst:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    fotograf: "Jannica Luoto",
    excerpt: [
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad.",
      "Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
    ],
    keywords: ["flyktninger", "frivillighet", "matsvinn", "ukraina"],
    images: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        alt: "Ljubov Novosad i butikken",
        note: "Hovedbilde – Fyllingsdalen, juli 2023",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        alt: "Skjermbilde mobil – Bergens Tidende",
        note: "Mobilvisning – publisert 31.07.2023",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        alt: "Skjermbilde mobil 2 – Bergens Tidende",
        note: "Mobilvisning – alternativ scroll",
      },
    ],
    stamps: ["FELT", "ARKIVERT"],
    field: "Fyllingsdalen, Bergen",
  },
];

export function getSak(slug: string): Sak | undefined {
  return saker.find((s) => s.slug === slug);
}
