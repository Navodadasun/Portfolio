import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email details
        const recipientEmail = 'navaadasun@gmail.com';
        const emailSubject = encodeURIComponent(formData.subject);
        const emailBody = encodeURIComponent(
            `Name: ${ formData.name }\nEmail: ${ formData.email }\n\nMessage:\n${ formData.message }`
        );

        // Open Gmail compose with pre-filled data
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${ recipientEmail }&su=${ emailSubject }&body=${ emailBody }`;

        // Open in new tab
        window.open(gmailUrl, '_blank');

        // Clear the form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: (
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'navaadasun@gmail.com',
            href: 'mailto:hello@yourname.com',
        },
        {
            icon: (
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Location',
            value: 'Gampaha, Sri Lanka',
            href: '#',
        },
        {
            icon: (
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Phone',
            value: '+94 704482143',
            href: 'tel:+15551234567',
        },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/Navodadasun' },
        { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/navoda-dasun-23b63326a' },
    ];

    const inputStyle = {
        width: '100%',
        padding: '1rem 1.25rem',
        borderRadius: '0.75rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    };

    return (
        <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)' }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    maxWidth: '56rem',
                    height: '24rem',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(48px)',
                }}></div>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="glass-effect" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', color: '#a78bfa', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>
                        Get In Touch
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#f0f0f3' }}>
                        Let's Work{' '}
                        <span className="text-gradient">Together</span>
                    </h2>
                    <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start',
                }}>
                    {/* Contact Info */}
                    <div className="glass-effect" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>
                            Contact Information
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div style={{
                                        width: '3rem',
                                        height: '3rem',
                                        borderRadius: '1rem',
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#a78bfa',
                                    }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{info.label}</p>
                                        <p style={{ color: '#fff' }}>{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Follow me on</p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: '2.5rem',
                                            height: '2.5rem',
                                            borderRadius: '0.75rem',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#9ca3af',
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none',
                                        }}
                                        aria-label={social.name}
                                    >
                                        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="glass-effect" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="subject" style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project Discussion"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="message" style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                style={{ ...inputStyle, resize: 'none' }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                                color: '#fff',
                                fontWeight: 600,
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Send Message
                            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
