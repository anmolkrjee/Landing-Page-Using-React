
import styles from './CTA.module.css';

function CTA() {
	return (
		<section className={styles.cta} id="get-started">
			<h2>Ready to get started?</h2>
			<p>Join MyBrand today and take your web presence to the next level.</p>
			<a href="#contact" className={styles.ctaBtn}>Contact Us</a>
		</section>
	);
}

export default CTA;
