const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
  target: 'serverless',
  distDir: 'build'
};

module.exports = withTypescript(nextConfig)
