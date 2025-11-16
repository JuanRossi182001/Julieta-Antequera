/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático para GitHub Pages
  output: 'export',

  // Evita problemas con next/image en static export
  images: {
    unoptimized: true,
  },

  // Este repo se llama "Julieta-Antequera"
  // La página se sirve en:
  // https://JuanRossi182001.github.io/Julieta-Antequera/
  basePath: '/Julieta-Antequera',
  assetPrefix: '/Julieta-Antequera/',
};

export default nextConfig;


