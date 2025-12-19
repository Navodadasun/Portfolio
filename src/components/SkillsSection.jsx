const SkillsSection = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'Tailwind CSS', level: 95 },
            ],
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 88 },
                { name: 'Python', level: 82 },
                { name: 'Express.js', level: 90 },
                { name: 'MongoDB', level: 80 },
            ],
        },
        {
            title: 'Tools & Others',
            icon: '🔧',
            skills: [
                { name: 'Git & GitHub', level: 92 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'Figma', level: 80 },
                { name: 'Linux', level: 78 },
            ],
        },
    ];

    const technologies = [
        'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL',
        'MongoDB', 'Redis', 'Docker', 'AWS', 'GraphQL', 'REST APIs',
        'Git', 'CI/CD', 'Tailwind CSS', 'Figma',
    ];

    return (
        <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div
                    style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)' }}
                ></div>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="glass-effect" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', color: '#a78bfa', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>
                        My Skills
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#f0f0f3' }}>
                        Technologies I{' '}
                        <span className="text-gradient">Work With</span>
                    </h2>
                    <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
                        A comprehensive overview of my technical skills and expertise.
                    </p>
                </div>

                {/* Technology Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '4rem' }}>
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="glass-effect"
                            style={{
                                padding: '0.625rem 1.25rem',
                                borderRadius: '9999px',
                                color: '#d1d5db',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                cursor: 'default',
                                transition: 'all 0.3s ease',
                                animation: `fade-in 0.5s ease-out ${ index * 0.05 }s both`,
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="glass-effect hover-lift"
                            style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                animation: `fade-in 0.6s ease-out ${ categoryIndex * 0.15 }s both`,
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    borderRadius: '1rem',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.875rem'
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>
                                    {category.title}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <span style={{ color: '#d1d5db', fontWeight: 500 }}>{skill.name}</span>
                                            <span style={{ color: '#a78bfa' }}>{skill.level}%</span>
                                        </div>
                                        <div style={{ height: '0.5rem', background: '#1f2937', borderRadius: '9999px', overflow: 'hidden' }}>
                                            <div
                                                style={{
                                                    height: '100%',
                                                    width: `${ skill.level }%`,
                                                    borderRadius: '9999px',
                                                    background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                                                    transition: 'width 1s ease-out',
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
