'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './audit.module.css';

const businessTypes = [
    'Restaurant / Cafe',
    'Retail Store',
    'Salon / Spa',
    'Medical / Clinic',
    'Service Business',
    'Other'
];

export default function AuditPage() {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setResult('Sending...');

        const formData = new FormData(e.target);
        formData.append('access_key', 'db435dff-63af-4161-95cd-deaa6f1a91e9');
        formData.append('subject', '🎯 New FREE Audit Request from Openrize');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setResult('');
                e.target.reset();
            } else {
                setStatus('error');
                setResult(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setResult('An error occurred. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <section className={`container ${styles.auditPage}`}>
                <motion.div
                    className={styles.hero}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <h1 className={`text-gradient ${styles.title}`}>🎉 Audit Request Received!</h1>
                    <p className={styles.subtitle}>
                        Thank you! We'll analyze your online presence and send you a detailed report within 24-48 hours.
                    </p>
                </motion.div>
            </section>
        );
    }

    return (
        <section className={`container ${styles.auditPage}`}>
            <motion.div
                className={styles.hero}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className={`text-gradient ${styles.title}`}>Get Your FREE Website & Review Audit</h1>
                <p className={styles.subtitle}>
                    Find out what's holding your business back online. We'll analyze your website, Google presence, and reviews — completely free.
                </p>
            </motion.div>

            <div className={styles.grid}>
                <motion.div
                    className={styles.benefits}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2>What You'll Get:</h2>
                    <ul className={styles.benefitsList}>
                        <li>
                            <span>🔍</span>
                            <div><strong>Website Speed Analysis</strong><br />How fast your site loads on mobile & desktop</div>
                        </li>
                        <li>
                            <span>📊</span>
                            <div><strong>Google Ranking Check</strong><br />Where you show up when customers search</div>
                        </li>
                        <li>
                            <span>⭐</span>
                            <div><strong>Review Score Assessment</strong><br />Your reputation across Google, Yelp, etc.</div>
                        </li>
                        <li>
                            <span>📱</span>
                            <div><strong>Mobile Friendliness Test</strong><br />Does your site work well on phones?</div>
                        </li>
                        <li>
                            <span>🚀</span>
                            <div><strong>Quick Win Recommendations</strong><br />Easy fixes that can bring more customers</div>
                        </li>
                    </ul>
                    <div className={styles.delivery}>
                        <p>📬 Results delivered in 24-48 hours</p>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2>Request Your Free Audit</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input type="hidden" name="from_name" value="Openrize Audit Request" />

                        <div className={styles.inputGroup}>
                            <label htmlFor="businessName">Business Name *</label>
                            <input
                                type="text"
                                id="businessName"
                                name="business_name"
                                placeholder="e.g. Joe's Pizza"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="websiteUrl">Website URL</label>
                            <input
                                type="url"
                                id="websiteUrl"
                                name="website_url"
                                placeholder="e.g. https://joespizza.com"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="(555) 123-4567"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="businessType">Business Type *</label>
                            <select
                                id="businessType"
                                name="business_type"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>Select your business type</option>
                                {businessTypes.map((type, i) => (
                                    <option key={i} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : '👉 Get My Free Audit'}
                        </button>

                        {status === 'error' && (
                            <div style={{ marginTop: '1rem', textAlign: 'center', color: 'red' }}>
                                {result}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
