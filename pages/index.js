import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div className={styles.container}>
			<main>
				<h1 className={styles.title}>
					<a href="https://tomatenkuchen.eu">TomatenKuchen</a> Docs
				</h1>

				<p>
					Something is unclear? Join our <a href="https://tomatenkuchen.eu/support/">Discord Server</a>!
				</p>

				<div className={styles.grid}>
					{process.env.menu.map(item => (
						<Link href={item.link} key={item.link} className={styles.card}>
							<h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
							<p>.-. <i>description soonTM</i></p>
						</Link>
					))}
				</div>
			</main>
		</div>
	)
}
