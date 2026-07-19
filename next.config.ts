import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Tillat høyere bildekvalitet enn standard (75) for skarpere sak-bilder.
    qualities: [75, 90],
  },
};

export default nextConfig;
