import Link from 'next/link';
import PageHero from '../../../components/PageHero/PageHero';

export const metadata = {
    title: '5 Website Mistakes Costing You Customers | Openrize Blog',
    description: 'Is your website turning people away before they even visit your store? Avoid these common mistakes that hurt conversions.',
};

export default function BlogPostPage() {
    return (
        <>
            <PageHero
                title="5 Website Mistakes Costing You Customers"
                description="March 2026 · 5 min read"
                backgroundImage="/services-tech.png"
            />

            <article className="container" style={{ padding: '4rem 0 8rem' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', lineHeight: 1.9, fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    <p>
                        Your website is your 24/7 digital storefront. But what happens if the doors are effectively locked, or the sign outside is confusing? Many local businesses lose out on major revenue due to simple usability errors. Here are the top 5 mistakes you need to fix:
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        1. Not Being Mobile-First
                    </h2>
                    <p>
                        Over 60% of local searches happen in a car or on the street from a smartphone. If your website requires zooming in to read the menu or clicking tiny links, users will bounce to your competitor's site instantly.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        2. Hidden Contact Information
                    </h2>
                    <p>
                        Don't make people dig for your phone number, address, or hours. Put them in the header and the footer so they are accessible from every page.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        3. Slow Load Times
                    </h2>
                    <p>
                        Every second your site takes to load, you lose up to 10% of potential visitors. Optimize those huge hero images and leverage modern hosting to keep load times under 2 seconds.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        4. PDF Menus
                    </h2>
                    <p>
                        Forcing a user to download a 5MB PDF to see what you serve is terrible for user experience (especially on data plans) and terrible for SEO, since Google can't easily index the text inside the file. 
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} className="text-gradient">
                        5. No Clear Calls to Action (CTAs)
                    </h2>
                    <p>
                        What do you want the user to do? "Order Online", "Book a Table", "Get a Free Quote". Make the button obvious and put it everywhere.
                    </p>

                    <div style={{ marginTop: '4rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Want a High-Converting Website?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Let our experts design and optimize your digital presence.</p>
                        <Link href="#audit" className="btn">Get Your Free Website Audit</Link>
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
