import Link from 'next/link';
import styles from './Footer.module.css';

const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/openrize', icon: '🔗' },
    { name: 'Twitter', url: 'https://twitter.com/openrize', icon: '𝕏' },
    { name: 'Instagram', url: 'https://instagram.com/openrize', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/openrize', icon: '📘' },
    { name: 'GitHub', url: 'https://github.com/openrize', icon: '💻' },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>Openrize</h3>
                        <p>Building the foundation for your digital future.</p>
                        <div className={styles.social}>
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.links}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services#web-development">Web Development</Link></li>
                            <li><Link href="/services#digital-marketing">Digital Marketing</Link></li>
                            <li><Link href="/services#ai-ml">AI & Machine Learning</Link></li>
                            <li><Link href="/services#generative-ai">Generative AI</Link></li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Openrize. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
