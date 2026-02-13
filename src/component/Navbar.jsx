
import styles from './Navbar.module.css';


function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>MyBrand</div>
			<ul className={styles.navLinks}>
				<li><a href="#home">Home</a></li>
				<li><a href="#features">Features</a></li>
				<li><a href="#pricing">Pricing</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<a href="#get-started" className={styles.ctaBtn}>Get Started</a>
		</nav>
	);
}

export default Navbar;

