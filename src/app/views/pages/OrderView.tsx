import { AnimatePresence, motion } from 'framer-motion';
import {
    Activity,
    AlertCircle,
    ArrowUpRight,
    Calendar,
    CheckCircle2,
    ChevronRight,
    Download,
    FileText,
    Loader2,
    Lock,
    Package,
    Printer,
    Search,
    X
} from 'lucide-react';
import React, { useMemo, useState } from 'react';

// --- MOCK DATA DATASET ---
const MISSION_DATA = [
  { id: 'FT-24-890-4512', date: '2024-07-26', status: 'IN_TRANSIT', total: '487.000', units: 2, type: 'Heavy_Drop', integrity: 85 },
  { id: 'FT-24-772-1109', date: '2024-07-15', status: 'COMPLETED', total: '122.000', units: 1, type: 'Express_Node', integrity: 100 },
  { id: 'FT-24-650-8832', date: '2024-06-28', status: 'COMPLETED', total: '890.000', units: 4, type: 'Fleet_Supply', integrity: 100 },
  { id: 'FT-24-512-0043', date: '2024-06-10', status: 'CANCELLED', total: '55.000', units: 1, type: 'Emergency_Relay', integrity: 15 },
  { id: 'FT-24-441-9902', date: '2024-05-20', status: 'COMPLETED', total: '365.000', units: 2, type: 'Standard_Drop', integrity: 100 },
  { id: 'FT-24-330-1122', date: '2024-05-05', status: 'COMPLETED', total: '98.000', units: 1, type: 'Micro_Node', integrity: 100 },
];

// --- COMPONENTE: MODAL DE FATURA ---
const InvoiceModal = ({ mission, isOpen, onClose }: any) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl"
          >
            <div className="bg-white/[0.03] px-10 py-5 border-b border-white/5 flex justify-between items-center">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-yellow-500 flex items-center gap-2">
                <Lock size={12} /> Document_Secure_Access
              </span>
              <button onClick={onClose} className="text-white/20 hover:text-white transition-colors"><X size={20}/></button>
            </div>
            
            <div className="p-12 space-y-10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-yellow-500/5 rounded-[2rem] flex items-center justify-center text-yellow-500 border border-yellow-500/10 shadow-inner">
                  <FileText size={48} />
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Generate_Invoice</h3>
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Log_ID: {mission.id}</p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="bg-[#050505] p-5">
                  <p className="text-[8px] font-black text-white/20 uppercase mb-1">Amount</p>
                  <p className="text-sm font-black italic">{mission.total} Kz</p>
                </div>
                <div className="bg-[#050505] p-5">
                  <p className="text-[8px] font-black text-white/20 uppercase mb-1">Auth_Date</p>
                  <p className="text-sm font-black italic">{mission.date}</p>
                </div>
              </div>

              <div className="space-y-3">
                <button onClick={handleDownload} disabled={isDownloading} className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all disabled:opacity-50">
                  {isDownloading ? <Loader2 className="animate-spin" /> : <><Download size={18} /> Download_PDF</>}
                </button>
                <button className="w-full bg-white/5 text-white/30 py-6 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                  <Printer size={18} /> Local_Print
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENTE PRINCIPAL: HISTORY VIEW ---
const OrderHistoryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMission, setSelectedMission] = useState<any>(null);

  const filteredMissions = useMemo(() => {
    return MISSION_DATA.filter(m => {
      const matchesSearch = m.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'ALL' || m.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus]);

  const visibleMissions = filteredMissions.slice(0, visibleCount);

  const handleFetchMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans selection:bg-yellow-500 selection:text-black">
      <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-yellow-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20">Operational_Logbook_v2.06</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-4">
              Mission_<br/><span className="text-yellow-500">History</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-1 sm:w-80">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-yellow-500 transition-colors" size={20} />
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="MISSION_ID_CMD..." className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-[11px] font-black uppercase tracking-widest outline-none focus:border-yellow-500/50 transition-all" />
            </div>
            <select onChange={(e) => setFilterStatus(e.target.value)} className="bg-white/[0.02] border border-white/10 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none hover:bg-white/5 cursor-pointer text-white/40">
              <option value="ALL">All_Status</option>
              <option value="COMPLETED">Completed</option>
              <option value="IN_TRANSIT">In_Transit</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>
        </header>

        {/* MISSION LIST */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {visibleMissions.map((mission) => (
              <motion.div 
                layout key={mission.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelectedMission(mission)}
                className="group bg-white/[0.01] border border-white/5 rounded-[3rem] p-10 flex flex-col lg:flex-row items-center gap-12 hover:bg-white/[0.03] hover:border-yellow-500/30 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="shrink-0 flex items-center justify-center">
                  {mission.status === 'COMPLETED' ? <CheckCircle2 size={40} className="text-green-500/40 group-hover:text-green-500 transition-colors" /> : 
                   mission.status === 'IN_TRANSIT' ? <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" /> : 
                   <AlertCircle size={40} className="text-red-500/40" />}
                </div>

                <div className="flex-1 space-y-4 text-center lg:text-left">
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors">{mission.id}</h3>
                    <span className="text-[9px] font-black bg-white/5 px-3 py-1 rounded border border-white/10 opacity-40 italic">{mission.type}</span>
                  </div>
                  <div className="flex justify-center lg:justify-start gap-8 text-[10px] font-black uppercase tracking-widest text-white/20 italic">
                    <span className="flex items-center gap-2"><Calendar size={14}/> {mission.date}</span>
                    <span className="flex items-center gap-2"><Package size={14}/> {mission.units} Units</span>
                  </div>
                </div>

                <div className="hidden xl:flex flex-col gap-3 w-48 px-10 border-x border-white/5">
                  <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Unit_Integrity</p>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${mission.integrity}%` }} transition={{ duration: 1.5 }} className="h-full bg-yellow-500" />
                  </div>
                  <p className="text-[10px] font-black text-right opacity-40">{mission.integrity}%</p>
                </div>

                <div className="text-center lg:text-right space-y-1 min-w-[180px]">
                  <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Grand_Total</p>
                  <p className="text-3xl font-black italic tracking-tighter">{mission.total} <span className="text-xs text-yellow-500">Kz</span></p>
                  <div className="flex items-center justify-center lg:justify-end gap-2 text-[9px] font-black text-white/20 group-hover:text-yellow-500 transition-all pt-2">
                    Open_Invoice <ArrowUpRight size={14}/>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINATION BUTTON */}
        {visibleCount < filteredMissions.length && (
          <div className="mt-24 flex justify-center">
            <button onClick={handleFetchMore} disabled={isLoading} className="group flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 group-hover:text-yellow-500 transition-all relative overflow-hidden">
                {isLoading ? <Loader2 className="animate-spin" /> : <ChevronRight size={28} className="rotate-90 group-hover:translate-y-1 transition-transform" />}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/10 group-hover:text-white transition-colors italic">
                {isLoading ? 'Decrypting_Logs...' : 'Fetch_Older_Missions'}
              </span>
            </button>
          </div>
        )}
      </main>

      <InvoiceModal mission={selectedMission} isOpen={!!selectedMission} onClose={() => setSelectedMission(null)} />
      
      <footer className="py-20 text-center border-t border-white/[0.03]">
        <p className="text-[9px] font-black uppercase tracking-[1.5em] text-white/5 italic">System_Auth: Admin_Gama // End_Of_Line</p>
      </footer>
    </div>
  );
};

export default OrderHistoryView;