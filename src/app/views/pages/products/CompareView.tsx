import { AnimatePresence, motion } from 'framer-motion';
import {
    BarChart3,
    Cpu,
    Info,
    Plus,
    Shield,
    ShoppingCart,
    TrendingUp,
    Weight,
    X, Zap
} from 'lucide-react';
import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';

const CompareView: React.FC = () => {
    const MAX_COMPARE = 4;

    // --- DATASET EXPANDIDO ---
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "ALD-MK2_Core",
            price: "487.000",
            bestInClass: ['load'],
            specs: { speed: "45km/h", battery: "12h", load: "250kg", security: "High" },
            image: "https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=400"
        },
        {
            id: 2,
            name: "LAD-Express_V4",
            price: "122.000",
            bestInClass: ['speed'],
            specs: { speed: "90km/h", battery: "06h", load: "050kg", security: "Med" },
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400"
        },
        {
            id: 3,
            name: "GAMA-Ultra_X",
            price: "950.000",
            bestInClass: ['battery', 'security'],
            specs: { speed: "65km/h", battery: "24h", load: "180kg", security: "Ultra" },
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400"
        }
    ]);

    const removeProduct = (id: number) => {
        if (products.length <= 1) {
            toast.error('MINIMUM_UNIT_REQUIRED', { description: 'Analysis requires at least one active unit.' });
            return;
        }
        setProducts(products.filter(p => p.id !== id));
        toast.info('UNIT_DE-COUPLED', { className: 'font-black uppercase' });
    };

    const deployUnit = (name: string) => {
        toast.success('UNIT_DEPLOYED', {
            description: `${name} has been assigned to your fleet.`,
            icon: <ShoppingCart size={14} className="text-yellow-500" />
        });
    };

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">
            <Toaster theme="dark" position="bottom-center" />

            <main className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">

                {/* --- HEADER --- */}
                <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 mb-24">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-yellow-500/50">
                            <BarChart3 size={18} />
                            <span className="text-[10px] font-black uppercase tracking-[0.8em]">Conflict_Resolution_Protocol</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8]">
                            Spec_<br /><span className="text-yellow-500">Wars</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-4 w-full xl:w-auto">
                        <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-6">
                            <div className="text-left">
                                <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Active_Slots</p>
                                <p className="text-sm font-black italic">{products.length} / {MAX_COMPARE}</p>
                            </div>
                            <div className="h-8 w-px bg-white/10" />
                            <button
                                disabled={products.length >= MAX_COMPARE}
                                className="text-yellow-500 disabled:text-white/10 transition-colors"
                            >
                                <Plus size={24} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* --- COMPARISON TABLE --- */}
                <div className="relative overflow-x-auto pb-10 scrollbar-hide snap-x">
                    <div className="flex min-w-max lg:min-w-full lg:grid lg:grid-cols-5 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">

                        {/* INDEX LABELS (DESKTOP) */}
                        <div className="hidden lg:flex flex-col bg-[#070707] p-10 pt-[420px] space-y-[90px] border-r border-white/5">
                            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3 italic"><Zap size={14} /> Velocity</label>
                            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3 italic"><Cpu size={14} /> Energy_Cell</label>
                            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3 italic"><Weight size={14} /> Payload</label>
                            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3 italic"><Shield size={14} /> Encryption</label>
                        </div>

                        {/* PRODUCTS CARDS */}
                        <AnimatePresence>
                            {products.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={item.id}
                                    className="w-[300px] lg:w-auto snap-center bg-[#0A0A0A] hover:bg-white/[0.02] transition-colors p-8 md:p-12 relative flex flex-col space-y-10 border-r border-white/5 group"
                                >
                                    {/* Remove Action */}
                                    <button
                                        onClick={() => removeProduct(item.id)}
                                        className="absolute top-8 right-8 text-white/10 hover:text-red-500 transition-all z-20"
                                    >
                                        <X size={20} />
                                    </button>

                                    {/* Top Visual */}
                                    <div className="space-y-6">
                                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 relative">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors leading-none">{item.name}</h3>
                                            <p className="text-xl font-black italic text-white/40">{item.price} <span className="text-[10px]">Kz</span></p>
                                        </div>
                                    </div>

                                    {/* DATA NODES */}
                                    <div className="space-y-12">
                                        {[
                                            { key: 'speed', icon: <Zap size={12} /> },
                                            { key: 'battery', icon: <Cpu size={12} /> },
                                            { key: 'load', icon: <Weight size={12} /> },
                                            { key: 'security', icon: <Shield size={12} /> }
                                        ].map((spec) => (
                                            <div key={spec.key} className="relative">
                                                <span className="lg:hidden text-[8px] font-black text-white/10 uppercase tracking-widest block mb-1">{spec.key}</span>
                                                <div className="flex items-center gap-3">
                                                    <p className={`text-base font-black italic uppercase tracking-widest ${item.bestInClass.includes(spec.key) ? 'text-yellow-500' : 'text-white'}`}>
                                                        {item.specs[spec.key as keyof typeof item.specs]}
                                                    </p>
                                                    {item.bestInClass.includes(spec.key) && (
                                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="p-1 bg-yellow-500/10 rounded-full">
                                                            <TrendingUp size={10} className="text-yellow-500" />
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action */}
                                    <button
                                        onClick={() => deployUnit(item.name)}
                                        className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all active:scale-95"
                                    >
                                        Deploy_Unit
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* ADAPTER SLOT (Se houver espaço) */}
                        {products.length < MAX_COMPARE && (
                            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-black/40 border-2 border-dashed border-white/5 m-10 rounded-[2.5rem] opacity-20 hover:opacity-100 transition-opacity cursor-pointer group">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:border-yellow-500 transition-colors">
                                    <Plus size={24} className="group-hover:text-yellow-500" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-center">Infect_Additional_<br />Unit_Data</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- SYSTEM LEGEND --- */}
                <footer className="mt-20 flex flex-wrap justify-center gap-12 py-10 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 italic">Optimum_Spec_Highlight</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Info size={14} className="text-white/20" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 italic">Compare_Limit: 0{MAX_COMPARE}_Units_Max</span>
                    </div>
                </footer>

            </main>
        </div>
    );
};

export default CompareView;