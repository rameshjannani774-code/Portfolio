import React, { useEffect, useState } from "react";
import myProfileImg from "./image/naan.png"; 

function Home() {
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateIn(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <section 
            id="home" 
            className="w-full h-screen flex flex-col md:flex-row overflow-hidden text-white bg-neutral-950 sticky top-0 z-10"
            style={{
                viewTimelineName: "--curtain-timeline",
            }}
        >
            {/* ========================================================
                FLOATING TOP-RIGHT NAVBAR
               ======================================================== */}
            <nav className="fixed top-0 right-0 z-50 px-6 py-6 md:px-16 lg:px-24 flex items-center justify-end pointer-events-auto select-none">
                <div className="flex items-center gap-6 md:gap-8 bg-black/40 backdrop-blur-md px-6 py-3 border border-purple-500/10 shadow-2xl rounded-none">
                    {navLinks.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.href}
                            className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 hover:text-purple-400 transition duration-300 relative group py-0.5"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* ========================================================
                LEFT HALF CURTAIN: SLIDES FAR LEFT ON MOUSE SCROLL
               ======================================================== */}
            <div 
                className={`h-[45vh] md:h-full top-0 z-40 bg-neutral-900 overflow-hidden transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)
                    ${animateIn 
                        ? "absolute md:relative w-full md:w-1/2 left-0 translate-x-0 opacity-100" 
                        : "fixed w-screen right-0 translate-x-full opacity-0"
                    }`}
                style={{
                    animationTimeline: "--curtain-timeline",
                    animationName: "leftCurtainPeel",
                    animationFillMode: "both",
                    animationRange: "exit 0% exit 100%",
                }}
            >
                <img 
                    src={myProfileImg} 
                    alt="Jannani Ramesh" 
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition duration-700 ease-in-out" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-purple-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-neutral-950/90 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10 pointer-events-none"></div>
            </div>

            {/* ========================================================
                RIGHT HALF CURTAIN: SLIDES FAR RIGHT ON MOUSE SCROLL
               ======================================================== */}
            <div 
                className="w-full md:w-1/2 h-[55vh] md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-neutral-950 relative z-20"
                style={{
                    animationTimeline: "--curtain-timeline",
                    animationName: "rightCurtainPeel",
                    animationFillMode: "both",
                    animationRange: "exit 0% exit 100%",
                }}
            >
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

                <div className="relative z-10 max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-purple-500 rounded-full"></div>
                        <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-bold">
                             Portfolio
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none select-none">
                        JANNANI <br />
                        <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">RAMESH</span>
                    </h1>
                    
                    <p className="mt-6 text-sm sm:text-base md:text-lg text-zinc-400 font-medium tracking-wide leading-relaxed border-l-2 border-purple-500/30 pl-4">
                        Full Stack Developer / UI UX Designer <br />
                        <span className="text-zinc-500 font-normal text-xs sm:text-sm">
                            Specializing in the UI/UX of modern web applications with a focus on User Experience.
                        </span>
                    </p>

                    {/* BUTTON GROUP WITH WORKING ANCHORS */}
                    <div className="mt-10 flex flex-wrap gap-4 relative z-50">
                        <a href="#about" className="inline-block cursor-pointer">
                            <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-wider text-xs rounded-none transition duration-300 shadow-lg border border-purple-400/20 hover:scale-[1.02]">
                                Explore Work
                            </button>
                        </a>
                        <a href="#contact" className="inline-block cursor-pointer">
                            <button className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white font-bold uppercase tracking-wider text-xs rounded-none transition duration-300 border border-zinc-800">
                                Get In Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes leftCurtainPeel {
                    to {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                }
                @keyframes rightCurtainPeel {
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    );
}

export default Home;
