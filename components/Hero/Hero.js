'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}></div>
            <div className={`container ${styles.content}`} style={{ position: 'relative', zIndex: 2 }}>

                {/* Globe - Left Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className={styles.globeWrapper}
                >
                    <div className={styles.globeInner}>
                        <img src="/contact-tech.png" alt="Global POS Network" className={styles.globeImage} />
                    </div>
                </motion.div>

                {/* Text Content - Right Side */}
                <div className={styles.textBlock}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={styles.badge}
                    >
                        Cloud-Based POS Solutions
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={styles.title}
                    >
                        Powerful POS Systems Built for <span className="text-gradient">Restaurants, Liquor Stores, and Retail Businesses</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className={styles.description}
                    >
                        Openrize delivers modern cloud-based POS software designed to automate operations, improve productivity, and help your business grow faster. Manage sales, inventory, and reporting from anywhere.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className={styles.actions}
                    >
                        <Link href="/demo" className="btn">
                            Request Free Demo
                        </Link>
                        <Link href="/contact" className={styles.secondaryLink}>
                            Contact Us &rarr;
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
