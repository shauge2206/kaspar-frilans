export type Sak = {
  slug: string;
  tittel: string;
  publikasjon: string;
  dato: string;
  datoIso: string;
  sted: string;
  notertDato: string;
  bildetekst: string;
  fotograf: string;
  ingress: string;
  brodtekst: string[];
  bilder: { src: string; alt: string; rolle: string }[];
  stempel: string;
  tilt: number;
};

export const saker: Sak[] = [
  {
    slug: "utvik-senior",
    tittel:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    publikasjon: "Fiskeribladet",
    dato: "7. april 2025",
    datoIso: "2025-04-07",
    sted: "Senja",
    notertDato: "Notert 7. april 2025 – Senja",
    bildetekst:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    fotograf: "Privat / Terje Jensen",
    ingress:
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
    brodtekst: [
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978.",
      "Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt.",
      "De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
    ],
    bilder: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        alt: "Arnfinn Hay foran havet ved Senja",
        rolle: "Hovedbilde",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        alt: "Utklipp fra nettsiden til Fiskeribladet",
        rolle: "Utklipp",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        alt: "Skjermbilde fra mobilversjon av artikkelen",
        rolle: "Mobilbilde",
      },
    ],
    stempel: "FRA FELT",
    tilt: -2.4,
  },
  {
    slug: "drama-paa-sotra",
    tittel: "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    publikasjon: "Bergens Tidende",
    dato: "22. august 2023",
    datoIso: "2023-08-22",
    sted: "Skogsvåg, Øygarden",
    notertDato: "Notert 22. august 2023 – Skogsvåg",
    bildetekst:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    fotograf: "Geir Martin Strande",
    ingress:
      "Thomas Olsen sier at både han og flere naboer ble skutt på.",
    brodtekst: [
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden.",
      "Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen. Mannen er siktet for ildpåsettelse, trusler og skadeverk.",
      "Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
    ],
    bilder: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        alt: "Thomas Olsen utenfor huset sitt på Skogsvåg",
        rolle: "Hovedbilde",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        alt: "Utklipp fra nettsiden til Bergens Tidende",
        rolle: "Utklipp",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        alt: "Skjermbilde fra mobilversjon av artikkelen",
        rolle: "Mobilbilde",
      },
    ],
    stempel: "KRIM",
    tilt: 2.8,
  },
  {
    slug: "gratisbutikk-flyktninger",
    tittel: "Gratisbutikk for flyktninger får inn ødelagte klær",
    publikasjon: "Bergens Tidende",
    dato: "31. juli 2023",
    datoIso: "2023-07-31",
    sted: "Fyllingsdalen, Bergen",
    notertDato: "Notert 31. juli 2023 – Fyllingsdalen",
    bildetekst:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    fotograf: "Jannica Luoto",
    ingress:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
    brodtekst: [
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad.",
      "Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
    ],
    bilder: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        alt: "Butikksjef Ljubov Novosad viser frem ødelagte klær",
        rolle: "Hovedbilde",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        alt: "Skjermbilde fra mobilversjon av artikkelen",
        rolle: "Mobilbilde",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        alt: "Skjermbilde fra mobilversjon av artikkelen, del 2",
        rolle: "Mobilbilde",
      },
    ],
    stempel: "REPORTASJE",
    tilt: -1.2,
  },
];

export function getSak(slug: string): Sak | undefined {
  return saker.find((s) => s.slug === slug);
}
