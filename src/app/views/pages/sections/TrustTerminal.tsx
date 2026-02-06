import { motion } from 'framer-motion';
import { CreditCard, Headset, RefreshCcw, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

interface Policy {
    title: string;
    subtitle: string;
    desc: string;
    icon: React.ReactNode;
}

const TrustTerminal: React.FC = () => {
    const policies: Policy[] = [
        {
            title: "PAYMENT & DELIVERY",
            subtitle: "LOGISTICS HUB",
            desc: "Free shipping for orders over $50 via DHL Priority.",
            icon: <Truck size={24} />
        },
        {
            title: "RETURN & REFUND",
            subtitle: "BUYER PROTECTION",
            desc: "Free 100% money back guarantee. No questions asked.",
            icon: <RefreshCcw size={24} />
        },
        {
            title: "QUALITY SUPPORT",
            subtitle: "24/7 TERMINAL",
            desc: "Always online feedback. Real-time human assistance.",
            icon: <Headset size={24} />
        }
    ];

    return (
        <section className="bg-[#080808] py-16 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">

                    {policies.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                            className="bg-[#0a0a0a] p-10 md:p-12 flex flex-col items-center md:items-start text-center md:text-left group transition-all duration-500"
                        >
                            {/* ICON CIRCLE */}
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-yellow-500">
                                {item.icon}
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse" />
                                    <p className="text-yellow-500 text-[9px] font-black tracking-[0.3em] uppercase">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <h4 className="text-white text-xl font-black tracking-tight uppercase italic" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    {item.title}
                                </h4>

                                <p className="text-white/40 text-xs font-medium leading-relaxed max-w-[240px] uppercase tracking-wider">
                                    {item.desc}
                                </p>
                            </div>

                            {/* DECORATIVE LINE */}
                            <div className="mt-8 w-12 h-[2px] bg-white/5 group-hover:w-full group-hover:bg-yellow-500/50 transition-all duration-700" />
                        </motion.div>
                    ))}

                </div>

                {/* BOTTOM AUTHENTICATION BAR */}
                <div className="mt-12 flex flex-wrap justify-center md:justify-between items-center gap-6 px-4">
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={16} className="text-yellow-500" />
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Encrypted_Transaction_Protocol</span>
                    </div>

                    <div className="flex gap-8 opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Aqui você colocaria mini logos de cartões/pagamento */}
                        <CreditCard size={20} className="text-white" />
                        <div className="text-[10px] font-black text-white uppercase tracking-widest border border-white px-2 py-1 rounded">VISA</div>
                        <div className="text-[10px] font-black text-white uppercase tracking-widest border border-white px-2 py-1 rounded">STRIPE</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustTerminal;