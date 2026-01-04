'use client';

import { motion } from 'framer-motion';
import styles from './PageHero.module.css';

const PageHero = ({ title, description, backgroundImage }) => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.overlay}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.content}
                >
                    <h1 className={styles.title}>{title}</h1>
                    {description && <p className={styles.description}>{description}</p>}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
