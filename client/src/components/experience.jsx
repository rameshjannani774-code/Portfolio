import React from "react";

function Experience() {
    return (
        <section 
            id="experience" 
            className="relative z-30 bg-neutral-900 text-white py-24 px-6 md:px-16 lg:px-24 border-t border-purple-500/10"
        >
            <div className="max-w-6xl mx-auto">
                
                {/* COMPACT SECTION HEADER */}
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
                        04 // JOURNEY
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">
                        EXPERIENCE <span className="text-zinc-500">HISTORY</span>
                    </h2>
                </div>

                {/* THE TYPOGRAPHIC LIST */}
                <div className="max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 group">
                        
                        {/* Time frame left tag */}
                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <span className="text-xs font-mono tracking-widest text-purple-400 font-bold block md:pt-1">
                                INTERNSHIP
                            </span>
                        </div>
                        
                        {/* Experience detail right block */}
                        <div className="md:col-span-3 border-l border-zinc-800 pl-6 md:pl-8 group-hover:border-purple-500 transition duration-300">
                            <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-100 group-hover:text-purple-400 transition duration-300">
                                UI/UX & Application Developer
                            </h3>
                            <p className="text-sm font-semibold tracking-wider text-zinc-500 uppercase mt-1">
                                Tech Internship Team
                            </p>
                            
                            {/* PUNCHY TIMELINE HIGHLIGHTS */}
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-500">//</span> Dashboard Redesign
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-500">//</span> Figma UI Prototyping
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-500">//</span> CSS Keyframe Animations
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-500">//</span> JavaScript Logic
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;
