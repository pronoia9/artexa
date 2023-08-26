/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  // reactStrictMode: true,
  // swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(hdr)$/, // frag|vert|exr|
      type: 'asset/source',
    });
    return config;
  },
};

module.exports = nextConfig;
