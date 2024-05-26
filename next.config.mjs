/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "storage.ko-fi.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "d.furaffinity.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
