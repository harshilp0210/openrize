'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './FreeAuditCTA.module.css';

export default function FreeAuditCTA() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-gradient">Get a FREE Website & Google Review Audit</h2>

                    <p className={styles.intro}>In 10–15 minutes, we’ll show you:</p>

                    <ul className={styles.list}>
                        <li>🧐 What’s hurting your online visibility</li>
                        <li>📉 Where you’re losing customers</li>
                        <li>🚀 Quick fixes that can increase leads</li>
                    </ul>

                    <Link href="/audit" className={`btn ${styles.ctaButton}`}>
                        👉 Request Free Audit
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
