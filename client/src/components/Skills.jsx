import React from "react";

function Skills() {
    // Streamlined data arrays focusing strictly on your primary competencies
    const skillCategories = [
        {
            title: "Frontend & UI/UX Design",
            description: "Crafting pixel-perfect, accessible, and user-centric interfaces.",
            skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design", "Figma Design"]
        },
        {
            title: "Backend & Databases",
            description: "Building secure, data-driven, and scalable server architectures.",
            skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
        },
        {
            title: "Programming Languages",
            description: "Core computer science foundations and systemic logic implementation.",
            skills: ["Python", "C"]
        }
    ];

    return (
        <section 
            id="skills" 
            className="relative z-30 bg-neutral-900 text-white min-h-screen px-6 py-24 md:px-16 lg:px-24 border-t border-purple-500/10"
        >
            {/* Ambient Background Spotlights */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                
                {/* SECTION HEADER */}
                <div className="mb-16 md:mb-24">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
                        02 // Tools
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">
                        TECHNICAL <span className="text-zinc-500">SKILLS</span>
                    </h2>
                    <div className="w-12 h-1 bg-purple-500 mt-4 rounded-full"></div>
                </div>

                {/* SKILLS CATEGORIES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {skillCategories.map((cat, index) => (
                        <div 
                            key={index} 
                            className="p-8 bg-neutral-950 border border-zinc-800 rounded-none relative group hover:border-purple-500/30 transition duration-500 shadow-xl flex flex-col justify-between"
                        >
                            {/* Subtle internal neon light aura on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                            {/* Category Info */}
                            <div className="relative z-10 mb-6">
                                <span className="text-xs font-mono text-purple-500/50 block mb-1">
                                    [ CATEGORY_0{index + 1} ]
                                </span>
                                <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                                    {cat.title}
                                </h3>
                                <p className="text-zinc-500 text-xs mt-1 leading-relaxed max-w-sm">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Tags Grid */}
                            <div className="relative z-10 flex flex-wrap gap-2.5">
                                {cat.skills.map((skill, sIndex) => (
                                    <span 
                                        key={sIndex} 
                                        className="px-4 py-2 bg-neutral-900 border border-zinc-800/80 text-xs font-semibold tracking-wide text-zinc-300 rounded-none transition duration-300 cursor-default hover:border-purple-500 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
