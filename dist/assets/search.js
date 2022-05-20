function search(query) {
	if (!query) query = document.getElementById("search").value.toLowerCase()
	var cmddiv = document.getElementById("commands-container").getElementsByClassName("command")
	var categorydiv = document.getElementById("commands-container").getElementsByClassName("category")

	var categories = {}
	for (var i = 0; i < cmddiv.length; i++) {
		var cmd = cmddiv[i]
		if (!categories[cmd.getAttribute("data-category")]) categories[cmd.getAttribute("data-category")] = 0

		if (cmd.innerText.toLowerCase().includes(query) || cmd.getAttribute("data-category").includes(query)) {
			cmd.style.display = ""
			categories[cmd.getAttribute("data-category")]++
		} else cmd.style.display = "none"
	}
	for (var j = 0; j < categorydiv.length; j++) {
		var category = categorydiv[j]

		if (categories[category.id] > 0) category.style.display = ""
		else category.style.display = "none"
	}
}
