import React from 'react';

const containerStyle = {
    maxWidth: 960,
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Inter, Roboto, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial',
    color: '#222',
    lineHeight: 1.5,
};

const heroStyle = {
    textAlign: 'center',
    marginBottom: 36,
};

const titleStyle = {
    fontSize: 34,
    margin: '8px 0',
};

const subtitleStyle = {
    color: '#555',
    margin: 0,
};

const sectionStyle = {
    background: '#fff',
    borderRadius: 8,
    padding: 20,
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    marginBottom: 20,
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
    marginTop: 12,
};

const cardStyle = {
    padding: 14,
    borderRadius: 8,
    background: '#fafafa',
    border: '1px solid #eee',
};

const avatarStyle = {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#ddd',
    display: 'inline-block',
    marginRight: 12,
    verticalAlign: 'middle',
};

const nameStyle = {
    margin: 0,
    fontSize: 16,
};

const roleStyle = {
    margin: 0,
    color: '#666',
    fontSize: 13,
};

export default function About() {
    const team = [
        { id: 1, name: 'Alex Johnson', role: 'Founder • Product' },
        { id: 2, name: 'Samira Patel', role: 'Engineering Lead' },
        { id: 3, name: 'Luis Garcia', role: 'Design' },
    ];

    return (
        <main style={containerStyle} aria-labelledby="about-title">
            <header style={heroStyle}>
                <p style={{ color: '#888', margin: 0 }}>About Sonico</p>
                <h1 id="about-title" style={titleStyle}>Build delightful audio experiences</h1>
                <p style={subtitleStyle}>
                    We design and ship tools that make audio creation, discovery, and sharing simple and delightful.
                </p>
            </header>

            <section style={sectionStyle} aria-labelledby="mission-title">
                <h2 id="mission-title" style={{ marginTop: 0 }}>Our mission</h2>
                <p>
                    To empower creators and listeners by providing fast, accessible, and privacy-first audio tools.
                    We combine thoughtful design, strong engineering, and community feedback to solve real problems.
                </p>
            </section>

            <section style={sectionStyle} aria-labelledby="team-title">
                <h2 id="team-title" style={{ marginTop: 0 }}>Team</h2>
                <div style={gridStyle}>
                    {team.map(member => (
                        <article key={member.id} style={cardStyle}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={avatarStyle} aria-hidden="true" />
                                <div>
                                    <p style={nameStyle}>{member.name}</p>
                                    <p style={roleStyle}>{member.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section style={sectionStyle} aria-labelledby="contact-title">
                <h2 id="contact-title" style={{ marginTop: 0 }}>Get in touch</h2>
                <p>
                    Have questions, feedback, or want to collaborate? Email us at <a href="mailto:hello@sonico.example">hello@sonico.example</a>.
                </p>
            </section>
        </main>
    );
}