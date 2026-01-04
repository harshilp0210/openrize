import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'Pricing | Openrize',
    description: 'Choose the right financial model for your software project.',
};

export default function PricingPage() {
    return (
        <>
            <PageHero
                title="Pricing Models"
                description="Businesses must choose between two primary financial structures when hiring developers."
                backgroundImage="/pricing-tech.png"
            />
            <section className="container" style={{ padding: '6rem 0' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Fixed Price Card */}
                    <div style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '20px',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent-blue)'
                        }}></div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Fixed-Price Model</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '60px' }}>
                            Best for simple, well-defined projects with strict budgets. It offers financial certainty but lacks flexibility for changes.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
                            {['Strict Budgets', 'Financial Certainty', 'Limited Flexibility', 'Well-defined Projects'].map(item => (
                                <li key={item} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                    <span style={{ color: 'var(--accent-blue)', marginRight: '1rem', fontWeight: 'bold' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn" style={{ width: '100%', textAlign: 'center' }}>Get a Quote</button>
                    </div>

                    {/* Hourly Rate Card */}
                    <div style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--accent-purple)',
                        borderRadius: '20px',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        boxShadow: '0 0 30px rgba(188, 19, 254, 0.1)'
                    }}>
                        <div style={{
                            position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(188, 19, 254, 0.2)',
                            color: 'var(--accent-purple)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold'
                        }}>Most Popular</div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hourly Rates</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '60px' }}>
                            Ideal for complex or innovative projects where requirements evolve. It provides high flexibility and transparency but carries budget uncertainty.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
                            {['Complex Projects', 'High Flexibility', 'Transparency', 'Budget Uncertainty'].map(item => (
                                <li key={item} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                    <span style={{ color: 'var(--accent-purple)', marginRight: '1rem', fontWeight: 'bold' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn" style={{ width: '100%', textAlign: 'center', background: 'var(--accent-purple)' }}>Detailed Rates</button>
                    </div>

                </div>
            </section>
        </>
    );
}
