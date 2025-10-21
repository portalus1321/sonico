import React, { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honey: "", // honeypot for bots
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ loading: false, success: null, message: "" });

    const styles = {
        container: {
            maxWidth: 760,
            margin: "2rem auto",
            padding: "1.5rem",
            borderRadius: 8,
            boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
            background: "#fff",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        },
        heading: { margin: "0 0 1rem 0", fontSize: "1.5rem" },
        form: { display: "grid", gap: "0.75rem" },
        row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" },
        label: { display: "block", fontSize: 14, marginBottom: 6 },
        input: {
            width: "100%",
            padding: "10px 12px",
            fontSize: 14,
            borderRadius: 6,
            border: "1px solid #d1d5db",
        },
        textarea: {
            minHeight: 120,
            padding: "10px 12px",
            fontSize: 14,
            borderRadius: 6,
            border: "1px solid #d1d5db",
            resize: "vertical",
        },
        help: { color: "#ef4444", fontSize: 13, marginTop: 6 },
        submit: {
            padding: "10px 14px",
            fontSize: 15,
            background: "#0ea5a4",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
        },
        secondary: { fontSize: 13, color: "#374151" },
        statusSuccess: { color: "#065f46", marginTop: 8 },
        statusError: { color: "#991b1b", marginTop: 8 },
        small: { fontSize: 12, color: "#6b7280" },
    };

    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
        if (!form.message.trim()) e.message = "Message is required";
        // honey should be empty; if not, treat as bot
        return e;
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        setStatus({ loading: false, success: null, message: "" });

        // simple spam check
        if (form.honey) {
            setStatus({ loading: false, success: false, message: "Spam detected." });
            return;
        }

        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) return;

        setStatus({ loading: true, success: null, message: "" });
        try {
            // Adjust the endpoint to your backend handler
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    subject: form.subject.trim(),
                    message: form.message.trim(),
                }),
            });

            if (!res.ok) {
                const payload = await res.text();
                throw new Error(payload || "Request failed");
            }

            setForm({ name: "", email: "", subject: "", message: "", honey: "" });
            setErrors({});
            setStatus({ loading: false, success: true, message: "Message sent. Thank you!" });
        } catch (err) {
            setStatus({ loading: false, success: false, message: err.message || "Failed to send message" });
        }
    }

    return (
        <main style={styles.container} aria-live="polite">
            <h1 style={styles.heading}>Contact</h1>
            <p style={styles.small}>Have questions or want to work together? Send a message below.</p>

            <form onSubmit={handleSubmit} style={styles.form} noValidate>
                {/* honeypot - visually hidden but present */}
                <div style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
                    <label htmlFor="hp">Leave this field blank</label>
                    <input id="hp" name="honey" value={form.honey} onChange={(e) => setForm({ ...form, honey: e.target.value })} />
                </div>

                <div style={styles.row}>
                    <div>
                        <label style={styles.label} htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            style={styles.input}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && <div id="name-error" style={styles.help}>{errors.name}</div>}
                    </div>

                    <div>
                        <label style={styles.label} htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            style={styles.input}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && <div id="email-error" style={styles.help}>{errors.email}</div>}
                    </div>
                </div>

                <div>
                    <label style={styles.label} htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        style={styles.input}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && <div id="subject-error" style={styles.help}>{errors.subject}</div>}
                </div>

                <div>
                    <label style={styles.label} htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        style={styles.textarea}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <div id="message-error" style={styles.help}>{errors.message}</div>}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button type="submit" style={styles.submit} disabled={status.loading}>
                        {status.loading ? "Sending..." : "Send Message"}
                    </button>
                    <div style={styles.secondary}>
                        <div role="status" aria-live="polite">
                            {status.success === true && <div style={styles.statusSuccess}>{status.message}</div>}
                            {status.success === false && <div style={styles.statusError}>{status.message}</div>}
                        </div>
                    </div>
                </div>
            </form>
        </main>
            );
}