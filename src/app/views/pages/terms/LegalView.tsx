import { motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowUpRight,
    ChevronRight,
    Download,
    FileText,
    Lock,
    Printer,
    RotateCcw,
    ShieldCheck, Truck
} from 'lucide-react';
import { useState } from 'react';

const LegalView = () => {
    const [activeTab, setActiveTab] = useState('TERMS');

    const SECTIONS = [
        { id: 'TERMS', label: 'Terms_Of_Service', icon: <FileText size={16} /> },
        { id: 'PRIVACY', label: 'Privacy_Protocol', icon: <ShieldCheck size={16} /> },
        { id: 'SHIPPING', label: 'Shipping_Logic', icon: <Truck size={16} /> },
        { id: 'RETURNS', label: 'Reverse_Logistics', icon: <RotateCcw size={16} /> },
    ];

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- PROTOCOL HEADER --- */}
            <header className="border-b border-white/5 bg-[#080808]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500">
                            <Lock size={18} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Fleet_De_Gama_Legal</p>
                            <p className="text-[10px] font-black uppercase italic">V2.0.26_COMPLIANCE</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-white/40 hover:text-white">
                            <Printer size={18} />
                        </button>
                        <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-white/40 hover:text-white">
                            <Download size={18} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* --- SIDEBAR NAVIGATION --- */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="space-y-2">
                            <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none">
                                Legal_<br /><span className="text-yellow-500">Docs</span>
                            </h1>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Binding_Agreement_v4</p>
                        </div>

                        <nav className="space-y-3">
                            {SECTIONS.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => setActiveTab(sec.id)}
                                    className={`w-full flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-300 ${activeTab === sec.id
                                            ? 'bg-white text-black border-white'
                                            : 'bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20 hover:text-white'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 font-black uppercase italic tracking-widest text-[10px]">
                                        {sec.icon}
                                        {sec.label}
                                    </div>
                                    <ChevronRight size={16} className={activeTab === sec.id ? 'opacity-100' : 'opacity-20'} />
                                </button>
                            ))}
                        </nav>

                        <div className="p-8 bg-yellow-500/5 border border-yellow-500/10 rounded-[2.5rem] space-y-4">
                            <div className="flex items-center gap-3 text-yellow-500">
                                <AlertCircle size={18} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Legal_Notice</span>
                            </div>
                            <p className="text-[10px] text-white/40 font-black uppercase leading-relaxed tracking-wider">
                                Ao utilizar o Fleet_De_Gama, você aceita automaticamente os protocolos de operação de Luanda/Angola.
                            </p>
                        </div>
                    </aside>

                    {/* --- CONTENT AREA --- */}
                    <section className="lg:col-span-8">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#0A0A0A] border border-white/5 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden"
                        >
                            {/* Decorative Watermark */}
                            <div className="absolute -top-10 -right-10 opacity-[0.02] text-[200px] font-black italic pointer-events-none select-none">
                                LAD
                            </div>

                            {/* TERMS CONTENT */}
                            {activeTab === 'TERMS' && (
                                <div className="space-y-10 relative z-10">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tighter border-b border-white/5 pb-6">Terms_Of_Service</h2>
                                    <div className="space-y-8 text-white/60 font-medium leading-relaxed text-sm">
                                        <section className="space-y-4">
                                            <h3 className="text-white font-black uppercase tracking-widest text-xs italic flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> 01. Aceitação de Protocolos
                                            </h3>
                                            <p>O acesso ao terminal Fleet_De_Gama constitui a aceitação total destes termos. Operamos sob a jurisdição da República de Angola, regulados pelas leis de comércio eletrônico vigentes.</p>
                                        </section>
                                        <section className="space-y-4">
                                            <h3 className="text-white font-black uppercase tracking-widest text-xs italic flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> 02. Propriedade Intelectual
                                            </h3>
                                            <p>Todo o design de hardware, assets de UI e logotipos "Gama" são propriedade exclusiva. O uso não autorizado resultará em bloqueio permanente de Node.</p>
                                        </section>
                                    </div>
                                </div>
                            )}

                            {/* SHIPPING CONTENT */}
                            {activeTab === 'SHIPPING' && (
                                <div className="space-y-10 relative z-10">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tighter border-b border-white/5 pb-6">Shipping_Logic</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                            <p className="text-[8px] font-black text-yellow-500 uppercase tracking-widest mb-1">Standard_Delivery</p>
                                            <p className="text-sm font-black italic">24h - 48h (Luanda Core)</p>
                                        </div>
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                            <p className="text-[8px] font-black text-yellow-500 uppercase tracking-widest mb-1">Province_Relay</p>
                                            <p className="text-sm font-black italic">3 - 7 Business Days</p>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        A Fleet_De_Gama utiliza frotas próprias para garantir a integridade do hardware. O rastreio em tempo real é ativado imediatamente após o despacho do Node_Luanda.
                                    </p>
                                </div>
                            )}

                            {/* PRIVACY CONTENT */}
                            {activeTab === 'PRIVACY' && (
                                <div className="space-y-10 relative z-10">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tighter border-b border-white/5 pb-6">Privacy_Protocol</h2>
                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4 p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
                                            <ShieldCheck className="text-green-500 shrink-0" size={24} />
                                            <div>
                                                <p className="text-xs font-black uppercase italic text-green-500">Encryption_Status: AES-256-Active</p>
                                                <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Os seus dados de pagamento não são armazenados nos nossos servidores.</p>
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Coletamos apenas o essencial: Identificação de Operador (Nome), Coordenadas de Entrega e Metadados de Missão para melhorar a performance da plataforma.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* RETURNS CONTENT */}
                            {activeTab === 'RETURNS' && (
                                <div className="space-y-10 relative z-10">
                                    <h2 className="text-3xl font-black uppercase italic tracking-tighter border-b border-white/5 pb-6">Reverse_Logistics</h2>
                                    <div className="space-y-6">
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Hardware defeituoso pode ser devolvido num prazo de **15 dias** após a recepção. A unidade deve estar com o selo de garantia "Gama_Security" intacto.
                                        </p>
                                        <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl flex items-center gap-4">
                                            <AlertCircle className="text-red-500" />
                                            <p className="text-[9px] font-black uppercase tracking-widest text-red-500 italic">Unidades com danos físicos por má operação não são elegíveis.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </motion.div>

                        {/* QUICK CONTACT HELP */}
                        <div className="mt-12 flex justify-between items-center px-10">
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Questions?_Open_Comm_Link</p>
                            <button className="flex items-center gap-2 text-yellow-500 font-black text-[10px] uppercase tracking-widest hover:underline">
                                support@fleetdegama.ao <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </section>

                </div>
            </main>

            <footer className="py-20 text-center border-t border-white/[0.03] opacity-20 italic">
                <p className="text-[8px] font-black uppercase tracking-[1em]">LAD_Legal_System // All_Rights_Reserved_2026</p>
            </footer>
        </div>
    );
};

export default LegalView;