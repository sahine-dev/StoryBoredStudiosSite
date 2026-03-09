import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  Zap, 
  Users, 
  ChevronRight, 
  ChevronLeft,
  Github, 
  Twitter, 
  MessageSquare,
  MoveRight,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  Search,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  ZapOff,
  Flame,
  Sword,
  Shield,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// Assets
import StoryBoredLogo from './assets/StoryBoredLogo.png';
import gStoryBoredLogo from './assets/gStoryBoredLogo.png';
import PixStoryBoredLogo from './assets/StoryBoredLogoPixel.png';
import gPixStoryBoredLogo from './assets/gPixStoryBoredLogo.png';

import nexusHero from './assets/nexus_tactics_hero.png';
import conceptUI from './assets/concept_ui_preview.png';
import missionVisual from './assets/studio_mission_visual.png';

import shaineArt from './assets/shaine_cyberpunk_tcg.png';
import archmageArt from './assets/archmage_fantasy_tcg.png';
import scavengerArt from './assets/scavenger_apocalyptic_tcg.png';

import news1 from './assets/news_banner_1.png';
import news2 from './assets/news_banner_2.png';
import news3 from './assets/news_banner_3.png';

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      image: news1,
      tag: "Project Update",
      title: "Nexus Tactics: Roguelite Card Evolution",
      desc: "Deep diving into the new procedural deck-building algorithms powering our flagship title."
    },
    {
      image: news2,
      tag: "Technology",
      title: "Concept UI v2.0 Revealed",
      desc: "Pushing the boundaries of web-based game interfaces with our proprietary glassmorphism engine."
    },
    {
      image: news3,
      tag: "Studio",
      title: "StoryBored Studios Hits Vercel",
      desc: "Our digital hub is officially live. Explore the future of interactive storytelling today."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <img src={slides[index].image} className="w-full h-full object-cover" alt="" />
          
          <div className="absolute inset-x-0 bottom-0 z-20 p-20 flex flex-col items-center text-center">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              {slides[index].tag}
            </motion.span>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black uppercase italic mb-8 max-w-5xl tracking-tighter"
            >
              {slides[index].title}
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-zinc-400 max-w-2xl mb-12"
            >
              {slides[index].desc}
            </motion.p>
            <div className="flex gap-4">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => setIndex(i)}
                  className={`carousel-dot cursor-pointer ${i === index ? 'active' : ''}`} 
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button 
        onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all opacity-0 hover:opacity-100"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={() => setIndex((index + 1) % slides.length)}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all opacity-0 hover:opacity-100"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

const TCGCard = ({ name, role, type, theme, stats, desc, image, icon: Icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -20, rotateY: 10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`tcg-card ${theme}`}
    >
      <div className="tcg-card-content">
        <div className="tcg-card-header">
          <span className="tcg-card-title">{name}</span>
          <span className="tcg-card-cost">{stats.cost}</span>
        </div>
        
        <div className="tcg-card-image-box">
          <img src={image} className="tcg-card-image" alt="" />
        </div>
        
        <div className="tcg-card-type-bar">
          {type}
        </div>
        
        <div className="tcg-card-desc-box">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-3 h-3 text-white" />
            <span className="font-black uppercase tracking-widest text-[8px]">{role}</span>
          </div>
          <p>{desc}</p>
        </div>
        
        <div className="tcg-card-stats">
          {stats.power} / {stats.defense}
        </div>
      </div>
    </motion.div>
  );
};

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const sections = [
    { label: "Home", id: "home" },
    { label: "Intel", id: "news" },
    { label: "Games", id: "games" },
    { label: "The Team", id: "team" },
    { label: "Laboratory", id: "laboratory" },
    { label: "Careers", id: "careers" },
    { label: "Press Kit", id: "press" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="menu-overlay"
        >
          <div className="absolute top-10 right-10">
            <button onClick={() => setIsOpen(false)} className="w-16 h-16 glass-panel flex items-center justify-center hover:rotate-90 transition-transform">
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex flex-col gap-8">
            {sections.map((item, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="menu-link"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          
          <div className="absolute bottom-10 flex gap-8">
            <Twitter className="w-6 h-6 text-zinc-500 hover:text-white cursor-pointer" />
            <Github className="w-6 h-6 text-zinc-500 hover:text-white cursor-pointer" />
            <MessageSquare className="w-6 h-6 text-zinc-500 hover:text-white cursor-pointer" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [logoMode, setLogoMode] = useState('gPix'); // gPix, Pix, g, Color

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 300) setLogoMode('gPix');
      else if (latest < 600) setLogoMode('Pix');
      else if (latest < 900) setLogoMode('g');
      else setLogoMode('Color');
    });
  }, [scrollY]);

  const getLogo = () => {
    switch(logoMode) {
      case 'gPix': return gPixStoryBoredLogo;
      case 'Pix': return PixStoryBoredLogo;
      case 'g': return gStoryBoredLogo;
      default: return StoryBoredLogo;
    }
  };

  const team = [
    {
      name: "Shaine Perera",
      role: "S.Dev & Project Manager",
      type: "Legendary Cyber-Lead",
      theme: "card-cyberpunk",
      stats: { cost: "7", power: "99", defense: "85" },
      desc: "Architect of the Nexus. Manifests high-fidelity realities through sheer logic and mechanical precision.",
      image: shaineArt,
      icon: Cpu
    },
    {
      name: "Solomon Vance",
      role: "Backend Archmage",
      type: "Mythic Archmage",
      theme: "card-fantasy",
      stats: { cost: "8", power: "80", defense: "95" },
      desc: "Keeper of the Core Protocols. Weaves complex data structures into unbreakable digital fortresses.",
      image: archmageArt,
      icon: Sword
    },
    {
      name: "Jax Hollow",
      role: "Sound Scavenger",
      type: "Apocalyptic Elite",
      theme: "card-apocalyptic",
      stats: { cost: "5", power: "75", defense: "60" },
      desc: "Transmutes industrial noise into atmospheric masterpieces. Finds melody in the rusted silence of the wasteland.",
      image: scavengerArt,
      icon: Flame
    }
  ];

  return (
    <div id="home" className="min-h-screen relative bg-[#050507] text-[#f8f8f8] selection:bg-purple-500/30">
      <HamburgerMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-8 pointer-events-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center h-24 px-12 pointer-events-auto">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="relative w-16 h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <img 
                src={getLogo()} 
                className="w-full h-full object-contain filter drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))" 
                alt="StoryBored Logo" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter uppercase italic leading-none group-hover:text-primary transition-colors">StoryBored</span>
              <span className="text-[10px] font-black tracking-[0.5em] text-zinc-500 uppercase">Studios</span>
            </div>
          </div>
          
          <button 
            onClick={() => setMenuOpen(true)}
            className="w-16 h-16 rounded-3xl glass-panel-strong flex items-center justify-center hover:bg-white/10 transition-all border-white/10 group"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <div className="w-8 h-1 bg-white rounded-full group-hover:w-4 transition-all" />
              <div className="w-5 h-1 bg-white rounded-full group-hover:w-8 transition-all" />
              <div className="w-8 h-1 bg-white rounded-full group-hover:w-6 transition-all" />
            </div>
          </button>
        </div>
      </nav>

      <section id="news">
        <NewsCarousel />
      </section>

      {/* Hero Overlap Section */}
      <header className="relative z-10 pt-48 pb-64 flex items-center justify-center overflow-hidden">
        <div className="section-container text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-8xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic mb-16">
              World<br />
              <span className="premium-gradient">Builders</span>.
            </h1>
            
            <p className="text-2xl md:text-3xl text-zinc-400 max-w-4xl mx-auto mb-20 font-light leading-relaxed">
              We are a collective of digital scavengers, architects, and dreamers 
              shattering the boundary between storytelling and mechanical perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <button className="group relative bg-[#f8f8f8] text-black px-16 py-8 rounded-[32px] font-black text-xl uppercase tracking-widest overflow-hidden transition-all shadow-3xl hover:bg-emerald-400">
                <span className="relative z-10 flex items-center gap-3">
                  The Games <MoveRight className="group-hover:translate-x-3 transition-transform" />
                </span>
              </button>
              
              <button className="px-16 py-8 rounded-[32px] border-2 border-white/10 glass-panel font-black text-xl uppercase tracking-widest hover:bg-white/5 transition-all opacity-40 hover:opacity-100">
                Studio Ethos
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Team TCG Section */}
      <section id="team" className="relative z-10 py-64 bg-zinc-950/30">
        <div className="section-container">
          <div className="text-center mb-32">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-8 block">Project Personnel</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic">The <span className="text-stroke-1 text-zinc-800">Creators</span>.</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-16">
            {team.map((member, i) => (
              <TCGCard key={i} {...member} />
            ))}
          </div>

          <div className="mt-32 text-center">
            <p className="text-zinc-500 font-black uppercase tracking-[0.2em] mb-8">Want to join the roster?</p>
            <button className="group text-white font-black uppercase tracking-[0.4em] text-sm flex items-center gap-3 mx-auto hover:text-emerald-400 transition-colors">
              View All Openings <Plus className="w-5 h-5 group-hover:rotate-180 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Laboratory Section (Tech) */}
      <section id="laboratory" className="relative z-10 py-64">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-8 block">Laboratory</span>
              <h2 className="text-6xl font-black uppercase italic mb-12">The Concept<br /><span className="text-emerald-500">UI Engine</span></h2>
              <p className="text-xl text-zinc-400 mb-16 leading-relaxed">
                Our proprietary framework built for extreme visual fidelity. 
                Integrating raw performance with high-end glassmorphism, 
                it's the heart of every StoryBored experience.
              </p>
              <button className="flex items-center gap-4 text-emerald-400 font-black uppercase tracking-widest hover:gap-8 transition-all">
                Read Whitepaper <MoveRight />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
              <img src={conceptUI} className="relative z-10 rounded-[48px] border border-white/10 shadow-3xl" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-48 pb-20 border-t border-white/5">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-20 text-center md:text-left">
            <div>
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <img src={StoryBoredLogo} className="w-10 h-10 object-contain" alt="" />
                <span className="text-2xl font-black uppercase italic tracking-tighter">StoryBored<span className="text-primary">Studios</span></span>
              </div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs max-w-sm">
                Next-generation interactive storytelling collective. Shattering boredom since 2026.
              </p>
            </div>
            
            <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Github</a>
            </div>
          </div>
          
          <div className="mt-40 text-center text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800">
            © 2026 StoryBored Studios // Deploying Production v4.2.0-Alpha
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
