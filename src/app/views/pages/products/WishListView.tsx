import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    ChevronRight,
    Layers,
    ShoppingCart,
    Trash2
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

const ArsenalView: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            name: "ALD-MK2_Core",
            price: "487.000",
            power: 85,
            battery: 92,
            image: "https://images.unsplash.com/photo-1546776230-bb86256870ce?q=80&w=400",
        },
        {
            id: 2,
            name: "LAD-Express_V4",
            price: "122.000",
            power: 40,
            battery: 65,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400",
        }
    ]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1200);
    }, []);

    return (
        <div className="bg-[#020202] min-h-screen text-white font-sans overflow-x-hidden">
            <Toaster theme="dark" position="top-center" richColors />

            {/* --- BACKGROUND GRID DYNAMICS --- */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <main className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">

                {/* --- DYNAMIC HUD HEADER --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 text-yellow-500 font-black text-[10px] tracking-[0.5em] uppercase italic">
                            <Layers size={14} /> Global_Inventory_Control
                        </div>
                        <h1 className="text-8xl font-black italic tracking-tighter uppercase leading-none">
                            Tactical_<br /><span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">Arsenal</span>
                        </h1>
                    </motion.div>

                    {/* TOTAL CAPACITY HUD */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-10 shadow-2xl"
                    >
                        <div className="space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Arsenal_Load</p>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-black italic leading-none">{favorites.length}</span>
                                <span className="text-yellow-500 font-black text-xs mb-1">/ 24</span>
                            </div>
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-yellow-500/20 border-t-yellow-500 animate-spin-slow flex items-center justify-center">
                            <Activity size={24} className="text-yellow-500" />
                        </div>
                    </motion.div>
                </div>

                {/* --- UNIT GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    <AnimatePresence>
                        {favorites.map((unit, index) => (
                            <motion.div
                                key={unit.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                {/* CARD BASE */}
                                <div className="bg-[#0A0A0A] border border-white/5 rounded-[3.5rem] p-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-yellow-500/30 transition-all duration-500">

                                    {/* IMAGE PROTOCOL */}
                                    <div className="relative h-64 mb-10 rounded-[2.5rem] overflow-hidden">
                                        <img
                                            src={unit.image}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                                        {/* FLOATING SPECS HUD */}
                                        <div className="absolute top-6 left-6 right-6 flex justify-between">
                                            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest">
                                                {unit.id.toString().padStart(3, '0')}_NODE
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setFavorites(prev => prev.filter(f => f.id !== unit.id));
                                                    toast.error('UNIT_DECOMMISSIONED');
                                                }}
                                                className="w-10 h-10 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-black rounded-full flex items-center justify-center transition-all"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* INFO SECTION */}
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors">
                                                {unit.name}
                                            </h3>
                                            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Price_Tag: {unit.price} Kz</p>
                                        </div>

                                        {/* MINI TELEMETRY GRAPHS */}
                                        <div className="space-y-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest">
                                                    <span>Core_Power</span>
                                                    <span className="text-yellow-500">{unit.power}%</span>
                                                </div>
                                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${unit.power}%` }}
                                                        className="h-full bg-yellow-500 shadow-[0_0_10px_#ea7b05]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest">
                                                    <span>Battery_Cell</span>
                                                    <span className="text-blue-500">{unit.battery}%</span>
                                                </div>
                                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${unit.battery}%` }}
                                                        className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* ACTION BUTTON */}
                                        <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 group/btn hover:bg-yellow-500 transition-all">
                                            <ShoppingCart size={16} className="group-hover/btn:rotate-12 transition-transform" />
                                            Add_To_Payload
                                            <ChevronRight size={14} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default ArsenalView;