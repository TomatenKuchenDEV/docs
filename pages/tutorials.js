import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

export default function() {
	return (
		<div className={styles.container}>
			{process.env.menu.map(item => (
				<Link href={item.link}>
					{item.name}
				</Link>
			))}
		</div>
	)
}
