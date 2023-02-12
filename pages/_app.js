import "../styles/globals.css"
import Navbar from "../components/navbar"
import { ThemeProvider } from "next-themes"

export default function _app({ Component, pageProps }) {
  	return (
		<ThemeProvider>
			<Navbar />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
