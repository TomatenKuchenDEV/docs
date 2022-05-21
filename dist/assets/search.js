function search(query) {
	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]

		//if (page.title.toLowerCase().includes(query.toLowerCase())) page.style.display = ""
		//else page.style.display = "none"
	}
}

window.onload = () => {
	document.getElementById("search").addEventListener("focus", () => {
		document.getElementById("dropdown").style.display = "block"
	})
	document.getElementById("search").addEventListener("blur", () => {
		document.getElementById("dropdown").style.display = ""
	})

	document.getElementById("dropdown").innerHTML = pages.map(page => "<a class='nohighlight' href='" + page.url + "'><h3>" + page.title + "</h3><p>" + (page.lang == "de" ? "🇩🇪 Deutsch" : "🇺🇸 English") + "</p></a>").join("")
}
