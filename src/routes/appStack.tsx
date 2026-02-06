import AppLayout from "@/app/layouts/appLayout";
import LoginView from "@/app/views/auth/LoginView";
import ProfileView from "@/app/views/auth/ProfileView";
import RegisterView from "@/app/views/auth/RegisterView";
import NotFound from "@/app/views/error/NotFound";
import CartView from "@/app/views/pages/CartView";
import CheckoutView from "@/app/views/pages/CheckoutView";
import HomeView from "@/app/views/pages/HomeView";
import OrderSuccessView from "@/app/views/pages/OrderSuccessView";
import OrderView from "@/app/views/pages/OrderView";
import CompareView from "@/app/views/pages/products/CompareView";
import WishListView from "@/app/views/pages/products/WishListView";
import ProductView from "@/app/views/pages/ProductView";
import StoreView from "@/app/views/pages/StoreView";
import CorporateView from "@/app/views/pages/terms/CorporateView";
import LegalView from "@/app/views/pages/terms/LegalView";
import TrackOrderView from "@/app/views/pages/TrackOrderView";
import { AppLoader } from "@/components/appLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

function AppStak() {
    return (
        <Suspense fallback={<AppLoader />}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path="store" element={<StoreView />} />
                    <Route path="cart" element={<CartView />} />
                    <Route path="checkout" element={<CheckoutView />} />
                    <Route path="product/:id" element={<ProductView />} />

                    <Route path="order-success/:id" element={<OrderSuccessView />} />
                    <Route path="track-order" element={<TrackOrderView />} />
                    <Route path="orders" element={<OrderView />} />
                    <Route path="compare" element={<CompareView />} />
                    <Route path="wishlist" element={<WishListView />} />

                    <Route path="terms" element={<LegalView />} />
                    <Route path="about" element={<CorporateView />} />

                    <Route path="auth/login" element={<LoginView />} />
                    <Route path="auth/register" element={<RegisterView />} />
                    <Route path="auth/profile" element={<ProfileView />} />

                    {/* <Route path="auth/login" element={<LoginView />} />
                    <Route path="profile" element={<ProfileView />} />
                      */}
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

        </Suspense>
    )
}

export default AppStak;