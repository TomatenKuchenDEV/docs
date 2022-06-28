const fs = require("fs")
const showdown = require("showdown")
const converter = new showdown.Converter({ghCompatibleHeaderId: true, parseImgDimensions: true, headerLevelStart: 2, strikethrough: true, tables: true, tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true, underline: true, metadata: true})
var pages = []
var templatecopy = ""

fs.readFile("./template.html", "utf8", (err, template) => {
  	if (err) throw err
	templatecopy = template

  	fs.readdir(__dirname, (err, files) => {
		if (err) throw err
		files = files.filter(file => file.endsWith(".md"))
		console.log("Current directory filenames:", files)

		files.forEach(file => {
	  		fs.readFile(file, "utf8", (err, data) => {
				if (err) throw err

				const converted = converter.makeHtml(data)
				const meta = converter.getMetadata()

				const output = file.replace(".md", "")
				pages.push({
					title: meta?.title || "Dokumentation",
					description: meta?.description,
					lang: meta?.lang || "de",
					url: output
				})

				fs.writeFile("dist/" + output + ".html", template.replace(/{TITLE}/g, meta?.title || "Dokumentation").replace("{BODYDATA}", "").replace("{LANG}", meta?.lang || "de").replace("{CONTENT}", converted), err => {
					if (err) throw err
					console.log("File " + file + " written successfully")
				})

				if (pages.length == files.length) generateStartpage()
			})
		})
  	})
})

function generateStartpage() {
	var generated = "<center><h1 style='padding: 10px;'>Startseite der Dokumentation</h1><div class='grid'>"

	pages.sort((a, b) => {
		if (a.lang == "de") return -1
		if (b.lang == "de") return 1
		return 0
	}).forEach(page => {
		generated += "<div class='grid-item'><a class='nohighlight' href='" + page.url + "'><h3>" + page.title + "</h3><p>" + (page.lang == "de" ? "🇩🇪 Deutsch" : "🇺🇸 English") + "</p></a></div>"
	})
	generated += "</div></center>"

	fs.writeFile("dist/index.html", templatecopy.replace(/{TITLE}/g, "Startseite").replace("{BODYDATA}", "onload='filterCards()'").replace("{LANG}", "de").replace("{CONTENT}", generated), err => {
		if (err) throw err
		console.log("File index.html written successfully")
	})

	fs.readFile("./dist/assets/main.js", "utf8", (err, main) => {
		if (err) throw err

		fs.writeFile("dist/assets/main.js", "const pages = " + JSON.stringify(pages) + "\n\n" + main, err => {
			if (err) throw err
			console.log("File assets/main.js written successfully")
		})
	})
}
