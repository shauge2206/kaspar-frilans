export type Sak = {
  slug: string;
  nummer: string;
  overskrift: string;
  ingress: string;
  publikasjon: string;
  dato: string;
  datoIso: string;
  sted: string;
  kategori: string;
  bildetekst: string;
  fotograf: string;
  artikkel: string[];
  bilder: { src: string; alt: string; bildetekst: string }[];
  spalte: number;
  rad: number;
};

export const saker: Sak[] = [
  {
    slug: "utvik-senior",
    nummer: "001",
    overskrift:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    ingress:
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978. Nå håper Arnfinn Hay at Stortinget vil granske saken på nytt.",
    publikasjon: "Fiskeribladet",
    dato: "7. april 2025",
    datoIso: "2025-04-07",
    sted: "Senja",
    kategori: "Gravesak",
    bildetekst:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    fotograf: "Privat / Terje Jensen",
    artikkel: [
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978.",
      "Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt.",
      "De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
    ],
    bilder: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        alt: "Arnfinn Hay portrettert ute i kystlandskapet",
        bildetekst:
          "Arnfinn Hay har kjempet i 47 år for å få fram sannheten om brorens forlis.",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        alt: "Faksimile av artikkel publisert i Fiskeribladet",
        bildetekst: "Faksimile fra Fiskeribladet, 7. april 2025.",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        alt: "Skjermbilde av artikkel fra mobil",
        bildetekst: "Saken slik den fremsto for digitale lesere.",
      },
    ],
    spalte: 8,
    rad: 2,
  },
  {
    slug: "sotra-armbrost",
    nummer: "002",
    overskrift:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    ingress:
      "Rundt 40 personer fikk status som vitne eller fornærmet etter en dramatisk natt i Øygarden. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
    publikasjon: "Bergens Tidende",
    dato: "22. august 2023",
    datoIso: "2023-08-22",
    sted: "Øygarden",
    kategori: "Krim",
    bildetekst: "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    fotograf: "Geir Martin Strande",
    artikkel: [
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden.",
      "Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
      "Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
    ],
    bilder: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        alt: "Thomas Olsen ved sitt hjem i Øygarden",
        bildetekst:
          "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        alt: "Faksimile fra Bergens Tidende",
        bildetekst: "Faksimile fra Bergens Tidende, 22. august 2023.",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        alt: "Skjermbilde av artikkel fra mobil",
        bildetekst: "Saken slik den fremsto for digitale lesere.",
      },
    ],
    spalte: 6,
    rad: 1,
  },
  {
    slug: "bank-of-things",
    nummer: "003",
    overskrift: "Gratisbutikk for flyktninger får inn ødelagte klær",
    ingress:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men en fjerdedel av det butikken får inn går rett i bosset.",
    publikasjon: "Bergens Tidende",
    dato: "31. juli 2023",
    datoIso: "2023-07-31",
    sted: "Fyllingsdalen",
    kategori: "Reportasje",
    bildetekst:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    fotograf: "Jannica Luoto",
    artikkel: [
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad.",
      "Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
    ],
    bilder: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        alt: "Butikksjef Ljubov Novosad inne i bruktbutikken",
        bildetekst:
          "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        alt: "Skjermbilde av artikkelen fra mobil",
        bildetekst: "Saken slik den fremsto for digitale lesere.",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        alt: "Skjermbilde nummer to fra artikkelen",
        bildetekst: "Andre skjermbilde fra publiseringen.",
      },
    ],
    spalte: 4,
    rad: 1,
  },
];

export function getSak(slug: string): Sak | undefined {
  return saker.find((s) => s.slug === slug);
}
