import PageHero from '../../components/PageHero/PageHero';
import styles from './about.module.css';

export const metadata = {
    title: 'About Openrize | Premium Digital Growth Partner',
    description: 'Openrize is a digital growth partner for businesses that want to look premium, operate smarter, and scale faster. We combine design, development, and AI.',
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About Openrize"
                description="Openrize is a digital growth partner for businesses that want to look premium, operate smarter, and scale faster."
                backgroundImage="/about-tech-office.png"
            />
            <section className="container" style={{ padding: '6rem 0' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    
                    <div style={{ marginBottom: '6rem' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            We combine modern design, high-performance development, AI automation, and growth strategy to build digital experiences that do more than “look good.” Our work is designed to earn trust, convert visitors, and drive measurable results—from more leads and bookings to stronger brand presence.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div>
                            <h3 className={styles.sectionTitle}>What We Build</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                We deliver end-to-end solutions tailored to your business goals:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>High-Performance Websites</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}>Modern, mobile-first websites built for speed, clarity, and conversion.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Custom Web Applications</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}>Purpose-built systems that streamline operations, reduce manual work, and improve customer experience.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>AI & Automation</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}>Smarter workflows, follow-ups, and systems that help your business run efficiently.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Digital Marketing & Growth Support</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}>Strategy + execution to increase visibility, generate leads, and improve customer acquisition.</span>
                                </li>
                                <li>
                                    <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Review & Reputation Management</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}>Tools and processes to strengthen trust and elevate your online presence.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.sectionTitle}>Our Approach</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                We keep the process clear and professional:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary)' }}>
                                    <strong style={{ color: 'var(--text-primary)' }}>Understand</strong> your business and what success looks like
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary)' }}>
                                    <strong style={{ color: 'var(--text-primary)' }}>Design with intention</strong> — premium, modern, and user-focused
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary)' }}>
                                    <strong style={{ color: 'var(--text-primary)' }}>Build for performance</strong> — fast, scalable, and reliable
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary)' }}>
                                    <strong style={{ color: 'var(--text-primary)' }}>Optimize for growth</strong> — conversion, trust, and long-term results
                                </li>
                            </ul>

                            <div style={{ marginTop: '4rem' }}>
                                <h3 className={styles.sectionTitle}>Why Openrize</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    <strong>Because details matter.</strong>
                                </p>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    A strong brand is built through small things done exceptionally well: speed, clarity, credibility, and consistency.
                                </p>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    We help you close the gap between an ordinary online presence and a professional brand experience that customers trust.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '6rem', textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let’s Work Together</h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            If you’re ready to upgrade your business with a premium digital presence and a growth-focused system, we’d love to help.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="mailto:openrize@gmail.com" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                📩 openrize@gmail.com
                            </a>
                            <a href="https://www.openrize.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                🌐 www.openrize.com
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
