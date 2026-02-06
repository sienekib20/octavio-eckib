import { AppFooter } from "@/components/appFooter";
import { useUiAppLayout } from "@/store/uiAppLayout";
import { Outlet } from "react-router";

function AppLayout() {

    const { navbarShown } = useUiAppLayout();

    return (
        <div className="min-h-screen flex flex-col w-full bg-white antialiased">            {/* O cabeçalho deve ser uma unidade coesa */}

            <Outlet />

            <AppFooter />
        </div>
    )
}

export default AppLayout;