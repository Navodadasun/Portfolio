const AboutSection = () => {
    const stats = [
        { number: '2+', label: 'Years Experience' },
        { number: '5+', label: 'Projects Completed' },
        { number: '10+', label: 'Technologies' },
    ];

    const experiences = [
        { role: 'Senior Developer', company: 'Tech Company', period: '2022 - Present' },
        { role: 'Full Stack Developer', company: 'Startup Inc', period: '2020 - 2022' },
        { role: 'Junior Developer', company: 'Agency XYZ', period: '2019 - 2020' },
    ];

    return (
        <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '24rem',
                    height: '24rem',
                    background: 'rgba(139, 92, 246, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(48px)',
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
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
                    <span className="glass-effect" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', color: '#a78bfa', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>
                        About Me
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#f0f0f3' }}>
                        Transforming Data Into{' '}
                        <span className="text-gradient">Knowledge</span>
                    </h2>
                    <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
                        Learn more about my journey, skills, and what drives me as a developer.
                    </p>
                </div>

                {/* Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start',
                }}>
                    {/* Left - About Text */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="glass-effect hover-lift" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                                Who I Am
                            </h3>
                            <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '1rem' }}>
                                I’m a passionate Data Science undergraduate with a strong interest in transforming data into meaningful insights. I enjoy working with data analysis, visualization, and machine learning to solve real-world problems using clean and efficient approaches.

When I’m not working with data, I explore emerging technologies, build hands-on projects, and continuously improve my analytical and technical skills. I’m driven by curiosity, learning, and the goal of creating data-driven solutions that make an impact.
                            </p>
                        </div>

                        <div className="glass-effect hover-lift" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                                What I Do
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { icon: "📊", text: "Data Analysis & Insight Extraction" },
                                    { icon: "📈", text: "Data Visualization & Reporting" },
                                    { icon: "🤖", text: "Machine Learning Model Development" },
                                    { icon: "🧹", text: "Data Cleaning & Preparation" },
                                ].map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                                        <span style={{ color: '#d1d5db' }}>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right - Stats Grid */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="glass-effect hover-lift"
                                    style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}
                                >
                                    <div className="gradient-text-animated" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                                        {stat.number}
                                    </div>
                                    <div style={{ color: '#9ca3af' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
