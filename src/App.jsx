import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Cpu, 
  Sword, 
  Flame, 
  Star, 
  Shield,
  X,
  Minus,
  Maximize2,
  Terminal,
  Zap
} from 'lucide-react';

// Assets
import StoryBoredLogo from './assets/StoryBoredLogo.png';
import gStoryBoredLogo from './assets/gStoryBoredLogo.png';

import shaineArt from './assets/shaine_cyberpunk_tcg.png';
import archmageArt from './assets/archmage_fantasy_tcg.png';
import scavengerArt from './assets/scavenger_apocalyptic_tcg.png';
import schoolArt from './assets/anime_school_tcg.png';
import valkyrieArt from './assets/valkyrie_folklore_tcg.png';

import news1 from './assets/news_banner_1.png';
import news2 from './assets/news_banner_2.png';
import news3 from './assets/news_banner_3.png';

const OSWindow = ({ title, children, className = "" }) => (
  <div className={`os-window ${className}`}>
    <div className="os-title-bar">
      <div className="flex items-center gap-2">
        <Terminal size={12} className="text-primary" />
        <div className="os-title">{title}</div>
      </div>
      <div className="os-controls">
        <div className="os-btn"><Minus size={10} /></div>
        <div className="os-btn"><Maximize2 size={10} /></div>
        <div className="os-btn"><X size={10} /></div>
      </div>
    </div>
    <div className="flex-grow overflow-auto p-1">
      {children}
    </div>
  </div>
);

const TCGCardV4 = ({ name, role, type, theme, stats, desc, image, icon: Icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      className={`tcg-frame-v4 ${theme}`}
    >
      <div className="inner-border" />
      <div className="tcg-v4-header">
        <span className="tcg-v4-title uppercase">{name}</span>
        <div className="flex items-center gap-1">
          <Zap size={10} className="text-primary animate-pulse" />
          <span className="mono-font text-[10px] text-white/40">{stats.cost}</span>
        </div>
      </div>
      
      <div className="tcg-v4-img-container">
        <img src={image} className="tcg-v4-img" alt="" />
      </div>

      <div className="tcg-v4-type-line">
        {type}
      </div>

      <div className="tcg-v4-text-area">
        <div className="tcg-v4-role-badge">
          {role}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Icon size={14} className="text-white/20" />
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>
        <p className="tcg-v4-desc">
          {desc}
        </p>
      </div>

      <div className="tcg-v4-footer">
        <div className="tcg-v4-stat-box">
          {stats.power}/{stats.defense}
        </div>
      </div>
    </motion.div>
  );
};

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { image: news1, tag: "DEVLOG_42.sys", title: "NEXUS TACTICS: ALPHA READY" },
    { image: news2, tag: "ENGINE_LOG.dat", title: "CONCEPT UI V2.0 REVEAL" },
    { image: news3, tag: "STUDIO_UPDATE.exe", title: "WE ARE LIVE ON VERCEL" }
  ];

  return (
    <OSWindow title="Critical_Data_Stream.bin" className="w-full h-[550px]">
      <div className="relative h-full bg-[#050507]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <img src={slides[index].image} className="w-full h-full object-cover opacity-40 mix-blend-screen" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-16">
              <span className="pixel-font text-primary text-[10px] mb-4 block tracking-[0.4em]">{slides[index].tag}</span>
              <h2 className="pixel-font text-2xl md:text-4xl text-white mb-8 tracking-tighter leading-none">{slides[index].title}</h2>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <div key={i} className={`h-1 transition-all ${i === index ? 'w-16 bg-primary' : 'w-4 bg-zinc-800'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)} className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/5 bg-black/40 hover:bg-white/5 flex items-center justify-center"><ChevronLeft size={20}/></button>
        <button onClick={() => setIndex((index + 1) % slides.length)} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/5 bg-black/40 hover:bg-white/5 flex items-center justify-center"><ChevronRight size={20}/></button>
      </div>
    </OSWindow>
  );
};

const App = () => {
  const team = [
    { name: "Shaine Perera", role: "Software Developer & Project Manager", type: "High-Tier Cyber-Link", theme: "v4-cyber", stats: { cost: "100", power: "99", defense: "85" }, desc: "Master of logical manifestations. Oversees the Nexus architecture with surgical precision.", image: shaineArt, icon: Cpu },
    { name: "Solomon Vance", role: "Lead Systems Architect", type: "Mythic Data-Weaver", theme: "v4-cyber", stats: { cost: "80", power: "80", defense: "95" }, desc: "Keeper of the core protocols. His algorithms are the foundation of StoryBored's reality.", image: archmageArt, icon: Sword },
    { name: "Jax Hollow", role: "Audio Experience Lead", type: "Elite Noise-Scavenger", theme: "v4-cyber", stats: { cost: "60", power: "75", defense: "60" }, desc: "Transmutes mechanical discord into atmospheric perfection. The voice of the wasteland.", image: scavengerArt, icon: Flame }
  ];

  return (
    <div className="min-h-screen bg-[#08080a] selection:bg-primary/30">
      <nav className="top-nav-banner">
        <div className="nav-links-left hidden md:flex items-center">
          <a className="nav-link" href="#games">[ Games ]</a>
          <a className="nav-link" href="#about">[ About ]</a>
        </div>
        
        <div className="studio-logo-center">
          <img src={StoryBoredLogo} alt="Logo" className="w-10 h-10 object-contain mb-1" />
          <span className="pixel-font text-[10px] tracking-[-0.05em] text-white">STORYBORED STUDIOS</span>
        </div>

        <div className="nav-links-right hidden md:flex items-center">
          <a className="nav-link" href="#intel">[ Intel ]</a>
          <a className="nav-link" href="#lab">[ Lab ]</a>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-10 pt-48">
        <div id="intel" className="mb-40">
          <NewsCarousel />
        </div>

        <section id="team" className="mb-60">
          <div className="flex items-center gap-6 mb-24">
            <div className="pixel-font text-white bg-zinc-900 px-4 py-2 border border-white/5 text-sm uppercase">Personnel_Roster.dat</div>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-16">
            {team.map((m, i) => <TCGCardV4 key={i} {...m} />)}
          </div>
        </section>

        <section id="lab" className="mb-60">
          <OSWindow title="Lab_Reports_0.0.1.pdf" className="w-full">
            <div className="p-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="pixel-font text-3xl text-primary mb-10 italic">Core_UI_Manifest</h3>
                <p className="mono-font text-zinc-500 leading-relaxed italic text-lg">
                  Bridging the gap between high-level logic and visual manifestation. 
                  Our proprietary engine for StoryBored experiences.
                </p>
              </div>
              <div className="aspect-video bg-zinc-950 border border-white/5 rounded flex items-center justify-center">
                <div className="w-20 h-20 border border-primary/20 rounded-full animate-ping" />
              </div>
            </div>
          </OSWindow>
        </section>
      </main>

      <footer className="studio-footer">
        © 2026 STORYBORED STUDIOS // ALL RIGHTS OBSERVED // [ SYSTEM VERSION 4.2.5 ]
      </footer>
    </div>
  );
};

export default App;
