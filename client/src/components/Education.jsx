import React from "react";

function Education() {
    return (
        <section 
            id="education" 
            className="relative z-30 bg-neutral-950 text-white py-24 px-6 md:px-16 lg:px-24 border-t border-purple-500/10"
        >
            <div className="max-w-6xl mx-auto">
                
                {/* COMPACT SECTION HEADER */}
                <div className="mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 block mb-2">
                        03 // ACADEMICS
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">
                        EDUCATION <span className="text-zinc-600">TIMELINE</span>
                    </h2>
                </div>

                {/* THE TYPOGRAPHIC LIST */}
                <div className="space-y-16 max-w-4xl">
                    
                    {/* COLLEGE ENTRY */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 group">
                        {/* Time frame left tag */}
                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <span className="text-xs font-mono tracking-widest text-purple-400 font-bold block md:pt-1">
                                2024 — PRESENT
                            </span>
                        </div>
                        {/* Degree detail right block */}
                        <div className="md:col-span-3 border-l border-zinc-800 pl-6 md:pl-8 group-hover:border-purple-500 transition duration-300">
                            <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-100 group-hover:text-purple-400 transition duration-300">
                                B.Tech — Computer Science & Business Systems
                            </h3>
                            <p className="text-sm font-semibold tracking-wider text-zinc-500 uppercase mt-1">
                                Rajalakshmi Engineering College
                            </p>
                            <p className="text-zinc-400 text-xs mt-3 tracking-wide uppercase font-mono bg-purple-950/20 text-purple-300/80 px-3 py-1.5 inline-block rounded-none border border-purple-500/10">
                                Currently entering 3rd year
                            </p>
                        </div>
                    </div>

                    {/* 12TH GRADE ENTRY */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 group">
                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <span className="text-xs font-mono tracking-widest text-zinc-600 group-hover:text-purple-400/60 font-bold block md:pt-1 transition duration-300">
                                COMPLETED 2024
                            </span>
                        </div>
                        <div className="md:col-span-3 border-l border-zinc-800 pl-6 md:pl-8 group-hover:border-purple-500 transition duration-300">
                            <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-100 group-hover:text-purple-400 transition duration-300">
                                12th Grade / Higher Secondary
                            </h3>
                            <p className="text-sm font-semibold tracking-wider text-zinc-500 uppercase mt-1">
                                Secondary Board Education
                            </p>
                            <div className="flex items-center gap-3 mt-3 text-xs font-mono text-zinc-400">
                                <span>Performance Score:</span>
                                <span className="text-white font-bold">80%</span>
                            </div>
                        </div>
                    </div>

                    {/* 10TH GRADE ENTRY */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 group">
                        <div className="md:col-span-1 mb-2 md:mb-0">
                            <span className="text-xs font-mono tracking-widest text-zinc-600 group-hover:text-purple-400/60 font-bold block md:pt-1 transition duration-300">
                                COMPLETED 2022
                            </span>
                        </div>
                        <div className="md:col-span-3 border-l border-zinc-800 pl-6 md:pl-8 group-hover:border-purple-500 transition duration-300">
                            <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-100 group-hover:text-purple-400 transition duration-300">
                                10th Grade / Secondary School
                            </h3>
                            <p className="text-sm font-semibold tracking-wider text-zinc-500 uppercase mt-1">
                                Secondary Board Education
                            </p>
                            <div className="flex items-center gap-3 mt-3 text-xs font-mono text-zinc-400">
                                <span>Performance Score:</span>
                                <span className="text-white font-bold">80%</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Education;
