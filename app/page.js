import Hero from '../components/Hero/Hero';
import WhoWeHelp from '../components/WhoWeHelp/WhoWeHelp';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Portfolio from '../components/Portfolio/Portfolio';
import FreeAuditCTA from '../components/FreeAuditCTA/FreeAuditCTA';

export default function Home() {
    return (
        <>
            <Portfolio />
            <Hero />
            <WhoWeHelp />
            <WhyChooseUs />
            <FreeAuditCTA />
        </>
    );
}
