import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Captura o progresso do scroll da página
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            // Aparece após 300px de scroll
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4"
                >
                    {/* Botão de Topo */}
                    <button
                        onClick={scrollToTop}
                        className="group relative flex items-center justify-center w-14 h-14 bg-black border border-white/10 rounded-2xl hover:border-yellow-500 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden active:scale-90"
                    >
                        {/* Background Glow no Hover */}
                        <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors" />

                        <ArrowUp
                            className="text-white group-hover:text-yellow-500 transition-colors group-hover:-translate-y-1 transition-transform duration-300"
                            size={20}
                        />

                        {/* SVG de Progresso Circular */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="26"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                className="text-yellow-500"
                                style={{
                                    pathLength: scrollYProgress,
                                    strokeDasharray: "1",
                                    opacity: 0.3
                                }}
                            />
                        </svg>
                    </button>

                    {/* Label Minimalista (opcional) */}
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20 italic rotate-90 origin-left translate-x-3 translate-y-4">
                        Top_Sync
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;