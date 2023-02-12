import styles from '../styles/Home.module.css';

export default function() {
	return (
		<div className={styles.container}>

		<main>
			<h1 className={styles.title}>
				Welcome to <a href="https://nextjs.org">Next.js!</a>
			</h1>

			<p className={styles.description}>
				Get started by editing <code>pages/index.js</code>
			</p>

			<div className={styles.grid}>
				<a href="https://nextjs.org/docs" className={styles.card}>
					<h3>Documentation &rarr;</h3>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a href="https://nextjs.org/learn" className={styles.card}>
					<h3>Learn &rarr;</h3>
					<p>Learn about Next.js in an interactive course with quizzes!</p>
				</a>
			</div>
		</main>

		<style jsx>{`
			main {
				padding: 5rem 0;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			code {
				background: #fafafa;
				border-radius: 5px;
				padding: 0.75rem;
				font-size: 1.1rem;
				font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
					DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
			}
		`}</style>
		</div>
	)
}
