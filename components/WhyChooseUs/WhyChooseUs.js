'use client';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const reasons = [
    "Local-business focused",
    "Real working systems (not theory)",
    "Affordable pricing",
    "Ongoing support"
];

export default function WhyChooseUs() {
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
                        Why Businesses Choose Openrize
                    </motion.h2>

                    <div className={styles.listWrapper}>
                        <ul className={styles.list}>
                            {reasons.map((reason, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className={styles.check}>✅</span>
                                    {reason}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        We don’t just build websites — we build systems that bring customers.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
