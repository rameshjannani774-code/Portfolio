import React from "react";

function About() {
    return (
        <section 
            id="about" 
            className="relative z-30 bg-neutral-950 text-white min-h-screen px-6 py-24 md:px-16 lg:px-24 border-t border-purple-500/10 flex items-center"
        >
            {/* Ambient Background Glow matching the deep theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                
                {/* LEFT SIDE: THEMATIC SECTION MARKER */}
                <div className="md:col-span-1 sticky top-28">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
                        01 // BIOGRAPHY
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none">
                        ABOUT <br />
                        <span className="text-zinc-600">MYSELF</span>
                    </h2>
                </div>

                {/* RIGHT SIDE: ELEVATED ESSAY INTRO */}
                <div className="md:col-span-2 space-y-8 text-zinc-400 text-base md:text-lg leading-relaxed">
                    
                    {/* High-Impact Statement */}
                    <p className="text-white font-semibold text-2xl md:text-3xl leading-snug tracking-tight">
                        I balance structural Full-Stack engineering logic with the visual mechanics of modern UI/UX design.
                    </p>

                    {/* Core Narrative Narrative Paragraph */}
                    <p>
                        My development style thrives at the intersection of raw performance and intuitive interaction. 
                        While I engineering robust, data-driven applications across backend networks and relative databases, 
                        I approach architecture through a user-first framework. Translating complex system requirements 
                        into seamless digital interfaces—from initial layout architecture in Figma to production-ready deployments—is 
                        where my passion operates.
                    </p>

                    <p>
                        Beyond foundational corporate web utilities, I find creative spaces by exploring emerging, high-utility domains. 
                        I regularly engineer custom platforms blending Augmented Reality contexts, IoT automation networks, and embedded AI mechanics. 
                        Testing boundaries at live hackathons and transforming concept logic into production systems are what keep my code base expanding.
                    </p>

                    {/* HIGHLIGHTED EXPERIENCE CALLOUTS */}
                    <div className="pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                        
                        <div className="border-l-2 border-purple-500 pl-4">
                            <h3 className="text-white font-bold uppercase tracking-wider text-xs text-purple-400 mb-1">
                                Interface Engineering
                            </h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Professional background executing structural dashboard transformations, high-performance CSS typography systems, and interactive user logic.
                            </p>
                        </div>

                        <div className="border-l-2 border-zinc-800 pl-4">
                            <h3 className="text-white font-bold uppercase tracking-wider text-xs text-zinc-300 mb-1">
                                Deployment Engineering
                            </h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Experience monitoring relative environment builds and cloud-serving architectures to yield scalable public endpoints.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
