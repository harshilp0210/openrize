'use client';

import { useState } from 'react';
import styles from './ChatBot.module.css';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer Web Development, Digital Marketing, AI/ML Solutions, Generative AI, Mobile Apps, DevOps, and Team Augmentation. Which service interests you?",
        followUp: [
            { label: "Web Development", response: "Our web development includes enterprise solutions, custom e-commerce, bespoke development, and secure API/backend services. Contact us for a quote!" },
            { label: "AI & Machine Learning", response: "We specialize in predictive analytics, computer vision, NLP solutions, and custom LLMs. Let's discuss your AI project!" },
            { label: "Mobile Apps", response: "We build native iOS, Android, and cross-platform apps with React Native and Flutter. Ready to go mobile?" }
        ]
    },
    {
        question: "What are your pricing models?",
        answer: "We offer two pricing models: Fixed-Price (best for well-defined projects) and Hourly Rates (flexible for evolving projects). Which would you like to learn more about?",
        followUp: [
            { label: "Fixed-Price", response: "Fixed-price works best for projects with clear requirements and strict budgets. You'll know the total cost upfront. Contact us for a detailed quote!" },
            { label: "Hourly Rates", response: "Hourly rates provide flexibility for complex projects where requirements may evolve. Perfect for ongoing development. Let's discuss your needs!" }
        ]
    },
    {
        question: "How can I contact you?",
        answer: "You can reach us at openrize@gmail.com or use our contact form. We also offer 24/7 live chat support!",
        followUp: [
            { label: "Send Email", response: "Email us at openrize@gmail.com and we'll respond within 24 hours." },
            { label: "Go to Contact Form", response: "Visit our Contact page to send us a message directly through the form." }
        ]
    },
    {
        question: "What is your development process?",
        answer: "Our process includes: Discovery → Design → Development → Testing → Deployment → Support. We follow agile methodologies for maximum flexibility.",
        followUp: [
            { label: "Tell me more", response: "We start with understanding your requirements, create wireframes and designs, develop iteratively with regular demos, thoroughly test, deploy to production, and provide ongoing support." }
        ]
    },
    {
        question: "Do you offer support after launch?",
        answer: "Yes! We provide ongoing maintenance, bug fixes, feature updates, and 24/7 monitoring for all our projects. Peace of mind is included!",
        followUp: []
    }
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! 👋 I'm OpenBot. How can I help you today?" }
    ]);
    const [showOptions, setShowOptions] = useState(true);
    const [currentFollowUp, setCurrentFollowUp] = useState([]);

    const handleOptionClick = (faq) => {
        setMessages(prev => [
            ...prev,
            { type: 'user', text: faq.question },
            { type: 'bot', text: faq.answer }
        ]);
        setCurrentFollowUp(faq.followUp || []);
        setShowOptions(false);
    };

    const handleFollowUpClick = (followUp) => {
        setMessages(prev => [
            ...prev,
            { type: 'user', text: followUp.label },
            { type: 'bot', text: followUp.response }
        ]);
        setCurrentFollowUp([]);
    };

    const handleReset = () => {
        setShowOptions(true);
        setCurrentFollowUp([]);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                className={styles.floatingButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <div className={styles.headerInfo}>
                            <span className={styles.statusDot}></span>
                            <div>
                                <strong>OpenBot</strong>
                                <span className={styles.statusText}>Online 24/7</span>
                            </div>
                        </div>
                        <button onClick={handleClose} className={styles.closeBtn}>✕</button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((msg, i) => (
                            <div key={i} className={`${styles.message} ${styles[msg.type]}`}>
                                {msg.text}
                            </div>
                        ))}

                        {/* FAQ Options */}
                        {showOptions && (
                            <div className={styles.options}>
                                {faqs.map((faq, i) => (
                                    <button
                                        key={i}
                                        className={styles.optionBtn}
                                        onClick={() => handleOptionClick(faq)}
                                    >
                                        {faq.question}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Follow-up Options */}
                        {currentFollowUp.length > 0 && (
                            <div className={styles.options}>
                                {currentFollowUp.map((fu, i) => (
                                    <button
                                        key={i}
                                        className={styles.optionBtn}
                                        onClick={() => handleFollowUpClick(fu)}
                                    >
                                        {fu.label}
                                    </button>
                                ))}
                                <button
                                    className={styles.resetBtn}
                                    onClick={handleReset}
                                >
                                    ← Back to main menu
                                </button>
                            </div>
                        )}

                        {/* Show reset when no follow-ups */}
                        {!showOptions && currentFollowUp.length === 0 && (
                            <div className={styles.options}>
                                <button
                                    className={styles.resetBtn}
                                    onClick={handleReset}
                                >
                                    ← Ask another question
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
