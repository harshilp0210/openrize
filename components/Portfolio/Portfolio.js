'use client';

import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
    {
        title: "Matrix Visas",
        description: "A professional UK visa consultancy website with dynamic service pages, contact forms, and modern responsive design.",
        url: "https://www.matrixvisas007.com/",
        tags: ["Next.js", "Responsive Design", "Web Development"],
        image: "/portfolio-matrixvisas.png"
    }
];

const Portfolio = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className="text-gradient">Our Work</h2>
                    <p>Real projects delivered for real clients. Quality you can trust.</p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.imageWrapper}>
                                <div className={styles.placeholder}>
                                    <span>🌐</span>
                                    <span className={styles.liveTag}>Live Project</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.link}>
                                    Visit Site →
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
