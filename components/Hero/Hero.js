'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const services = [
    { icon: '🧾', title: 'Point of Sale Software', desc: 'Fast, reliable POS built for your business type.' },
    { icon: '📦', title: 'Inventory Management', desc: 'Track stock in real-time, reduce shrinkage.' },
    { icon: '📊', title: 'Sales Analytics', desc: 'Actionable reports to fuel smarter decisions.' },
    { icon: '🤝', title: 'Customer Loyalty', desc: 'Reward programs that keep customers coming back.' },
];

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}></div>
            <div className={`container ${styles.content}`} style={{ position: 'relative', zIndex: 2 }}>

                {/* Left — Software Services */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className={styles.servicesBlock}
                >
                    <p className={styles.servicesEyebrow}>What We Do</p>
                    <h2 className={styles.servicesHeading}>
                        Software Built to <span className="text-gradient">Grow Small Businesses</span>
                    </h2>
                    <p className={styles.servicesSubtext}>
                        We help independent retailers, restaurants, and liquor stores compete with enterprise tech — at a fraction of the cost.
                    </p>
                    <ul className={styles.servicesList}>
                        {services.map((svc, i) => (
                            <motion.li
                                key={svc.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                                className={styles.serviceItem}
                            >
                                <span className={styles.serviceIcon}>{svc.icon}</span>
                                <div>
                                    <strong className={styles.serviceTitle}>{svc.title}</strong>
                                    <p className={styles.serviceDesc}>{svc.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Center — Globe */}
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

                {/* Right — Existing POS Content */}
                <div className={styles.textBlock}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={styles.badge}
                    >
                        Cloud-Based POS Solutions
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className={styles.title}
                    >
                        Powerful POS Systems Built for <span className="text-gradient">Restaurants, Liquor Stores, and Retail Businesses</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className={styles.description}
                    >
                        Openrize delivers modern cloud-based POS software designed to automate operations, improve productivity, and help your business grow faster. Manage sales, inventory, and reporting from anywhere.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
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
