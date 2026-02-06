import { motion } from 'framer-motion';
import {
    ArrowDownRight,
    ArrowUpRight,
    Briefcase,
    Cpu,
    Globe,
    MapPin,
    MessageSquare,
    Shield,
    Target
} from 'lucide-react';
import { useState } from 'react';

const CorporateView = () => {
    const [activeTab, setActiveTab] = useState('STORY');

    const HUB_LOCATIONS = [
        { city: "Luanda", region: "TALATONA_CORE", status: "ONLINE", coordinates: "8.8390° S, 13.2894° E" },
        { city: "Benguela", region: "COAST_RELAY", status: "OPERATIONAL", coordinates: "12.5783° S, 13.4072° E" },
        { city: "Huambo", region: "PLATEAU_NODE", status: "STANDBY", coordinates: "12.7761° S, 15.7392° E" }
    ];

    const TEAM = [
        { name: "Claudio Gama", role: "Chief_Operator", bio: "Visão estratégica e comando de frota." },
        { name: "Nidilson_X", role: "Tech_Commander", bio: "Arquitetura de sistemas e segurança Node." },
        { name: "Sara_Log", role: "Supply_Lead", bio: "Otimização de rotas e logística reversa." }
    ];

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- HERO SECTION: THE MANIFESTO --- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ea7b0510_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000')] bg-cover bg-center opacity-10 grayscale" />

                <div className="relative z-10 text-center space-y-8 px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-yellow-500 font-black text-[10px] tracking-[0.8em] uppercase italic bg-yellow-500/10 px-6 py-2 rounded-full border border-yellow-500/20">
                            Established_2026 // Luanda_Angola
                        </span>
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
                        Evolution_<br />Of_<span className="text-yellow-500">Logistics</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/40 text-xs md:text-sm font-black uppercase tracking-widest leading-relaxed italic">
                        Não apenas entregamos hardware. Construímos a infraestrutura que liga o talento angolano ao futuro tecnológico global.
                    </p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
                    <ArrowDownRight size={32} />
                </div>
            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-24">

                {/* --- SECTION NAV --- */}
                <nav className="flex flex-wrap justify-center gap-4 mb-32">
                    {['STORY', 'HUBS', 'TEAM', 'CAREERS', 'CONTACT'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'
                                }`}
                        >
                            {tab.replace('_', ' ')}
                        </button>
                    ))}
                </nav>

                {/* --- DYNAMIC CONTENT --- */}
                <div className="min-h-[600px]">

                    {/* 1. STORY & VISION */}
                    {activeTab === 'STORY' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-5xl font-black uppercase italic tracking-tighter">Our_Legacy</h2>
                                <div className="space-y-6 text-white/60 text-sm leading-relaxed font-medium">
                                    <p>A <span className="text-white font-black italic">Fleet_De_Gama</span> nasceu da necessidade de um terminal de hardware robusto e confiável em Luanda. O que começou como um Node de distribuição local evoluiu para um ecossistema completo de tecnologia tática.</p>
                                    <p>Nossa missão é eliminar as barreiras de acesso ao hardware de alta performance, garantindo que cada operador em Angola tenha as ferramentas necessárias para dominar o seu campo.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                                    <div className="space-y-2">
                                        <Target className="text-yellow-500" size={24} />
                                        <p className="text-xs font-black uppercase italic tracking-widest">Precision_Ops</p>
                                    </div>
                                    <div className="space-y-2">
                                        <Shield className="text-yellow-500" size={24} />
                                        <p className="text-xs font-black uppercase italic tracking-widest">Secure_Relay</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 aspect-square rounded-[4rem] border border-white/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" alt="Tech" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    )}

                    {/* 2. GLOBAL HUBS */}
                    {activeTab === 'HUBS' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {HUB_LOCATIONS.map((hub, i) => (
                                    <div key={i} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[3rem] hover:border-yellow-500/20 transition-all">
                                        <div className="flex justify-between items-start mb-10">
                                            <MapPin className="text-yellow-500" size={24} />
                                            <span className="text-[8px] font-black uppercase tracking-widest bg-green-500/10 text-green-500 px-3 py-1 rounded-full">{hub.status}</span>
                                        </div>
                                        <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">{hub.city}</h3>
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-6 italic">{hub.region}</p>
                                        <p className="text-[10px] font-black text-white/40 tracking-widest font-mono">{hub.coordinates}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="h-96 bg-white/5 rounded-[4rem] border border-white/5 flex items-center justify-center relative overflow-hidden">
                                <Globe className="text-white/5 animate-spin-slow absolute" size={400} />
                                <p className="relative z-10 text-[10px] font-black uppercase tracking-[1em] italic text-white/20">Satellite_View_Active</p>
                            </div>
                        </motion.div>
                    )}

                    {/* 3. TEAM */}
                    {activeTab === 'TEAM' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {TEAM.map((member, i) => (
                                <div key={i} className="group relative">
                                    <div className="aspect-[3/4] bg-white/5 rounded-[3.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <img src={`https://images.unsplash.com/photo-${1500 + i}?q=80&w=400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="mt-8 space-y-2 px-4">
                                        <h4 className="text-2xl font-black uppercase italic tracking-tighter">{member.name}</h4>
                                        <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">{member.role}</p>
                                        <p className="text-white/40 text-xs mt-4 leading-relaxed italic">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* 4. CAREERS */}
                    {activeTab === 'CAREERS' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto space-y-12 text-center">
                            <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto text-yellow-500">
                                <Briefcase size={32} />
                            </div>
                            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Join_The_Fleet</h2>
                            <p className="text-white/40 text-sm leading-relaxed font-black uppercase tracking-widest italic">
                                Estamos sempre à procura de engenheiros, logísticos e visionários para expandir a rede Gama. Queres ser o próximo operador?
                            </p>
                            <div className="space-y-4">
                                {['Front-End_Dev (React)', 'Logistics_Commander', 'Security_Analyst'].map((job, i) => (
                                    <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex justify-between items-center hover:bg-white/5 transition-all cursor-pointer">
                                        <span className="font-black uppercase italic text-xs tracking-widest">{job}</span>
                                        <ArrowUpRight size={18} className="text-yellow-500" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* 5. CONTACT */}
                    {activeTab === 'CONTACT' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="space-y-12">
                                <h2 className="text-5xl font-black uppercase italic tracking-tighter">Comm_Link</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-yellow-500"><MessageSquare size={20} /></div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Direct_Support</p>
                                            <p className="text-lg font-black italic">ops@fleetdegama.ao</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-yellow-500"><Cpu size={20} /></div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Technical_HQ</p>
                                            <p className="text-lg font-black italic">+244 923 000 000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[3rem] space-y-6">
                                <input placeholder="OPERATOR_NAME" className="w-full bg-black border border-white/10 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-yellow-500 transition-all" />
                                <input placeholder="COMM_NODE (EMAIL)" className="w-full bg-black border border-white/10 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-yellow-500 transition-all" />
                                <textarea rows={4} placeholder="TRANSMISSION_CONTENT" className="w-full bg-black border border-white/10 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none focus:border-yellow-500 transition-all resize-none" />
                                <button className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-yellow-500 transition-all">Send_Transmission</button>
                            </form>
                        </motion.div>
                    )}

                </div>
            </main>

            <footer className="py-20 text-center border-t border-white/[0.03] opacity-20 italic">
                <p className="text-[8px] font-black uppercase tracking-[1em]">LAD_Manifesto // End_Of_Transmission</p>
            </footer>
        </div>
    );
};

export default CorporateView;