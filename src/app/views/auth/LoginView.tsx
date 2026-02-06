import { AnimatePresence, motion } from 'framer-motion';
import {
    AlertTriangle,
    ChevronRight,
    Cpu,
    Eye,
    EyeOff,
    Fingerprint,
    Loader2,
    ShieldCheck
} from 'lucide-react';
import React, { useState } from 'react';

const LoginView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authStatus, setAuthStatus] = useState<'IDLE' | 'ERROR' | 'SUCCESS'>('IDLE');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthStatus('IDLE');

    // Simulação de protocolo de autenticação
    setTimeout(() => {
      setIsLoading(false);
      setAuthStatus('ERROR'); // Simulei erro para veres o efeito visual "brutal"
    }, 2000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ea7b0510_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* LOGO / STATUS */}
        <div className="flex flex-col items-center mb-12 space-y-4">
          <div className="w-16 h-16 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
            <Cpu size={32} className={isLoading ? 'animate-pulse' : ''} />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter italic">Terminal_Access</h1>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mt-2 italic">Node_LAD_Authorization_Required</p>
          </div>
        </div>

        {/* AUTH FORM */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
          
          {/* Scanline Effect during loading */}
          {isLoading && (
            <motion.div 
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-12 bg-yellow-500/10 blur-xl z-20 pointer-events-none"
            />
          )}

          <form onSubmit={handleAuth} className="space-y-6">
            
            {/* Input: Operator ID */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Operator_ID</label>
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  placeholder="EX: ADMIN_GAMA_01" 
                  className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-xs font-black uppercase tracking-widest outline-none focus:border-yellow-500/50 transition-all placeholder:opacity-10"
                />
                <Fingerprint className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={18} />
              </div>
            </div>

            {/* Input: Access Key */}
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-4 italic">Access_Key</label>
              <div className="relative group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••••••" 
                  className="w-full bg-black border border-white/10 rounded-2xl py-5 px-6 text-xs font-black tracking-widest outline-none focus:border-yellow-500/50 transition-all placeholder:opacity-10"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* ERROR MESSAGE */}
            <AnimatePresence>
              {authStatus === 'ERROR' && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3"
                >
                  <AlertTriangle className="text-red-500 shrink-0" size={16} />
                  <p className="text-[9px] font-black uppercase tracking-widest text-red-500 leading-tight">
                    Access_Denied: Invalid_Credentials_Payload. <br/>Retry_Attempt_01/03
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SUBMIT BUTTON */}
            <button 
              disabled={isLoading}
              className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
                isLoading 
                ? 'bg-white/5 text-white/20 cursor-wait' 
                : 'bg-white text-black hover:bg-yellow-500'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Verifying...
                </>
              ) : (
                <>
                  Initialize_Session <ChevronRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 flex justify-between items-center">
             <button className="text-[8px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Recover_Access</button>
             <div className="flex items-center gap-2 opacity-20">
                <ShieldCheck size={12} />
                <span className="text-[8px] font-black uppercase tracking-widest">SSL_AES_256</span>
             </div>
          </div>
        </div>

        {/* FOOTER INFO */}
        <p className="text-center mt-12 text-[8px] font-black uppercase tracking-[1em] text-white/5 italic">
          Fleet_System_Auth_Protocol // End_Of_Line
        </p>
      </motion.div>
    </div>
  );
};

export default LoginView;