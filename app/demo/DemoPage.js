'use client';
import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero';

export default function DemoPage() {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <PageHero
                title="Request a Free Demo"
                description="See how Openrize POS system works and how it can help your business grow. Fill out the form and our team will contact you."
                backgroundImage="/services-tech.png"
            />

            <section className="container" style={{ padding: '4rem 0 8rem' }}>
                <div style={{ maxWidth: '620px', margin: '0 auto' }}>
                    {submitted ? (
                        <div style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '1.25rem',
                            padding: '3rem',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                            <h2 style={{ marginBottom: '1rem' }} className="text-gradient">Thank You!</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                We have received your demo request. Our team will contact you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your full name' },
                                { label: 'Business Name', name: 'businessName', type: 'text', placeholder: 'Your business name' },
                                { label: 'Email', name: 'email', type: 'email', placeholder: 'info@yourbusiness.com' },
                                { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Your phone number' },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.85rem 1rem',
                                            borderRadius: '0.625rem',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            background: 'rgba(255,255,255,0.04)',
                                            color: 'var(--text-primary)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            boxSizing: 'border-box',
                                        }}
                                    />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your business and what you're looking for..."
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        padding: '0.85rem 1rem',
                                        borderRadius: '0.625rem',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        background: 'rgba(255,255,255,0.04)',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        resize: 'vertical',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn" style={{ alignSelf: 'flex-start', cursor: 'pointer', border: 'none' }}>
                                Request Demo
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
