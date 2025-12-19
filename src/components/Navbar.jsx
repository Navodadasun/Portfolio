import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        background: isScrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
    };

    const containerStyle = {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 700,
        textDecoration: 'none',
        background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const desktopNavStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
    };

    const linkStyle = {
        color: '#d1d5db',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        position: 'relative',
        padding: '0.5rem 0',
    };

    const ctaButtonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.625rem 1.25rem',
        borderRadius: '9999px',
        background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
        color: '#fff',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer',
    };

    const mobileMenuButtonStyle = {
        display: 'none',
        background: 'transparent',
        border: 'none',
        color: '#fff',
        padding: '0.5rem',
        cursor: 'pointer',
    };

    const mobileMenuStyle = {
        display: 'none',
        position: 'absolute',
        top: '100%',
        left: '1rem',
        right: '1rem',
        marginTop: '0.5rem',
        background: 'rgba(10, 10, 15, 0.95)',
        backdropFilter: 'blur(16px)',
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        maxHeight: isMobileMenuOpen ? '400px' : '0',
        opacity: isMobileMenuOpen ? 1 : 0,
        border: '1px solid rgba(255, 255, 255, 0.1)',
    };

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu { display: block !important; }
        }
        .nav-link:hover { color: #fff !important; }
        .cta-btn:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }
      `}</style>
            <nav style={navStyle}>
                <div style={containerStyle}>
                    {/* Logo */}
                    <a href="#home" style={logoStyle}>
                        Navoda Dasun
                    </a>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav" style={desktopNavStyle}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                style={linkStyle}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="desktop-cta cta-btn"
                        style={ctaButtonStyle}
                    >
                        Let's Talk
                        <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        style={mobileMenuButtonStyle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="mobile-menu" style={mobileMenuStyle}>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: '#d1d5db',
                                    textDecoration: 'none',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    transition: 'all 0.3s ease',
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            style={{
                                ...ctaButtonStyle,
                                justifyContent: 'center',
                                marginTop: '0.5rem',
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
