function setCookie(name, value, days, global) {
	let cookie = name + "=" + (value || "") + ';path=/;'
	if (days) {
		const date = new Date()
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
		cookie += "expires=" + date.toUTCString() + ";"
	}
	if (global) cookie += "domain=.tomatenkuchen.eu;"
	document.cookie = cookie
}
function getCookie(name) {
	const cookies = document.cookie.split(";")
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim()
		if (cookie.split("=")[0] == name) return cookie.substring(name.length + 1, cookie.length)
	}
	return undefined
}

function redirect(url) {
	window.location = url
}

function search() {
	const query = document.getElementById("search").value
	var elements = document.getElementById("dropdown").children
	if (elements.length == 0) {
		document.getElementById("dropdown").innerHTML = pages.map(page => "<a class='nohighlight' href='" + page.url + "'>" + page.title + "</a>").join("")
		elements = document.getElementById("dropdown").children
	}

	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]
		var element = elements[i]

		if (page.title.toLowerCase().includes(query.toLowerCase()) && page.lang == getCookie("lang")) element.style.display = ""
		else element.style.display = "none"
	}
}

window.onload = () => {
	const theme = getCookie("theme")
	if (theme == "light") document.body.classList.replace("dark-theme", "light-theme")

	document.getElementById("search").addEventListener("focus", () => {
		document.getElementById("dropdown").style.display = ""
	})
	document.getElementById("search").addEventListener("blur", () => {
		setTimeout(() => {
			document.getElementById("dropdown").style.display = "none"
		}, 150)
	})
	filterCards()
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
	filterCards()
}

function filterCards() {
	if (location.pathname != "/") return
	var generated = ""
	if (!getCookie("lang")) setCookie("lang", "en", 60, true)
	pages.filter(page => page.lang == getCookie("lang")).forEach(page => {
		generated += "<div class='grid-item' onclick='redirect(\'" + page.url + "\')'><a class='nohighlight' href='" + page.url + "'><h3>" + page.title + "</h3></a></div>"
	})
	document.getElementsByClassName("grid")[0].innerHTML = generated
}
