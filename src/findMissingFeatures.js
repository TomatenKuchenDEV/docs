const path = require("node:path")
const fs = require("node:fs").promises

const ignored = new Set([
	"about.md",
	"botsetup.md",
	"features.md",
	"id.md"
])

const findMissingFeatures = async () => {
	const docs = await fs.readdir(path.join(__dirname, "..", "docs"))
	const featureDoc = await fs.readFile(path.join(__dirname, "..", "docs", "features.md"), "utf-8")
	console.log("Missing links in features.md:\n" + docs.filter(doc => doc.endsWith(".md") && !ignored.has(doc) && !featureDoc.includes("(/" + doc.replace(".md", "") + ")")).join("\n"))
}
findMissingFeatures()
