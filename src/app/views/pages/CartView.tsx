import {
    ArrowLeft,
    ChevronRight,
    CreditCard,
    Minus,
    Plus,
    ShoppingBag,
    Tag,
    Trash2
} from 'lucide-react';
import React, { useState } from 'react';

const CommandCart: React.FC = () => {
    // ESTADO FUNCIONAL DOS ITENS
    const [items, setItems] = useState([
        { id: 'ALD-MK2', name: 'Autonomous Logistics Drone', price: 365000.50, qty: 1, img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=400' },
        { id: 'BSS-03', name: 'Battery Swap Station (Hub)', price: 122000.00, qty: 1, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' },
        { id: 'CTR-09', name: 'Ground Rover Unit', price: 210000.00, qty: 1, img: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400' }
    ]);

    const [tax] = useState(2500.00);
    const [voucher, setVoucher] = useState('');
    const [discount, setDiscount] = useState(0);

    // FUNÇÕES DE MANIPULAÇÃO
    const updateQty = (id: string, delta: number) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const applyVoucher = () => {
        if (voucher.toUpperCase() === 'TERMINAL10') {
            setDiscount(0.10); // 10% de desconto
            alert('VOUCHER_ACCEPTED: 10% OFF APPLIED');
        } else {
            alert('ERROR: INVALID_CREDENTIALS');
        }
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalDiscount = subtotal * discount;
    const finalTotal = subtotal - totalDiscount + tax;

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- HEADER --- */}
            <nav className="border-b border-white/[0.03] px-6 md:px-10 py-8 flex justify-between items-center bg-[#050505]/90 backdrop-blur-xl sticky top-0 z-50">
                <div className="flex items-center gap-4 md:gap-12">
                    <h1 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Command_Cart</h1>
                    <div className="hidden lg:flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                        <span className="text-yellow-500 underline decoration-2 underline-offset-8">01. Review</span>
                        <span>02. Logistics</span>
                        <span>03. Payment</span>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    <ArrowLeft size={14} /> <span className="hidden sm:inline">Back_Inventory</span>
                </button>
            </nav>

            <main className="max-w-[1600px] mx-auto px-6 md:px-10 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* --- LEFT: PAYLOAD LIST --- */}
                    <div className="lg:col-span-8 space-y-10">
                        <div className="flex justify-between items-end border-b border-white/5 pb-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 italic">System_Payload // {items.length} Units</h2>
                            <button onClick={() => setItems([])} className="text-[9px] font-black uppercase text-red-500/40 hover:text-red-500 transition-colors tracking-widest">Wipe_All</button>
                        </div>

                        {/* RESPONSIVE SCROLL CONTAINER */}
                        <div className="overflow-x-auto pb-6 scrollbar-hide md:overflow-visible">
                            <div className="flex flex-col gap-4 min-w-[600px] md:min-w-full">
                                {items.length > 0 ? items.map((item) => (
                                    <div key={item.id} className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-6 flex items-center gap-8 hover:bg-white/[0.03] transition-all group">
                                        <div className="w-24 h-24 bg-[#111] rounded-2xl overflow-hidden shrink-0 border border-white/5">
                                            <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                        </div>

                                        <div className="flex-1 min-w-[200px]">
                                            <p className="text-[8px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-1">{item.id}</p>
                                            <h3 className="text-lg font-black uppercase tracking-tighter leading-none mb-2">{item.name}</h3>
                                            <span className="text-[9px] font-black px-2 py-1 bg-green-500/10 text-green-500 rounded uppercase border border-green-500/20">Operational</span>
                                        </div>

                                        <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1">
                                            <button onClick={() => updateQty(item.id, -1)} className="p-2 text-white/20 hover:text-white"><Minus size={14} /></button>
                                            <span className="w-8 text-center font-black text-xs">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, 1)} className="p-2 text-white/20 hover:text-white"><Plus size={14} /></button>
                                        </div>

                                        <div className="w-32 text-right">
                                            <p className="text-lg font-black tracking-tighter">{(item.price * item.qty).toLocaleString()} <span className="text-[9px] text-yellow-500">Kz</span></p>
                                        </div>

                                        <button onClick={() => removeItem(item.id)} className="p-3 text-white/10 hover:text-red-500 transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                )) : (
                                    <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                                        <ShoppingBag size={48} className="mx-auto text-white/5 mb-4" />
                                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Payload_Empty // No_Data_Found</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* VOUCHER & TOTALS */}
                        <div className="flex flex-col md:flex-row gap-6 pt-10">
                            <div className="relative flex-1 group">
                                <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-yellow-500 transition-colors" size={18} />
                                <input
                                    type="text"
                                    value={voucher}
                                    onChange={(e) => setVoucher(e.target.value)}
                                    placeholder="PROMO_CODE (EX: TERMINAL10)"
                                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-5 pl-14 pr-32 text-[10px] font-black uppercase tracking-[0.2em] outline-none focus:border-yellow-500/50 transition-all placeholder:text-white/10"
                                />
                                <button onClick={applyVoucher} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black text-[9px] font-black px-6 py-2.5 rounded-xl hover:bg-yellow-500 transition-colors">EXECUTE</button>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: ORDER SUMMARY --- */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-8 md:p-10 sticky top-32 space-y-10 shadow-2xl">
                            <div>
                                <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Summary</h2>
                                <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] mt-2">Node_Location: Luanda, AO</p>
                            </div>

                            <div className="space-y-4 border-y border-white/5 py-8">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40 italic">
                                    <span>Subtotal</span>
                                    <span className="text-white">{subtotal.toLocaleString()} Kz</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-green-500 italic">
                                        <span>Discount (10%)</span>
                                        <span>- {totalDiscount.toLocaleString()} Kz</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40 italic">
                                    <span>Shipping_Fee</span>
                                    <span className="text-white font-black">0,00 Kz</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40 italic">
                                    <span>Tax_Calculated</span>
                                    <span className="text-white">{tax.toLocaleString()} Kz</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">Final_Invoice</span>
                                    <div className="text-right">
                                        <span className="text-5xl font-black tracking-tighter italic">{finalTotal.toLocaleString()}</span>
                                        <span className="text-xs text-yellow-500 font-black ml-2 uppercase tracking-widest">Kz</span>
                                    </div>
                                </div>

                                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                                    Confirm_Deployment <ChevronRight size={18} />
                                </button>

                                <div className="flex items-center justify-center gap-6 opacity-30 pt-4 grayscale">
                                    <CreditCard size={20} />
                                    <div className="w-10 h-6 bg-white/20 rounded" /> {/* Mock Visa */}
                                    <div className="w-10 h-6 bg-white/20 rounded-full" /> {/* Mock MC */}
                                    <div className="text-[10px] font-black italic">BITCOIN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t border-white/[0.03] text-center">
                <p className="text-[8px] font-black uppercase tracking-[1em] text-white/10 italic">Data_Packet_Verified // Terminal_Access_Node_01</p>
            </footer>
        </div>
    );
};

export default CommandCart;