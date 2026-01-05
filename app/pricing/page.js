import PageHero from '../../components/PageHero/PageHero';
import styles from './pricing.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Pricing | Openrize',
    description: 'Transparent UK software development pricing. Hourly rates, project-based, and retainer packages.',
};

const hourlyRates = [
    { role: 'Web Developer', junior: '£35-50', mid: '£50-80', senior: '£80-120' },
    { role: 'Mobile Developer', junior: '£40-60', mid: '£60-90', senior: '£90-140' },
    { role: 'AI/ML Engineer', junior: '£60-80', mid: '£80-120', senior: '£120-180' },
    { role: 'DevOps Engineer', junior: '£50-70', mid: '£70-100', senior: '£100-150' },
    { role: 'UI/UX Designer', junior: '£30-45', mid: '£45-70', senior: '£70-100' },
];

const projectPricing = [
    { type: 'Landing Page', small: '£500-1,500', medium: '£1,500-3,000', large: '£3,000-5,000' },
    { type: 'Business Website', small: '£2,000-5,000', medium: '£5,000-15,000', large: '£15,000-30,000' },
    { type: 'E-commerce Store', small: '£5,000-10,000', medium: '£10,000-25,000', large: '£25,000-50,000+' },
    { type: 'Custom Web App', small: '£10,000-25,000', medium: '£25,000-75,000', large: '£75,000-200,000+' },
    { type: 'Mobile App', small: '£15,000-30,000', medium: '£30,000-80,000', large: '£80,000-200,000+' },
];

const retainerPackages = [
    { name: 'Starter', hours: '10-20 hrs/mo', price: '£1,000-2,500', features: ['Bug Fixes', 'Minor Updates', 'Email Support'] },
    { name: 'Growth', hours: '40-60 hrs/mo', price: '£4,000-7,500', features: ['Feature Development', 'Priority Support', 'Weekly Calls'], popular: true },
    { name: 'Enterprise', hours: '80+ hrs/mo', price: '£10,000+', features: ['Dedicated Team', '24/7 Support', 'Strategic Planning'] },
];

export default function PricingPage() {
    return (
        <>
            <PageHero
                title="Transparent Pricing"
                description="UK market rates for quality software development. No hidden fees, no surprises."
                backgroundImage="/pricing-tech.png"
            />

            {/* Hourly Rates Section */}
            <section className="container" style={{ padding: '5rem 0' }}>
                <h2 className={styles.sectionTitle}>Hourly Rates</h2>
                <p className={styles.sectionDesc}>Flexible engagement for ongoing projects and team augmentation.</p>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Junior</th>
                                <th>Mid-Level</th>
                                <th>Senior</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hourlyRates.map((rate, i) => (
                                <tr key={i}>
                                    <td>{rate.role}</td>
                                    <td>{rate.junior}/hr</td>
                                    <td>{rate.mid}/hr</td>
                                    <td>{rate.senior}/hr</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Project-Based Pricing */}
            <section style={{ background: 'var(--bg-secondary)', padding: '5rem 0' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Project-Based Pricing</h2>
                    <p className={styles.sectionDesc}>Fixed quotes for defined scope. Know your costs upfront.</p>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Small</th>
                                    <th>Medium</th>
                                    <th>Large</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectPricing.map((project, i) => (
                                    <tr key={i}>
                                        <td>{project.type}</td>
                                        <td>{project.small}</td>
                                        <td>{project.medium}</td>
                                        <td>{project.large}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Retainer Packages */}
            <section className="container" style={{ padding: '5rem 0' }}>
                <h2 className={styles.sectionTitle}>Monthly Retainer Packages</h2>
                <p className={styles.sectionDesc}>Ongoing support and development with predictable monthly costs.</p>

                <div className={styles.packagesGrid}>
                    {retainerPackages.map((pkg, i) => (
                        <div key={i} className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}>
                            {pkg.popular && <span className={styles.popularBadge}>Most Popular</span>}
                            <h3>{pkg.name}</h3>
                            <div className={styles.price}>{pkg.price}<span>/month</span></div>
                            <div className={styles.hours}>{pkg.hours}</div>
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
            </section>

            {/* CTA */}
            <section style={{ background: 'var(--bg-secondary)', padding: '4rem 0', textAlign: 'center' }}>
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
