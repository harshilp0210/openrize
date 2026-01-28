'use client';

import { motion } from 'framer-motion';
import styles from './ServiceHighlights.module.css';
import AnimatedSection from '../AnimatedSection';
import Link from 'next/link';

const services = [
    {
        title: 'Website Development',
        icon: '🌐',
        desc: 'Mobile-friendly, fast websites. Designed to convert visitors into customers.',
        link: '/services#web-development'
    },
    {
        title: 'Google Review Management',
        icon: '⭐',
        desc: 'Automated review requests. Improve Google rankings & trust.',
        link: '/services#digital-marketing'
    },
    {
        title: 'POS Systems',
        icon: '💳',
        desc: 'Fast checkout. Inventory & sales tracking. Perfect for restaurants & retail.',
        link: '/services#pos'
    }
];

export default function ServiceHighlights() {
    return (
        <section className={styles.section}>
            <div className="container">
                <AnimatedSection>
                    <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Everything You Need to Grow Your Business Online
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
                                    <Link href="/audit" className={styles.link}>
                                        👉 Get Free Audit
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
