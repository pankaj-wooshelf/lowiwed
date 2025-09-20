import Footer from "@/common/Footer";
import Header from "@/common/Header";
import CardsSection from "@/components/Landing/CardsSection";
import FeaturesSection from "@/components/Landing/FeaturesSection";
import HeroSection from "@/components/Landing/HeroSection";
import OpportunitySection from "@/components/Landing/OpportunitySection";
import WeddingCard from "@/components/Landing/WeddingCard";
import { useRouter } from "next/router";


export default function landing() {
    const router = useRouter();
    return (
        <>
            <div
                style={{
                    backgroundImage: `url('/Images/Bg_Hero.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "100%",
                }}
            >
                <Header />
                <HeroSection />
                <FeaturesSection />
                <CardsSection />
                <OpportunitySection />
                <WeddingCard />
                <Footer />
            </div>
        </>
    );
}