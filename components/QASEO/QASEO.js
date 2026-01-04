import styles from './QASEO.module.css';

const QASEO = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Quality Assurance</h3>
                        <p className={styles.subtitle}>"Shift Left" Methodology</p>
                        <ul className={styles.list}>
                            <li>Identify defects early in design/dev</li>
                            <li>Automated regression testing</li>
                            <li>User-centric performance metrics</li>
                            <li>Flawless production pipelines</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.title}>SEO & Visibility</h3>
                        <p className={styles.subtitle}>Ranking in "People Also Ask"</p>
                        <ul className={styles.list}>
                            <li>Concise, answer-first content structure</li>
                            <li>Semantic HTML5 & Schema.org markup</li>
                            <li>Lightweight, high-performance pages</li>
                            <li>Mobile-first indexing optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QASEO;
