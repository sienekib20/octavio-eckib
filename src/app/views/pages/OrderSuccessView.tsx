import {
    CheckCircle2,
    Clock,
    Copy,
    Download,
    MapPin,
    Navigation2,
    Package,
    Share2,
    Truck
} from 'lucide-react';
import React from 'react';

const OrderSuccessView: React.FC = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black p-4 md:p-10">

            {/* --- BACKGROUND GRID ARTIFACT --- */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-[1200px] mx-auto relative z-10">

                {/* --- STATUS HEADER --- */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-10 mb-12 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-green-500">
                            <CheckCircle2 size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Transaction_Protocol_Verified</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                            Deployment_<br /><span className="text-yellow-500">Successful</span>
                        </h1>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-md">
                        <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Order_Ref_ID</p>
                        <div className="flex items-center gap-4">
                            <code className="text-xl font-black tracking-tighter uppercase text-yellow-500/80">FT-24-890-4512</code>
                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/20 hover:text-white">
                                <Copy size={16} />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* --- LEFT COLUMN: MANIFEST & LOGISTICS --- */}
                    <div className="lg:col-span-7 space-y-10">

                        {/* Logistics Map Card */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden relative group">
                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                <h3 className="text-xs font-black uppercase tracking-[0.4em]">Logistics_Manifest</h3>
                                <div className="flex items-center gap-2 text-green-500 animate-pulse">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    <span className="text-[9px] font-black tracking-widest">UNIT_IN_TRANSIT</span>
                                </div>
                            </div>

                            {/* Fake Map Section */}
                            <div className="h-[300px] bg-[#0A0A0A] relative flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/13.234,8.832,2,0/1200x300?access_token=pk.xxx')] bg-cover" />

                                {/* Visual Artifacts */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full border border-yellow-500/20 flex items-center justify-center animate-ping absolute" />
                                    <Navigation2 className="text-yellow-500 rotate-45" size={40} fill="currentColor" />
                                    <div className="mt-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                                        <span className="text-[10px] font-black uppercase tracking-widest">Luanda_Sector_Alpha</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                                <div>
                                    <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Carrier</p>
                                    <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Truck size={14} className="text-yellow-500" /> DHL_Global
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Estimated_ETA</p>
                                    <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Clock size={14} className="text-yellow-500" /> 2_Hours
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2">Destination</p>
                                    <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                        <MapPin size={14} className="text-yellow-500" /> Luanda, AO
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-yellow-500 text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all active:scale-95">
                                <Package size={20} /> Track_Shipment
                            </button>
                            <button className="flex-1 border border-white/10 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all active:scale-95">
                                Return_To_Fleet
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: FINAL INVOICE --- */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 space-y-8 sticky top-32 shadow-2xl backdrop-blur-sm">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/20">Final_Invoice_Log</h3>

                            <div className="space-y-6">
                                <div className="flex justify-between items-start group">
                                    <div>
                                        <h4 className="text-[11px] font-black uppercase tracking-widest">ALD-MK2 Logistics Drone</h4>
                                        <p className="text-[9px] text-white/20 font-bold">SERIAL: 0x82A1</p>
                                    </div>
                                    <span className="text-sm font-black tracking-tighter uppercase">365.000,00 Kz</span>
                                </div>
                                <div className="flex justify-between items-start group">
                                    <div>
                                        <h4 className="text-[11px] font-black uppercase tracking-widest">BSS-03 Power Hub</h4>
                                        <p className="text-[9px] text-white/20 font-bold">SERIAL: 0x93B2</p>
                                    </div>
                                    <span className="text-sm font-black tracking-tighter uppercase">122.000,00 Kz</span>
                                </div>
                            </div>

                            <div className="space-y-4 pt-8 border-t border-white/5">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                                    <span>Logistics_Fee</span>
                                    <span className="text-green-500">FREE_DEPLOYMENT</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                                    <span>Import_Tax_Node</span>
                                    <span>0,00 Kz</span>
                                </div>

                                <div className="pt-6 flex justify-between items-end">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500 italic">Total_Authorized</span>
                                    <div className="text-right">
                                        <span className="text-5xl font-black italic tracking-tighter leading-none">487.000,00</span>
                                        <span className="block text-[10px] text-yellow-500 font-black mt-1">ANGOLAN_KWANZA</span>
                                    </div>
                                </div>
                            </div>

                            {/* Security Footer */}
                            <div className="pt-8 flex items-center justify-between border-t border-white/5">
                                <div className="flex gap-4">
                                    <button className="p-3 bg-white/5 rounded-xl text-white/30 hover:text-white transition-colors"><Share2 size={16} /></button>
                                    <button className="p-3 bg-white/5 rounded-xl text-white/30 hover:text-white transition-colors"><Download size={16} /></button>
                                </div>
                                <div className="text-right">
                                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20">Verified_By</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest italic">Admin_Node_Gama</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-32 pb-10 flex flex-col items-center gap-4 border-t border-white/5 pt-10">
                <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-white/10 italic">
                    <span>System_Auth: Terminal_01</span>
                    <span>//</span>
                    <span>End_Of_Transmission</span>
                </div>
            </footer>
        </div>
    );
};

export default OrderSuccessView;