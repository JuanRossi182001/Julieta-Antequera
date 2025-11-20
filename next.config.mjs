/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Export estático para poder usar GitHub Pages
  output: "export",

  // Nada de optimización de imágenes del lado del servidor
  images: {
    unoptimized: true,
  },

  // En desarrollo (npm run dev): sin basePath
  // En producción (npm run build para GitHub Pages): con basePath
  basePath: isProd ? "/Julieta-Antequera" : "",
  assetPrefix: isProd ? "/Julieta-Antequera/" : "",
};

export default nextConfig;
