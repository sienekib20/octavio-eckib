import {
    Activity,
    ArrowLeft,
    Box,
    Clock,
    Maximize2,
    Navigation2,
    Search,
    ShieldCheck,
    Zap
} from 'lucide-react';
import React from 'react';

const TrackOrderView: React.FC = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- HUD HEADER --- */}
            <nav className="border-b border-white/[0.03] px-6 md:px-10 py-6 flex justify-between items-center bg-[#050505]/90 backdrop-blur-xl sticky top-0 z-50">
                <button className="flex items-center gap-3 group text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all">
                    <ArrowLeft size={16} /> Close_Terminal
                </button>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">Live_Tracking_Active</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Freq: 2.4GHz_Encrypted</span>
                </div>
            </nav>

            <main className="max-w-[1400px] mx-auto px-6 py-12 md:py-20">

                {/* --- TOP SEARCH BAR (IF NEEDED TO TRACK ANOTHER) --- */}
                <div className="mb-20 max-w-2xl">
                    <p className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.5em] mb-4 italic">// Input_Tracking_ID</p>
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-yellow-500 transition-colors" size={20} />
                        <input
                            defaultValue="FT-24-890-4512"
                            className="w-full bg-white/[0.02] border border-white/10 rounded-3xl py-6 pl-16 pr-6 text-xl font-black uppercase tracking-tighter outline-none focus:border-yellow-500/50 transition-all italic"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">

                    {/* --- LEFT: LOGISTICS TIMELINE (5 COLUMNS) --- */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">Mission_Status</h2>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Fleet_De_Gama // Logistics_Protocol</p>
                        </div>

                        {/* TIMELINE FLOW */}
                        <div className="relative pl-8 space-y-12 border-l border-white/5 ml-4">
                            {[
                                { status: 'In_Transit', time: '14:20', desc: 'Unit crossed Luanda Sector Alpha node.', active: true },
                                { status: 'Departed_Hub', time: '13:45', desc: 'Deployment authorized from LAD_01 central.', active: false },
                                { status: 'Package_Verified', time: '13:00', desc: 'Payload integrity check: 100% stable.', active: false },
                                { status: 'Order_Initialized', time: '12:55', desc: 'Transaction protocol verified by Admin.', active: false }
                            ].map((step, i) => (
                                <div key={i} className="relative">
                                    {/* Indicator */}
                                    <div className={`absolute -left-[41px] top-0 w-4 h-4 rounded-full border-2 ${step.active ? 'bg-yellow-500 border-yellow-500 animate-pulse' : 'bg-[#050505] border-white/10'}`} />

                                    <div className={`${step.active ? 'opacity-100' : 'opacity-30'} transition-opacity`}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[11px] font-black uppercase tracking-widest text-yellow-500 italic">{step.status}</span>
                                            <span className="text-[10px] font-mono opacity-50">{step.time}</span>
                                        </div>
                                        <p className="text-xs font-bold text-white/60 uppercase tracking-widest leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT: HUD TELEMETRY (7 COLUMNS) --- */}
                    <div className="lg:col-span-7 space-y-10">

                        {/* VIRTUAL MAP TERMINAL */}
                        <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] overflow-hidden relative group aspect-video md:aspect-auto md:h-[500px] flex items-center justify-center">
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20" />

                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200')] bg-cover opacity-20 grayscale" />

                            {/* MAP INTERFACE ELEMENTS */}
                            <div className="absolute top-10 left-10 flex gap-4 z-10">
                                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl text-[9px] font-black tracking-widest">COORD: -8.8383 / 13.2344</div>
                                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl text-[9px] font-black tracking-widest text-green-500 flex items-center gap-2">
                                    <Activity size={10} /> ALT: 120M
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full border border-yellow-500/20 flex items-center justify-center animate-ping absolute" />
                                <div className="w-20 h-20 rounded-full border border-yellow-500/40 flex items-center justify-center animate-pulse relative bg-black/40 backdrop-blur-sm">
                                    <Navigation2 className="text-yellow-500 rotate-45" size={32} fill="currentColor" />
                                </div>
                            </div>

                            <button className="absolute bottom-10 right-10 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl transition-all">
                                <Maximize2 size={20} />
                            </button>
                        </div>

                        {/* TELEMETRY DATA GRID */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'ETA', value: '34 MIN', icon: <Clock size={14} /> },
                                { label: 'BATTERY', value: '82%', icon: <Zap size={14} /> },
                                { label: 'SPEED', value: '45 KM/H', icon: <Navigation2 size={14} /> },
                                { label: 'SIGNAL', value: '98%', icon: <ShieldCheck size={14} /> }
                            ].map((data, i) => (
                                <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] space-y-3">
                                    <div className="text-yellow-500/50">{data.icon}</div>
                                    <div>
                                        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">{data.label}</p>
                                        <p className="text-sm font-black italic tracking-tighter uppercase">{data.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* UNIT IDENTIFIER */}
                        <div className="bg-yellow-500 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                                    <Box className="text-yellow-500" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-black font-black uppercase text-xl italic tracking-tighter">ALD-MK2_Unit_09</h4>
                                    <p className="text-black/60 text-[9px] font-black uppercase tracking-[0.2em]">Autonomous_Logistics_Core_v4</p>
                                </div>
                            </div>
                            <button className="bg-black text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                Comm_Link
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <footer className="py-20 text-center border-t border-white/[0.03]">
                <p className="text-[8px] font-black uppercase tracking-[1em] text-white/5 italic">Secure_Data_Stream // Node_01_Angola</p>
            </footer>
        </div>
    );
};

export default TrackOrderView;