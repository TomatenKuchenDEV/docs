import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Navbar(props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{props.title || "TomatenKuchen"}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<Link href="/">Home</Link>
				<a href="https://tomatenkuchen.eu">Website</a>
				<ThemeSwitch />
			</nav>
		</div>
	)
}

const ThemeSwitch = () => {
  	const [mounted, setMounted] = useState(false)
  	const { theme, setTheme } = useTheme()

  	useEffect(() => {
    	setMounted(true)
  	}, [])

  	if (!mounted) return null

  	return (
		<svg onClick={() => setTheme(theme == "light" ? "dark" : "light")} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
		</svg>
  	)
}
