'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './HowItWorks.module.css';

const steps = [
    {
        number: "01",
        title: "Book a Free Audit",
        desc: "We analyze your current website, systems, and online reputation to find hidden opportunities."
    },
    {
        number: "02",
        title: "Get a Custom Plan",
        desc: "We provide tailored solutions for growth, mapping out exactly what you need to attract more customers."
    },
    {
        number: "03",
        title: "See Results",
        desc: "Sit back as our systems bring in more leads, reviews, and revenue effortlessly."
    }
];

export default function HowItWorks() {
    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        className="text-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Three simple steps to level up your business operations.
                    </motion.p>
                </div>

                <div className={styles.stepsContainer}>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + idx * 0.15 }}
                        >
                            <div className={styles.cardNumber}>{step.number}</div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDesc}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <Link href="#audit" className={`btn ${styles.ctaButton}`}>
                        Get Your Free Audit Today
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
