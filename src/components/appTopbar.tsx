
// --- COMPONENTES AUXILIARES ---

export const TopBar = () => (
    <div className="w-full bg-[#111] py-2.5 px-6 flex justify-between items-center text-[11px] uppercase tracking-[0.15em] text-gray-400 font-medium">
        <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">📍 Localizar Loja</span>
            <span className="hover:text-white transition-colors cursor-pointer">📞 +55 11 98765-4321</span>
        </div>
        <div className="hidden md:block italic">Frete expresso gratuito em pedidos acima de R$ 500</div>
        <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Ajuda</span>
            <span className="hover:text-white transition-colors cursor-pointer">BR / PT</span>
        </div>
    </div>
);