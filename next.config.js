/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = '/'
let basePath = ''
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `https://www.24campercamp.pl/`
  basePath = `https://www.24campercamp.pl/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix,
  basePath: basePath
};
module.exports = nextTranslate({...nextConfig })
