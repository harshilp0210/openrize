export const servicesData = [
    {
        category: "Web Development",
        id: "web-development",
        desc: "Full-stack development for businesses of all sizes. We build fast, secure, and scalable web applications.",
        items: [
            {
                title: 'Enterprise Solutions',
                slug: 'enterprise-solutions',
                desc: 'Robust, scalable platforms for large organizations with complex requirements, high-traffic demands, and enterprise-grade security.',
                content: `
                    <h2>Enterprise-Grade Software Development</h2>
                    <p>We strictly adhere to industry standards to build secure, scalable, and high-performance applications for large enterprises.</p>
                    <ul>
                        <li>Microservices Architecture</li>
                        <li>High Availability & Load Balancing</li>
                        <li>Advanced Security Compliance (GDPR, HIPAA)</li>
                        <li>Legacy System Modernization</li>
                    </ul>
                `
            },
            {
                title: 'Custom E-commerce',
                slug: 'custom-ecommerce',
                desc: 'Tailored online stores with payment gateways, inventory management, and seamless checkout experiences that drive conversions.',
                content: `
                    <h2>Tailored E-commerce Experiences</h2>
                    <p>Drive sales with a custom-built online store designed for your unique brand and customer journey.</p>
                `
            },
            { title: 'Bespoke Development', slug: 'bespoke-development', desc: 'Custom-built applications designed from scratch to meet your unique business processes and workflow requirements.', content: '<h2>Bespoke Development</h2><p>Tailor-made software solutions.</p>' },
            { title: 'Software Integrations', slug: 'software-integrations', desc: 'Seamless connections between third-party tools, APIs, CRMs, and ERPs to streamline your operations.', content: '<h2>Integrations</h2><p>Connecting your digital ecosystem.</p>' },
            { title: 'Product Development', slug: 'product-development', desc: 'Full-cycle product development from ideation to launch, including MVP creation and iterative improvements.', content: '<h2>Product Development</h2><p>From idea to market leader.</p>' },
            { title: 'Secure API & Backend', slug: 'backend-api', desc: 'RESTful and GraphQL APIs with authentication, rate limiting, and database optimization for reliable performance.', content: '<h2>Backend Engineering</h2><p>The backbone of your digital presence.</p>' }
        ]
    },
    {
        category: "Digital Marketing",
        id: "digital-marketing",
        desc: "Data-driven marketing strategies that increase visibility, generate leads, and grow revenue.",
        items: [
            { title: 'SEO & SEM', slug: 'seo-sem', desc: 'Improve organic rankings and run targeted search campaigns to drive qualified traffic to your website.', content: '<h2>SEO & SEM</h2><p>Dominating search results.</p>' },
            { title: 'Social Media Marketing', slug: 'social-media', desc: 'Engage your audience on Instagram, LinkedIn, Facebook, and Twitter with strategic content and ad campaigns.', content: '<h2>Social Media</h2><p>Building your community.</p>' },
            { title: 'PPC Advertising', slug: 'ppc-advertising', desc: 'Google Ads, Meta Ads, and display campaigns optimized for maximum ROI and conversion tracking.', content: '<h2>PPC</h2><p>Pay-per-click with precision.</p>' },
            { title: 'Content Strategy', slug: 'content-strategy', desc: 'Develop compelling blog posts, whitepapers, and video content that establishes thought leadership.', content: '<h2>Content Strategy</h2><p>Stories that sell.</p>' },
            { title: 'Email Campaigns', slug: 'email-marketing', desc: 'Automated email sequences, newsletters, and drip campaigns that nurture leads and retain customers.', content: '<h2>Email Marketing</h2><p>Retention and conversion.</p>' }
        ]
    },
    {
        category: "AI & Machine Learning",
        id: "ai-ml",
        desc: "Intelligent systems that automate decisions, predict outcomes, and extract value from your data.",
        items: [
            { title: 'Predictive Analytics', slug: 'predictive-analytics', desc: 'Forecast trends, customer behavior, and market movements using historical data and statistical models.', content: '<h2>Predictive Analytics</h2><p>Seeing the future with data.</p>' },
            { title: 'Computer Vision', slug: 'computer-vision', desc: 'Image recognition, object detection, and visual inspection systems for automation and quality control.', content: '<h2>Computer Vision</h2><p>AI that sees.</p>' },
            { title: 'NLP Solutions', slug: 'nlp', desc: 'Text analysis, sentiment detection, and language understanding for customer support and data extraction.', content: '<h2>NLP</h2><p>Understanding language at scale.</p>' },
            { title: 'Data Science', slug: 'data-science', desc: 'Transform raw data into actionable insights with exploratory analysis, dashboards, and reporting systems.', content: '<h2>Data Science</h2><p>Insights from chaos.</p>' }
        ]
    },
    {
        category: "Generative AI",
        id: "generative-ai",
        desc: "Cutting-edge AI solutions powered by large language models and generative technologies.",
        items: [
            { title: 'Conversational Chatbots', slug: 'chatbots', desc: 'AI-powered assistants that handle customer inquiries, bookings, and support 24/7 with natural language.', content: '<h2>Chatbots</h2><p>24/7 Intelligent Support.</p>' },
            { title: 'Custom LLMs', slug: 'custom-llms', desc: 'Fine-tuned large language models trained on your proprietary data for domain-specific applications.', content: '<h2>Custom LLMs</h2><p>Your own GPT, trained on your data.</p>' },
            { title: 'Synthetic Data', slug: 'synthetic-data', desc: 'Generate realistic training data for machine learning models while maintaining privacy compliance.', content: '<h2>Synthetic Data</h2><p>Privacy-preserving data generation.</p>' },
            { title: 'AI Model Integration', slug: 'ai-integration', desc: 'Integrate OpenAI, Claude, Gemini, and other AI APIs into your existing applications and workflows.', content: '<h2>AI Integration</h2><p>Adding intelligence to existing apps.</p>' }
        ]
    },
    {
        category: "Mobile App Development",
        id: "mobile-app",
        desc: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        items: [
            { title: 'iOS Development', slug: 'ios-development', desc: 'Native Swift applications optimized for iPhone and iPad with App Store deployment support.', content: '<h2>iOS Development</h2><p>Premium Apple experiences.</p>' },
            { title: 'Android Development', slug: 'android-development', desc: 'Kotlin-based native apps for the Android ecosystem with Google Play publishing guidance.', content: '<h2>Android Development</h2><p>Reaching the global majority.</p>' },
            { title: 'Cross-Platform', slug: 'cross-platform', desc: 'React Native and Flutter applications that share code across iOS and Android for faster delivery.', content: '<h2>Cross-Platform</h2><p>Write once, run everywhere.</p>' },
            { title: 'App Maintenance', slug: 'app-maintenance', desc: 'Ongoing updates, bug fixes, and feature enhancements to keep your mobile apps current.', content: '<h2>Maintenance</h2><p>Keeping your apps healthy.</p>' }
        ]
    },
    {
        category: "DevOps Engineering",
        id: "devops",
        desc: "Streamline your development workflow with automated pipelines and cloud infrastructure.",
        items: [
            { title: 'CI/CD Pipelines', slug: 'cicd', desc: 'Automated build, test, and deployment workflows using GitHub Actions, Jenkins, or GitLab CI.', content: '<h2>CI/CD</h2><p>Automated software delivery.</p>' },
            { title: 'Cloud Infrastructure', slug: 'cloud-infra', desc: 'AWS, Azure, and Google Cloud setup with auto-scaling, load balancing, and cost optimization.', content: '<h2>Cloud Infrastructure</h2><p>Scalable, reliable cloud foundations.</p>' },
            { title: 'Containerization', slug: 'containerization', desc: 'Docker and Kubernetes orchestration for consistent deployments across development and production.', content: '<h2>Containerization</h2><p>Consistent environments.</p>' },
            { title: 'Monitoring & Logging', slug: 'monitoring', desc: 'Real-time alerting and log aggregation with Datadog, New Relic, or CloudWatch integration.', content: '<h2>Monitoring</h2><p>Observability and insights.</p>' }
        ]
    }
];

export function getServiceBySlug(slug) {
    for (const category of servicesData) {
        const item = category.items.find(i => i.slug === slug);
        if (item) return item;
    }
    return null;
}
