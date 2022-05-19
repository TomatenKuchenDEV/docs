const fs = require("fs")
const showdown = require("showdown")
const converter = new showdown.Converter({ghCompatibleHeaderId: true, parseImgDimensions: true, strikethrough: true, tables: true, tablesHeaderId: true, tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true, underline: true, metadata: true})
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

				const output = file.replace(".md", "") + ".html"
				pages.push({
					title: meta?.title || "Dokumentation",
					//description: meta?.description,
					lang: meta?.lang || "de",
					url: output
				})

				fs.writeFile("dist/" + output, template.replace(/{TITLE}/g, meta?.title || "Dokumentation").replace("{CONTENT}", converted), err => {
					if (err) throw err
					console.log("File " + file + " written successfully")
				})

				if (pages.length == files.length) generateStartpage()
			})
		})
  	})
})

function generateStartpage() {
	var generated = "<h1>Startseite der Dokumentation</h1><ul>"
	pages.forEach(page => {
		generated += "<li><a href='" + page.url + "'>" + page.title + "</a></li>"
	})
	generated += "</ul>"

	generated += "<br><br><br><br><div class='grid'>"
	pages.forEach(page => {
		generated += "<a href='" + page.url + "'>" + page.title + "</a><p>keeeek</p>"
	})
	generated += "</div>"

	fs.writeFile("dist/index.html", template.replace(/{TITLE}/g, "Startseite").replace("{CONTENT}", generated))
}
