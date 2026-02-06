import type { AppLayoutProps } from "@/types/appLayout";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export const useUiAppLayout = create<AppLayoutProps>()(
    persist((set) => ({
        navbarShown: true,
        setNavbarShown: (navbarShown: boolean) => set({ navbarShown })
    }), {
        name: 'app-layout',
        storage: createJSONStorage(() => sessionStorage)
    })
)