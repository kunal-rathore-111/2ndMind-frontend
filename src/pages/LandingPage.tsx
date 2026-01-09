
import LandingHeroSection from "../components/LandingPageComps/LandingHeroSection";
import LandingPageNav from "../components/LandingPageComps/LandingNav";

export default function LandingPage() {
    return <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <LandingPageNav />
        <LandingHeroSection />
    </div>
}