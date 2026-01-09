import { notFound } from 'next/navigation';
import { servicesData } from '../../../../lib/services';
import PageHero from '../../../../components/PageHero/PageHero';
import Link from 'next/link';

// Reuse styles from the main services page if possible, or create new ones.
// I'll assume we can use the same class names but might need to import the CSS module differently if it's not global.
// Better to create a simpler, dedicated style for this list or reuse the card styles.
// I'll create a local css module to be safe.
import styles from './category.module.css';

export async function generateStaticParams() {
    return servicesData.map(category => ({
        categoryId: category.id,
    }));
}

export async function generateMetadata({ params }) {
    const { categoryId } = await params;
    const category = servicesData.find(c => c.id === categoryId);

    if (!category) {
        return { title: 'Category Not Found | Openrize' };
    }

    return {
        title: `${category.category} | Openrize Services`,
        description: category.desc,
    };
}

export default async function CategoryPage({ params }) {
    const { categoryId } = await params;
    const category = servicesData.find(c => c.id === categoryId);

    if (!category) {
        notFound();
    }

    return (
        <main>
            <PageHero
                title={category.category}
                description={category.desc}
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '5rem 0' }}>
                <div className={styles.grid}>
                    {category.items.map(item => (
                        <div key={item.slug} className={styles.card}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className={styles.cardActions}>
                                <Link href={`/services/${item.slug}`} className={styles.learnMore}>
                                    Learn More →
                                </Link>
                                <Link href="/contact" className={styles.getStartedBtn}>
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <Link href="/services" className={styles.backLink}>← Back to All Services</Link>
                </div>
            </section>
        </main>
    );
}
