import RecentArrivals from "./sections/ArrivalsSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnerSection";
import ProductSection from "./sections/ProductSection";
import ServiceSection from "./sections/ServicesSection";



const HomeView = () => {
    return (
        <>
            <HeroSection />
            <PartnersSection />
            <ProductSection />
            <ServiceSection />
            <RecentArrivals />
        </>
    )
}

export default HomeView;