import styles from './contact.module.css';

export const metadata = {
    title: 'Contact | Openrize',
    description: 'Get in touch with us for your next project.',
};

export default function ContactPage() {
    return (
        <section className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
            <div className={styles.grid}>

                <div>
                    <h1 className={`text-gradient ${styles.title}`}>
                        Let's Build Something
                    </h1>
                    <p className={styles.description}>
                        Ready to start your digital construction? Reach out to us for a consultation, quote, or just a chat about technology.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Support Channels</h3>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>@</span>
                            openrize@gmail.com
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>#</span>
                            Live Chat Available 24/7
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="/contact-tech.png" alt="Global Tech Communication" />
                    </div>
                </div>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label>Name</label>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Message</label>
                        <textarea rows="5" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                </form>

            </div>
        </section>
    );
}
