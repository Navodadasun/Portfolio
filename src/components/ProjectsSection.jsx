import { useState } from 'react';

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Web App', 'Mobile', 'UI/UX'];

    const projects = [
        {
            title: 'EduFlex',
            description: 'Learning Management System - A comprehensive platform for online education with courses, quizzes, and progress tracking.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
            tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            category: 'Web App',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'TravelMania',
            description: 'TravelMania web app - Discover amazing destinations with curated travel experiences and local guides.',
            image: './src/images/Gemini_Generated_Image_65dg1165dg1165dg.png',
            tags: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
            category: 'Web App',
            liveUrl: '#',
            githubUrl: 'https://github.com/Navodadasun/TourGuide2',
        },
        {
            title: 'SafeZone',
            description: 'Disaster management system - Real-time alerts, evacuation routes, and emergency resource coordination.',
            image: './src/images/WhatsApp Image 2026-01-27 at 10.48.41 AM.jpeg',
            tags: ['React', 'Node.js', 'REST API', 'MongoDB'],
            category: 'Web App',
            liveUrl: '#',
            githubUrl: 'https://github.com/Deeghau0816/SafeZone_DMS',
        },
        {
            title: 'Fitra',
            description: 'UI/UX Design - Clean and intuitive mobile app interface with modern design principles.',
            image: './src/images/1755559905251.jpg',
            tags: ['Figma'],
            category: 'UI/UX',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Moodi',
            description: 'Mood tracking app - Track your emotions, discover patterns, and improve your mental wellness.',
            image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
            tags: ['Android Studio', 'Java', 'Kotlin'],
            category: 'Mobile',
            liveUrl: '#',
            githubUrl: 'https://github.com/Navodadasun/Moodi',
        },
        {
            title: 'JobFinder',
            description: 'Job search app - Find your dream job with smart matching and easy application process.',
            image: './src/images/1764889492306.jpg',
            tags: ['Python', 'Flask'],
            category: 'Web App',
            liveUrl: '#',
            githubUrl: 'https://github.com/Navodadasun/JobFinder',
        },
        {
            title: 'CryptoViz',
            description: 'Real-time cryptocurrency analytics and price prediction platform with live charts and ML-based next-candle forecasts.',
            image: './src/images/Screenshot 2026-01-27 102713.png',
            tags: ['Python', 'FastAPI', 'Machine Learning', 'React', 'Crypto API'],
            category: 'Web App',
            liveUrl: '#',
            githubUrl: 'https://github.com/Navodadasun/CryptoViz',
        },

    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: '33%',
                    left: 0,
                    width: '24rem',
                    height: '24rem',
                    background: 'rgba(139, 92, 246, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(48px)',
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '33%',
                    right: 0,
                    width: '20rem',
                    height: '20rem',
                    background: 'rgba(236, 72, 153, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(48px)',
                }}></div>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="glass-effect" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>
                        My Work
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                        Featured{' '}
                        <span className="text-gradient">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
                        A selection of my best work showcasing my skills and expertise.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            style={{
                                padding: '0.625rem 1.5rem',
                                borderRadius: '9999px',
                                fontWeight: 500,
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                background: activeFilter === filter
                                    ? 'var(--gradient-primary)'
                                    : 'var(--glass-bg)',
                                color: activeFilter === filter ? '#fff' : 'var(--color-text-primary)',
                                backdropFilter: activeFilter === filter ? 'none' : 'blur(16px)',
                                boxShadow: activeFilter === filter ? 'var(--shadow-glow)' : 'none',
                            }}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-effect hover-lift"
                            style={{
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                animation: `fade-in 0.6s ease-out ${ index * 0.1 }s both`,
                            }}
                        >
                            {/* Project Image */}
                            <div style={{ position: 'relative', height: '13rem', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, var(--color-card), transparent, transparent)',
                                }}></div>

                                {/* Overlay Actions */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseOut={(e) => e.currentTarget.style.opacity = '0'}
                                >
                                    <a
                                        href={project.liveUrl}
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(4px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            transition: 'background 0.3s ease',
                                            textDecoration: 'none',
                                        }}
                                        title="View Live"
                                    >
                                        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        style={{
                                            width: '3rem',
                                            height: '3rem',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(4px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            transition: 'background 0.3s ease',
                                            textDecoration: 'none',
                                        }}
                                        title="View Code"
                                    >
                                        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '9999px',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                background: 'rgba(139, 92, 246, 0.1)',
                                                color: 'var(--color-primary)',
                                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="#"
                        className="glass-effect"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            borderRadius: '9999px',
                            color: '#fff',
                            fontWeight: 500,
                            textDecoration: 'none',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        View All Projects
                        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default ProjectsSection;
