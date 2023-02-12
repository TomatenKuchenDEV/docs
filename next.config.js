const menu = require("./libraries/menu.js")

module.exports = async () => {
	return {
		env: {
			menu: await menu()
		},
		poweredByHeader: false
	}
}
