import PageHero from '../../components/PageHero/PageHero';
import styles from './pricing.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Pricing | Openrize',
    description: 'Transparent software development pricing. Project-based and retainer packages.',
};

const projectPricing = [
    { type: 'Landing Page', starter: '£0-500', standard: '£500-1,500', premium: '£1,500-3,000' },
    { type: 'Business Website', starter: '£500-2,000', standard: '£2,000-5,000', premium: '£5,000-15,000' },
    { type: 'E-commerce Store', starter: '£2,000-5,000', standard: '£5,000-15,000', premium: '£15,000-40,000' },
    { type: 'Custom Web App', starter: '£5,000-15,000', standard: '£15,000-40,000', premium: '£40,000-100,000+' },
    { type: 'Mobile App', starter: '£5,000-15,000', standard: '£15,000-50,000', premium: '£50,000-150,000+' },
    { type: 'AI/ML Solution', starter: '£3,000-10,000', standard: '£10,000-30,000', premium: '£30,000-100,000+' },
];

const retainerPackages = [
    { name: 'Starter', scope: 'Basic Support', price: '£500-1,500', features: ['Bug Fixes', 'Minor Updates', 'Email Support'] },
    { name: 'Growth', scope: 'Active Development', price: '£2,000-5,000', features: ['Feature Development', 'Priority Support', 'Weekly Calls'], popular: true },
    { name: 'Enterprise', scope: 'Full Partnership', price: '£5,000+', features: ['Dedicated Team', '24/7 Support', 'Strategic Planning'] },
];

export default function PricingPage() {
    return (
        <>
            <PageHero
                title="Transparent Pricing"
                description="Competitive rates for quality software development. No hidden fees, no surprises."
                backgroundImage="/pricing-tech.png"
            />

            {/* Project-Based Pricing */}
            <section className="container" style={{ padding: '5rem 0' }}>
                <h2 className={styles.sectionTitle}>Project-Based Pricing</h2>
                <p className={styles.sectionDesc}>Fixed quotes for defined scope. Know your costs upfront.</p>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Project Type</th>
                                <th>Starter</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectPricing.map((project, i) => (
                                <tr key={i}>
                                    <td>{project.type}</td>
                                    <td>{project.starter}</td>
                                    <td>{project.standard}</td>
                                    <td>{project.premium}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Retainer Packages */}
            <section style={{ background: 'var(--bg-secondary)', padding: '5rem 0' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Monthly Retainer Packages</h2>
                    <p className={styles.sectionDesc}>Ongoing support and development with predictable monthly costs.</p>

                    <div className={styles.packagesGrid}>
                        {retainerPackages.map((pkg, i) => (
                            <div key={i} className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}>
                                {pkg.popular && <span className={styles.popularBadge}>Most Popular</span>}
                                <h3>{pkg.name}</h3>
                                <div className={styles.price}>{pkg.price}<span>/month</span></div>
                                <div className={styles.hours}>{pkg.scope}</div>
                                <ul>
                                    {pkg.features.map((feature, j) => (
                                        <li key={j}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1rem' }}>Need a Custom Quote?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Every project is unique. Contact us for a tailored proposal based on your specific requirements.
                    </p>
                    <Link href="/contact" className="btn">Request a Quote</Link>
                </div>
            </section>
        </>
    );
}
