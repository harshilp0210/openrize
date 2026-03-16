import Hero from '../components/Hero/Hero';
import WhoWeHelp from '../components/WhoWeHelp/WhoWeHelp';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Portfolio from '../components/Portfolio/Portfolio';
import FreeAuditCTA from '../components/FreeAuditCTA/FreeAuditCTA';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Portfolio />
            <WhoWeHelp />
            <WhyChooseUs />
            <Testimonials />
            <FreeAuditCTA />
        </>
    );
}
