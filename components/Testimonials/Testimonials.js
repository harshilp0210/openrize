'use client';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import Image from 'next/image';

const testimonials = [
    {
        name: "Sarah Jenkins",
        business: "The Local Roast",
        type: "Coffee Shop",
        result: "+40% leads in 3 months",
        quote: "Openrize completely transformed how we handle online orders and reviews. Our website is actually bringing in new customers daily now.",
        photo: "/contact-tech.png" // Placeholder
    },
    {
        name: "Marcus Thorne",
        business: "Thorne & Co. Retail",
        type: "Boutique Retail",
        result: "+30 Google reviews in 60 days",
        quote: "The automated review system is a game-changer. We climbed to the top of local search results without touching a thing.",
        photo: "/contact-tech.png" // Placeholder
    },
    {
        name: "Elena Rodriguez",
        business: "Bella Salon",
        type: "Beauty & Spa",
        result: "Saved 15 hours/week",
        quote: "Having our scheduling, POS, and website all managed in one place by Openrize has saved me from dealing with endless tech headaches.",
        photo: "/contact-tech.png" // Placeholder
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonials">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <motion.h2
                        className="text-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Real Results from Local Businesses
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Don’t just take our word for it. See how we’re helping businesses grow.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                        >
                            <div className={styles.cardTop}>
                                <div className={styles.imagePlaceholder}>
                                    <Image src={test.photo} alt={test.name} width={60} height={60} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.meta}>
                                    <h4 className={styles.name}>{test.name}</h4>
                                    <p className={styles.business}>{test.business} <span className={styles.type}>({test.type})</span></p>
                                </div>
                            </div>
                            <p className={styles.quote}>"{test.quote}"</p>
                            <div className={styles.resultBadge}>
                                {test.result}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
