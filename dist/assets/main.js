function search() {
	const query = document.getElementById("search").value
	const elements = document.getElementById("dropdown").children

	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]
		var element = elements[i]

		if (page.title.toLowerCase().includes(query.toLowerCase()) && page.lang == getCookie("lang")) element.style.display = ""
		else element.style.display = "none"
	}
}

window.onload = () => {
	const theme = getCookie("theme")
	if (theme == "light") {
		document.body.classList.toggle("light-theme")
		document.body.classList.toggle("dark-theme")
	}

	document.getElementById("search").addEventListener("focus", () => {
		document.getElementById("dropdown").style.display = ""
	})
	document.getElementById("search").addEventListener("blur", () => {
		setTimeout(() => {
			document.getElementById("dropdown").style.display = "none"
		}, 150)
	})

	document.getElementById("dropdown").innerHTML = pages.map(page => "<a class='nohighlight' href='" + page.url + "'>" + page.title + "</a>").join("")
}

function toggleTheme() {
	document.body.classList.toggle("light-theme")
	document.body.classList.toggle("dark-theme")

	const oldtheme = getCookie("theme")
	if (oldtheme == "light") setCookie("theme", "dark", 60, true)
	else setCookie("theme", "light", 60, true)
}
function toggleLang() {
	const oldlang = getCookie("lang")
	if (oldlang == "de") setCookie("lang", "en", 60, true)
	else setCookie("lang", "de", 60, true)
}
