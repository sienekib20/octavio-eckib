// src/components/Navbar.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// Supondo que você tenha ícones da Heroicons ou similar
// import { ShoppingCartIcon, UserIcon, MenuIcon } from '@heroicons/react/outline'; 

const AppNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Ajuste este valor para quando a navbar deve "fixar"
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
        fixed: {
            y: 0,
            opacity: 1,
            backgroundColor: "rgba(255, 255, 255, 0.95)", // Glassmorphism suave
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)", // Efeito de desfoque
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <AnimatePresence>
            <motion.nav
                initial="hidden"
                animate={isScrolled ? "fixed" : "visible"}
                variants={navVariants}
                className={`fixed top-0 left-0 right-0 z-50 py-4 ${isScrolled ? 'backdrop-blur-md bg-white/90 shadow-lg' : 'bg-transparent'}`}
            >
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Menu Icon (Mobile) */}
                    <div className="lg:hidden">
                        {/* <MenuIcon className="h-6 w-6 text-gray-800 cursor-pointer" /> */}
                        <button className="text-gray-800 focus:outline-none">☰</button>
                    </div>

                    {/* Logo Central */}
                    <motion.a
                        href="/"
                        className="flex-grow text-center lg:flex-grow-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-2xl font-bold text-gray-800">Seu<span className="text-amber-600">eCommerce</span></span>
                    </motion.a>

                    {/* Links de Navegação (Desktop) */}
                    <div className="hidden space-x-8 lg:flex">
                        <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Início</a>
                        <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Produtos</a>
                        <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Sobre</a>
                        <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">Contato</a>
                    </div>

                    {/* Ícones de Usuário e Carrinho */}
                    <div className="flex items-center space-x-4">
                        {/* <UserIcon className="h-6 w-6 text-gray-800 cursor-pointer" /> */}
                        <button className="text-gray-800 focus:outline-none">👤</button>
                        {/* <ShoppingCartIcon className="h-6 w-6 text-gray-800 cursor-pointer" /> */}
                        <button className="relative text-gray-800 focus:outline-none">
                            🛒
                            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-xs text-white">3</span>
                        </button>
                    </div>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};

export default AppNavbar;