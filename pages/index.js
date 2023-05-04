import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div className={styles.container}>
			<main>
				<h1 className={styles.title}>
					<a href="https://tomatenkuchen.eu">TomatenKuchen</a> Docs
				</h1>
				<h2>
					Something is unclear? Join our <a href="https://tomatenkuchen.eu/support" target="_blank" rel="noopener">Discord server</a>!
				</h2>

				<div className={styles.grid}>
					{process.env.menu.map(item => (
						<Link href={item.link} key={item.link} className={styles.card}>
							<h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
							<p>{item.lang == "de" ? "German" : "English"}</p>
						</Link>
					))}
				</div>
			</main>
		</div>
	)
}
