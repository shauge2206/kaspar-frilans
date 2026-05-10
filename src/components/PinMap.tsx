import { MAP_VIEWBOX, NORWAY_PATH, project } from "@/lib/map";

type Props = {
  lat: number;
  lng: number;
  label: string;
  className?: string;
};

export function PinMap({ lat, lng, label, className }: Props) {
  const p = project(lat, lng);
  return (
    <div
      className={`relative bg-fog/40 border border-line/50 rounded-md overflow-hidden ${className ?? ""}`}
    >
      <svg
        viewBox={`${MAP_VIEWBOX.x} ${MAP_VIEWBOX.y} ${MAP_VIEWBOX.w} ${MAP_VIEWBOX.h}`}
        className="w-full h-auto block"
        role="img"
        aria-label={`Stedsmarkør på kart for ${label}`}
      >
        <path
          d={NORWAY_PATH}
          fill="#e6dcc7"
          stroke="#1f3852"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <g transform={`translate(${p.x} ${p.y})`}>
          <circle r="22" fill="#e95c2b" opacity="0.18" />
          <circle r="14" fill="#e95c2b" opacity="0.32" />
          <circle r="6" fill="#e95c2b" stroke="#0e1a26" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
