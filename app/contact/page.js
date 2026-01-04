export const metadata = {
    title: 'Contact | Openrize',
    description: 'Get in touch with us for your next project.',
};

export default function ContactPage() {
    return (
        <section className="container" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

                <div>
                    <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                        Let's Build Something
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                        Ready to start your digital construction? Reach out to us for a consultation, quote, or just a chat about technology.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Support Channels</h3>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>@</span>
                            support@openrize.com
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <span style={{ marginRight: '1rem', color: 'var(--accent-blue)' }}>#</span>
                            Live Chat Available 24/7
                        </p>
                    </div>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(139, 69, 19, 0.1)' }}>
                        <img src="/contact-tech.png" alt="Global Tech Communication" style={{ width: '100%', display: 'block' }} />
                    </div>
                </div>

                <form style={{
                    background: 'var(--bg-secondary)',
                    padding: '3rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                        <input type="text" style={{
                            width: '100%', padding: '1rem', background: 'var(--bg-primary)',
                            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white'
                        }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                        <input type="email" style={{
                            width: '100%', padding: '1rem', background: 'var(--bg-primary)',
                            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white'
                        }} />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                        <textarea rows="5" style={{
                            width: '100%', padding: '1rem', background: 'var(--bg-primary)',
                            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: 'white'
                        }}></textarea>
                    </div>
                    <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                </form>

            </div>
        </section>
    );
}
