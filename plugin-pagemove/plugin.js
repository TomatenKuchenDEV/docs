import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment"

const setup = () => {
	const prev = document.getElementsByClassName("pagination-nav__link--prev")
	const next = document.getElementsByClassName("pagination-nav__link--next")

	document.addEventListener("keydown", e => {
		const active = document.activeElement.tagName
		if (active != "BODY") return

		if (e.key == "ArrowLeft" && prev.length == 1) prev[0].click()
		else if (e.key == "ArrowRight" && next.length == 1) next[0].click()
	})
}

if (ExecutionEnvironment.canUseDOM) {
	window.onload = setup
	window.onpopstate = setup
}
