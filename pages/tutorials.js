import Link from "next/link"
import styles from "../styles/Tutorials.module.css"

export default function() {
	return (
		<div className={styles.container}>
			{process.env.menu.map(item => (
				<Link href={item.link} key={item.link}>
					{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
				</Link>
			))}
		</div>
	)
}
