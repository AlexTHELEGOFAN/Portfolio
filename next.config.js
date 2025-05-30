// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    assetPrefix: '.',
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    images: { unoptimized: true },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = nextConfig;
