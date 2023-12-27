const fs = require("node:fs")
const { join } = require("node:path")

module.exports = async (context, options) => {
	for await (const file of options.files) {
		const res = await fetch(options.baseURL + file + "?lang=" + context.i18n.currentLocale, {
			headers: {
				"User-Agent": "Docusaurus TK Docs"
			}
		})
		const content = await res.text()

		const dir = join(context.siteDir, options.outDir)
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
		fs.writeFileSync(join(dir, file), content, { encoding: "utf8" })
	}

	return {
		name: "docusaurus-plugin-integration-functions"
	}
}
