import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Globe, ShoppingBag, Zap } from 'lucide-react';
import React, { useState } from 'react';

// --- Interfaces ---
interface Product {
    id: string;
    name: string;
    price: string;
    category: 'ALL' | 'APPAREL' | 'ACCESSORIES' | 'FOOTWEAR';
    img: string;
    dhlStatus: string;
}

const RecentArrivals: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Product['category']>('ALL');

    const products: Product[] = [
        { id: 'DHL-001', name: 'TECH-SHELL JACKET', price: '85.000', category: 'APPAREL', dhlStatus: 'LUANDA_HUB', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format' },
        { id: 'DHL-002', name: 'ORBITAL SNEAKERS', price: '92.000', category: 'FOOTWEAR', dhlStatus: 'IN_TRANSIT', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format' },
        { id: 'DHL-003', name: 'CARGO LOGISTIC PANTS', price: '45.000', category: 'APPAREL', dhlStatus: 'CUSTOMS_OK', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format' },
        { id: 'DHL-004', name: 'GLOBAL CROSSBODY', price: '18.500', category: 'ACCESSORIES', dhlStatus: 'LUANDA_HUB', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format' },
        { id: 'DHL-005', name: 'VECTOR HOODIE', price: '32.000', category: 'APPAREL', dhlStatus: 'SORTING', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format' },
        { id: 'DHL-006', name: 'AERO TECH CAP', price: '12.000', category: 'ACCESSORIES', dhlStatus: 'READY', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format' },
    ];

    const filteredProducts = activeTab === 'ALL'
        ? products
        : products.filter(p => p.category === activeTab);

    const tabs: Product['category'][] = ['ALL', 'APPAREL', 'FOOTWEAR', 'ACCESSORIES'];

    return (
        <section className="bg-[#080808] py-24 px-4 md:px-12 border-t border-white/5 min-h-screen">

            {/* HEADER SECTION */}
            <div className="max-w-[1600px] mx-auto mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                            <span className="text-white/40 text-[10px] font-black tracking-[0.4em] uppercase">Inventory_Live_Update</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic leading-none" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                            RECENT <span className="text-yellow-500">ARRIVALS</span>
                        </h2>
                    </div>

                    {/* FILTER TABS (FUNCIONALIDADE REAL) */}
                    <div className="flex flex-wrap gap-2 bg-white/5 p-2 rounded-2xl border border-white/10">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === tab
                                        ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(255,204,0,0.3)]'
                                        : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* PRODUCTS GRID (2 COL NO MOBILE / 4 NO DESKTOP) */}
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative flex flex-col"
                            >
                                {/* Visual Card */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 group-hover:border-yellow-500/30 transition-all duration-500">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* DHL OVERLAY BADGE */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                                        <span className="bg-black/80 backdrop-blur-md text-white text-[8px] font-bold px-3 py-1.5 rounded-lg border border-white/10">
                                            {product.id}
                                        </span>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="bg-yellow-500 text-black text-[7px] font-black px-2 py-1 rounded uppercase">
                                                {product.dhlStatus}
                                            </span>
                                        </div>
                                    </div>

                                    {/* HOVER QUICK BUY */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-4">
                                        <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all">
                                            <ShoppingBag size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* INFO CONTENT */}
                                <div className="mt-6 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-white font-black text-sm md:text-lg tracking-tight uppercase italic group-hover:text-yellow-500 transition-colors">
                                                {product.name}
                                            </h4>
                                            <p className="text-white/30 text-[9px] font-bold tracking-[0.2em]">{product.category}</p>
                                        </div>
                                        <ArrowUpRight size={18} className="text-white/20 group-hover:text-yellow-500" />
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <span className="text-white font-black text-lg md:text-xl tracking-tighter italic">
                                            {product.price} <span className="text-[10px] text-yellow-500">Kz</span>
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Globe size={10} className="text-white/20" />
                                            <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Global_Shipping</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* FOOTER DA SEÇÃO - LOGISTICS BAR */}
            <div className="max-w-[1600px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6 opacity-30 group hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-yellow-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Authenticity Verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={14} className="text-yellow-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Priority Dispatch</span>
                    </div>
                </div>

                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-yellow-500 transition-all">
                    Explore_Full_Terminal_01
                </button>
            </div>
        </section>
    );
};

export default RecentArrivals;