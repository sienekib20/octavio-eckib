import { AnimatePresence, motion } from 'framer-motion';
import {
    Box,
    ChevronLeft,
    ChevronRight,
    Grid, List,
    Search,
    ShieldCheck,
    ShoppingBag,
    SlidersHorizontal,
    X,
    Zap
} from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

// --- Interfaces ---
interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    stock: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
    img: string;
    tag: string;
    sizes: string[];
}

const StoreView: React.FC = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [selectedSize, setSelectedSize] = useState('ALL');
    const [priceRange, setPriceRange] = useState(100000);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Ajustei para 3 para você ver a paginação funcionando com os 6 itens do mock
    const itemsPerPage = 3;

    const inventory: Product[] = [
        { id: 'EK-001', name: 'OVERSIZED CLASH TEE', price: 28000, category: 'APPAREL', stock: 'IN_STOCK', tag: 'NEW', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 'EK-002', name: 'ELITE CARGO PANTS', price: 45000, category: 'PANTS', stock: 'LOW_STOCK', tag: 'LIMITED', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600', sizes: ['38', '40', '42'] },
        { id: 'EK-003', name: 'VISIONARY SNEAKERS', price: 82000, category: 'FOOTWEAR', stock: 'IN_STOCK', tag: 'TRENDING', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600', sizes: ['40', '41', '42', '43'] },
        { id: 'EK-004', name: 'GLOBAL HUB HOODIE', price: 35000, category: 'APPAREL', stock: 'IN_STOCK', tag: 'CLASSIC', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600', sizes: ['M', 'L'] },
        { id: 'EK-005', name: 'TECH BACKPACK V2', price: 55000, category: 'ACC', stock: 'OUT_OF_STOCK', tag: 'RESTOCKING', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600', sizes: ['OS'] },
        { id: 'EK-006', name: 'IMA SPECIAL EDITION CAP', price: 15000, category: 'ACC', stock: 'IN_STOCK', tag: 'IMA_EXCLUSIVE', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600', sizes: ['OS'] },
    ];

    // Reset da página quando filtros mudam
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, selectedSize, priceRange]);

    const filteredProducts = useMemo(() => {
        return inventory.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
            const matchesSize = selectedSize === 'ALL' || p.sizes.includes(selectedSize);
            const matchesPrice = p.price <= priceRange;
            return matchesSearch && matchesCat && matchesSize && matchesPrice;
        });
    }, [searchQuery, selectedCategory, selectedSize, priceRange]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const FilterContent = () => (
        <div className="space-y-10">
            <div className="space-y-4">
                <h3 className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase">Classification</h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                    {['ALL', 'APPAREL', 'FOOTWEAR', 'PANTS', 'ACC'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all border ${selectedCategory === cat ? 'bg-white text-black border-white' : 'text-white/40 border-white/5 hover:border-white/20'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase">Size_Filter</h3>
                <div className="grid grid-cols-4 gap-2">
                    {['ALL', 'S', 'M', 'L', 'XL', '40', '42', 'OS'].map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-2 rounded-lg text-[9px] font-black border transition-all ${selectedSize === size ? 'bg-yellow-500 text-black border-yellow-500' : 'text-white/40 border-white/10 hover:border-white/30'}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black uppercase">
                    <span className="text-yellow-500 tracking-[0.4em]">Price_Range</span>
                    <span className="text-white">{priceRange.toLocaleString()} KZ</span>
                </div>
                <input
                    type="range" min="10000" max="100000" step="5000" value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/10 p-6 rounded-[2rem]">
                <Zap className="text-yellow-500 mb-4" size={24} />
                <h4 className="text-white font-black text-sm uppercase mb-2 text-balance">Priority Shipping</h4>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed uppercase tracking-wider">
                    DHL_READY items dispatched in 2 hours.
                </p>
            </div>
        </div>
    );

    return (
        <div className="bg-[#080808] min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black">

            {/* SIDEBAR MOBILE */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[80%] max-w-[400px] bg-[#0c0c0c] z-[70] p-8 border-l border-white/10 lg:hidden overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-white font-black italic uppercase tracking-widest">Filters</span>
                                <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-white/5 rounded-full"><X size={20} /></button>
                            </div>
                            <FilterContent />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <nav className="sticky top-0 z-40 bg-[#080808]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
                <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-black italic tracking-tighter uppercase" style={{ fontFamily: 'Clash Display' }}>Terminal_<span className="text-yellow-500 text-sm">01</span></h1>
                    </div>

                    <div className="flex-1 max-w-xl relative group order-last md:order-none w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                            type="text" placeholder="SEARCH_INVENTORY..." value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold uppercase outline-none focus:border-yellow-500"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={() => setViewMode('grid')} className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-white/40'}`}><Grid size={18} /></button>
                        <button onClick={() => setViewMode('list')} className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-white/40'}`}><List size={18} /></button>
                        <div className="w-px h-8 bg-white/10 mx-2" />
                        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-3 bg-white/5 rounded-xl text-yellow-500 border border-yellow-500/20"><SlidersHorizontal size={18} /></button>
                    </div>
                </div>
            </nav>

            <main className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit"><FilterContent /></aside>

                <section className="lg:col-span-9">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <p className="text-white/20 text-[10px] font-black uppercase mb-2">Query_Results</p>
                            <h2 className="text-4xl font-black tracking-tighter uppercase italic">{selectedCategory} PRODUCTS</h2>
                        </div>
                    </div>

                    <motion.div layout className={viewMode === 'grid' ? "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8" : "flex flex-col gap-4"}>
                        <AnimatePresence mode='popLayout'>
                            {currentItems.map((p) => (
                                <motion.div key={p.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className={viewMode === 'grid' ? "group flex flex-col" : "group flex items-center gap-6 bg-white/5 p-4 rounded-3xl border border-white/5 hover:border-white/20 transition-all"}>
                                    <div className={`relative overflow-hidden rounded-[1.5rem] bg-[#111] border border-white/5 group-hover:border-yellow-500/50 transition-all duration-500 ${viewMode === 'grid' ? 'aspect-[4/5]' : 'w-24 h-24 md:w-40 md:h-40 shrink-0'}`}>
                                        <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={p.name} />
                                        <div className="absolute top-3 left-3"><span className="bg-black/80 backdrop-blur-md text-white text-[7px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-tighter">{p.id}</span></div>
                                    </div>

                                    <div className={`flex flex-col justify-between flex-1 ${viewMode === 'grid' ? 'mt-6' : ''}`}>
                                        <div>
                                            <h3 className="text-white font-black text-sm md:text-lg uppercase italic group-hover:text-yellow-500 transition-colors">{p.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-white/30 text-[9px] font-black uppercase tracking-widest">{p.category}</span>
                                                <div className="flex gap-1">
                                                    {p.sizes.slice(0, 2).map(s => <span key={s} className="text-[7px] text-white/40 border border-white/10 px-1 font-bold">{s}</span>)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`flex items-center justify-between ${viewMode === 'grid' ? 'mt-4 pt-4 border-t border-white/5' : 'mt-2'}`}>
                                            <span className="text-white font-black text-lg tracking-tighter">{p.price.toLocaleString()} <span className="text-yellow-500 text-[10px]">Kz</span></span>
                                            <button className="bg-white text-black p-3 md:px-6 md:py-3 rounded-2xl hover:bg-yellow-500 transition-all active:scale-95"><ShoppingBag size={16} /></button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* PAGINAÇÃO TERMINAL STYLE */}
                    {totalPages > 1 && (
                        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white disabled:opacity-0 transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-12 h-12 rounded-xl font-black text-xs transition-all border ${currentPage === i + 1
                                                    ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(255,204,0,0.2)]'
                                                    : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'
                                                }`}
                                        >
                                            0{i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:border-white disabled:opacity-0 transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10">System_Page_Control_{currentPage}_of_{totalPages}</span>
                        </div>
                    )}

                    {filteredProducts.length === 0 && (
                        <div className="py-40 text-center flex flex-col items-center gap-4">
                            <Box className="text-white/10" size={60} />
                            <p className="text-white/30 font-black uppercase tracking-[0.5em]">No_Inventory_Matches_Query</p>
                        </div>
                    )}
                </section>
            </main>

            <footer className="border-t border-white/5 py-10 px-6 mt-20">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-yellow-500" size={14} />
                            <span className="italic">IMA_Protected_Hub</span>
                        </div>
                        <span className="hidden md:block opacity-20">|</span>
                        <span>2026_Terminal_Data</span>
                    </div>
                    <p className="opacity-20 tracking-[0.3em]">Authorized_Logistics_Dashboard</p>
                </div>
            </footer>
        </div>
    );
};

export default StoreView;