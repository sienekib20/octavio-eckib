import {
    ArrowLeft,
    Battery,
    Camera,
    Minus, Plus,
    ShoppingBag, Star,
    Weight
} from 'lucide-react';
import React, { useState } from 'react';

const ProductTerminal: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('OS');

    const relatedUnits = [
        { id: 'ALD-MK1', name: 'Nano Carrier', price: '120.000', img: 'https://images.unsplash.com/photo-1473960104312-bf9e182f338d?q=80&w=400' },
        { id: 'ALD-MK3', name: 'Heavy Lifter', price: '890.000', img: 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=400' },
        { id: 'CTR-09', name: 'Ground Rover', price: '210.000', img: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400' },
        { id: 'ST-01', name: 'Relay Station', price: '55.000', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400' },
    ];

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- NAV --- */}
            <nav className="border-b border-white/[0.03] px-10 py-5 flex justify-between items-center bg-[#050505]/95 backdrop-blur-xl sticky top-0 z-50">
                <button className="flex items-center gap-3 group">
                    <ArrowLeft size={16} className="text-yellow-500" />
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100">Terminal / Inventory / ALD-MK2</span>
                </button>
                <div className="flex items-center gap-6 uppercase text-[10px] font-black tracking-widest text-white/20">
                    <span>System_v2.06</span>
                    <button className="text-yellow-500 bg-yellow-500/10 p-2 rounded-lg"><ShoppingBag size={18} /></button>
                </div>
            </nav>

            <main className="max-w-[1500px] mx-auto px-10 py-16">

                {/* --- SEÇÃO PRINCIPAL (IMAGENS + COMPRA) --- */}
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* ESQUERDA: LAYOUT MOLLA (Thumbnails + Main) */}
                    <div className="w-full lg:w-[55%] flex gap-6">
                        <div className="hidden md:flex flex-col gap-4 w-24 shrink-0">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500 transition-all opacity-40 hover:opacity-100">
                                    <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=200" className="w-full h-full object-cover grayscale" alt="thumb" />
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200" className="w-full h-auto object-cover grayscale" alt="Main Unit" />
                        </div>
                    </div>

                    {/* DIREITA: DADOS DE CONTROLE */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-10">
                        <header className="space-y-4">
                            <span className="text-[10px] font-black tracking-[0.6em] text-yellow-500 uppercase">Category: Autonomous_Logistics</span>
                            <h1 className="text-7xl font-black uppercase tracking-tighter italic leading-none">Drone ML-ITI: ALD-MK-II</h1>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-black tracking-tighter">365.000,50 <span className="text-sm text-yellow-500">Kz</span></span>
                                <div className="flex gap-1 text-yellow-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                            </div>
                        </header>

                        <p className="text-sm font-bold text-white/40 leading-relaxed uppercase tracking-widest border-b border-white/5 pb-8 italic">
                            Unidade de transporte autônomo com navegação por Skynet. Chassis de fibra de carbono de grau militar. Ready for deployment.
                        </p>

                        {/* Tech Dash */}
                        <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                            <div className="bg-[#050505] p-6 flex items-center gap-4">
                                <Weight className="text-yellow-500" size={20} />
                                <div><p className="text-[8px] font-black text-white/20 uppercase">Capacity</p><p className="text-xs font-bold">25.0 KG</p></div>
                            </div>
                            <div className="bg-[#050505] p-6 flex items-center gap-4">
                                <Battery className="text-yellow-500" size={20} />
                                <div><p className="text-[8px] font-black text-white/20 uppercase">Endurance</p><p className="text-xs font-bold">12.5 HRS</p></div>
                            </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex gap-4">
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-white/20 hover:text-white"><Minus size={16} /></button>
                                <span className="w-10 text-center font-black text-sm">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="text-white/20 hover:text-white"><Plus size={16} /></button>
                            </div>
                            <button className="flex-1 bg-yellow-500 text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all">
                                <ShoppingBag size={20} /> Initialize_Order
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- ABAS DE INFORMAÇÃO --- */}
                <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
                    <div className="space-y-4">
                        <h3 className="text-yellow-500 font-black uppercase italic tracking-widest text-xs">Description</h3>
                        <p className="text-[11px] font-bold text-white/40 leading-relaxed uppercase tracking-widest">Unidade projetada para logística em megacidades. Equipado com LiDAR de 360º e redundância de motores em caso de falha crítica.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-yellow-500 font-black uppercase italic tracking-widest text-xs">Additional_Specs</h3>
                        <p className="text-[11px] font-bold text-white/40 leading-relaxed uppercase tracking-widest">Frame: Carbon Fiber. Comm: 5G/SAT. Sensors: Thermal/Optical. Max Speed: 90km/h.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-yellow-500 font-black uppercase italic tracking-widest text-xs">Shipping_Returns</h3>
                        <p className="text-[11px] font-bold text-white/40 leading-relaxed uppercase tracking-widest">Entrega via cargueiro em Luanda (2h). Resto do mundo via DHL. Garantia operacional de 12 meses.</p>
                    </div>
                </div>

                {/* --- REVIEWS (RECUPERADO E COMPLETO) --- */}
                <section className="mt-32 grid lg:grid-cols-2 gap-20 border-t border-white/5 pt-16">
                    <div className="space-y-10">
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter">Feedback_Logs</h2>
                        <div className="space-y-6">
                            {[1, 2].map(i => (
                                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 flex gap-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl shrink-0" />
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">OPERATOR: 0x21{i}</span>
                                            <div className="flex text-yellow-500"><Star size={8} fill="currentColor" /></div>
                                        </div>
                                        <p className="text-xs font-bold text-white/40 uppercase leading-relaxed italic">"Desempenho absoluto. O tempo de resposta da A.I. é o melhor do mercado."</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form de Review Completo */}
                    <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[3rem] space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-yellow-500 italic">Add_Customer_Log</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input placeholder="NAME" className="bg-black border border-white/10 p-4 text-[10px] font-black uppercase rounded-xl outline-none focus:border-yellow-500" />
                                <input placeholder="EMAIL" className="bg-black border border-white/10 p-4 text-[10px] font-black uppercase rounded-xl outline-none focus:border-yellow-500" />
                            </div>
                            <input placeholder="TELEPHONE_ID" className="w-full bg-black border border-white/10 p-4 text-[10px] font-black uppercase rounded-xl outline-none focus:border-yellow-500" />
                            <textarea placeholder="LOG_MESSAGE_ENTRY" rows={4} className="w-full bg-black border border-white/10 p-4 text-[10px] font-black uppercase rounded-xl outline-none focus:border-yellow-500 resize-none" />
                            <div className="flex gap-4">
                                <label className="flex-1 flex items-center justify-center gap-2 border border-dashed border-white/20 p-4 rounded-xl cursor-pointer hover:bg-white/5 text-white/40">
                                    <Camera size={16} /> <span className="text-[9px] font-black uppercase tracking-widest">Attach_Photo</span>
                                    <input type="file" className="hidden" />
                                </label>
                                <button className="flex-1 bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-500 transition-all">Submit_Log</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PRODUTOS RELACIONADOS --- */}
                <section className="mt-40 space-y-12">
                    <div className="flex justify-between items-center border-b border-white/5 pb-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20">Related_Entities</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedUnits.map(unit => (
                            <div key={unit.id} className="group cursor-pointer">
                                <div className="aspect-[3/4] bg-white/5 border border-white/5 rounded-3xl overflow-hidden mb-6 relative">
                                    <img src={unit.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-all" />
                                </div>
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest px-2">
                                    <span>{unit.name}</span>
                                    <span className="text-yellow-500">{unit.price} Kz</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductTerminal;