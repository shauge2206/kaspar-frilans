export type Sak = {
  slug: string;
  nummer: string;
  tittel: string;
  ingress: string;
  publikasjon: string;
  dato: string;
  datoIso: string;
  kategori: string;
  bildetekst: string;
  fotograf: string;
  uthevet: string;
  kropp: string[];
  bilder: { src: string; alt: string }[];
  hovedbilde: string;
  sidetall: number;
};

export const saker: Sak[] = [
  {
    slug: "utvik-senior",
    nummer: "I",
    tittel:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    ingress:
      "Arnfinn Hay var 29 år da broren omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
    publikasjon: "Fiskeribladet",
    dato: "7. april 2025",
    datoIso: "2025-04-07",
    kategori: "Gravejournalistikk",
    bildetekst:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    fotograf: "Privat / Terje Jensen",
    uthevet:
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt.",
    kropp: [
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978. Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt. De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
      "Nå, nesten et halvt århundre senere, beveger saken seg igjen. Arnfinn Hay har brukt store deler av livet på å lete etter svar i arkiver, intervjuer og glemte rapporter. Materialet han har samlet, har han delt med både politikere og pressen.",
    ],
    bilder: [
      { src: "/images/saker/sak-1/bilde-1.jpeg", alt: "Hovedbilde" },
      { src: "/images/saker/sak-1/bilde-2.jpeg", alt: "Utklipp fra nettsiden" },
      { src: "/images/saker/sak-1/bilde-3.jpeg", alt: "Skjermbilde mobil" },
    ],
    hovedbilde: "/images/saker/sak-1/bilde-1.jpeg",
    sidetall: 12,
  },
  {
    slug: "drama-paa-sotra",
    nummer: "II",
    tittel:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    ingress:
      "Thomas Olsen sier at både han og flere naboer ble skutt på under en dramatisk natt i Øygarden.",
    publikasjon: "Bergens Tidende",
    dato: "22. august 2023",
    datoIso: "2023-08-22",
    kategori: "Reportasje",
    bildetekst:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    fotograf: "Geir Martin Strande",
    uthevet:
      "Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap.",
    kropp: [
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden. Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
      "Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
    ],
    bilder: [
      { src: "/images/saker/sak-2/bilde-1.jpeg", alt: "Hovedbilde" },
      { src: "/images/saker/sak-2/bilde-2.jpeg", alt: "Utklipp fra nettsiden" },
      { src: "/images/saker/sak-2/bilde-3.jpeg", alt: "Skjermbilde mobil" },
    ],
    hovedbilde: "/images/saker/sak-2/bilde-1.jpeg",
    sidetall: 28,
  },
  {
    slug: "gratisbutikk-flyktninger",
    nummer: "III",
    tittel: "Gratisbutikk for flyktninger får inn ødelagte klær",
    ingress:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær. Men mye av det butikken får inn går rett i bosset.",
    publikasjon: "Bergens Tidende",
    dato: "31. juli 2023",
    datoIso: "2023-07-31",
    kategori: "Feature",
    bildetekst:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    fotograf: "Jannica Luoto",
    uthevet:
      "En fjerdedel av det butikken mottar går rett i bosset.",
    kropp: [
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad. Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
    ],
    bilder: [
      { src: "/images/saker/sak-3/bilde-1.png", alt: "Hovedbilde" },
      { src: "/images/saker/sak-3/bilde-2.jpeg", alt: "Skjermbilde mobil" },
      { src: "/images/saker/sak-3/bilde-3.jpeg", alt: "Skjermbilde mobil 2" },
    ],
    hovedbilde: "/images/saker/sak-3/bilde-1.png",
    sidetall: 44,
  },
];

export function findSak(slug: string): Sak | undefined {
  return saker.find((s) => s.slug === slug);
}
