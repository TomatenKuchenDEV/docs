const fs = require("fs")
const path = require("path")

module.exports = async () => {
	var found = []
	let files = fs.readdirSync("docs/")
	files.filter(file => {
		if (file == "_app.js") return false
		const stat = fs.lstatSync("docs/" + file)
		return file.endsWith(".md") && stat.isFile()
	}).forEach(async file => {
		let link = path.parse(file).name
		let lang = link.split("-").pop()

		found.push({
			link: "/" + lang + "/" + link.replace("-" + lang, ""),
			name: link.replace("-" + lang, ""),
			lang
		})
	})
	return found
}
