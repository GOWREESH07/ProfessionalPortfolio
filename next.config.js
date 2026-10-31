/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/ProfessionalPortfolio' : '',
  trailingSlash: isGithubActions,
};

module.exports = nextConfig;
