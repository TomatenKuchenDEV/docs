import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import styles from "./index.module.css"

export default function Home() {
	return (
		<Layout
			title="TomatenKuchen Docs"
			description="Documentation of the all-in-one Discord bot TomatenKuchen">
			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">TomatenKuchen</h1>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/about">
							About
						</Link>
					</div>
				</div>
			</header>
		</Layout>
	)
}
