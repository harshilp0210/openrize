'use client';

import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
    {
        title: "GlobalBridge Trade",
        description: "Provides reliable import, export, and sourcing services for businesses worldwide to connect global markets with trusted trade solutions.",
        url: "https://globalbridge-7hwx.vercel.app/",
        tags: ["Import/Export", "Global Sourcing", "B2B Trade"],
        image: "/portfolio-globalbridge.png"
    },
    {
        title: "Ethnic Elegance",
        description: "Exquisite collection of India's traditional Lehenga Cholis, Ghagras, and accessories for festive celebrations and weddings.",
        url: "https://ethnicelegance-5nf5.vercel.app/",
        tags: ["Ethnic Wear", "E-commerce", "Festive Fashion"],
        image: "/portfolio-ethnic.png"
    },
    {
        title: "VaporLuxe AI",
        description: "A premium destination for cutting-edge vaporizers and artisan accessories, offering a refined collection for an elevated experience.",
        url: "https://www.vaporluxe.ai/",
        tags: ["AI", "E-commerce", "SaaS"],
        image: "/portfolio-vaporluxe.png"
    },
    {
        title: "Review Management System",
        description: "A comprehensive review management platform helping businesses aggregate, monitor, and respond to customer feedback.",
        url: "https://reviewmanagment.app/",
        tags: ["Next.js", "SaaS", "Reputation"],
        image: "/portfolio-aura.png",
        featured: true
    },
    {
        title: "Matrix Visas",
        description: "A professional UK visa consultancy website with dynamic service pages, contact forms, and modern responsive design.",
        url: "https://www.matrixvisas007.com/",
        tags: ["Next.js", "Responsive Design", "Web Development"],
        image: "/portfolio-matrixvisas.png"
    },
    {
        title: "Foodies Choice POS",
        description: "A modern Point of Sale system for restaurants, featuring inventory management, order processing, and real-time sales tracking.",
        url: "https://foodies-choice-pos-cbng.vercel.app/",
        tags: ["Next.js", "POS", "Retails"],
        image: "/portfolio-foodies.png"
    },
    {
        title: "Pleasure Nest",
        description: "An ultra-seductive sanctuary for the bold, offering a premier collection of luxury adult wellness, fetish, and intimate accessories for a sophisticated journey into pleasure.",
        url: "https://pleasure-nest.vercel.app/",
        tags: ["E-commerce", "Wellness", "Adult Boutique"],
        image: "/portfolio-pleasure.png"
    },
    {
        title: "CocoaJoy",
        description: "Premium handcrafted chocolates and truffles designed to bring the sweet joy of pure indulgence to every chocolate lover.",
        url: "https://cocoajoy.vercel.app/",
        tags: ["Handcrafted", "E-commerce", "Gifts"],
        image: "/portfolio-cocoajoy.png"
    },
    {
        title: "PlayJoy Toys",
        description: "Award-winning online kids' toy store offering a curated collection of safe, durable, and imaginative toys for all ages.",
        url: "https://playjoytoys.vercel.app/",
        tags: ["Toys", "E-commerce", "Educational"],
        image: "/portfolio-playjoy.png"
    },
    {
        title: "Eagle Crest",
        description: "Curated journeys to the world's most breathtaking destinations, offering extraordinary travel experiences and personalized packages.",
        url: "https://eaglecrest-flax.vercel.app/",
        tags: ["Travel", "Luxury", "Destinations"],
        image: "/portfolio-eaglecrest.png"
    },
    {
        title: "ShantiRoots",
        description: "ShantiRoots provides authentic Ayurvedic self-care solutions, featuring a curated selection of herbal wellness, skincare, and relaxation products for holistic well-being.",
        url: "https://shantiroots.vercel.app/",
        tags: ["Ayurveda", "Wellness", "Skincare", "Herbal"],
        image: "/shantiroots.png"
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
                            className={`${styles.card} ${project.featured ? styles.featuredCard : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div 
                                className={styles.cardBg} 
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className={styles.overlay} />

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
