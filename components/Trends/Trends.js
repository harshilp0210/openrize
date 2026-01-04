'use client';

import styles from './Trends.module.css';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const trends = [
    {
        title: 'AI + No-Code',
        desc: 'Tools like Webflow combined with AI allow for faster builds and lower costs.',
        size: 'large'
    },
    {
        title: 'Progressive Web Apps',
        desc: 'Offline support, push notifications, and "add to home screen" provide an app-like experience.',
        size: 'medium'
    },
    {
        title: 'Sustainability',
        desc: 'Prioritizing lean sites that reduce carbon footprints and adhere to accessible standards.',
        size: 'small'
    },
    {
        title: 'Interactive Experiences',
        desc: '3D, AR for product previews, and AI-driven voice/chat interfaces.',
        size: 'medium'
    },
    {
        title: 'Personalization',
        desc: 'Using data to swap content based on location, history, or behaviour.',
        size: 'large'
    },
];

const Trends = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <AnimatedSection>
                    <h2 className={`text-gradient ${styles.heading}`}>Emerging Web Development Trends</h2>
                    <div className={styles.grid}>
                        {trends.map((trend, i) => (
                            <motion.div
                                key={i}
                                className={`${styles.card} ${styles[trend.size]}`}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <h3 className={styles.title}>{trend.title}</h3>
                                <p className={styles.desc}>{trend.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Trends;
