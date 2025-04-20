module.exports = {
  siteUrl: 'https://www.smilexpertsdental.com',
  generateRobotsTxt: true,
  outDir: './public',
  sitemapBaseFileName: 'sitemap',
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/home' ? 'daily' : 'monthly',
    priority: path === '/home' ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
};