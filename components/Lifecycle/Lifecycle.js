import styles from './Lifecycle.module.css';

const steps = [
    { id: 1, title: 'Concept Development', desc: 'Market analysis, stakeholder inputs, and product ideation.' },
    { id: 2, title: 'Design and Prototyping', desc: 'UI/UX principles, customer journey mapping, and preliminary versions.' },
    { id: 3, title: 'Development and Testing', desc: 'Agile methodologies and Test-Driven Development (TDD).' },
    { id: 4, title: 'Deployment and Monitoring', desc: 'DevOps culture and CI/CD pipelines.' },
    { id: 5, title: 'Maintenance and Evolution', desc: 'Product roadmap and continuous user feedback.' },
];

const Lifecycle = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`text-gradient ${styles.heading}`}>The End-to-End Development Lifecycle</h2>
                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div key={step.id} className={styles.step}>
                            <div className={styles.marker}>
                                <div className={styles.number}>{step.id}</div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.desc}>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className={styles.line}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Lifecycle;
