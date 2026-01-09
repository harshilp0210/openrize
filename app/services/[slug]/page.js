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

                    <div className={styles.actions}>
                        <Link href="/contact" className="btn">Get Started</Link>
                        <Link href="/services" className={styles.backLink}>← Back to Services</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
