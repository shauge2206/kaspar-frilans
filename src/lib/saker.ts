export type Sak = {
  slug: string;
  tittel: string;
  ingress: string;
  publikasjon: string;
  dato: string;
  datoIso: string;
  sted: string;
  bildetekst: string;
  fotograf: string;
  lesetidMin: number;
  hovedbilde: string;
  bilder: { src: string; alt: string; tekst: string; fotograf: string }[];
  brodtekst: string[];
  pullQuote: string;
};

export const saker: Sak[] = [
  {
    slug: "utvik-senior-haap-om-ny-gransking",
    tittel:
      "Snart 50 år etter brorens død øyner han håp: – Grunn til optimisme",
    ingress:
      "Arnfinn Hay var 29 år da broren omkom utenfor Senja i 1978. Nå håper han at Stortinget vil granske «Utvik Senior»-forliset på nytt.",
    publikasjon: "Fiskeribladet",
    dato: "7. april 2025",
    datoIso: "2025-04-07",
    sted: "Senja",
    bildetekst:
      "Arnfinn Hay og de andre etterlatte har kjempet for å få fram sannheten om hva som egentlig skjedde da «Utvik Senior» forliste i februar 1978.",
    fotograf: "Privat / Terje Jensen",
    lesetidMin: 8,
    hovedbilde: "/images/saker/sak-1/bilde-1.jpeg",
    bilder: [
      {
        src: "/images/saker/sak-1/bilde-1.jpeg",
        alt: "Arnfinn Hay, etterlatt etter «Utvik Senior»-forliset.",
        tekst:
          "Arnfinn Hay har brukt nærmere et halvt århundre på å få sannheten på bordet.",
        fotograf: "Foto: Privat / Terje Jensen",
      },
      {
        src: "/images/saker/sak-1/bilde-2.jpeg",
        alt: "Utklipp fra Fiskeribladets nettsak om «Utvik Senior».",
        tekst:
          "Saken har fulgt familiene gjennom generasjoner – og pressen gjennom flere tiår.",
        fotograf: "Skjermbilde: Fiskeribladet",
      },
      {
        src: "/images/saker/sak-1/bilde-3.jpeg",
        alt: "Mobilvisning av artikkelen i Fiskeribladet.",
        tekst:
          "Mobilversjonen ble lest av tusenvis i kystkommunene samme kveld saken kom på trykk.",
        fotograf: "Skjermbilde: Fiskeribladet",
      },
    ],
    brodtekst: [
      "Ni mann omkom da fiskebåten «Utvik Senior» gikk ned utenfor Senja i februar 1978. Siden har det pågått en 47 år lang kamp om hvordan norske myndigheter håndterte saken.",
      "En statlig gransking konkluderte tidlig med at fiskebåten hadde grunnstøtt og at forliset var selvforskyldt. De etterlatte har hele veien hevdet at dette umulig kan stemme, og at et annet fartøy må ha kollidert med «Utvik Senior».",
      "Nå mener Arnfinn Hay at det endelig er bevegelse i saken. På Stortinget snakkes det åpent om en ny gransking, og flere partier har signalisert støtte. – Det er grunn til optimisme, sier han.",
      "Hay forteller at familien har levd med en uavklart sorg i nesten 50 år. Hver vinter, når mørket legger seg over Senja, kommer minnene tilbake.",
    ],
    pullQuote:
      "Vi har lett etter sannheten i 47 år. Nå føles det endelig som om noen vil høre etter.",
  },
  {
    slug: "drama-paa-sotra-truet-med-armbroest",
    tittel:
      "Ble vitne til nattens drama på Sotra: – Han kom mot meg med armbrøst",
    ingress:
      "Thomas Olsen sier at både han og flere naboer ble skutt på da en mann gikk berserk på Skogsvåg natt til tirsdag.",
    publikasjon: "Bergens Tidende",
    dato: "22. august 2023",
    datoIso: "2023-08-22",
    sted: "Skogsvåg, Øygarden",
    bildetekst:
      "Thomas Olsen (45) sier han ble angrepet av mannen i 30-årene.",
    fotograf: "Geir Martin Strande",
    lesetidMin: 5,
    hovedbilde: "/images/saker/sak-2/bilde-1.jpeg",
    bilder: [
      {
        src: "/images/saker/sak-2/bilde-1.jpeg",
        alt: "Thomas Olsen utenfor huset sitt på Skogsvåg.",
        tekst:
          "Thomas Olsen sto bare meter unna gjerningsmannen. Han forsøker fortsatt å forstå hva som skjedde.",
        fotograf: "Foto: Geir Martin Strande",
      },
      {
        src: "/images/saker/sak-2/bilde-2.jpeg",
        alt: "Forsiden av nettsaken i Bergens Tidende.",
        tekst:
          "Saken ble en av kveldens mest leste i Bergens Tidende.",
        fotograf: "Skjermbilde: Bergens Tidende",
      },
      {
        src: "/images/saker/sak-2/bilde-3.jpeg",
        alt: "Mobilversjon av saken.",
        tekst:
          "Naboene fulgte med i sanntid mens politiet rykket ut.",
        fotograf: "Skjermbilde: Bergens Tidende",
      },
    ],
    brodtekst: [
      "Natt til tirsdag skal en mann i 30-årene ha truet og utøvd vold mot flere naboer på Skogsvåg i Øygarden. Opp mot 40 personer har status som vitne eller fornærmet etter hendelsen.",
      "Mannen er siktet for ildpåsettelse, trusler og skadeverk. Thomas Olsen (45) bor i nærheten. Han forteller om en svært dramatisk natt.",
      "– Naboen min ringte meg rett etter midnatt. Hun var redd og fortalte at naboen hennes hadde knust ruten hennes med et stort hageredskap, sier Olsen.",
      "Da Olsen kom ut, sto mannen midt i veien med en armbrøst hevet mot ham. Det første pilskuddet bommet med få centimeter. Det neste traff bilen hans.",
    ],
    pullQuote:
      "Han stilte seg opp midt i veien med armbrøsten hevet. Jeg trodde ikke det var virkelig.",
  },
  {
    slug: "gratisbutikk-for-flyktninger-oedelagte-klaer",
    tittel: "Gratisbutikk for flyktninger får inn ødelagte klær",
    ingress:
      "På «Bank of things» i Fyllingsdalen kan flyktninger hente gratis klær. Men en fjerdedel av det butikken får inn, går rett i bosset.",
    publikasjon: "Bergens Tidende",
    dato: "31. juli 2023",
    datoIso: "2023-07-31",
    sted: "Fyllingsdalen, Bergen",
    bildetekst:
      "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
    fotograf: "Jannica Luoto",
    lesetidMin: 4,
    hovedbilde: "/images/saker/sak-3/bilde-1.png",
    bilder: [
      {
        src: "/images/saker/sak-3/bilde-1.png",
        alt: "Butikksjef Ljubov Novosad i butikken «Bank of things».",
        tekst:
          "Butikksjef Ljubov Novosad viser frem et av mange plagg som er ødelagt.",
        fotograf: "Foto: Jannica Luoto",
      },
      {
        src: "/images/saker/sak-3/bilde-2.jpeg",
        alt: "Mobilvisning av artikkelen i Bergens Tidende.",
        tekst:
          "Saken nådde tusenvis av lesere – og førte til nye givere samme uke.",
        fotograf: "Skjermbilde: Bergens Tidende",
      },
      {
        src: "/images/saker/sak-3/bilde-3.jpeg",
        alt: "Flere skjermbilder fra saken.",
        tekst:
          "Bildene fra butikkhverdagen sa mer enn statistikken alene.",
        fotograf: "Skjermbilde: Bergens Tidende",
      },
    ],
    brodtekst: [
      "Bruktbutikken «Bank of things» har akkurat åpnet. Men i det lille lokalet auler det allerede med folk. I løpet av den første åpningstimen har nesten 100 ukrainske flyktninger vært innom.",
      "De fleste finner noe de trenger her, sier butikksjef Ljubov Novosad. Hun sier de er svært takknemlige for at folk leverer inn ting.",
      "Men ett problem har vært vedvarende over tid: De får inn altfor mye klær og gjenstander av dårlig kvalitet. En fjerdedel av det butikken mottar går rett i bosset.",
      "– Folk ser ikke alltid på det de gir bort. Vi får inn flekkete plagg, ødelagte sko og leker uten deler, sier Novosad.",
    ],
    pullQuote:
      "Folk ser ikke alltid på det de gir bort. En fjerdedel av alt vi mottar, går rett i bosset.",
  },
];

export function getSak(slug: string): Sak | undefined {
  return saker.find((s) => s.slug === slug);
}
