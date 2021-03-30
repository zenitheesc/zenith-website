module.exports = {
	siteUrl: process.env.SITE_URL || 'https://zenith.eesc.usp.br',
	generateRobotsTxt: true,
	transform: async (config, path) => {
		console.log(config,path)
		return {
			loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
		}
	},
}