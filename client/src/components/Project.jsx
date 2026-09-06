import React from "react";

function Project() {
    const projectList = [
        {
            num: "01",
            title: "Solar-Panel Monitoring",
            type: "Telemetry App",
            desc: "Real-time energy tracking hub computing comparative efficiency algorithms and voltage logs.",
            tech: ["Python", "MySQL", "Tailwind"]
        },
        {
            num: "02",
            title: "Food Delivery & E-Commerce",
            type: "Web Application",
            desc: "High-performance client engines managing checkout pipelines and robust transaction states.",
            tech: ["MERN Stack", "UI/UX Engineering"]
        }
    ];

    return (
        <section 
            id="projects" 
            className="relative z-30 bg-transparent text-white py-16 px-6 md:px-16 lg:px-24 border-t border-purple-500/10 overflow-hidden"
        >
            {/* Background ambient glows to show off glass layers */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                
                {/* SECTION HEADER */}
                <div className="mb-12">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
                        04 // PRODUCTION
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">
                        SELECTED <span className="text-zinc-600">PROJECTS</span>
                    </h2>
                </div>

                {/* COMPACT INTENSIFIED GLASSMORPHIC CARD GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectList.map((project, index) => (
                        <div 
                            key={index}
                            /* FIXED: Switched bg-white/[0.02] to bg-neutral-950/70 for crystal clear text readability */
                            className="p-6 bg-neutral-950/70 border border-purple-500/20 backdrop-blur-md rounded-none flex flex-col justify-between h-[200px] relative group hover:border-purple-500/40 hover:bg-neutral-950/85 transition duration-500 shadow-2xl"
                        >
                            {/* Top Card Bar */}
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono font-bold text-purple-400/60 group-hover:text-purple-400 transition duration-300">
                                    {"// " + project.num}
                                </span>
                                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                                    {project.type}
                                </span>
                            </div>

                            {/* Middle Card Bar - Brightened up title text tokens */}
                            <div className="my-auto">
                                <h3 className="text-xl font-black uppercase tracking-wide text-white group-hover:text-purple-400 transition duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-300 text-xs mt-2 leading-relaxed font-normal line-clamp-2">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Bottom Card Bar */}
                            <div className="border-t border-white/10 pt-3 flex flex-wrap gap-1.5">
                                {project.tech.map((techItem, tIdx) => (
                                    <span 
                                        key={tIdx}
                                        className="px-2 py-0.5 bg-neutral-900 border border-zinc-800 text-[8px] font-mono font-bold tracking-wider text-purple-300 uppercase rounded-none"
                                    >
                                        {techItem}
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

export default Project;
