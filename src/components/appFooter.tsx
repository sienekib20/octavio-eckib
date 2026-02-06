import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook, Globe, Instagram, Mail, MapPin, ShieldCheck, Twitter } from 'lucide-react';
import React from 'react';

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: ["Shop All", "Latest Drops", "Elite Club", "Track Order"]
    },
    {
      title: "Support",
      links: ["Shipping Policy", "Returns", "Terms of Service", "Privacy"]
    },
    {
      title: "Company",
      links: ["About ECKIB", "Our Story", "Global Hubs", "Careers"]
    }
  ];

  return (
    <footer className="bg-[#080808] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      {/* --- NEWSLETTER SECTION (HIGH IMPACT) --- */}
      <div className="max-w-[1600px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              JOIN THE <span className="text-yellow-500">NETWORK</span>
            </h3>
            <p className="text-white/40 text-sm md:text-lg font-medium uppercase tracking-widest max-w-md">
              Subscreva para receber notificações de drops exclusivos e atualizações de logística prioritária.
            </p>
          </div>
          
          <div className="relative">
            <input 
              type="email" 
              placeholder="ENTER_YOUR_EMAIL_ADDRESS" 
              className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl md:text-2xl font-black text-white outline-none focus:border-yellow-500 transition-colors uppercase tracking-tighter"
            />
            <button className="absolute right-0 bottom-6 text-yellow-500 hover:text-white transition-colors">
              <ArrowUpRight size={40} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-32">
        
        {/* BRAND INFO */}
        <div className="col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-black font-black text-2xl italic shadow-[0_0_30px_rgba(255,204,0,0.2)]">
              E
            </div>
            <span className="text-3xl font-black tracking-tighter text-white uppercase italic">ECKIB</span>
          </div>
          <p className="text-white/30 text-xs font-bold leading-relaxed uppercase tracking-widest max-w-xs">
            A infraestrutura de moda mais rápida de Angola. Conectando o mercado nacional ao luxo global via DHL Express & IMA Angola.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <motion.a 
                key={i} 
                whileHover={{ y: -5, color: '#FFCC00' }}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 cursor-pointer"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* LINKS COLUMNS */}
        {footerLinks.map((group, i) => (
          <div key={i} className="space-y-6">
            <h4 className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase">{group.title}</h4>
            <ul className="space-y-4">
              {group.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="text-white/40 hover:text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-yellow-500 group-hover:w-4 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT INFO */}
        <div className="space-y-6">
          <h4 className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase">Headquarters</h4>
          <div className="space-y-4 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-yellow-500" />
              <span>Luanda Hub, Angola</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-yellow-500" />
              <span>logistics@eckib.ao</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={14} className="text-yellow-500" />
              <span>Available Globally</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR (THE CERTIFICATION) --- */}
      <div className="max-w-[1600px] mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">IMA_Certified_Entity_2026</span>
           </div>
           <div className="h-4 w-px bg-white/20 hidden md:block" />
           <span className="text-[9px] font-black uppercase tracking-[0.3em]">DHL_Logistics_Partner</span>
           <div className="h-4 w-px bg-white/20 hidden md:block" />
           <span className="text-[9px] font-black uppercase tracking-[0.3em]">Angola_Hub_Dispatch</span>
        </div>

        <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] flex flex-col items-center md:items-end">
          <span>&copy; {currentYear} ECKIB LOGISTICS GROUP</span>
          <span className="text-yellow-500/40 mt-1">Engineered for High Performance</span>
        </div>
      </div>

      {/* BACKGROUND DECOR (O "CARIMBO" GIGANTE NO FUNDO) */}
      <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-[0.02]">
        <h1 className="text-[25vw] font-black italic select-none">ECKIB</h1>
      </div>
    </footer>
  );
};

export default AppFooter;