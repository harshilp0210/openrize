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
                        <span className="text-gradient">Get More Customers, Reviews, and Revenue</span> — Without the Tech Headache
                    </h2>
                    <p className={styles.servicesSubtext}>
                        Openrize helps local businesses build websites, manage reviews, and run smart systems that grow your business — effortlessly.
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

                {/* Center — Visual Device Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    className={styles.globeWrapper}
                >
                    <div className={styles.globeInner}>
                        {/* Placeholder: Add a modern image of a local business (restaurant, salon, retail) with digital devices or charts */}
                        <img src="/contact-tech.png" alt="Local Business Growth Solutions" className={styles.globeImage} style={{ borderRadius: '12px' }} />
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
                        Growth Solutions for Local Business
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className={styles.title}
                    >
                        Powerful Systems Built for <span className="text-gradient">Restaurants, Retail, and Service Businesses</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className={styles.description}
                    >
                        Openrize delivers modern solutions designed to automate operations, improve your online reputation, and help your business attract more customers. Manage websites, reviews, and POS from one trusted partner.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                        className={styles.actions}
                    >
                        <Link href="#audit" className="btn">
                            Book Your Free Audit
                        </Link>
                        <Link href="#how-it-works" className={styles.secondaryLink}>
                            See How It Works &rarr;
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
