const isProd = process.env.STAGE === 'production'
const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
  assetPrefix: isProd ? 'https://assets.xxx.com' : '',
  target: 'serverless',
  distDir: 'build',
  generateBuildId: async () => {
    return 'boilerplate'
  }
};

module.exports = withTypescript(nextConfig)
