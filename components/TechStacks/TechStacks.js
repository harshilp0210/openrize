'use client';

import styles from './TechStacks.module.css';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const stacks = [
    { name: 'MEAN', desc: 'Ideal for Single-Page Applications (SPAs); uses JavaScript throughout the entire stack for consistency.', type: 'SPA Ideal' },
    { name: 'MERN', desc: 'A popular variation of MEAN that swaps Angular for React to create dynamic front-end experiences.', type: 'React Dynamic' },
    { name: 'LAMP', desc: 'A mature, open-source stack known for stability, frequently used for Content Management Systems (CMS) like WordPress.', type: 'Mature & Stable' },
    { name: 'Django', desc: 'Noted for high security and rapid development via its "batteries-included" approach, best for data-driven applications.', type: 'Secure & Rapid' },
    { name: 'PERN', desc: 'Uses a powerful SQL-based database (PostgreSQL) suited for complex queries and data integrity.', type: 'Data Integrity' },
    { name: 'Serverless', desc: 'Eliminates server management and scales automatically; users only pay for the compute time consumed.', type: 'Auto Scaling' },
    { name: 'Ruby on Rails', desc: 'Focuses on "convention over configuration," making it excellent for startups and rapid prototyping (MVPs).', type: 'MVP Focused' },
];

const TechStacks = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <AnimatedSection>
                    <h2 className={`text-gradient ${styles.heading}`}>Top Tech Stacks for 2026</h2>
                    <p className={styles.subheading}>
                        Selecting the right foundation is critical for performance and maintainability.
                    </p>
                    <div className={styles.grid}>
                        {stacks.map((stack, index) => (
                            <motion.div
                                key={stack.name}
                                className={styles.card}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.type}>{stack.type}</div>
                                <h3 className={styles.name}>{stack.name}</h3>
                                <p className={styles.desc}>{stack.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default TechStacks;
