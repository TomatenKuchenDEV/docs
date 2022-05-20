function search(query) {
	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]

		if (page.title.toLowerCase().includes(query)) page.style.display = ""
		else page.style.display = "none"
	}
}
