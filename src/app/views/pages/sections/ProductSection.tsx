import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck, ShoppingBag, Zap } from 'lucide-react';
import { useRef } from 'react';

const ProductSection = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    const products = [
        { id: '01', name: 'OVERSIZED CLASH TEE', price: '28.000', cat: 'CLOTHING', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format' },
        { id: '02', name: 'ELITE CARGO PANTS', price: '45.000', cat: 'PANTS', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format' },
        { id: '03', name: 'VISIONARY SNEAKERS', price: '82.000', cat: 'FOOTWEAR', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format' },
        { id: '04', name: 'GLOBAL HUB HOODIE', price: '35.000', cat: 'CLOTHING', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format' },
        { id: '05', name: 'DHL TECH BACKPACK', price: '55.000', cat: 'ACCESSORIES', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format' },
        { id: '06', name: 'URBAN RUNNER JACKET', price: '68.000', cat: 'OUTERWEAR', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format' },
        { id: '07', name: 'CLASH ESSENTIAL CAP', price: '15.000', cat: 'HEADWEAR', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format' },
        { id: '08', name: 'ELITE DUFFLE BAG', price: '42.000', cat: 'ACCESSORIES', img: 'https://images.unsplash.com/photo-1544816153-16625418fff6?q=80&w=800&auto=format' },
    ];

    // Lógica para os botões Chevron moverem o slider
    const scroll = (direction: any) => {
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-[#080808] py-20 overflow-hidden border-t border-white/5">
            {/* HEADER COMPACTO */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-2">
                        <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase opacity-70">
                            New_Arrivals_Priority
                        </span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none text-white"
                        style={{ fontFamily: 'Clash Display, sans-serif' }}>
                        HOT <span className="text-yellow-500">DROPS</span>
                    </h3>
                </div>

                <div className="flex items-center gap-6">
                    {/* BOTÕES DE NAVEGAÇÃO (ESTILO HERO) */}
                    <div className="flex gap-2">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all group"
                        >
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <div className="text-right">
                            <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Global Express</p>
                            <p className="text-xs font-bold text-white uppercase italic">Tracking via DHL API</p>
                        </div>
                        <ShieldCheck size={24} className="text-yellow-500" />
                    </div>
                </div>
            </div>

            {/* SLIDER INLINE COM SNAP SCROLL */}
            <div className="relative">
                <div
                    ref={containerRef}
                    className="flex gap-6 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="min-w-[280px] md:min-w-[340px] group snap-start"
                        >
                            {/* Image Card */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#121212] border border-white/10 group-hover:border-yellow-500/50 transition-colors duration-500">
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    alt={item.name}
                                />

                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white text-black text-[8px] font-black px-3 py-1 rounded-full uppercase italic">
                                        {item.id}
                                    </span>
                                    <span className="bg-yellow-500 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                                        DHL READY
                                    </span>
                                </div>

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl">
                                        Add to Bag <ShoppingBag size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Textos */}
                            <div className="mt-6 flex justify-between items-start">
                                <div className="flex-1">
                                    <h4 className="text-white text-lg font-black tracking-tight leading-none group-hover:text-yellow-500 transition-colors uppercase italic">
                                        {item.name}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-white/40 text-[9px] font-bold tracking-widest uppercase">{item.cat}</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                        <span className="text-white/40 text-[9px] font-bold">LIMITED_EDITION</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-black text-xl tracking-tighter leading-none">{item.price}</p>
                                    <p className="text-yellow-500 text-[9px] font-bold tracking-widest mt-1 uppercase">Kwanza</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* SPACER FINAL PARA EVITAR VÁCUO */}
                    <div className="min-w-[100px] h-full" />
                </div>

                {/* INDICADOR DE SCROLL */}
                <div className="mt-16 px-6 md:px-12 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-20 bg-white/10 overflow-hidden">
                            <motion.div
                                animate={{ x: [-80, 80] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="h-full w-full bg-yellow-500"
                            />
                        </div>
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Smart_Scroll_Engine</span>
                    </div>

                    <button className="flex items-center gap-3 text-white hover:text-yellow-500 transition-colors group">
                        <span className="text-[10px] font-black uppercase tracking-widest">View All Store</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -webkit-overflow-scrolling: touch; }
            `}</style>
        </section>
    );
};

export default ProductSection;