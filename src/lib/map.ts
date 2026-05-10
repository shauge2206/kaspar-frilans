export const MAP_VIEWBOX = { x: -30, y: -20, w: 660, h: 940 };

const LNG_RANGE = { min: 0, max: 32 };
const LAT_RANGE = { min: 57.5, max: 71.5 };

export function project(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng - LNG_RANGE.min) / (LNG_RANGE.max - LNG_RANGE.min)) * 600;
  const y =
    ((LAT_RANGE.max - lat) / (LAT_RANGE.max - LAT_RANGE.min)) * 900;
  return { x, y };
}

// Stylized outline of Norway built from manually projected coastline + border
// vertices. Not a precise GIS shape — a graphic interpretation.
const COASTLINE: Array<[number, number]> = [
  [9.2, 58.7],
  [7.05, 58.0],
  [5.7, 58.97],
  [5.2, 59.6],
  [4.5, 60.4],
  [5.1, 62.2],
  [6.4, 62.6],
  [8.0, 63.7],
  [10.5, 64.5],
  [12.0, 65.6],
  [13.5, 67.3],
  [13.5, 68.2],
  [14.7, 68.7],
  [16.8, 68.8],
  [17.5, 69.7],
  [19.5, 70.0],
  [21.0, 70.3],
  [23.7, 70.7],
  [25.8, 71.2],
  [27.5, 70.9],
  [30.3, 70.4],
  [29.9, 69.9],
  [28.5, 69.5],
  [25.5, 69.5],
  [23.0, 69.0],
  [21.0, 69.0],
  [22.5, 68.5],
  [20.0, 68.0],
  [18.0, 67.0],
  [15.5, 66.0],
  [14.5, 65.4],
  [12.5, 64.0],
  [12.0, 63.0],
  [11.5, 62.5],
  [12.5, 61.5],
  [12.5, 60.0],
  [11.4, 59.1],
  [10.8, 58.95],
  [9.2, 58.7],
];

export function buildNorwayPath(): string {
  const points = COASTLINE.map(([lng, lat]) => project(lat, lng));
  const [first, ...rest] = points;
  if (!first) return "";
  return [
    `M ${first.x.toFixed(1)} ${first.y.toFixed(1)}`,
    ...rest.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`),
    "Z",
  ].join(" ");
}

export const NORWAY_PATH = buildNorwayPath();
