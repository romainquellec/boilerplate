const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
  target: 'serverless',
  distDir: 'build',
  generateBuildId: async () => {
    return 'boilerplate'
  }
};

module.exports = withTypescript(nextConfig)
