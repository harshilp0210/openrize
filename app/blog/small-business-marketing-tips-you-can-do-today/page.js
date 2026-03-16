import Link from 'next/link';
import PageHero from '../../../components/PageHero/PageHero';

export const metadata = {
    title: 'Small Business Marketing Tips You Can Do Today | Openrize Blog',
    description: 'You don\'t need a huge budget to grow. Here are practical marketing tips any small business can implement immediately.',
};

export default function BlogPostPage() {
    return (
        <>
            <PageHero
                title="Small Business Marketing Tips You Can Do Today"
                description="March 2026 · 3 min read"
                backgroundImage="/services-tech.png"
            />

            <article className="container" style={{ padding: '4rem 0 8rem' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', lineHeight: 1.9, fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    <p>
                        Marketing a small business can seem overwhelming, especially when budgets are tight. But effective marketing is more about consistency and strategy than spending massive amounts of money on ads.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        Claim and Optimize Google Business Profile
                    </h2>
                    <p>
                        If there is one thing you do today, it should be fully fleshing out your Google Business Profile. Ensure your hours are accurate, respond to recent reviews, and upload a few fresh, high-quality photos of your space, staff, or products.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        Leverage Local Partnerships
                    </h2>
                    <p>
                        Find a non-competing business in your area that shares your target audience. A coffee shop could partner with a local bookstore to offer a discount for showing a receipt from the other location. It's free cross-promotion.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        Start Building an Email List
                    </h2>
                    <p>
                        Social media algorithms change constantly, but you own your email list. Put a signup form on your website (or consider an exit-intent pop-up offering a discount) and collect emails via your POS system so you can directly reach customers with promotions and updates.
                    </p>

                    <div style={{ marginTop: '4rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Want to Put Your Marketing on Autopilot?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Openrize tools combine websites, POS data, and marketing automation into one easy system.</p>
                        <Link href="#audit" className="btn">See How Openrize Helps</Link>
                    </div>

                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        <Link href="/blog" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 600 }}>
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
