'use client';

import { motion } from 'framer-motion';
import styles from './ServiceHighlights.module.css';
import AnimatedSection from '../AnimatedSection';
import Link from 'next/link';

const services = [
    {
        title: 'Restaurant POS System',
        icon: '🍽️',
        desc: 'Streamline orders, manage tables, process payments, and track sales in real time with our advanced restaurant POS system.',
        link: '/restaurant-pos-system'
    },
    {
        title: 'Liquor Store POS System',
        icon: '🍾',
        desc: 'Track inventory, manage compliance, scan barcodes, and monitor sales efficiently with a POS built specifically for liquor stores.',
        link: '/liquor-store-pos-system'
    },
    {
        title: 'Retail POS System',
        icon: '🛍️',
        desc: 'Complete retail automation with inventory tracking, sales monitoring, and customer management tools.',
        link: '/retail-pos-system'
    },
    {
        title: 'Custom Website Development',
        icon: '🌐',
        desc: 'We build modern, fast, and secure websites designed to convert visitors into customers and grow your business online.',
        link: '/services'
    }
];

export default function ServiceHighlights() {
    return (
        <section className={styles.section}>
            <div className="container">
                <AnimatedSection>
                    <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Our Solutions
                    </h2>

                    <div className={styles.grid}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(139, 69, 19, 0.15)' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className={styles.icon}>{service.icon}</div>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.desc}>{service.desc}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <Link href={service.link} className={styles.link}>
                                        Learn More →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
