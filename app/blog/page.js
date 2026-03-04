import Link from 'next/link';
import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'POS System Blog | Openrize',
    description: 'Read the latest articles about POS systems, restaurant management, retail automation, and business growth from the Openrize team.',
};

const posts = [
    {
        slug: 'best-pos-system-for-restaurants-2026',
        title: 'Best POS System for Restaurants in 2026',
        excerpt: 'A modern POS system is essential for restaurants to improve efficiency, manage orders, and track sales. Discover the best features to look for.',
        date: 'March 2026',
        readTime: '3 min read',
    },
];

export default function BlogPage() {
    return (
        <>
            <PageHero
                title="Openrize Blog"
                description="Tips, guides, and insights on POS systems, restaurant management, and retail automation."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 8rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <article style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '1rem',
                                padding: '2rem',
                                transition: 'border-color 0.2s, transform 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}
                            >
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    <span>{post.date}</span>
                                    <span>·</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{post.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{post.excerpt}</p>
                                <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                                    Read More →
                                </span>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
