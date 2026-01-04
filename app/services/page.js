import PageHero from '../../components/PageHero/PageHero';
import Lifecycle from '../../components/Lifecycle/Lifecycle';
import QASEO from '../../components/QASEO/QASEO';

export const metadata = {
    title: 'Services | Modern Merchant 12',
    description: 'Our end-to-end software development lifecycle and quality assurance practices.',
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Expertise"
                description="Architecting digital excellence. Our elite engineering teams build scalable, future-proof ecosystems tailored to your enterprise DNA."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ paddingBottom: '8rem', display: 'grid', gap: '4rem' }}>

                {/* Web Development */}
                <div id="web-development">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-blue)', paddingLeft: '1rem' }}>Web Development</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['Enterprise Solutions', 'Custom E-commerce', 'Bespoke Development', 'Software Integrations', 'Product Development', 'Secure API & Backend'].map(item => (
                            <div key={item} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>High-performance architectures built for scale and security.</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Digital Marketing */}
                <div id="digital-marketing">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-purple)', paddingLeft: '1rem' }}>Digital Marketing</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['SEO & SEM', 'Social Media Marketing', 'PPC Advertising', 'Content Strategy', 'Email Campaigns'].map(item => (
                            <div key={item} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Data-driven campaigns that maximize ROI and brand visibility.</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI & ML */}
                <div id="ai-ml">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-blue)', paddingLeft: '1rem' }}>AI & Machine Learning</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['Predictive Analytics', 'Computer Vision', 'NLP Solutions', 'Data Science'].map(item => (
                            <div key={item} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Intelligent algorithms that automate decisions and uncover insights.</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Generative AI */}
                <div id="generative-ai">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-purple)', paddingLeft: '1rem' }}>Generative AI</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['Conversational Chatbots', 'Custom LLMs', 'Synthetic Data', ' AI Model Integration'].map(item => (
                            <div key={item} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Next-gen creativity and automation power by large language models.</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <Lifecycle />
            <QASEO />
        </>
    );
}
