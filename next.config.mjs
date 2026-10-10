import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
  }
};

const withMDX = createMDX({
  extension: /\.(mdx)$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'metadata' }],
    ],
  },
});

export default withMDX(nextConfig);
