import { notFound } from 'next/navigation';
import { getServiceBySlug, servicesData } from '../../../lib/services';
import PageHero from '../../../components/PageHero/PageHero';
import styles from './service-detail.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
    // Generate params for all services
    const params = [];
    servicesData.forEach(category => {
        category.items.forEach(item => {
            params.push({ slug: item.slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found | Openrize',
        };
    }

    return {
        title: `${service.title} | Openrize Services`,
        description: service.desc,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            <PageHero
                title={service.title}
                description={service.desc}
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '5rem 0' }}>
                <div className={styles.content}>
                    <p className={styles.category}>Category: {servicesData.find(cat => cat.items.some(i => i.slug === slug))?.category}</p>
                    <div dangerouslySetInnerHTML={{ __html: service.content }} />

                    {/* NEW: Benefits, Screenshot, and Case Study Placeholders */}
                    <div className={styles.serviceExtras} style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                        <h3>Core Benefits</h3>
                        <ul className={styles.benefitsList} style={{ marginBottom: '2rem', paddingLeft: '1.2rem' }}>
                            <li>Automate repetitive tasks to save hours every week.</li>
                            <li>Gain deeper insights with real-time analytics and tracking.</li>
                            <li>Drive more customer engagement and predictable revenue.</li>
                        </ul>

                        <h3>See It In Action</h3>
                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2rem', border: '1px dashed var(--color-primary)' }}>
                            <p style={{ color: 'var(--text-secondary)' }}>[ Placeholder for Example Screenshot / UI Mockup ]</p>
                            {/* <img src="/placeholder-screenshot.png" alt="Platform Screenshot" style={{ width: '100%', borderRadius: '4px' }} /> */}
                        </div>

                        <h3>Proven Results</h3>
                        <div style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.05), rgba(var(--color-secondary-rgb), 0.05))', padding: '1.5rem', borderRadius: '8px', marginBottom: '3rem' }}>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>Case Study Highlight</h4>
                            <p style={{ margin: 0 }}><strong>+40% Efficiency</strong> achieved by local partners using this solution within the first 3 months.</p>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/contact" className="btn">Get Started</Link>
                        <Link href="/services" className={styles.backLink}>← Back to Services</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
