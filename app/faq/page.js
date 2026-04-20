import PageHero from '../../components/PageHero/PageHero';
import FAQ from '../../components/FAQ/FAQ';
import FreeAuditCTA from '../../components/FreeAuditCTA/FreeAuditCTA';

export const metadata = {
    title: 'Frequently Asked Questions | Openrize',
    description: 'Find answers to common questions about Openrize POS systems, website development, and business growth services.',
};

export default function FAQPage() {
    return (
        <>
            <PageHero 
                title="Frequently Asked Questions"
                description="Everything you need to know about partnering with Openrize to grow your local business."
                backgroundImage="/portfolio-aura.png" // Using an existing image for consistency
            />
            <FAQ />
            <FreeAuditCTA />
        </>
    );
}
