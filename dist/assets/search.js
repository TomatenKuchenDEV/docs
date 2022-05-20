function search(query) {
	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]

		if (page.title.toLowerCase().includes(query.toLowerCase())) console.log("search: Show " + page.title)//page.style.display = ""
		else console.log("search: Hide " + page.title)//page.style.display = "none"
	}
}
