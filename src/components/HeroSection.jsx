import profileImage from '../images/Gemini_Generated_Image_df3qhhdf3qhhdf3q.png';

const HeroSection = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-20 md:pb-0"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Mesh */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'var(--gradient-mesh)' }}
                ></div>

                {/* Floating Orbs - Smaller on mobile */}
                <div
                    className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
                    style={{ animation: 'float 8s ease-in-out infinite' }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-pink-500/20 rounded-full blur-3xl"
                    style={{ animation: 'float 6s ease-in-out infinite reverse' }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/3 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-3xl"
                    style={{ animation: 'float 10s ease-in-out infinite' }}
                ></div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        opacity: 0.1,
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Content - Order 2 on mobile so image shows first, Order 1 on desktop */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 sm:mb-6"
                        style={{ animation: 'fade-in 0.8s ease-out' }}
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Available for opportunities</span>
                    </div>

                    <h1
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6"
                        style={{ animation: 'fade-in 0.8s ease-out 0.2s both', color: 'var(--color-text-primary)' }}
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text-animated">Navoda Dasun</span>
                    </h1>

                    <p
                        className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-4"
                        style={{ animation: 'fade-in 0.8s ease-out 0.4s both', color: 'var(--color-text-secondary)' }}
                    >
                        Data Science Undergraduate
                    </p>

                    <p
                        className="text-base sm:text-lg max-w-lg mx-auto md:mx-0 mb-8 sm:mb-8 md:mb-8 px-2 sm:px-0"
                        style={{ animation: 'fade-in 0.8s ease-out 0.6s both', color: 'var(--color-text-secondary)' }}
                    >
                        I'm building my journey in data science by exploring data analysis, statistics, and machine learning to create practical, insight-driven solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 sm:px-0"
                        style={{ animation: 'fade-in 0.8s ease-out 0.8s both' }}
                    >
                        <a
                            href="#projects"
                            className="btn-primary group"
                        >
                            View My Work
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="btn-secondary"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <div
                        className="flex gap-3 sm:gap-4 mt-6 sm:mt-10 justify-center md:justify-start"
                        style={{ animation: 'fade-in 0.8s ease-out 1s both' }}
                    >
                        {[
                            { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/Navodadasun' },
                            { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/navoda-dasun-23b63326a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },

                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                                style={{ color: 'var(--color-text-secondary)' }}
                                aria-label={social.name}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Profile Image - Order 1 on mobile so it shows first, Order 2 on desktop */}
                <div
                    className="relative flex justify-center order-1 md:order-2 mb-6 md:mb-0"
                    style={{ animation: 'fade-in 0.8s ease-out 0.4s both' }}
                >
                    {/* Glowing Ring */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ animation: 'glow 3s ease-in-out infinite' }}
                    >
                        <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-purple-500/30"></div>
                    </div>

                    {/* Rotating Border */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ animation: 'spin 20s linear infinite' }}
                    >
                        <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500"></div>
                    </div>

                    {/* Profile Image Container */}
                    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500/20">
                        <img
                            src={profileImage}
                            alt="Navoda Dasun - Data Science Undergraduate"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                    </div>

                    {/* Floating Elements - Hidden on very small screens, smaller on mobile */}
                    <div
                        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-effect px-2 py-1 sm:px-4 sm:py-2 rounded-xl hidden xs:block"
                        style={{ animation: 'float 4s ease-in-out infinite' }}
                    >
                        <span className="text-lg sm:text-2xl">💻</span>
                    </div>
                    <div
                        className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-effect px-2 py-1 sm:px-4 sm:py-2 rounded-xl hidden xs:block"
                        style={{ animation: 'float 5s ease-in-out infinite reverse' }}
                    >
                        <span className="text-lg sm:text-2xl">🚀</span>
                    </div>
                    <div
                        className="absolute top-1/2 -right-4 sm:-right-8 glass-effect px-2 py-1 sm:px-4 sm:py-2 rounded-xl hidden sm:block"
                        style={{ animation: 'float 6s ease-in-out infinite' }}
                    >
                        <span className="text-lg sm:text-2xl">✨</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                style={{ animation: 'fade-in 0.8s ease-out 1.2s both' }}
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    <span className="text-sm">Scroll Down</span>
                    <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'var(--color-text-secondary)' }}>
                        <div
                            className="w-1.5 h-3 rounded-full"
                            style={{ background: 'var(--color-text-secondary)', animation: 'pulse-subtle 2s ease-in-out infinite' }}
                        ></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

