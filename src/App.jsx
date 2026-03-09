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
  Search,
  Settings,
  X,
  Minus,
  Maximize2
} from 'lucide-react';

// Assets
import StoryBoredLogo from './assets/StoryBoredLogo.png';
import StoryBoredLogoPixel from './assets/StoryBoredLogo.png'; // Using color for now
import gStoryBoredLogo from './assets/gStoryBoredLogo.png';
import gPixStoryBoredLogo from './assets/gStoryBoredLogo.png'; // Using grayscale for now

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
      <div className="os-title">{title}</div>
      <div className="os-controls">
        <div className="os-btn"><Minus size={10} /></div>
        <div className="os-btn"><Maximize2 size={10} /></div>
        <div className="os-btn"><X size={10} /></div>
      </div>
    </div>
    <div className="flex-grow overflow-auto">
      {children}
    </div>
  </div>
);

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { image: news1, tag: "DEVLOG #42", title: "NEXUS TACTICS: ALPHA DEPLOYED" },
    { image: news2, tag: "TECH REVEAL", title: "CONCEPT UI V2.0 ENGINE" },
    { image: news3, tag: "STUDIO NEWS", title: "WE ARE LIVE ON VERCEL" }
  ];

  return (
    <OSWindow title="Critical_System_Feed.exe" className="w-full h-[600px]">
      <div className="relative h-full bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img src={slides[index].image} className="w-full h-full object-cover opacity-60" alt="" />
            <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black to-transparent">
              <span className="pixel-font text-primary text-xs mb-4 block tracking-widest">{slides[index].tag}</span>
              <h2 className="pixel-font text-3xl md:text-5xl text-white mb-6 leading-tight">{slides[index].title}</h2>
              <div className="flex gap-4">
                {slides.map((_, i) => (
                  <div key={i} className={`h-1 w-12 transition-all ${i === index ? 'bg-primary' : 'bg-zinc-800'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 border border-white/10 bg-black/50 hover:bg-white/10"><ChevronLeft /></button>
        <button onClick={() => setIndex((index + 1) % slides.length)} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 border border-white/10 bg-black/50 hover:bg-white/10"><ChevronRight /></button>
      </div>
    </OSWindow>
  );
};

const TCGCard = ({ name, role, type, theme, stats, desc, image, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -10, rotateY: 5 }}
    className={`tcg-frame ${theme}`}
  >
    <div className="tcg-header">
      <span className="pixel-font text-[10px] text-white">{name}</span>
      <span className="mono-font text-xs text-white/50">{stats.cost}</span>
    </div>
    <div className="tcg-image-box">
      <img src={image} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="tcg-type-bar pixel-font">
      {type}
    </div>
    <div className="tcg-text-box">
      <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
        <Icon size={12} className="text-white/40" />
        <span className="pixel-font text-[8px] uppercase tracking-tighter text-white/60">{role}</span>
      </div>
      <p className="mono-font text-[10px] italic">{desc}</p>
    </div>
    <div className="tcg-stats-footer">
      <div className="tcg-stat-badge">{stats.power}/{stats.defense}</div>
    </div>
  </motion.div>
);

const App = () => {
  const { scrollY } = useScroll();
  const [logoMode, setLogoMode] = useState('gPix');

  useEffect(() => {
    return scrollY.onChange(latest => {
      if (latest < 200) setLogoMode('gPix');
      else if (latest < 400) setLogoMode('Pix');
      else if (latest < 600) setLogoMode('g');
      else setLogoMode('Color');
    });
  }, [scrollY]);

  const team = [
    { name: "Shaine Perera", role: "S.Dev & Project Manager", type: "Cyber-lead", theme: "theme-cyber", stats: { cost: "7", power: "99", defense: "85" }, desc: "Architect of the Nexus. Logical manifestor.", image: shaineArt, icon: Cpu },
    { name: "Solomon Vance", role: "Backend Archmage", type: "Mythic Archmage", theme: "theme-fantasy", stats: { cost: "8", power: "80", defense: "95" }, desc: "Data weaver. Guard of Core Protocols.", image: archmageArt, icon: Sword },
    { name: "Jax Hollow", role: "Sound Scavenger", type: "Apocalyptic Elite", theme: "theme-apoc", stats: { cost: "5", power: "75", defense: "60" }, desc: "Mistress of noise into aesthetic melody.", image: scavengerArt, icon: Flame },
    { name: "Lulu Star", role: "UI/UX Whiz", type: "Academy Prodigy", theme: "theme-school", stats: { cost: "4", power: "60", defense: "40" }, desc: "The aesthetics specialist. Pixel perfectionist.", image: schoolArt, icon: Star },
    { name: "Freya Frost", role: "Combat Designer", type: "Valkyrie Elite", theme: "theme-valk", stats: { cost: "6", power: "90", defense: "70" }, desc: "System balancer and lore guardian.", image: valkyrieArt, icon: Shield }
  ];

  const getLogo = () => {
    switch(logoMode) {
      case 'gPix': return gPixStoryBoredLogo;
      case 'Pix': return StoryBoredLogoPixel;
      case 'g': return gStoryBoredLogo;
      default: return StoryBoredLogo;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="top-nav-banner">
        <div className="nav-links-left hidden md:flex">
          <a className="nav-link">[ Games ]</a>
          <a className="nav-link">[ About ]</a>
        </div>
        
        <div className="studio-logo-center">
          <img src={getLogo()} className="w-12 h-12 object-contain mb-1" />
          <span className="pixel-font text-[10px] tracking-tighter">StoryBored Studios</span>
        </div>

        <div className="nav-links-right hidden md:flex">
          <a className="nav-link">[ Intel ]</a>
          <a className="nav-link">[ Laboratory ]</a>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-8 pt-32">
        <div className="news-carousel-container mb-32">
          <NewsCarousel />
        </div>

        <section id="team" className="mb-48">
          <div className="flex items-center gap-4 mb-20 px-4">
            <h2 className="pixel-font text-2xl text-white">Personnel_Roster.sys</h2>
            <div className="h-[2px] flex-grow bg-white/5" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((m, i) => <TCGCard key={i} {...m} />)}
          </div>
        </section>

        <section id="laboratory" className="mb-48 px-10">
          <OSWindow title="Tech_Stack_Exploration.dmg" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 p-12 items-center gap-20">
              <div>
                <h3 className="pixel-font text-4xl text-primary mb-12 italic">Concept_UI Engine</h3>
                <p className="mono-font text-zinc-500 leading-relaxed text-lg italic">
                  Pushing raw logical density into visual manifestations. 
                  Our proprietary engine for bridging narrative and execution.
                </p>
                <button className="mt-12 px-8 py-4 border border-primary text-primary pixel-font text-xs hover:bg-primary/10 transition-all">
                   INITIATE_PROPORTION_PROTOCOL
                </button>
              </div>
              <div className="border border-white/5 p-4 rounded-lg bg-black/40">
                <div className="flex justify-between mb-4 mono-font text-[10px] text-zinc-700">
                  <span>SYSTEM LOAD: 42%</span>
                  <span>LATENCY: 12ms</span>
                </div>
                <div className="h-64 bg-zinc-900 overflow-hidden relative rounded">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </OSWindow>
        </section>
      </main>

      <footer className="studio-footer">
        © 2026 STORYBORED STUDIOS // ALL RIGHTS OBSERVED // [ SYSTEM VERSION 4.2.0 ]
      </footer>
    </div>
  );
};

export default App;
