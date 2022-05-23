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
		setTimeout(() => {
			document.getElementById("dropdown").style.display = "none"
		}, 100)
	})

	document.getElementById("dropdown").innerHTML = pages.map(page => "<a class='nohighlight' href='" + page.url + "'>" + page.title + "</a>").join("")
}
