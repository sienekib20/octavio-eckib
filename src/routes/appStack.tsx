import { AppLoader } from "@/components/appLoader";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// Layout
const AppLayout = lazy(() => import("@/app/layouts/appLayout"));

// Auth
const LoginView = lazy(() => import("@/app/views/auth/LoginView"));
const RegisterView = lazy(() => import("@/app/views/auth/RegisterView"));
const ProfileView = lazy(() => import("@/app/views/auth/ProfileView"));

// Pages
const HomeView = lazy(() => import("@/app/views/pages/HomeView"));
const StoreView = lazy(() => import("@/app/views/pages/StoreView"));
const CartView = lazy(() => import("@/app/views/pages/CartView"));
const CheckoutView = lazy(() => import("@/app/views/pages/CheckoutView"));
const ProductView = lazy(() => import("@/app/views/pages/ProductView"));
const OrderView = lazy(() => import("@/app/views/pages/OrderView"));
const OrderSuccessView = lazy(() => import("@/app/views/pages/OrderSuccessView"));
const TrackOrderView = lazy(() => import("@/app/views/pages/TrackOrderView"));

// Products
const CompareView = lazy(() => import("@/app/views/pages/products/CompareView"));
const WishListView = lazy(() => import("@/app/views/pages/products/WishListView"));

// Terms
const LegalView = lazy(() => import("@/app/views/pages/terms/LegalView"));
const CorporateView = lazy(() => import("@/app/views/pages/terms/CorporateView"));

// Errors
const NotFound = lazy(() => import("@/app/views/error/NotFound"));

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
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default AppStak;
