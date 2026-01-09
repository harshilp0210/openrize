'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Openrize Logo"
                        width={280}
                        height={70}
                        priority
                        style={{ width: 'auto', height: '70px', objectFit: 'contain' }}
                    />
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation */}
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/services" className={styles.navLink} onClick={closeMenu}>Services</Link>
                    <Link href="/pricing" className={styles.navLink} onClick={closeMenu}>Pricing</Link>
                    <Link href="/about" className={styles.navLink} onClick={closeMenu}>About</Link>
                    <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
