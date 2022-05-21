function search(query) {
	const elements = document.getElementById("dropdown").children

	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]
		var element = elements[i]

		if (page.title.toLowerCase().includes(query.toLowerCase())) element.style.display = ""
		else element.style.display = "none"
	}
}

window.onload = () => {
	document.getElementById("search").addEventListener("focus", () => {
		document.getElementById("dropdown").style.display = ""
	})
	document.getElementById("search").addEventListener("blur", () => {
		document.getElementById("dropdown").style.display = "none"
	})

	document.getElementById("dropdown").innerHTML = pages.map(page => "<a href='" + page.url + "'>" + page.title + "</a><br>").join("")
}
