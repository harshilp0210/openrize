'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", "db435dff-63af-4161-95cd-deaa6f1a91e9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully!");
                setStatus("success");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
                setStatus("error");
            }
        } catch (error) {
            console.log("Error", error);
            setResult("An error occurred. Please try again later.");
            setStatus("error");
        }
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea rows="5" name="message" placeholder="How can we help?" required></textarea>
            </div>

            <button
                type="submit"
                className="btn"
                style={{ width: '100%' }}
                disabled={status === "submitting"}
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status !== "idle" && (
                <div style={{ marginTop: '1rem', textAlign: 'center', color: status === "success" ? 'green' : 'red' }}>
                    {result}
                </div>
            )}
        </form>
    );
}
