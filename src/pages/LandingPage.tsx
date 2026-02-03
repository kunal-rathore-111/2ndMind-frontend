import { LandingPageNav } from '../components/Landing/Nav'
import { LandingHeroSection } from '../components/Landing/HeroSection';
import { RemainingSections } from '../components/Landing/RemainingSections';
import { FooterComp } from '../components/Shared/Footer';
import { useEffect } from 'react';

export default function LandingPage() {

    useEffect(() => { scrollTo(0, 0) })
    return <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <LandingPageNav />
        <LandingHeroSection />
        <RemainingSections />
        <FooterComp />
    </div>
}







