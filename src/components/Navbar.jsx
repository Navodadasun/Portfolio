import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

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
        background: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--nav-border)' : 'none',
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
        background: 'var(--gradient-primary)',
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
        color: 'var(--nav-link-color)',
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
        background: 'var(--gradient-primary)',
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
        color: 'var(--color-text-primary)',
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
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        maxHeight: isMobileMenuOpen ? '400px' : '0',
        opacity: isMobileMenuOpen ? 1 : 0,
        border: '1px solid var(--nav-border)',
    };

    // Sun Icon (for light mode)
    const SunIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );

    // Moon Icon (for dark mode)
    const MoonIcon = () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
          .nav-controls { gap: 0.5rem !important; }
        }
        @media (max-width: 480px) {
          .nav-controls { gap: 0.375rem !important; }
          .nav-logo { font-size: 1.25rem !important; }
        }
        .nav-link:hover { color: var(--nav-link-hover) !important; }
        .cta-btn:hover { 
          transform: translateY(-2px); 
          box-shadow: var(--shadow-glow);
        }
        .mobile-link:hover, .mobile-link:active {
          background: var(--glass-bg);
          color: var(--nav-link-hover);
        }
      `}</style>
            <nav style={navStyle}>
                <div style={containerStyle}>
                    {/* Logo */}
                    <a href="#home" className="nav-logo" style={logoStyle}>
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

                    {/* Right side - Theme Toggle + CTA */}
                    <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle"
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </button>

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
                </div>

                {/* Mobile Menu */}
                <div className="mobile-menu" style={mobileMenuStyle}>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-link"
                                style={{
                                    color: 'var(--nav-link-color)',
                                    textDecoration: 'none',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    display: 'block',
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

