import {
    ArrowLeft,
    Bitcoin,
    Building2,
    CheckCircle2,
    CreditCard,
    Globe,
    Lock,
    MapPin,
    ShieldCheck,
    Smartphone
} from 'lucide-react';
import React, { useState } from 'react';

const CheckoutTerminal: React.FC = () => {
    const [method, setMethod] = useState('MCX'); // MCX, CARD, CRYPTO
    const [isProcessing, setIsProcessing] = useState(false);

    const handleDeployment = () => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 3000);
    };

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- TOP BAR --- */}
            <nav className="border-b border-white/[0.03] px-6 md:px-10 py-6 flex justify-between items-center bg-[#050505]">
                <button className="flex items-center gap-3 group text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all">
                    <ArrowLeft size={16} /> Back_To_Payload
                </button>
                <div className="flex items-center gap-2">
                    <Lock size={14} className="text-yellow-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Secure_Encryption_Active</span>
                </div>
            </nav>

            <main className="max-w-[1200px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* --- LEFT: LOGISTICS & PAYMENT (7 COLUMNS) --- */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* SECTION 1: SHIPPING */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-black text-sm italic">01</div>
                                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Logistics_Deployment</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">Receiver_Name</label>
                                    <input placeholder="EX: CLAUDIO_GAMA" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-5 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-yellow-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">Contact_Node</label>
                                    <input placeholder="+244 9XX XXX XXX" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-5 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-yellow-500 transition-all" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">Drop_Zone_Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                        <input placeholder="VIA_S8, TALATONA, LUANDA" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-yellow-500 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 2: PAYMENT METHOD */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-black text-sm italic">02</div>
                                <h2 className="text-2xl font-black uppercase italic tracking-tighter">Currency_Protocol</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: 'MCX', label: 'Multicaixa', icon: <Smartphone size={18} /> },
                                    { id: 'CARD', label: 'Credit_Card', icon: <CreditCard size={18} /> },
                                    { id: 'CRYPTO', label: 'Crypto_Net', icon: <Bitcoin size={18} /> }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setMethod(opt.id)}
                                        className={`p-6 rounded-[2rem] border transition-all flex flex-col items-center gap-4 group ${method === opt.id ? 'bg-white text-black border-white' : 'bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20'}`}
                                    >
                                        <div className={`${method === opt.id ? 'text-black' : 'text-yellow-500'}`}>{opt.icon}</div>
                                        <span className="text-[9px] font-black uppercase tracking-widest">{opt.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* DYNAMIC PAYMENT FIELDS */}
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8">
                                {method === 'MCX' && (
                                    <div className="space-y-4 text-center">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Referência será gerada após confirmação</p>
                                        <div className="py-4 px-6 bg-black rounded-xl border border-white/5 inline-block">
                                            <span className="text-xs font-mono text-yellow-500 tracking-[0.5em]">ENTIDADE: 00982</span>
                                        </div>
                                    </div>
                                )}
                                {method === 'CARD' && (
                                    <div className="space-y-4">
                                        <input placeholder="CARD_NUMBER" className="w-full bg-black border border-white/10 rounded-xl p-4 text-[11px] font-mono outline-none focus:border-yellow-500" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input placeholder="EXP_DATE" className="bg-black border border-white/10 rounded-xl p-4 text-[11px] font-mono outline-none focus:border-yellow-500" />
                                            <input placeholder="CVC" className="bg-black border border-white/10 rounded-xl p-4 text-[11px] font-mono outline-none focus:border-yellow-500" />
                                        </div>
                                    </div>
                                )}
                                {method === 'CRYPTO' && (
                                    <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-yellow-500/20">
                                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center italic font-black text-yellow-500">QR</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Send BTC to: 0x82...fA21</div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* --- RIGHT: FINAL RECEIPT (5 COLUMNS) --- */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 sticky top-10 space-y-10 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <ShieldCheck size={120} />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500/50">Final_Review</h3>
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Terminal_Receipt</h2>
                            </div>

                            {/* MINI ITEM LIST */}
                            <div className="space-y-4">
                                {[1, 2].map(i => (
                                    <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest pb-4 border-b border-white/5">
                                        <span className="opacity-40">ALD-MK2 (Unit_0{i})</span>
                                        <span>365.000 Kz</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40">
                                    <span>Subtotal</span>
                                    <span>730.000 Kz</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40">
                                    <span>Logistics_Fee</span>
                                    <span className="text-green-500">0.00 Kz</span>
                                </div>
                                <div className="flex justify-between text-2xl font-black uppercase italic border-t border-white/10 pt-6">
                                    <span>Total</span>
                                    <span className="text-yellow-500">730.000 Kz</span>
                                </div>
                            </div>

                            <button
                                onClick={handleDeployment}
                                disabled={isProcessing}
                                className={`w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all ${isProcessing ? 'bg-white/10 text-white/20 cursor-wait' : 'bg-white text-black hover:bg-yellow-500 active:scale-95'}`}
                            >
                                {isProcessing ? (
                                    <>Processing_Packet...</>
                                ) : (
                                    <>Authorize_Deployment <CheckCircle2 size={20} /></>
                                )}
                            </button>

                            <div className="space-y-4 pt-4 opacity-40">
                                <div className="flex items-center gap-3 text-[8px] font-black uppercase tracking-widest">
                                    <Globe size={14} /> Global_Secure_Shipping_Network
                                </div>
                                <div className="flex items-center gap-3 text-[8px] font-black uppercase tracking-widest">
                                    <Building2 size={14} /> Node_ID: LAD_ANGOLA_HUB
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-white/[0.03] text-center">
                <p className="text-[8px] font-black uppercase tracking-[1em] text-white/5 italic">System_Auth: Admin_Node_Gama // End_Of_Line</p>
            </footer>
        </div>
    );
};

export default CheckoutTerminal;