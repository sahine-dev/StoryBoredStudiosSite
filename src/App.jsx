import React, { useState, useEffect } from 'react';
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
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" 
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[100px] animate-pulse" 
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass-panel px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center glow-shadow">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">StoryBored<span className="text-purple-400">Studios</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#games" className="hover:text-purple-400 transition-colors">Games</a>
            <a href="#vision" className="hover:text-purple-400 transition-colors">Vision</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-white/5">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-48 pb-32 overflow-hidden">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-8 inline-block">
              Interactive Storytelling Reimagined
            </span>
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
              We Build <span className="premium-gradient">Worlds</span><br />
              Beyond <span className="premium-gradient">Boredom</span>.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
              StoryBored Studios is a next-generation game development collective focused on deep narratives, 
              stunning aesthetics, and mechanical precision.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 glow-shadow hover:scale-105 transition-all">
                Explore Games
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 rounded-2xl border border-white/10 glass-panel font-bold text-lg hover:bg-white/5 transition-all">
                Our Vision
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Project Section */}
      <section id="games" className="relative z-10 py-32 bg-zinc-950/50">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl mb-6">Current Projects</h2>
              <p className="text-zinc-400 text-lg">
                We are currently crafting high-fidelity experiences across multiple genres, 
                blending traditional mechanics with innovative technology.
              </p>
            </div>
            <button className="flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all">
              View All Pipeline <MoveRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Game Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[600px] rounded-[40px] overflow-hidden glass-panel p-12 flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=2000')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase">In Development</div>
                  <div className="flex gap-1">
                    <Monitor className="w-4 h-4 text-zinc-500" />
                    <Smartphone className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
                <h3 className="text-4xl mb-4 uppercase tracking-tighter">Nexus Tactics RL</h3>
                <p className="text-zinc-300 text-lg mb-8 max-w-md">
                  A revolutionary rogue-lite card battler featuring a dynamic UI engine 
                  built for the modern strategist.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>

            <div className="grid grid-rows-2 gap-8">
              <div className="glass-panel p-10 flex flex-col justify-between hover:bg-white/5 transition-all">
                <div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="text-purple-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl mb-4">Concept UI Engine</h3>
                  <p className="text-zinc-400">Our proprietary interface system designed for extreme performance and aesthetics.</p>
                </div>
                <button className="text-sm font-bold text-purple-400 uppercase tracking-widest hover:text-white transition-colors">Explore Tech</button>
              </div>
              <div className="glass-panel p-10 flex flex-col justify-between hover:bg-white/5 transition-all">
                <div>
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Users className="text-pink-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl mb-4">Core Systems</h3>
                  <p className="text-zinc-400">Deep integration tools for multiplayer lobbies, social layers, and persistent stats.</p>
                </div>
                <button className="text-sm font-bold text-pink-400 uppercase tracking-widest hover:text-white transition-colors">View Features</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Footer */}
      <footer className="relative z-10 pt-32 pb-16">
        <div className="section-container border-t border-white/5 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">StoryBored<span className="text-purple-400">Studios</span></span>
              </div>
              <p className="text-zinc-400 text-lg max-w-sm mb-8">
                Redefining the digital boundary. We don't just make games; we craft digital legacies for the bold and the bored.
              </p>
              <div className="flex gap-6">
                <Twitter className="w-6 h-6 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-6 h-6 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                <MessageSquare className="w-6 h-6 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase tracking-widest text-zinc-500 font-bold">Navigation</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#games" className="hover:text-purple-400 transition-colors">Our Games</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-8 uppercase tracking-widest text-zinc-500 font-bold">Contact</h4>
              <ul className="space-y-4 text-zinc-400 font-medium">
                <li><a href="mailto:hello@storybored.com" className="hover:text-purple-400 transition-colors">hello@storybored.com</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-white/5 text-zinc-500 text-sm font-medium">
            <p>© 2026 StoryBored Studios. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
