'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}></div>
            <div className={`container ${styles.content}`} style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.badge}
                >
                    IT Web Development Services
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className={styles.title}
                >
                    Helping Local Businesses Get More Customers with <span className="text-gradient">Better Websites, Reviews & POS Systems</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className={styles.description}
                >
                    Openrize helps restaurants, retail stores, and service businesses grow with modern websites, Google review automation, and fast POS solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className={styles.actions}
                >
                    <Link href="/audit" className="btn">
                        Get a Free Audit
                    </Link>
                    <Link href="/contact" className={styles.secondaryLink}>
                        Book a Free Demo &rarr;
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
                className={styles.visual}
            >
                {/* Abstract 3D House/Grid Representation */}
                <div className={styles.cube}>
                    <div className={`${styles.face} ${styles.front}`}></div>
                    <div className={`${styles.face} ${styles.back}`}></div>
                    <div className={`${styles.face} ${styles.right}`}></div>
                    <div className={`${styles.face} ${styles.left}`}></div>
                    <div className={`${styles.face} ${styles.top}`}></div>
                    <div className={`${styles.face} ${styles.bottom}`}></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
