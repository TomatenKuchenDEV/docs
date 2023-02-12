import Link from "next/link"
import styles from "../styles/Sidebar.module.css"
import { useRouter } from "next/router"

export default function(props) {
	const router = useRouter()

	return (
		<div className={styles.container}>
			<div className={styles.side}>
				{process.env.menu.filter(item => router.pathname.includes("/" + item.lang + "/")).map(item => (
					<Link key={item.link} href={item.link}>
						{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
					</Link>
				))}
			</div>
			<main dangerouslySetInnerHTML={{ __html: props.data.converted }}></main>
		</div>
	)
}
