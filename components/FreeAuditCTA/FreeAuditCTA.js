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
                    <h2 className="text-gradient">Ready to Transform Your Business Operations?</h2>

                    <p className={styles.intro}>Request a Free Demo Today and See How Openrize Can Help Your Business Grow.</p>

                    <ul className={styles.list}>
                        <li>📊 Real-time sales reporting</li>
                        <li>📦 Smart inventory management</li>
                        <li>💳 Secure payment processing</li>
                        <li>☁️ Cloud-based access from anywhere</li>
                    </ul>

                    <Link href="/demo" className={`btn ${styles.ctaButton}`}>
                        👉 Request Free Demo
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
