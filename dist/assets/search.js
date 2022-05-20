function search(query) {
	if (!query) query = document.getElementById("search").value.toLowerCase()

	var categories = {}
	for (var i = 0; i < cmddiv.length; i++) {
		var cmd = cmddiv[i]
		if (!categories[cmd.getAttribute("data-category")]) categories[cmd.getAttribute("data-category")] = 0

		if (cmd.innerText.toLowerCase().includes(query) || cmd.getAttribute("data-category").includes(query)) {
			cmd.style.display = ""
			categories[cmd.getAttribute("data-category")]++
		} else cmd.style.display = "none"
	}
}
