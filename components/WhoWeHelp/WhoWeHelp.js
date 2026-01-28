'use client';
import { motion } from 'framer-motion';
import styles from './WhoWeHelp.module.css';

const industries = [
    { title: 'Restaurants & Cafes', icon: '🍽️' },
    { title: 'Retail Stores', icon: '🛍️' },
    { title: 'Salons & Clinics', icon: '💇' },
    { title: 'Service Businesses', icon: '🏢' },
];

export default function WhoWeHelp() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <motion.h2
                        className="text-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Built for Local Businesses Like Yours
                    </motion.h2>

                    <div className={styles.grid}>
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className={styles.icon}>{item.icon}</span>
                                <h3>{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        If customers search for you on Google, we help you win that search.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
