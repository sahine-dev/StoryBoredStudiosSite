import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  Zap, 
  Users, 
  ChevronRight, 
  Github, 
  Twitter, 
  MessageSquare,
  MoveRight,
  Monitor,
  Smartphone,
  Globe,
  Layers,
  Search,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// Assets (imported as relative paths for Vite)
import nexusHero from './assets/nexus_tactics_hero.png';
import conceptUI from './assets/concept_ui_preview.png';
import missionVisual from './assets/studio_mission_visual.png';

const SectionHeader = ({ title, subtitle, accent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-16"
    >
      <span className={`text-xs font-black uppercase tracking-[0.3em] ${accent || 'text-purple-500'} mb-4 block`}>
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-6xl font-black">{title}</h2>
    </motion.div>
  );
};

const GameCard = ({ title, description, badge, image, platforms, accentGlow }) => {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative h-[650px] rounded-[48px] overflow-hidden glass-panel p-10 flex flex-col justify-end border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Accent Glow Overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,var(--primary),transparent_70%)]`} />

      <div className="relative z-20">
        <div className="flex items-center gap-3 mb-6">
          <div className={`px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10 text-[10px] font-black uppercase tracking-widest`}>
            {badge}
          </div>
          <div className="flex gap-2">
            {platforms.map((P, i) => <P key={i} className="w-4 h-4 text-white/50" />)}
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl mb-4 font-black tracking-tighter uppercase italic">{title}</h3>
        <p className="text-zinc-300 text-lg mb-8 max-w-md leading-relaxed">
          {description}
        </p>
        <button className="group/btn relative px-8 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-emerald-400">
          <span className="relative z-10 flex items-center gap-2">
            Learn More <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

const App = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen relative bg-[#050507] text-[#f8f8f8] selection:bg-purple-500/30">
      
      {/* Ultra-Premium Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[160px] animate-pulse duration-[8s]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[140px] animate-pulse duration-[10s]" />
        <div className="absolute top-[30%] right-[15%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[120px] animate-pulse duration-[12s]" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass-panel-strong h-20 px-10 rounded-full pointer-events-auto border-white/10 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-emerald-500 rounded-2xl flex items-center justify-center glow-shadow-primary transform rotate-3 hover:rotate-0 transition-transform">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none uppercase italic">StoryBored</span>
              <span className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase">Studios</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full" />
            </a>
            <a href="#games" className="hover:text-white transition-colors relative group">
              Games
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </a>
            <a href="#tech" className="hover:text-white transition-colors relative group">
              Technology
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full" />
            </a>
            <button className="bg-white text-black px-8 py-3 rounded-full font-black hover:bg-emerald-400 transition-all shadow-xl shadow-white/5 uppercase italic">
              Connect
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-64 pb-48 flex items-center justify-center overflow-hidden">
        <div className="section-container text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel border-white/10 mb-12 animate-float">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-300">New Era of Interactive Fiction</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl mb-12 font-black leading-[0.85] tracking-tighter uppercase italic">
              Crafting <span className="premium-gradient">Digital</span><br />
              <span className="text-white">Odysseys</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              StoryBored Studios is a vanguard creative laboratory 
              dedicated to shattering the mundane. We design experiences 
              where mechanical depth meets cinematic soul.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button className="group relative bg-[#f8f8f8] text-black px-12 py-6 rounded-[24px] font-black text-lg uppercase tracking-widest overflow-hidden transition-all shadow-2xl hover:bg-purple-500 hover:text-white">
                <span className="relative z-10 flex items-center gap-3 italic">
                  Explore The Hub <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="group px-12 py-6 rounded-[24px] border border-white/10 glass-panel font-black text-lg uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-3 opacity-60 hover:opacity-100">
                Manifesto <Layers className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Projects Showcase */}
      <section id="games" className="relative z-10 py-48">
        <div className="section-container">
          <SectionHeader 
            subtitle="The Pipeline" 
            title="Current Manifestations" 
            accent="text-emerald-500"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GameCard 
              title="Nexus Tactics RL"
              description="A revolutionary rogue-lite card battler. Navigate the algorithmic abyss with deck-building precision and high-fidelity tactical feedback."
              badge="Actively Crafting"
              image={nexusHero}
              platforms={[Monitor, Smartphone]}
              accentGlow="emerald"
            />
            
            <div className="flex flex-col gap-12">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glass-panel p-12 flex-1 border-white/5 group relative overflow-hidden"
              >
                <div 
                  className="absolute inset-x-0 bottom-0 h-48 bg-cover bg-bottom opacity-10 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundImage: `url(${conceptUI})` }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20">
                    <Zap className="text-purple-400 w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase italic mb-6">Concept UI Engine</h3>
                  <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Our proprietary interface framework optimized for low-latency feedback 
                    and extreme visual fidelity in modern web environments.
                  </p>
                  <button className="text-[10px] font-black text-purple-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group">
                    Technical Specifications <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glass-panel p-12 flex-1 border-white/5 group"
              >
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-8 border border-pink-500/20">
                  <Globe className="text-pink-400 w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-6">Global Nexus</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  The social backbone of our ecosystem. Real-time multiplayer lobbies, 
                  cross-platform saves, and deep community integration.
                </p>
                <button className="text-[10px] font-black text-pink-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group">
                  Ecosystem Depth <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / About */}
      <section id="about" className="relative z-10 py-48 bg-[#0a0a0c]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500 mb-8 block">Our Ethos</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-10 leading-none">
                Ending the age of <span className="text-zinc-700 text-stroke-1">Boredom</span>.
              </h2>
              <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                We believe that every interaction should be meaningful. 
                At StoryBored, we don't just ship products; we build legacies. 
                Our mission is to create digital artifacts that resonate with the 
                human soul and push the boundaries of what's possible in the browser.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: Zap, text: "Uncompromising Technical Precision" },
                  { icon: Layers, text: "High-Aesthetic Design Language" },
                  { icon: Users, text: "Deep Community-Centric Logic" }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-4 group cursor-default"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 transition-colors">
                      <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-purple-400" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-zinc-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-emerald-600/20 rounded-[64px] blur-3xl animate-pulse" />
              <img 
                src={missionVisual} 
                alt="StoryBored Mission" 
                className="relative z-10 w-full h-full object-cover rounded-[64px] border border-white/10 shadow-3xl grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="relative z-10 pt-48 pb-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black italic transform rotate-6">
                  S
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter italic">StoryBored<span className="text-purple-500">Studios</span></span>
              </div>
              <p className="text-zinc-500 text-lg max-w-sm mb-12 uppercase tracking-wide">
                Digital legacies for the bold and the bored. Building worlds beyond the mundane.
              </p>
              <div className="flex gap-10">
                {[Twitter, Github, MessageSquare].map((Icon, i) => (
                  <Icon key={i} className="w-7 h-7 text-zinc-700 hover:text-white cursor-pointer transition-all hover:-translate-y-1" />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-10">Intelligence Hub</h4>
              <ul className="space-y-6 text-sm font-black uppercase tracking-widest text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Press Portal</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Engineering Blog</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Brand Assets</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-10">Laboratory</h4>
              <ul className="space-y-6 text-sm font-black uppercase tracking-widest text-zinc-500">
                <li><a href="mailto:shaine@storybored.com" className="hover:text-white transition-colors group">
                  Hire Us <ArrowUpRight className="inline w-3 h-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">Current Ops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
            <p>© 2026 StoryBored Studios // Core Protocol v4.2.0</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
