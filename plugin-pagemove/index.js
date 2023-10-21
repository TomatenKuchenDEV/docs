// Modified by TomatoCake from https://github.com/usagrada/docusaurus-plugin-pagemove/blob/729c7ef9b1189cf143de992b583410c3e5d951fe/src/index.js

const path = require("path")

module.exports = () => ({
	name: "keydown pagenation",
	getClientModules() {
		return [path.join(__dirname, "plugin.js")]
	}
})
