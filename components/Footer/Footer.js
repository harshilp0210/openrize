import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>Openrize</h3>
                        <p>Building the foundation for your digital future.</p>
                    </div>
                    <div className={styles.links}>
                        <h4>Services</h4>
                        <ul>
                            <li>Web Development</li>
                            <li>Mobile Apps</li>
                            <li>Cloud Solutions</li>
                            <li>AI Integration</li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Openrize using Next.js & Vanilla CSS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
