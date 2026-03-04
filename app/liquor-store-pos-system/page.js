import Link from 'next/link';
import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'Liquor Store POS System | POS Software for Alcohol Retail | Openrize',
    description: 'Efficient POS system for liquor stores. Manage inventory, track sales, and automate operations with Openrize cloud POS software.',
    keywords: ['liquor store POS system', 'alcohol retail POS', 'liquor store point of sale', 'cloud POS for liquor stores', 'Openrize POS'],
    openGraph: {
        title: 'Liquor Store POS System | Openrize',
        description: 'Efficient POS system for liquor stores. Manage inventory, track sales, and automate operations.',
        url: 'https://openrize.com/liquor-store-pos-system',
        siteName: 'Openrize',
    },
};

const features = [
    { icon: '🔍', text: 'Barcode scanning' },
    { icon: '📦', text: 'Inventory tracking' },
    { icon: '📊', text: 'Sales monitoring' },
    { icon: '☁️', text: 'Cloud access' },
    { icon: '⚡', text: 'Fast checkout process' },
    { icon: '🔒', text: 'Secure system' },
];

const benefits = [
    'Reduce manual work',
    'Improve checkout speed',
    'Track inventory accurately',
    'Increase operational efficiency',
];

export default function LiquorStorePOSPage() {
    return (
        <>
            <PageHero
                title="Advanced POS System Built for Liquor Stores"
                description="Openrize Liquor Store POS System helps liquor store owners manage inventory, process transactions, and track business performance efficiently."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 6rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>

                    {/* Description */}
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem' }}>
                        Openrize Liquor Store POS System helps liquor store owners manage inventory, process transactions,
                        and track business performance efficiently. Our cloud-based system is built specifically for the
                        unique needs of alcohol retail.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>

                        {/* Features */}
                        <div>
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

                        {/* Benefits */}
                        <div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }} className="text-gradient">Benefits</h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {benefits.map((b, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: '700' }}>✓</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
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
