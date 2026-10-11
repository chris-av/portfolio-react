import { fileURLToPath } from 'node:url';
import createMDX from '@next/mdx';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
  },
  experimental: {
    agentUpgrade: "latest",
  },
};

const withMDX = createMDX({
  extension: /\.(mdx)$/,
  options: {
    remarkPlugins: [
      // Turbopack requires serializable loader options, so plugins are
      // referenced by module name/path and resolved by @next/mdx.
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'metadata' }],
      fileURLToPath(new URL('./utils/remark-post-meta.mjs', import.meta.url)),
    ],
  },
});

export default withMDX(nextConfig);
