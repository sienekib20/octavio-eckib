import { motion } from 'framer-motion';
import { ArrowDownRight, Crown, Fingerprint, Quote, ShieldCheck, Star } from 'lucide-react';
import React from 'react';

interface Testimony {
    id: string;
    user: string;
    role: string;
    content: string;
    rating: number;
    location: string;
}

const TestimonyFidelity: React.FC = () => {
    const testimonials: Testimony[] = [
        {
            id: "REC-092",
            user: "Ricardo Silva",
            role: "CEO da TechAO",
            content: "A integração com a DHL mudou nossa percepção de tempo. O que levava semanas, agora chega em dias no nosso Hub em Luanda.",
            rating: 5,
            location: "Luanda, AO"
        },
        {
            id: "REC-045",
            user: "Maria J. Bento",
            role: "Designer de Moda",
            content: "Minhas coleções são exclusivas e a Eckib trata cada peça como arte. O seguro da IMA Angola me deixa totalmente tranquila.",
            rating: 5,
            location: "Lisboa, PT"
        }
    ];

    return (
        <section className="bg-[#080808] py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Decorativo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* LADO ESQUERDO: TESTEMUNHOS (THE FEEDBACK HUB) */}
                <div className="lg:col-span-7 space-y-12">
                    <div>
                        <h2 className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Customer_Reports_v2.6</h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                            VOZES DA <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>ELITE</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.id}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] relative group"
                            >
                                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <Quote size={40} className="text-yellow-500" />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>

                                <p className="text-white/80 text-lg font-medium leading-relaxed mb-8 italic uppercase tracking-tight">
                                    "{t.content}"
                                </p>

                                <div className="flex justify-between items-end pt-6 border-t border-white/5">
                                    <div>
                                        <h4 className="text-white font-black text-sm uppercase tracking-widest">{t.user}</h4>
                                        <p className="text-white/30 text-[9px] font-bold uppercase mt-1">{t.role}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-yellow-500 text-[9px] font-black block tracking-widest">{t.id}</span>
                                        <span className="text-white/20 text-[9px] font-bold">{t.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO: FIDELIDADE (THE PRIORITY CLUB) */}
                <div className="lg:col-span-5">
                    <div className="bg-yellow-500 p-1 rounded-[2.5rem] rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-700 shadow-[0_30px_60px_-15px_rgba(255,204,0,0.2)]">
                        <div className="bg-black rounded-[2.3rem] p-10 md:p-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <Crown size={32} className="text-black" />
                                </div>

                                <h4 className="text-white text-4xl font-black tracking-tighter uppercase italic leading-none mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                                    PRIORITY <br /> <span className="text-yellow-500">ECKIB CLUB</span>
                                </h4>

                                <p className="text-white/50 text-sm font-medium mb-10 max-w-xs leading-relaxed uppercase tracking-wider">
                                    NÃO APENAS UMA CONTA. UM HUB DE LOGÍSTICA PRIVADO PARA QUEM MOVE O MUNDO.
                                </p>

                                <div className="space-y-6 mb-12">
                                    {[
                                        { label: "CASHBACK EM ENVIOS DHL", val: "15%" },
                                        { label: "DESALFANDEGAMENTO EXPRESSO", val: "INCLUIDO" },
                                        { label: "GESTOR DE CONTA DEDICADO", val: "24/7" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                                            <span className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase">{item.label}</span>
                                            <span className="text-white font-black text-sm tracking-widest">{item.val}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full bg-yellow-500 text-black py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-4 group">
                                    JOIN_THE_ELITE <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform" />
                                </button>
                            </div>

                            {/* Marca D'água Técnica */}
                            <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none">
                                <Fingerprint size={300} className="text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8 opacity-20">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-white" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Security_Lock_AES256</span>
                        </div>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white italic">Verify_by_IMA</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonyFidelity;