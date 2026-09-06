import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/experience';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    /* Locks your picture directly to the screen glass behind all components */
    <div 
      className="bg-black text-white font-sans scroll-smooth min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/src/components/image/naan.png')" }}
    >
      
      {/* 1. HOME: The curtain peels open on scroll */}
      <Home />
      
      {/* Container wrapper made completely transparent (bg-transparent) to let the photo shine through */}
      <div className="relative z-30 bg-transparent shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
        
        {/* ABOUT SECTION */}
        <About />

        {/* 1-INCH TRANSPARENT SPACER GAP */}
        <div className="w-full bg-black/40 backdrop-blur-sm py-12 flex items-center justify-center border-t border-b border-purple-500/5">
            <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] text-center select-none animate-pulse">
                ✦ Structuring logic // Sculpting experience ✦
            </p>
        </div>

        {/* 2. SKILLS SECTION */}
        <Skills />

        {/* 1-INCH TRANSPARENT SPACER GAP */}
        <div className="w-full bg-black/40 backdrop-blur-sm py-12 flex items-center justify-center border-t border-b border-purple-500/5">
            <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] text-center select-none animate-pulse">
                ✦ Structuring logic // Sculpting experience ✦
            </p>
        </div>

        {/* 3. EXPERIENCE SECTION */}
        <Experience />

        {/* 1-INCH TRANSPARENT SPACER GAP */}
        <div className="w-full bg-black/40 backdrop-blur-sm py-12 flex items-center justify-center border-t border-b border-purple-500/5">
            <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] text-center select-none animate-pulse">
                ✦ Structuring logic // Sculpting experience ✦
            </p>
        </div>

        {/* 4. PROJECTS SECTION */}
        <Project />

        {/* 1-INCH TRANSPARENT SPACER GAP */}
        <div className="w-full bg-black/40 backdrop-blur-sm py-12 flex items-center justify-center border-t border-b border-purple-500/5">
            <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] text-center select-none animate-pulse">
                ✦ Structuring logic // Sculpting experience ✦
            </p>
        </div>

        {/* 5. EDUCATION SECTION */}
        <Education />
            {/* 1-INCH TRANSPARENT SPACER GAP */}
        <div className="w-full bg-black/40 backdrop-blur-sm py-12 flex items-center justify-center border-t border-b border-purple-500/5">
            <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] text-center select-none animate-pulse">
                ✦ Structuring logic // Sculpting experience ✦
            </p>
        </div>
        {/* 6. CONTACT SECTION */}
        <Contact />

      </div>
    </div>
  );
}

export default App;
