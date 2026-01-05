import PageHero from '../../components/PageHero/PageHero';
import Lifecycle from '../../components/Lifecycle/Lifecycle';
import QASEO from '../../components/QASEO/QASEO';
import styles from './services.module.css';

export const metadata = {
    title: 'Services | Openrize',
    description: 'End-to-end software development, digital marketing, AI solutions, and more.',
};

const webDevelopmentServices = [
    { title: 'Enterprise Solutions', desc: 'Robust, scalable platforms for large organizations with complex requirements, high-traffic demands, and enterprise-grade security.' },
    { title: 'Custom E-commerce', desc: 'Tailored online stores with payment gateways, inventory management, and seamless checkout experiences that drive conversions.' },
    { title: 'Bespoke Development', desc: 'Custom-built applications designed from scratch to meet your unique business processes and workflow requirements.' },
    { title: 'Software Integrations', desc: 'Seamless connections between third-party tools, APIs, CRMs, and ERPs to streamline your operations.' },
    { title: 'Product Development', desc: 'Full-cycle product development from ideation to launch, including MVP creation and iterative improvements.' },
    { title: 'Secure API & Backend', desc: 'RESTful and GraphQL APIs with authentication, rate limiting, and database optimization for reliable performance.' }
];

const digitalMarketingServices = [
    { title: 'SEO & SEM', desc: 'Improve organic rankings and run targeted search campaigns to drive qualified traffic to your website.' },
    { title: 'Social Media Marketing', desc: 'Engage your audience on Instagram, LinkedIn, Facebook, and Twitter with strategic content and ad campaigns.' },
    { title: 'PPC Advertising', desc: 'Google Ads, Meta Ads, and display campaigns optimized for maximum ROI and conversion tracking.' },
    { title: 'Content Strategy', desc: 'Develop compelling blog posts, whitepapers, and video content that establishes thought leadership.' },
    { title: 'Email Campaigns', desc: 'Automated email sequences, newsletters, and drip campaigns that nurture leads and retain customers.' }
];

const aiMlServices = [
    { title: 'Predictive Analytics', desc: 'Forecast trends, customer behavior, and market movements using historical data and statistical models.' },
    { title: 'Computer Vision', desc: 'Image recognition, object detection, and visual inspection systems for automation and quality control.' },
    { title: 'NLP Solutions', desc: 'Text analysis, sentiment detection, and language understanding for customer support and data extraction.' },
    { title: 'Data Science', desc: 'Transform raw data into actionable insights with exploratory analysis, dashboards, and reporting systems.' }
];

const generativeAiServices = [
    { title: 'Conversational Chatbots', desc: 'AI-powered assistants that handle customer inquiries, bookings, and support 24/7 with natural language.' },
    { title: 'Custom LLMs', desc: 'Fine-tuned large language models trained on your proprietary data for domain-specific applications.' },
    { title: 'Synthetic Data', desc: 'Generate realistic training data for machine learning models while maintaining privacy compliance.' },
    { title: 'AI Model Integration', desc: 'Integrate OpenAI, Claude, Gemini, and other AI APIs into your existing applications and workflows.' }
];

const mobileAppServices = [
    { title: 'iOS Development', desc: 'Native Swift applications optimized for iPhone and iPad with App Store deployment support.' },
    { title: 'Android Development', desc: 'Kotlin-based native apps for the Android ecosystem with Google Play publishing guidance.' },
    { title: 'Cross-Platform', desc: 'React Native and Flutter applications that share code across iOS and Android for faster delivery.' },
    { title: 'App Maintenance', desc: 'Ongoing updates, bug fixes, and feature enhancements to keep your mobile apps current.' }
];

const devOpsServices = [
    { title: 'CI/CD Pipelines', desc: 'Automated build, test, and deployment workflows using GitHub Actions, Jenkins, or GitLab CI.' },
    { title: 'Cloud Infrastructure', desc: 'AWS, Azure, and Google Cloud setup with auto-scaling, load balancing, and cost optimization.' },
    { title: 'Containerization', desc: 'Docker and Kubernetes orchestration for consistent deployments across development and production.' },
    { title: 'Monitoring & Logging', desc: 'Real-time alerting and log aggregation with Datadog, New Relic, or CloudWatch integration.' }
];

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Expertise"
                description="End-to-end digital solutions crafted by elite engineers. From concept to deployment, we build systems that scale."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 8rem', display: 'grid', gap: '5rem' }}>

                {/* Web Development */}
                <div id="web-development" className={styles.serviceBlock}>
                    <h2 className={styles.sectionTitle}>Web Development</h2>
                    <p className={styles.sectionDesc}>Full-stack development for businesses of all sizes. We build fast, secure, and scalable web applications.</p>
                    <div className={styles.grid}>
                        {webDevelopmentServices.map(item => (
                            <div key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Digital Marketing */}
                <div id="digital-marketing" className={styles.serviceBlock}>
                    <h2 className={styles.sectionTitle} style={{ borderColor: 'var(--accent-purple)' }}>Digital Marketing</h2>
                    <p className={styles.sectionDesc}>Data-driven marketing strategies that increase visibility, generate leads, and grow revenue.</p>
                    <div className={styles.grid}>
                        {digitalMarketingServices.map(item => (
                            <div key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI & ML */}
                <div id="ai-ml" className={styles.serviceBlock}>
                    <h2 className={styles.sectionTitle}>AI & Machine Learning</h2>
                    <p className={styles.sectionDesc}>Intelligent systems that automate decisions, predict outcomes, and extract value from your data.</p>
                    <div className={styles.grid}>
                        {aiMlServices.map(item => (
                            <div key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Generative AI */}
                <div id="generative-ai" className={styles.serviceBlock}>
                    <h2 className={styles.sectionTitle} style={{ borderColor: 'var(--accent-purple)' }}>Generative AI</h2>
                    <p className={styles.sectionDesc}>Cutting-edge AI solutions powered by large language models and generative technologies.</p>
                    <div className={styles.grid}>
                        {generativeAiServices.map(item => (
                            <div key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Apps */}
                <div id="mobile-app" className={styles.serviceBlock}>
                    <h2 className={styles.sectionTitle}>Mobile App Development</h2>
                    <p className={styles.sectionDesc}>Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
                    <div className={styles.grid}>
                        {mobileAppServices.map(item => (
                            <div key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DevOps */}
                <div id="devops" className={styles.serviceBlock}>
                    <h2 className={styles.sectionTitle} style={{ borderColor: 'var(--accent-purple)' }}>DevOps Engineering</h2>
                    <p className={styles.sectionDesc}>Streamline your development workflow with automated pipelines and cloud infrastructure.</p>
                    <div className={styles.grid}>
                        {devOpsServices.map(item => (
                            <div key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
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
