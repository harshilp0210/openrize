import Link from 'next/link';
import PageHero from '../../components/PageHero/PageHero';

export const metadata = {
    title: 'POS System Blog | Openrize',
    description: 'Read the latest articles about POS systems, restaurant management, retail automation, and business growth from the Openrize team.',
};

const posts = [
    {
        slug: 'how-to-improve-google-reviews-for-your-restaurant',
        title: 'How to Improve Google Reviews for Your Restaurant',
        excerpt: 'More Google reviews mean higher foot traffic. Learn the exact strategies to get your diners leaving five-star feedback organically.',
        date: 'March 2026',
        readTime: '4 min read',
    },
    {
        slug: '5-website-mistakes-costing-you-customers',
        title: '5 Website Mistakes Costing You Customers',
        excerpt: 'Is your website turning people away before they even visit your store? Avoid these common mistakes that hurt conversions.',
        date: 'March 2026',
        readTime: '5 min read',
    },
    {
        slug: 'small-business-marketing-tips-you-can-do-today',
        title: 'Small Business Marketing Tips You Can Do Today',
        excerpt: 'You don\'t need a huge budget to grow. Here are practical marketing tips any small business can implement immediately.',
        date: 'March 2026',
        readTime: '3 min read',
    },
    {
        slug: 'best-pos-system-for-restaurants-2026',
        title: 'Best POS System for Restaurants in 2026',
        excerpt: 'A modern POS system is essential for restaurants to improve efficiency, manage orders, and track sales. Discover the best features to look for.',
        date: 'March 2026',
        readTime: '3 min read',
    },
];

const cardStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '1rem',
    padding: '2rem',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s, transform 0.2s',
};

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
                            style={cardStyle}
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
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
