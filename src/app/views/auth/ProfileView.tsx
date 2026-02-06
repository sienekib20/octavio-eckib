import {
    Check,
    Loader2,
    LogOut,
    Radio,
    Save,
    Settings,
    Shield
} from 'lucide-react';
import React, { useState } from 'react';
// --- IMPORTA O SONNER ---
import { Toaster, toast } from 'sonner';

const ProfileView: React.FC = () => {
    const [isSyncing, setIsSyncing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [userData, setUserData] = useState({
        fullName: "CLAUDIO GAMA",
        email: "admin@fleetdegama.ao",
        phone: "+244 923 000 000",
        address: "VIA_S8, TALATONA, LUANDA",
        nodeId: "0x992_ALPHA_NOD",
        clearance: "Level_05"
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        // --- PROTOCOLO DE ATUALIZAÇÃO ---
        setTimeout(() => {
            setIsSaving(false);

            // NOTIFICAÇÃO ESTILIZADA
            toast.success('DATABASE_SYNC_SUCCESSFUL', {
                description: 'Operator credentials have been updated in the Fleet_De_Gama core.',
                className: 'bg-[#0A0A0A] border border-white/10 text-white rounded-2xl font-sans',
                icon: <Check className="text-green-500" size={16} />,
            });
        }, 1500);
    };

    const syncSystem = () => {
        setIsSyncing(true);
        const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

        toast.promise(promise, {
            loading: 'Establishing_Comm_Link...',
            success: 'Node_Status: STABLE',
            error: 'Signal_Lost_Retry',
            className: 'bg-[#0A0A0A] border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]',
        });

        setTimeout(() => setIsSyncing(false), 2000);
    };

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">

            {/* --- RENDERIZA O COMPONENTE DE TOAST --- */}
            <Toaster
                theme="dark"
                position="bottom-right"
                toastOptions={{
                    style: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.05)', color: '#E5E5E5' },
                }}
            />

            <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20">

                {/* HEADER HUD */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-yellow-500">
                            <Shield size={18} />
                            <span className="text-[10px] font-black uppercase tracking-[0.6em]">Security_Clearance: {userData.clearance}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
                            Operator_<br /><span className="text-yellow-500">Profile</span>
                        </h1>
                    </div>

                    <button
                        onClick={syncSystem}
                        className="group flex items-center gap-4 bg-white/[0.02] border border-white/10 px-8 py-5 rounded-2xl hover:bg-white/5 transition-all active:scale-95"
                    >
                        <Radio className={`${isSyncing ? 'animate-pulse text-yellow-500' : 'text-white/20'}`} size={18} />
                        <div className="text-left">
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">System_Sync</p>
                            <p className="text-[10px] font-black uppercase">{isSyncing ? 'Synchronizing...' : 'Node_Stable'}</p>
                        </div>
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN: IDENTITY */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#0A0A0A] border border-white/5 rounded-[3.5rem] p-10 relative overflow-hidden">
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                <div className="absolute inset-0 border-2 border-dashed border-yellow-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
                                <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#050505] relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="text-center space-y-2 pb-10 border-b border-white/5">
                                <h2 className="text-3xl font-black uppercase italic tracking-tighter">{userData.fullName}</h2>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Auth_ID: {userData.nodeId}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => toast.error('PROTOCOL_ABORTED', { description: 'Session termination sequence cancelled.' })}
                            className="w-full py-6 flex items-center justify-center gap-4 bg-red-500/5 hover:bg-red-500 border border-red-500/10 hover:text-black rounded-2xl transition-all font-black uppercase tracking-[0.4em] text-[10px]"
                        >
                            <LogOut size={16} /> Terminate_Session
                        </button>
                    </div>

                    {/* RIGHT COLUMN: FORM */}
                    <div className="lg:col-span-8">
                        <form onSubmit={handleUpdate} className="bg-[#0A0A0A] border border-white/5 rounded-[3.5rem] p-10 md:p-14 space-y-12">
                            <div className="flex items-center gap-4">
                                <Settings className="text-yellow-500" size={24} />
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Registration_Data</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 ml-2 italic">Full_Name_Manifest</label>
                                    <input
                                        value={userData.fullName}
                                        onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                                        className="w-full bg-black border border-white/10 rounded-2xl p-5 text-xs font-black uppercase tracking-widest focus:border-yellow-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 ml-2 italic">Email_Communication_Node</label>
                                    <input
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        className="w-full bg-black border border-white/10 rounded-2xl p-5 text-xs font-black tracking-widest focus:border-yellow-500 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5">
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3 hover:bg-yellow-500 transition-all active:scale-95 disabled:opacity-50"
                                >
                                    {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                                    {isSaving ? 'Updating_Core...' : 'Commit_Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileView;