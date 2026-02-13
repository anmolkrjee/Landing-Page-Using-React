
import styles from './Hero.module.css';


function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1>Build Modern Web Apps Faster</h1>
				<p>Create stunning web experiences with clean design, powerful components and modern architecture.</p>
				<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
					<a href="#get-started" className={styles.ctaBtn}>Start Free</a>
					<a href="#features" className={styles.ctaBtn} style={{ background: '#6a82fb', color: '#fff' }}>Learn More</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;


