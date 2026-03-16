'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LeadCapture.module.css';

export default function LeadCapture() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasFired, setHasFired] = useState(false);

    useEffect(() => {
        // Trigger on exit intent (mouse leaving window)
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasFired) {
                setIsVisible(true);
                setHasFired(true);
            }
        };

        // Fallback: Trigger after 15 seconds if exit intent not triggered
        const timer = setTimeout(() => {
            if (!hasFired) {
                setIsVisible(true);
                setHasFired(true);
            }
        }, 15000);

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasFired]);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className={styles.overlay} onClick={closePopup}>
                    <motion.div
                        className={styles.popup}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className={styles.closeBtn} onClick={closePopup} aria-label="Close">
                            ×
                        </button>
                        
                        <div className={styles.content}>
                            <h2 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
                                Don’t leave without a free growth checklist!
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                Find out exactly where you're losing customers. Book your Free Audit today to get a customized roadmap for your business.
                            </p>
                            
                            <form className={styles.form} onSubmit={(e) => {
                                e.preventDefault();
                                // Just a visual mock for now
                                alert('Thanks! We will contact you shortly.');
                                closePopup();
                            }}>
                                <input type="email" placeholder="Enter your best email..." className={styles.input} required />
                                <button type="submit" className={`btn ${styles.submitBtn}`}>Get My Free Audit</button>
                            </form>
                            
                            <p className={styles.disclaimer}>No credit card required. Fast and easy setup.</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
