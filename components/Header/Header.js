import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Openrize
                </Link>
                <nav className={styles.nav}>
                    <Link href="/services" className={styles.navLink}>Services</Link>
                    <Link href="/pricing" className={styles.navLink}>Pricing</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
