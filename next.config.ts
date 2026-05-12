import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.243"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "diariodeuberlandia.com.br" },
      { protocol: "https", hostname: "down-br.img.susercontent.com" },
      { protocol: "https", hostname: "image.made-in-china.com" },
      { protocol: "https", hostname: "ropadetrabajoindustrial.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "s.alicdn.com" },
      { protocol: "https", hostname: "www.visionuniformes.com.br" },
      { protocol: "https", hostname: "tfbsn4.vteximg.com.br" },
      { protocol: "https", hostname: "images.tcdn.com.br" },
      { protocol: "https", hostname: "foot-star.com" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
