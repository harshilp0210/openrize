import Hero from '../components/Hero/Hero';
import ServiceHighlights from '../components/ServiceHighlights/ServiceHighlights';
import WhoWeHelp from '../components/WhoWeHelp/WhoWeHelp';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Portfolio from '../components/Portfolio/Portfolio';
import FreeAuditCTA from '../components/FreeAuditCTA/FreeAuditCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <ServiceHighlights />
            <WhoWeHelp />
            <WhyChooseUs />
            <Portfolio />
            <FreeAuditCTA />
        </>
    );
}
