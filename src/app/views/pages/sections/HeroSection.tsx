import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Globe, Instagram, Menu, Search, ShoppingBag, Twitter, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const data = [
    {
      id: "01",
      title: "DHL GLOBAL LOGISTICS",
      main: "SPEED",
      tag: "PRIORITY ACCESS",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format"
    },
    {
      id: "02",
      title: "PREMIUM CURATION",
      main: "ELITE",
      tag: "LUXURY DROP",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format"
    },
    {
      id: "03",
      title: "AFRICA TO WORLD",
      main: "GLOBAL",
      tag: "DIRECT HUB",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format"
    },
    {
      id: "04",
      title: "FUTURE AESTHETICS",
      main: "VISION",
      tag: "LIMITED EDITION",
      img: "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=1200&auto=format"
    }
  ];

  // LOGICA DO SLIDER AUTOMÁTICO
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000); // Muda a cada 5 segundos
    return () => clearInterval(timer);
  }, [data.length]);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-yellow-500 selection:text-black font-['Poppins'] overflow-hidden">
      
      {/* --- PRE-NAVBAR (ULTRA MINIMAL) --- */}
      <div className="absolute top-0 w-full z-[100] flex justify-between px-6 md:px-12 py-4 border-b border-white/5 text-[10px] tracking-[0.4em] font-black uppercase opacity-50">
        <div className="flex gap-10">
          <span className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
            <Globe size={10} /> tracking_api_dhl
          </span>
          <span className="hidden md:block">luanda_hub_ao</span>
        </div>
        <div className="flex gap-6">
          <Instagram size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
          <Twitter size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* --- FLOATING NAVBAR (GLASS) --- */}
      <nav className="fixed top-12 left-0 w-full z-[90] px-4 md:px-10">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center py-5 px-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,204,0,0.3)]">
              <Menu size={20} strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic drop-shadow-md">ECKIB</span>
          </div>

          <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-[0.2em]">
            {['Shop', 'DHL Track', 'Elite'].map((item) => (
              <a key={item} className="hover:text-yellow-500 transition-all cursor-pointer relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <Search size={20} className="hidden md:block opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
            <button 
              onClick={() => setCartOpen(true)}
              className="group flex items-center gap-4 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-yellow-500 transition-all active:scale-95 shadow-xl"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">Cart [0]</span>
              <div className="bg-black text-white p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                <ShoppingBag size={16} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative h-screen flex items-center justify-center">
        
        {/* BACKGROUND SLIDER COM ZOOM EFFECT */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={slide}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.35 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img src={data[slide].img} className="w-full h-full object-cover" alt="bg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
          </motion.div>
        </AnimatePresence>

        {/* BRUTALIST TYPOGRAPHY */}
        <div className="relative z-10 w-full px-6 md:px-20 pointer-events-none">
          <motion.div
            key={`text-${slide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h2 className="text-yellow-500 text-[10px] md:text-[12px] font-black tracking-[0.8em] uppercase mb-4 drop-shadow-lg">
              {data[slide].title}
            </h2>
            <h1 className="text-[22vw] md:text-[14rem] font-black leading-[0.75] tracking-[-0.05em] uppercase mix-blend-difference italic" 
                style={{ fontFamily: 'Clash Display, sans-serif' }}>
              {data[slide].main}
            </h1>
            
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-10 pointer-events-auto">
              <button className="w-full md:w-auto px-12 py-6 bg-yellow-500 text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 group">
                Shop the drop <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex flex-col gap-1">
                <span className="text-yellow-500 text-[9px] font-black tracking-widest uppercase">{data[slide].tag}</span>
                <p className="max-w-xs text-[11px] text-gray-400 font-medium leading-relaxed uppercase tracking-[0.2em]">
                  Logística Express via DHL para o Hub de Luanda e Internacional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SIDE IMAGE PREVIEW (ANIMADO) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`preview-${slide}`}
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="hidden xl:block absolute right-32 top-1/2 -translate-y-1/2 w-[380px] h-[520px] z-20"
          >
            <div className="relative w-full h-full p-3 border border-white/10 rounded-[2.5rem] backdrop-blur-md bg-white/5">
              <img src={data[slide].img} className="w-full h-full object-cover rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black w-20 h-20 flex items-center justify-center rounded-2xl font-black text-3xl shadow-[0_10px_30px_rgba(255,204,0,0.4)]">
                {data[slide].id}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* SLIDE CONTROLS & PROGRESS BAR */}
        <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 z-50 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex gap-4 items-center">
             {data.map((_, i) => (
               <div key={i} className={`h-1 transition-all duration-500 rounded-full ${slide === i ? 'w-12 bg-yellow-500' : 'w-4 bg-white/20'}`} />
             ))}
           </div>

          <div className="flex items-center gap-6">
            <div className="text-[9px] font-black tracking-[0.3em] opacity-40 uppercase">Auto_Cycle_Active</div>
            <div className="flex gap-3">
              <button onClick={() => setSlide(slide === 0 ? data.length - 1 : slide - 1)} 
                      className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-90">
                <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} />
              </button>
              <button onClick={() => setSlide(slide === data.length - 1 ? 0 : slide + 1)} 
                      className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all group active:scale-90">
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- CART DRAWER (THE GLASS PANEL) --- */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[200]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed top-0 left-0 h-full w-full max-w-md bg-[#0a0a0a]/90 backdrop-blur-3xl border-r border-white/5 z-[210] p-8 md:p-12 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="text-4xl font-black tracking-tighter italic font-['Clash Display']">MY BAG</div>
                <button onClick={() => setCartOpen(false)} className="p-3 hover:bg-white/5 rounded-full transition-colors">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="relative">
                  <ShoppingBag size={100} strokeWidth={0.5} className="text-white/10" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full blur-xl" />
                  </motion.div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mt-8 text-gray-500">Queue_is_empty</p>
              </div>

              <div className="mt-auto space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                   <div>
                      <p className="text-[9px] font-black text-yellow-500 uppercase tracking-widest">DHL Logistics</p>
                      <p className="text-xs font-bold uppercase">Angola / Europe</p>
                   </div>
                   <Globe size={20} className="opacity-20" />
                </div>
                <button className="w-full bg-yellow-500 text-black py-6 rounded-xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,204,0,0.2)]">
                  Continue_to_Check
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-display');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap');
        
        body { background-color: #080808; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #FFCC00; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default HeroSection;