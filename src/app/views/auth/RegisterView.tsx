import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ChevronRight,
    Eye, EyeOff,
    Fingerprint, Loader2,
    Lock,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    UserPlus
} from 'lucide-react';
import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';

const RegisterView: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // --- FORM STATE ---
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulação de criação de conta no Servidor Alpha
        setTimeout(() => {
            setIsLoading(false);
            toast.success('OPERATOR_ENLISTED_SUCCESSFULLY', {
                description: 'Your credentials have been encrypted and stored in Node_LAD.',
                className: 'bg-[#0A0A0A] border border-white/10 text-white rounded-2xl font-sans',
            });
        }, 2000);
    };

    return (
        <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans flex items-center justify-center p-6 relative overflow-hidden">
            <Toaster theme="dark" position="top-center" />

            {/* --- BACKGROUND ARTIFACTS --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#ea7b0508_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[120px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl relative z-10"
            >
                {/* HEADER */}
                <div className="flex flex-col items-center mb-10 space-y-4">
                    <div className="w-14 h-14 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500">
                        <UserPlus size={28} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Operator_Enlistment</h1>
                        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mt-2 italic">New_Node_Registration_Protocol</p>
                    </div>
                </div>

                {/* REGISTER CARD */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-[3.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    <form onSubmit={handleRegister} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-[8px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Full_Name_Manifest</label>
                                <div className="relative group">
                                    <Fingerprint className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={16} />
                                    <input
                                        required
                                        type="text"
                                        placeholder="CLAUDIO GAMA"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[11px] font-black uppercase tracking-widest outline-none focus:border-yellow-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-[8px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Communication_Node (Email)</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={16} />
                                    <input
                                        required
                                        type="email"
                                        placeholder="OPERATOR@FLEET.AO"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[11px] font-black tracking-widest outline-none focus:border-yellow-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="space-y-2">
                                <label className="text-[8px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Emergency_Frequency (Phone)</label>
                                <div className="relative group">
                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={16} />
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+244 --- --- ---"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[11px] font-black tracking-widest outline-none focus:border-yellow-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <label className="text-[8px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Primary_Drop_Zone</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={16} />
                                    <input
                                        required
                                        placeholder="LUANDA, TALATONA"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-[11px] font-black uppercase tracking-widest outline-none focus:border-yellow-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[8px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Master_Access_Key</label>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={16} />
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-14 text-[11px] font-black tracking-widest outline-none focus:border-yellow-500/50 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* SUBMIT SECTION */}
                        <div className="pt-6 space-y-4">
                            <button
                                disabled={isLoading}
                                className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all active:scale-[0.98] disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Encrypting_Data...
                                    </>
                                ) : (
                                    <>
                                        Authorize_Enlistment <ChevronRight size={18} />
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                className="w-full py-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white flex items-center justify-center gap-2 transition-colors"
                            >
                                <ArrowLeft size={14} /> Back_To_Terminal
                            </button>
                        </div>
                    </form>

                    {/* SECURITY DECOR */}
                    <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                        <ShieldCheck size={120} />
                    </div>
                </div>

                {/* BOTTOM CAPTION */}
                <div className="mt-10 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3 opacity-20">
                        <div className="h-[1px] w-12 bg-white" />
                        <span className="text-[8px] font-black uppercase tracking-widest">End_To_End_Encrypted</span>
                        <div className="h-[1px] w-12 bg-white" />
                    </div>
                    <p className="text-[8px] font-black uppercase tracking-[0.8em] text-white/5 italic">
                        LAD_FLEET_SYSTEM // AUTH_MODULE_v2.0
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterView;