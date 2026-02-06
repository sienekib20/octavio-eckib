import AppLayout from "@/app/layouts/appLayout";
import NotFound from "@/app/views/error/NotFound";
import HomeView from "@/app/views/pages/HomeView";
import { AppLoader } from "@/components/appLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

function AppStak() {
    return (
        <Suspense fallback={<AppLoader />}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomeView />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

        </Suspense>
    )
}

export default AppStak;