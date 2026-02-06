import RecentArrivals from "./sections/ArrivalsSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnerSection";
import ProductSection from "./sections/ProductSection";
import ServiceSection from "./sections/ServicesSection";
import TestimonyFidelity from "./sections/TestemonySection";
import TrustTerminal from "./sections/TrustTerminal";



const HomeView = () => {
    return (
        <>
            <HeroSection />
            <PartnersSection />
            <ProductSection />
            <ServiceSection />
            <RecentArrivals />
            <TestimonyFidelity />
            <TrustTerminal />
        </>
    )
}

export default HomeView;