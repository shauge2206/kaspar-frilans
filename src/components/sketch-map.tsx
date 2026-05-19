"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const USF = { lat: 60.3957, lng: 5.3128 };

export function SketchMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    // Dynamic import so Leaflet (which touches window) never runs on the server.
    import("leaflet").then((mod) => {
      if (cancelled || !containerRef.current) return;
      const L = mod.default ?? mod;

      const map = L.map(containerRef.current, {
        center: [USF.lat, USF.lng],
        zoom: 16,
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      });

      // Stadia Maps' Stamen Toner Lite tiles — high-contrast pen-on-paper
      // aesthetic. Free for localhost / non-prod use; production needs an
      // API key appended to the URL.
      L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://stamen.com/">Stamen Design</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        },
      ).addTo(map);

      const xIcon = L.divIcon({
        className: "",
        html:
          '<svg width="36" height="36" viewBox="-18 -18 36 36" xmlns="http://www.w3.org/2000/svg">' +
          '<circle r="14" fill="rgba(139,31,31,0.18)"/>' +
          '<g stroke="#8b1f1f" stroke-width="2.6" stroke-linecap="round">' +
          '<line x1="-7" y1="-7" x2="7" y2="7"/>' +
          '<line x1="-7" y1="7" x2="7" y2="-7"/>' +
          "</g></svg>",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });
      L.marker([USF.lat, USF.lng], { icon: xIcon }).addTo(map);

      cleanup = () => map.remove();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      aria-label="Kart over USF Verftet, Nordnes — Bergen"
    />
  );
}
