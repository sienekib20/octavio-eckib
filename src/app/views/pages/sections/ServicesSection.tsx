import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Package, Truck } from 'lucide-react';
import React, { useState } from 'react';

// --- Interfaces ---
interface ServiceStep {
    id: number;
    title: string;
    description: string;
    detail: string;
    icon: React.ReactNode;
    img: string;
}

const ServiceSection: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const steps: ServiceStep[] = [
        {
            id: 0,
            title: "ENTREGA EXPRESSA",
            description: "Porta a porta em 24h.",
            detail: "Utilizamos a malha logística da DHL para garantir que sua encomenda chegue ao destino final com velocidade máxima e segurança total em Luanda e províncias.",
            icon: <Truck size={20} />,
            img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format" // Imagem de mulher sorrindo (Representativa)
        },
        {
            id: 1,
            title: "LEVANTAMENTO HUB",
            description: "Retire no terminal central.",
            detail: "Prefere flexibilidade? Escolha o levantamento em um de nossos terminais estratégicos. Sem filas, com atendimento VIP e verificação de integridade na hora.",
            icon: <Package size={20} />,
            img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1000&auto=format"
        },
        {
            id: 2,
            title: "RASTREIO GLOBAL",
            description: "Monitoramento via API DHL.",
            detail: "Transparência absoluta. Acompanhe cada etapa do processo, desde a saída do armazém internacional até a chegada no Hub de Luanda em tempo real.",
            icon: <MapPin size={20} />,
            img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format"
        }
    ];

    return (
        <section className="bg-[#080808] py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">

                {/* TITULO DA SEÇÃO */}
                <div className="mb-20">
                    <h2 className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Service_Infrastructure</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                        LOGÍSTICA SEM <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>FRONTEIRAS</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LADO ESQUERDO: STEPS (CONTROLES) */}
                    <div className="lg:col-span-5 space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`group cursor-pointer p-8 rounded-3xl transition-all duration-500 border ${activeStep === index
                                        ? 'bg-white/5 border-yellow-500/50'
                                        : 'bg-transparent border-white/5 hover:border-white/20'
                                    }`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`mt-1 p-3 rounded-xl transition-all ${activeStep === index ? 'bg-yellow-500 text-black' : 'bg-white/5 text-white/40'
                                        }`}>
                                        {step.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`text-xl font-black tracking-tight mb-1 transition-colors ${activeStep === index ? 'text-white' : 'text-white/40'
                                            }`}>
                                            {step.title}
                                        </h4>
                                        <p className={`text-sm font-medium transition-colors ${activeStep === index ? 'text-yellow-500' : 'text-white/20'
                                            }`}>
                                            {step.description}
                                        </p>

                                        {/* MOBILE DETAIL (SHOWS ONLY ON ACTIVE) */}
                                        <AnimatePresence>
                                            {activeStep === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="lg:hidden overflow-hidden"
                                                >
                                                    <p className="text-gray-400 text-xs mt-4 leading-relaxed">
                                                        {step.detail}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {activeStep === index && (
                                        <motion.div layoutId="arrow">
                                            <CheckCircle className="text-yellow-500" size={20} />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* LADO DIREITO: VISUAL PREVIEW */}
                    <div className="hidden lg:block lg:col-span-7 sticky top-32">
                        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden bg-[#111] border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 50, scale: 1.1 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={steps[activeStep].img}
                                        className="w-full h-full object-cover"
                                        alt="Service visual"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    {/* TEXTO FLUTUANTE SOBRE A IMAGEM */}
                                    <div className="absolute bottom-12 left-12 right-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="max-w-md"
                                        >
                                            <p className="text-yellow-500 font-black text-xs uppercase tracking-[0.3em] mb-4">Deep_Logic_Analysis</p>
                                            <p className="text-white text-2xl font-black leading-tight italic uppercase tracking-tighter">
                                                {steps[activeStep].detail}
                                            </p>
                                            <button className="mt-8 flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-yellow-500 transition-colors">
                                                Saber mais detalhes <ArrowRight size={16} />
                                            </button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* OVERLAY DE LOGÍSTICA */}
                            <div className="absolute top-8 right-8 flex flex-col gap-2">
                                <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black uppercase text-white tracking-widest">Active_Node</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;