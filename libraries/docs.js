const fs = require("fs")
const path = require("path")
const showdown = require("showdown")
const converter = new showdown.Converter({ghCompatibleHeaderId: true, parseImgDimensions: true, headerLevelStart: 2, strikethrough: true, tables: true, tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true, underline: true, metadata: true})

export function getAllPostIds(lang = "en") {
	const fileNames = fs.readdirSync("docs").filter(fileName => fileName.endsWith("-" + lang + ".md"))

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace("-" + lang + ".md", "")
			}
		}
	})
}

export function getPostData(id, lang = "en") {
	const data = fs.readFileSync(path.join("docs", id + "-" + lang + ".md"), "utf8")

	const converted = converter.makeHtml(data)
	const meta = converter.getMetadata()

	return {
		id,
		meta,
		converted
	}
}
