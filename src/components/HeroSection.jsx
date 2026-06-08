import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../images/navod_potrait.png';

/* ─── Typing hook: writes text char-by-char then holds ─── */
const useTypewriter = (text, speed = 80, startDelay = 600) => {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);
    useEffect(() => {
        let i = 0;
        setDisplayed('');
        setDone(false);
        const delay = setTimeout(() => {
            const iv = setInterval(() => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) { clearInterval(iv); setDone(true); }
            }, speed);
            return () => clearInterval(iv);
        }, startDelay);
        return () => clearTimeout(delay);
    }, [text, speed, startDelay]);
    return { displayed, done };
};

/* ─── Animated particle network on canvas ─── */
const ParticleNet = ({ isDark }) => {
    const ref = useRef(null);
    useEffect(() => {
        const cvs = ref.current;
        if (!cvs) return;
        const ctx = cvs.getContext('2d');
        let raf;
        const resize = () => { cvs.width = cvs.offsetWidth; cvs.height = cvs.offsetHeight; };
        resize();
        window.addEventListener('resize', resize);

        const N = 55;
        const pts = Array.from({ length: N }, () => ({
            x: Math.random() * cvs.width,
            y: Math.random() * cvs.height,
            vx: (Math.random() - .5) * .35,
            vy: (Math.random() - .5) * .35,
            r: Math.random() * 1.6 + .4,
        }));

        const tick = () => {
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            pts.forEach(p => {
                p.x = (p.x + p.vx + cvs.width) % cvs.width;
                p.y = (p.y + p.vy + cvs.height) % cvs.height;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? 'rgba(139,92,246,0.55)' : 'rgba(109,40,217,0.35)';
                ctx.fill();
            });
            for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
                const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
                const d = Math.hypot(dx, dy);
                if (d < 130) {
                    ctx.beginPath();
                    const alpha = isDark ? 0.15 : 0.08;
                    ctx.strokeStyle = `rgba(109,40,217,${ alpha * (1 - d / 130) })`;
                    ctx.lineWidth = .8;
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.stroke();
                }
            }
            raf = requestAnimationFrame(tick);
        };
        tick();
        return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
    }, [isDark]);
    return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
};

/* ─── Small floating stat chip ─── */
const Chip = ({ emoji, value, sub, delay, pos }) => (
    <div className="hero-chip" style={{ animationDelay: delay, ...pos }}>
        <span>{emoji}</span>
        <div>
            <div className="chip-val">{value}</div>
            <div className="chip-sub">{sub}</div>
        </div>
    </div>
);

/* ══════════════════════════════════════════════════════ */
const HeroSection = () => {
    const { isDark } = useTheme();
    const { displayed: typedName, done: nameDone } = useTypewriter('Navoda Dasun', 90, 700);

    /* staggered visibility flags */
    const [show, setShow] = useState({ badge: false, greeting: false, name: false, role: false, desc: false, btns: false, socials: false, photo: false });
    useEffect(() => {
        const timings = [
            ['badge', 100],
            ['greeting', 250],
            ['name', 450],
            ['role', 900],   // after name finishes
            ['desc', 1200],
            ['btns', 1500],
            ['socials', 1750],
            ['photo', 400],
        ];
        const handles = timings.map(([k, t]) => setTimeout(() => setShow(s => ({ ...s, [k]: true })), t));
        return () => handles.forEach(clearTimeout);
    }, []);

    return (
        <>
            <style>{`
            /* ══ Section shell ══ */
            #home {
                position: relative;
                min-height: 100vh;
                display: flex;
                align-items: center;
                overflow: hidden;
                background: var(--color-background);
                transition: background 0.4s ease;
            }

            /* ══ Blobs ══ */
            .hb { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; }
            .hb1 { width: 620px; height: 620px; top: -160px; left: -140px;
                   background: radial-gradient(circle, rgba(109,40,217,.2) 0%, transparent 70%);
                   animation: blobFloat 10s ease-in-out infinite; }
            .hb2 { width: 480px; height: 480px; bottom: -100px; right: -80px;
                   background: radial-gradient(circle, rgba(219,39,119,.18) 0%, transparent 70%);
                   animation: blobFloat 8s ease-in-out infinite reverse 1s; }
            .hb3 { width: 320px; height: 320px; top: 35%; left: 42%;
                   background: radial-gradient(circle, rgba(6,182,212,.1) 0%, transparent 70%);
                   animation: blobFloat 13s ease-in-out infinite 3s; }
            :root.light .hb1 { background: radial-gradient(circle, rgba(109,40,217,.1) 0%, transparent 70%); }
            :root.light .hb2 { background: radial-gradient(circle, rgba(219,39,119,.09) 0%, transparent 70%); }
            :root.light .hb3 { background: radial-gradient(circle, rgba(6,182,212,.06) 0%, transparent 70%); }
            @keyframes blobFloat {
                0%,100% { transform: translate(0,0) scale(1); }
                50%      { transform: translate(20px,-30px) scale(1.08); }
            }

            /* ══ Grid ══ */
            .hero-grid {
                position: relative; z-index: 2;
                max-width: 1280px; width: 100%;
                margin: 0 auto; padding: 0 2.5rem;
                display: grid; grid-template-columns: 1.1fr 1fr;
                gap: 3rem; align-items: center;
                padding-top: 6rem; padding-bottom: 3rem;
            }
            @media(max-width:900px){
                .hero-grid { grid-template-columns:1fr; gap:2.5rem; text-align:center;
                             padding-top:5.5rem; }
                .hero-left  { order:2; }
                .hero-right { order:1; }
                .hero-cta, .hero-socials { justify-content:center; }
                .hero-role-row { justify-content:center; }
            }

            /* ══ Reveal animation base ══ */
            .reveal { opacity:0; transform:translateY(22px); transition: opacity .65s ease, transform .65s ease; }
            .reveal.in { opacity:1; transform:translateY(0); }

            /* ══ Badge ══ */
            .hero-badge {
                display:inline-flex; align-items:center; gap:.5rem;
                padding:.35rem 1rem; border-radius:9999px;
                background: rgba(139,92,246,.1);
                border:1px solid rgba(139,92,246,.3);
                font-size:.78rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase;
                color: var(--color-primary); margin-bottom:1.4rem;
            }
            :root.light .hero-badge {
                background: rgba(124,58,237,.08);
                border-color: rgba(124,58,237,.25);
            }
            .badge-dot {
                width:7px; height:7px; border-radius:50%;
                background:#4ade80; box-shadow:0 0 8px #4ade80;
                animation: dotPulse 2s ease-in-out infinite;
            }
            @keyframes dotPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(.8);opacity:.6} }

            /* ══ Greeting ══ */
            .hero-greet {
                font-size:clamp(.95rem,2vw,1.2rem);
                color: var(--color-text-secondary); font-weight:400;
                margin-bottom:.3rem;
            }

            /* ══ Name ══ */
            .hero-name-wrap { margin-bottom:.9rem; min-height:5.5rem; }
            .hero-name {
                font-size: clamp(2.8rem,5.5vw,5rem);
                font-weight:800; line-height:1.05; letter-spacing:-.025em;
                background: linear-gradient(118deg, #e9d5ff 10%, #a78bfa 45%, #f472b6 80%);
                -webkit-background-clip:text; -webkit-text-fill-color:transparent;
                background-clip:text;
            }
            :root.light .hero-name {
                background: linear-gradient(118deg, #6d28d9 10%, #7c3aed 45%, #db2777 80%);
                -webkit-background-clip:text; background-clip:text;
            }
            .hero-cursor {
                display:inline-block; width:3px; height:.85em;
                background: var(--color-primary); margin-left:4px; border-radius:2px;
                vertical-align:middle;
                animation: cursorBlink .75s step-end infinite;
            }
            .hero-cursor.done { animation:none; opacity:0; }
            @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

            /* ══ Role row ══ */
            .hero-role-row {
                display:flex; align-items:center; flex-wrap:wrap; gap:.6rem;
                margin-bottom:1.4rem;
            }
            .role-label {
                font-size:clamp(1rem,1.8vw,1.2rem); color: var(--color-text-secondary); font-weight:400;
            }
            .role-tags { display:flex; flex-wrap:wrap; gap:.5rem; }
            .role-tag {
                padding:.3rem .85rem; border-radius:9999px;
                background:rgba(139,92,246,.12); border:1px solid rgba(139,92,246,.25);
                font-size:.82rem; font-weight:600; color: var(--color-primary);
                transition:background .3s, border-color .3s;
            }
            :root.light .role-tag {
                background:rgba(124,58,237,.08); border-color:rgba(124,58,237,.2);
            }
            .role-tag:hover { background:rgba(139,92,246,.25); border-color:rgba(139,92,246,.5); }

            /* ══ Description ══ */
            .hero-desc {
                font-size:clamp(.88rem,1.4vw,1rem); line-height:1.85;
                color: var(--color-text-secondary); max-width:480px; margin-bottom:2.2rem;
            }
            @media(max-width:900px){ .hero-desc{ margin:0 auto 2rem; } }

            /* ══ CTA buttons ══ */
            .hero-cta { display:flex; flex-wrap:wrap; gap:.85rem; align-items:center; margin-bottom:2rem; }
            .btn-glow {
                display:inline-flex; align-items:center; gap:.5rem;
                padding:.85rem 1.9rem; border-radius:9999px;
                background:linear-gradient(135deg,#7c3aed,#db2777);
                color:#fff; font-weight:700; font-size:.93rem; text-decoration:none;
                border:none; cursor:pointer; position:relative; overflow:hidden;
                transition:transform .3s, box-shadow .3s;
            }
            .btn-glow::after {
                content:''; position:absolute; inset:0;
                background:linear-gradient(135deg,#a78bfa,#f472b6);
                opacity:0; transition:opacity .3s;
            }
            .btn-glow:hover::after { opacity:1; }
            .btn-glow:hover { transform:translateY(-3px); box-shadow:0 16px 40px rgba(124,58,237,.45); }
            .btn-glow > * { position:relative; z-index:1; }
            .btn-ghost {
                display:inline-flex; align-items:center; gap:.5rem;
                padding:.85rem 1.9rem; border-radius:9999px;
                background: var(--glass-bg);
                border:1px solid var(--glass-border);
                color: var(--color-text-primary); font-weight:600; font-size:.93rem;
                text-decoration:none; cursor:pointer; backdrop-filter:blur(8px);
                transition:all .3s;
            }
            :root.light .btn-ghost {
                background:rgba(255,255,255,.7);
                border-color:rgba(124,58,237,.2);
            }
            .btn-ghost:hover {
                border-color:rgba(139,92,246,.55);
                background:rgba(139,92,246,.1);
                transform:translateY(-3px);
                color: var(--color-primary);
            }

            /* ══ Socials ══ */
            .hero-socials { display:flex; gap:.65rem; }
            .soc-btn {
                width:40px; height:40px; border-radius:50%;
                background: var(--glass-bg);
                border:1px solid var(--glass-border);
                display:flex; align-items:center; justify-content:center;
                color: var(--color-text-muted); text-decoration:none;
                transition:all .3s;
            }
            :root.light .soc-btn {
                background:rgba(255,255,255,.8);
                border-color:rgba(124,58,237,.15);
            }
            .soc-btn:hover {
                background:rgba(139,92,246,.2); border-color:rgba(139,92,246,.5);
                color: var(--color-primary); transform:translateY(-3px) scale(1.1);
            }

            /* ══ Right side / Portrait ══ */
            .hero-right {
                display:flex; flex-direction:column; align-items:center; gap:0;
                justify-content: flex-end;
            }

            /* outer wrapper holds glow layers + image */
            .portrait-wrap {
                position: relative;
                width: 380px;
                height: 630px;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                overflow: visible;
            }
            @media(max-width:1200px){ .portrait-wrap{ width:340px; height:570px; } }
            @media(max-width:1100px){ .portrait-wrap{ width:300px; height:510px; } }
            @media(max-width:900px){  .portrait-wrap{ width:240px; height:400px; } }

            /* ── Atmospheric glow layers ── */
            .portrait-glow-left {
                position:absolute;
                bottom: 0; left: -80px;
                width: 320px; height: 520px;
                border-radius: 50%;
                background: radial-gradient(ellipse at center,
                    rgba(59,30,180,.9)  0%,
                    rgba(99,60,220,.55) 35%,
                    transparent 70%);
                filter: blur(45px);
                z-index: 0;
                animation: glowPulse 4s ease-in-out infinite;
            }
            .portrait-glow-right {
                position:absolute;
                bottom: 0; right: -80px;
                width: 320px; height: 500px;
                border-radius: 50%;
                background: radial-gradient(ellipse at center,
                    rgba(180,30,150,.9)  0%,
                    rgba(220,60,180,.5)  35%,
                    transparent 70%);
                filter: blur(45px);
                z-index: 0;
                animation: glowPulse 5s ease-in-out infinite reverse 1s;
            }
            .portrait-glow-bottom {
                position:absolute;
                bottom: -10px; left: 50%;
                transform: translateX(-50%);
                width: 280px; height: 100px;
                border-radius: 50%;
                background: radial-gradient(ellipse,
                    rgba(139,80,246,.6) 0%,
                    transparent 70%);
                filter: blur(24px);
                z-index: 0;
            }
            @keyframes glowPulse {
                0%,100% { opacity:.85; transform:scale(1);   }
                50%      { opacity:1;   transform:scale(1.08); }
            }

            /* ── Portrait image — radial mask removes ALL edges of white bg ── */
            .portrait-img {
                position: relative;
                z-index: 2;
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: bottom center;
                /*
                  Radial ellipse mask:
                  - Fully opaque in the centre (where the person is)
                  - Fades to transparent at ALL edges
                  → completely removes the white background rectangle,
                    leaving only a soft-edged person silhouette
                */
                -webkit-mask-image: radial-gradient(
                    ellipse 78% 82% at 50% 42%,
                    black          0%,
                    black          55%,
                    rgba(0,0,0,.7) 68%,
                    rgba(0,0,0,.3) 78%,
                    transparent    90%
                );
                mask-image: radial-gradient(
                    ellipse 78% 82% at 50% 42%,
                    black          0%,
                    black          55%,
                    rgba(0,0,0,.7) 68%,
                    rgba(0,0,0,.3) 78%,
                    transparent    90%
                );
                animation: portraitFloat 6s ease-in-out infinite;
            }
            @keyframes portraitFloat {
                0%,100% { transform: translateY(0);    }
                50%      { transform: translateY(-14px); }
            }

            /* ══ Scroll indicator ══ */
            .hero-scroll {
                position:absolute; bottom:1.8rem; left:50%; transform:translateX(-50%);
                display:flex; flex-direction:column; align-items:center; gap:.4rem;
                color:rgba(255,255,255,.22); font-size:.68rem; letter-spacing:.1em;
                text-transform:uppercase; text-decoration:none; z-index:3;
                opacity:0; animation: fadeUp .6s ease forwards 2s;
            }
            .scroll-line {
                width:1px; height:48px;
                background:linear-gradient(to bottom, rgba(139,92,246,.8), transparent);
                animation: scrollPulse 2s ease-in-out infinite;
            }
            @keyframes scrollPulse { 0%,100%{opacity:1} 50%{opacity:.3;transform:scaleY(.6)} }

            /* ══ Shared fade up ══ */
            @keyframes fadeUp { from{opacity:0;transform:translate(-50%,14px)} to{opacity:1;transform:translate(-50%,0)} }

            /* ══ Divider line ══ */
            @media(min-width:901px){
                .hero-divider {
                    position:absolute; top:0; left:50%; width:1px; height:100%; z-index:1; pointer-events:none;
                    background:linear-gradient(to bottom,transparent 0%,rgba(139,92,246,.12) 30%,rgba(139,92,246,.12) 70%,transparent 100%);
                }
            }
        `}</style>

            <section id="home">
                {/* bg layers */}
                <div className="hb hb1" />
                <div className="hb hb2" />
                <div className="hb hb3" />
                <ParticleNet isDark={isDark} />
                <div className="hero-divider" />

                <div className="hero-grid">
                    {/* ══ LEFT ══ */}
                    <div className="hero-left">

                        {/* Available badge */}
                        <div className={`hero-badge reveal${ show.badge ? ' in' : '' }`}>
                            <span className="badge-dot" />
                            Available for opportunities
                        </div>

                        {/* Greeting */}
                        <p className={`hero-greet reveal${ show.greeting ? ' in' : '' }`}>Hi there, I'm</p>

                        {/* Name typing */}
                        <div className={`hero-name-wrap reveal${ show.name ? ' in' : '' }`}>
                            <span className="hero-name">{typedName}</span>
                            <span className={`hero-cursor${ nameDone ? ' done' : '' }`} />
                        </div>

                        {/* Role tags */}
                        <div className={`hero-role-row reveal${ show.role ? ' in' : '' }`}>
                            <span className="role-label">Focused on</span>
                            <div className="role-tags">
                                {['Data Science', 'Machine Learning', 'Data Analysis'].map(t => (
                                    <span key={t} className="role-tag">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <p className={`hero-desc reveal${ show.desc ? ' in' : '' }`}>
                            I'm a data science undergraduate passionate about turning raw data into
                            meaningful insights — through machine learning, statistical analysis,
                            and clean, visual storytelling.
                        </p>

                        {/* CTA buttons */}
                        <div className={`hero-cta reveal${ show.btns ? ' in' : '' }`}>
                            <a href="#projects" className="btn-glow">
                                <span>View My Work</span>
                                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn-ghost">Get In Touch</a>
                            <a href="/Portfolio/Navoda-CV.pdf" download="Navoda-Dasun-CV.pdf" className="btn-ghost">
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download CV
                            </a>
                        </div>

                        {/* Socials */}
                        <div className={`hero-socials reveal${ show.socials ? ' in' : '' }`}>
                            <a href="https://github.com/Navodadasun" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="GitHub">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/navoda-dasun-23b63326a" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="LinkedIn">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* ══ RIGHT — Portrait ══ */}
                    <div className={`hero-right reveal${ show.photo ? ' in' : '' }`}>
                        <div className="portrait-wrap">
                            {/* Atmospheric glow layers */}
                            <div className="portrait-glow-left"  />
                            <div className="portrait-glow-right" />
                            <div className="portrait-glow-bottom" />

                            {/* Full-body portrait — no box, soft radial mask */}
                            <img
                                src={profileImage}
                                alt="Navoda Dasun – Data Science Undergraduate"
                                className="portrait-img"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <a href="#about" className="hero-scroll">
                    <div className="scroll-line" />
                    <span>Scroll</span>
                </a>
            </section>
        </>
    );
};

export default HeroSection;
