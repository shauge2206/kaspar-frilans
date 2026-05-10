export type Sak = {
  slug: string;
  tittel: string;
  ingress: string;
  publikasjon: string;
  dato: string;
  datoIso: string;
  bildetekst: string;
  fotograf: string;
  lesetidMinutter: number;
  hovedbilde: string;
  bilder: { src: string; tekst: string }[];
  brodtekst: string[];
  pullquote?: string;
  emneknagger: string[];
};

export const saker: Sak[] = [
  {
    slug: "utvik-senior",
    tittel:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    ingress:
      "Arnfinn Hay var 29 år da broren hans omkom utenfor Senja i 1978. Nå har han håp om at Stortinget vil granske saken på nytt.",
    publikasjon: "Fiskeribladet",
    dato: "7. april 2025",
    datoIso: "2025-04-07",
    bildetekst:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    fotograf: "Privat / Terje Jensen",
    lesetidMinutter: 9,
    hovedbilde: "/images/saker/sak-1/bilde-1.jpeg",
    bilder: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        tekst: "Arnfinn Hay foran havet ved Senja.",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        tekst: "Utklipp fra reportasjen i Fiskeribladet.",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        tekst: "Saken slik den ble formidlet på mobil.",
      },
    ],
    brodtekst: [
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i 1978. Siden har det pågått en 47 år lang kamp om norske myndigheters håndtering av saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt. De etterlatte har hele veien hevdet at dette umulig kunne være tilfelle, og at et annet fartøy må ha kollidert med «Utvik Senior».",
      "I april 2025 vedtok Stortinget å åpne for en ny, uavhengig granskning. For Arnfinn Hay er det første gang på flere tiår han våger å håpe.",
      "– Jeg har lært meg å ikke bli for optimistisk. Men nå ser jeg en åpning. Vi har grunn til optimisme, sier han.",
    ],
    pullquote:
      "Vi har båret denne sorgen i nesten et halvt århundre. Nå håper vi at sannheten endelig får komme fram.",
    emneknagger: ["Fiskeri", "Gravejournalistikk", "Senja"],
  },
  {
    slug: "drama-pa-sotra",
    tittel:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    ingress:
      "Thomas Olsen sier at både han og flere naboer ble skutt på da en mann i 30-årene gikk til angrep i Øygarden.",
    publikasjon: "Bergens Tidende",
    dato: "22. august 2023",
    datoIso: "2023-08-22",
    bildetekst:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    fotograf: "Geir Martin Strande",
    lesetidMinutter: 6,
    hovedbilde: "/images/saker/sak-2/bilde-1.jpeg",
    bilder: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        tekst: "Thomas Olsen utenfor sitt eget hus dagen etter.",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        tekst: "Hendelsen vekket sterke reaksjoner i nabolaget.",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        tekst: "Saken ble lest av tusenvis natt til tirsdag.",
      },
    ],
    brodtekst: [
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden. Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen.",
      "Mannen er siktet for ildpåsettelse, trusler og skadeverk. Politiet rykket ut med store ressurser, og flere helikoptre var i lufta.",
      "Thomas Olsen (45) bor i nærheten og forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
      "Han la på, kledde på seg, og gikk ut for å se hva som foregikk. Det skulle bli en natt han ikke kommer til å glemme.",
    ],
    pullquote:
      "Jeg så ham komme imot meg med armbrøst. Da skjønte jeg at dette var alvor.",
    emneknagger: ["Krim", "Bergen", "Reportasje"],
  },
  {
    slug: "gratisbutikk-flyktninger",
    tittel: "Gratisbutikk for flyktninger får inn ødelagte klær",
    ingress:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær og bruksgjenstander. Men mye av det butikken får inn går rett i bosset.",
    publikasjon: "Bergens Tidende",
    dato: "31. juli 2023",
    datoIso: "2023-07-31",
    bildetekst:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    fotograf: "Jannica Luoto",
    lesetidMinutter: 5,
    hovedbilde: "/images/saker/sak-3/bilde-1.png",
    bilder: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        tekst: "Butikksjef Ljubov Novosad i lokalene i Fyllingsdalen.",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        tekst: "Saken på mobil — første dag etter publisering.",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        tekst: "Saken delt på sosiale medier.",
      },
    ],
    brodtekst: [
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad. Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men et problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går derfor rett i bosset.",
      "– Det er trist å måtte kaste så mye. Vi vil heller ha færre, men brukbare ting, sier Novosad.",
    ],
    pullquote:
      "Vi vil heller ha færre ting, men brukbare ting. En fjerdedel går rett i bosset.",
    emneknagger: ["Samfunn", "Bergen", "Featurereportasje"],
  },
];

export function hentSak(slug: string): Sak | undefined {
  return saker.find((sak) => sak.slug === slug);
}
