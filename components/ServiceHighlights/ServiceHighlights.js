'use client';

import { motion } from 'framer-motion';
import styles from './ServiceHighlights.module.css';
import AnimatedSection from '../AnimatedSection';
import Link from 'next/link';

const services = [
    {
        title: 'Web Expertise',
        icon: '🌐',
        desc: 'Architecting scalable, future-proof web ecosystems tailored to your enterprise DNA.',
        link: '/services#web-development'
    },
    {
        title: 'Digital Growth',
        icon: '🚀',
        desc: 'Data-driven marketing strategies that amplify your brand voice and accelerate market penetration.',
        link: '/services#digital-marketing'
    },
    {
        title: 'AI & ML Solutions',
        icon: '🧠',
        desc: 'Harnessing the power of predictive intelligence to drive automation and strategic advantage.',
        link: '/services#ai-ml'
    },
    {
        title: 'Generative AI',
        icon: '✨',
        desc: 'Next-generation creativity and automation. Custom LLMs and synthetic data pipelines.',
        link: '/services#generative-ai'
    },
    {
        title: 'Mobile Innovation',
        icon: '📱',
        desc: 'Native and cross-platform mobile experiences that capture engagement on every device.',
        link: '/services#mobile-app'
    },
    {
        title: 'Brand Identity',
        icon: '💎',
        desc: 'Crafting resonant corporate identities that command authority and trust in the digital marketplace.',
        link: '/services#brand-development'
    },
    {
        title: 'DevOps Engineering',
        icon: '⚙️',
        desc: 'Streamlining operations with robust CI/CD pipelines, cloud integration, and automated quality assurance.',
        link: '/services#devops'
    },
    {
        title: 'Team Augmentation',
        icon: '👥',
        desc: 'Injecting elite technical talent into your workflow for rapid scaling and specialized expertise.',
        link: '/services#augmentation'
    }
];

export default function ServiceHighlights() {
    return (
        <section className={styles.section}>
            <div className="container">
                <AnimatedSection>
                    <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Core Solutions
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '700px', marginInline: 'auto' }}>
                        Transforming businesses with tailored digital solutions. From bespoke software to strategic marketing, we architect growth in the digital realm.
                    </p>

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
                                <Link href={service.link} className={styles.link}>
                                    Explore &rarr;
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
