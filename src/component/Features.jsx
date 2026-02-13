
import styles from './Features.module.css';

function Features() {
	return (
		<section className={styles.features} id="features">
			<h2>Features</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<h3>Fast Performance</h3>
					<p>Optimized for performance and scalability.</p>
				</div>
				<div className={styles.card}>
					<h3>Modern Design</h3>
					<p>Beautiful UI built with clean architecture.</p>
				</div>
				<div className={styles.card}>
					<h3>Easy Integration</h3>
					<p>Seamlessly connect with your favorite tools and platforms.</p>
				</div>
			</div>
		</section>
	);
}

export default Features;
