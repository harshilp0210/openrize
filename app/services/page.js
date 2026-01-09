

import PageHero from '../../components/PageHero/PageHero';
import Lifecycle from '../../components/Lifecycle/Lifecycle';
import QASEO from '../../components/QASEO/QASEO';
import styles from './services.module.css';
import { servicesData } from '../../lib/services';
import Link from 'next/link';

export const metadata = {
    title: 'Services | Openrize',
    description: 'End-to-end software development, digital marketing, AI solutions, and more.',
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Expertise"
                description="End-to-end digital solutions crafted by elite engineers. From concept to deployment, we build systems that scale."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 8rem' }}>
                <div className={styles.grid}>
                    {servicesData.map((category) => (
                        <Link key={category.id} href={`/services/category/${category.id}`} className={styles.card} style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>
                            <h2
                                className={styles.sectionTitle}
                                style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    ...(category.id === 'digital-marketing' || category.id === 'generative-ai' || category.id === 'devops' ? { borderColor: 'var(--accent-purple)' } : {})
                                }}
                            >
                                {category.category}
                            </h2>
                            <p>{category.desc}</p>
                            <span style={{ marginTop: '1.5rem', display: 'inline-block', fontSize: '1rem', color: 'var(--accent-blue)', fontWeight: '600' }}>View Modules →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <Lifecycle />
            <QASEO />
        </>
    );
}
