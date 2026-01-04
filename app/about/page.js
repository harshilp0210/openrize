import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'About Us | Openrize',
    description: 'Learn about our team, history, and core values.',
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About Openrize"
                description="We are a collective of elite engineers and strategists dedicated to transforming businesses. Our client-centric approach ensures personalized solutions that align perfectly with your strategic goals."
                backgroundImage="/about-tech-office.png"
            />
            <section className="container" style={{ padding: '6rem 0' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '6rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our History</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Starting as a small collective of freelance developers, we grew into a full-service agency
                                by consistently delivering high-quality code and exceptional user experiences. Today, we partner
                                with startups and enterprises worldwide.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Core Values</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Innovation:</strong> Constantly exploring new horizons.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Integrity:</strong> Honest code, transparent processes.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Excellence:</strong> Never settling for "good enough".</li>
                                <li><strong>Collaboration:</strong> Building together, winning together.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
