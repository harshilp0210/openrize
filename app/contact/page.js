import styles from './contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Openrize | POS System Support & Sales',
    description: 'Get in touch with us to learn how Openrize POS system can help your business improve productivity and efficiency. Email: info@openrize.com',
};

export default function ContactPage() {
    return (
        <section className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
            <div className={styles.grid}>

                <div>
                    <h1 className={`text-gradient ${styles.title}`}>
                        Contact Openrize
                    </h1>
                    <p className={styles.description}>
                        Get in touch with us to learn how Openrize POS system can help your business improve productivity and efficiency.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Support Channels</h3>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>@</span>
                            info@openrize.com
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>🌐</span>
                            www.openrize.com
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>#</span>
                            Live Chat Available 24/7
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <Link href="/demo" className="btn">Request Demo</Link>
                    </div>

                    {/* Rotating Earth Globe */}
                    <div className={styles.globeWrapper}>
                        <div className={styles.globeInner}>
                            <img src="/contact-tech.png" alt="Global Tech Communication" className={styles.globeImage} />
                        </div>
                    </div>
                </div>

                <ContactForm />

            </div>
        </section>
    );
}
