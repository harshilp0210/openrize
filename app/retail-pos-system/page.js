import Link from 'next/link';
import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'Retail POS System | POS Software for Retail Businesses | Openrize',
    description: 'Modern retail POS system designed to improve efficiency, automate sales, and manage inventory. Openrize cloud-based POS software.',
    keywords: ['retail POS system', 'retail point of sale', 'cloud POS for retail', 'retail management software', 'Openrize POS'],
    openGraph: {
        title: 'Retail POS System | Openrize',
        description: 'Modern retail POS system designed to improve efficiency, automate sales, and manage inventory.',
        url: 'https://openrize.com/retail-pos-system',
        siteName: 'Openrize',
    },
};

const features = [
    { icon: '📦', text: 'Inventory management' },
    { icon: '📊', text: 'Sales tracking' },
    { icon: '👥', text: 'Customer management' },
    { icon: '☁️', text: 'Cloud system' },
    { icon: '🔒', text: 'Secure transactions' },
];

export default function RetailPOSPage() {
    return (
        <>
            <PageHero
                title="Smart POS System for Retail Businesses"
                description="Openrize Retail POS System provides powerful tools to manage sales, inventory, and reporting efficiently."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 6rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>

                    {/* Description */}
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem' }}>
                        Openrize Retail POS System provides powerful tools to manage sales, inventory, and reporting efficiently.
                        Our cloud-based retail solution gives you real-time visibility into your business from any device, anywhere.
                    </p>

                    {/* Features */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }} className="text-gradient">Features</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {features.map((f, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                    <span style={{ fontSize: '1.25rem' }}>{f.icon}</span>
                                    {f.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Features Block */}
                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '1rem',
                        padding: '2rem',
                        marginBottom: '3rem'
                    }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Why Choose Openrize Retail POS?</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                            {['Cloud-based POS system', 'Real-time sales reporting', 'Inventory management', 'Secure payment processing', 'Multi-device compatibility', 'User-friendly interface'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-blue)' }}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                        <Link href="/demo" className="btn">Request Demo</Link>
                        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--accent-blue)', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
