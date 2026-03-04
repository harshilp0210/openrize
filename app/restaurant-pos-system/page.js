import Link from 'next/link';
import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'Restaurant POS System | Modern POS Software for Restaurants | Openrize',
    description: 'Modern restaurant POS system designed to streamline operations, improve efficiency, and increase productivity. Cloud-based restaurant POS by Openrize.',
    keywords: ['restaurant POS system', 'restaurant point of sale', 'cloud POS for restaurants', 'restaurant management software', 'Openrize POS'],
    openGraph: {
        title: 'Restaurant POS System | Openrize',
        description: 'Modern restaurant POS system designed to streamline operations, improve efficiency, and increase productivity.',
        url: 'https://openrize.com/restaurant-pos-system',
        siteName: 'Openrize',
    },
};

const features = [
    { icon: '🧾', text: 'Order management' },
    { icon: '🪑', text: 'Table management' },
    { icon: '💳', text: 'Payment processing' },
    { icon: '📊', text: 'Sales reporting' },
    { icon: '📦', text: 'Inventory tracking' },
    { icon: '☁️', text: 'Cloud-based access' },
    { icon: '🖥️', text: 'Easy to use interface' },
];

const benefits = [
    'Improve staff efficiency',
    'Reduce operational errors',
    'Track sales in real time',
    'Manage inventory easily',
    'Increase overall productivity',
];

export default function RestaurantPOSPage() {
    return (
        <>
            <PageHero
                title="Complete POS System Designed for Restaurants"
                description="Openrize Restaurant POS System helps restaurants automate daily operations, improve order management, and track business performance in real time."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 6rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>

                    {/* Description */}
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem' }}>
                        Openrize Restaurant POS System helps restaurants automate daily operations, improve order management,
                        and track business performance in real time. Our cloud-based system ensures smooth and efficient restaurant management.
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
                        <Link href="/demo" className="btn">Request Free Demo</Link>
                        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--accent-blue)', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
