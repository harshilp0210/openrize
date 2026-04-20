'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';
import Link from 'next/link';

const faqData = [
    {
        question: "What kind of businesses does Openrize work with?",
        answer: "We work with restaurants, retail stores, cafes, liquor stores, and service businesses. Our systems are tailored to the unique needs of local commerce."
    },
    {
        question: "Do I need technical knowledge to use Openrize?",
        answer: "No. We design everything to be simple for owners and staff, and we provide ongoing support and training to ensure you are comfortable with the tools."
    },
    {
        question: "Can you replace my current POS system?",
        answer: "Yes. We can help migrate from your existing setup, transfer your data where possible, and train your team on the new, more efficient workflow."
    },
    {
        question: "How long does setup usually take?",
        answer: "Timelines depend on your business complexity, but we provide a clear launch plan upfront. Most standard setups are completed within a few weeks."
    },
    {
        question: "Can Openrize help me get more Google reviews?",
        answer: "Yes. We set up automated review workflows that help you collect more quality reviews consistently from your happy customers."
    },
    {
        question: "Do you only provide software, or also strategy?",
        answer: "Both. We provide top-tier tools plus practical growth guidance focused on measurable results like revenue and customer retention."
    },
    {
        question: "Can I choose only specific services (like POS or website)?",
        answer: "Yes. Our solutions are modular. You can start with one primary service and scale your digital ecosystem as your business grows."
    },
    {
        question: "What support do you offer after launch?",
        answer: "We provide ongoing technical support, system optimization, and performance guidance to ensure your business continues to thrive."
    },
    {
        question: "Will Openrize help improve repeat customers?",
        answer: "Yes. Our loyalty and engagement features are specifically built to increase repeat visits and build long-term customer relationships."
    },
    {
        question: "How do I get started?",
        answer: "Book a free audit or demo, and we’ll perform a deep dive into your current operations to recommend the best next step for your business."
    }
];

const FAQItem = ({ item, index, isOpen, toggle }) => {
    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}>
            <button
                className={styles.questionButton}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                {item.question}
                <span className={styles.icon}>+</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className={styles.answer}>
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.section} id="faq-content">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Common Questions</h2>
                    <p className={styles.intro}>
                        Everything you need to know about how Openrize helps local businesses excel. 
                        Can't find the answer you're looking for? Reach out to our team.
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            item={item}
                            isOpen={openIndex === index}
                            toggle={toggle}
                        />
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <h3 className="text-gradient">Ready to Elevate Your Business?</h3>
                    <p>Stop managing tech and start managing growth. Get a free audit today.</p>
                    <Link href="#audit" className="btn">
                        Book Your Free Audit
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
