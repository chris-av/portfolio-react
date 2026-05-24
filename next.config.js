/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.spotify.com",
        // port: "",
        pathname: "/v1/**",
        // search: "",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        // port: "",
        pathname: "/image/**",
        // search: "",
      },
    ],
  }
}
