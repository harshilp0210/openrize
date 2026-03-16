import Link from 'next/link';
import PageHero from '../../../components/PageHero/PageHero';

export const metadata = {
    title: 'How to Improve Google Reviews for Your Restaurant | Openrize Blog',
    description: 'More Google reviews mean higher foot traffic. Learn the exact strategies to get your diners leaving five-star feedback organically.',
};

export default function BlogPostPage() {
    return (
        <>
            <PageHero
                title="How to Improve Google Reviews for Your Restaurant"
                description="March 2026 · 4 min read"
                backgroundImage="/services-tech.png"
            />

            <article className="container" style={{ padding: '4rem 0 8rem' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', lineHeight: 1.9, fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    <p>
                        In today's digital landscape, foot traffic often starts with a search query. When potential diners pull up their maps app to find "restaurants near me," your star rating is the first thing they see.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        But how do you consistently get good reviews without begging every customer? Here are three proven strategies:
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        1. Automate the Ask
                    </h2>
                    <p>
                        The number one reason people don't leave reviews is that they simply forget. By integrating your POS system with an automated SMS or email follow-up, you can ping diners 2 hours after they pay their check, making it effortless for them to rate their experience.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        2. Train Staff on "The Mention"
                    </h2>
                    <p>
                        If a server has built a great rapport with a table and the guests are raving about the food, the server should organically mention: "If you have a free second later, we'd love it if you shared your experience on Google." It personalizes the request.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        3. Respond to Everyone (Even the Haters)
                    </h2>
                    <p>
                        Google's algorithm favors active businesses. Responding to a 5-star review builds loyalty, but responding professionally to a 1-star review shows future customers that you care about making things right.
                    </p>

                    {/* CTA */}
                    <div style={{ marginTop: '4rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Need Help Automating Reviews?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Openrize connects your POS to advanced customer communication tools.</p>
                        <Link href="#audit" className="btn">Book a Free Audit</Link>
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
