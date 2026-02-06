import { motion } from 'framer-motion';
import React from 'react';

// --- Interfaces ---
interface Brand {
    name: string;
    logo: string;
    isPriority?: boolean;
}

const PartnersSection: React.FC = () => {
    const brands: Brand[] = [
        { name: 'DHL Express', logo: 'DHL' },
        { name: 'IMA Angola', logo: 'IMA ANGOLA', isPriority: true },
        { name: 'Samsung', logo: 'SAMSUNG' },
        { name: 'Apple', logo: 'APPLE' },
        { name: 'Nike', logo: 'NIKE' },
        { name: 'FedEx', logo: 'FEDEX' },
        { name: 'Unitel', logo: 'UNITEL' },
        { name: 'Toyota', logo: 'TOYOTA' },
    ];

    // Duplicamos a lista para criar o efeito infinito sem saltos
    const marqueeBrands = [...brands, ...brands];

    return (
        <section className="bg-[#080808] py-20 border-t border-white/5 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-yellow-500 rounded-full animate-ping" />
                        <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">
                            Global_Network_Partners
                        </span>
                    </div>
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">
                        Trusted by industrial giants & local leaders
                    </p>
                </div>
            </div>

            {/* INFINITE MARQUEE CONTAINER */}
            <div className="relative flex overflow-hidden group">
                {/* Gradient Overlays para suavizar as bordas do scroll */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {marqueeBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-12 md:px-20 py-4 group/brand"
                        >
                            <span className={`
                text-3xl md:text-5xl font-black tracking-tighter transition-all duration-500
                ${brand.isPriority
                                    ? 'text-yellow-500 opacity-100 scale-110 drop-shadow-[0_0_15px_rgba(255,204,0,0.4)]'
                                    : 'text-white opacity-20 group-hover/brand:opacity-100 group-hover/brand:text-yellow-500'
                                }
                italic uppercase select-none
              `}
                                style={{ fontFamily: 'Clash Display, sans-serif' }}
                            >
                                {brand.logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* FOOTER DA SEÇÃO */}
            <div className="max-w-4xl mx-auto mt-16 px-6">
                <div className="p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
                    <div className="bg-[#080808] py-8 flex flex-wrap justify-center gap-x-12 gap-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest italic">Verification:</span>
                            <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">IMA_CERTIFIED_AO</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest italic">Compliance:</span>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">DHL_GLOBAL_STANDARDS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;