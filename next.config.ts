/** @type {import('tailwindcss').Config} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/pw/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;