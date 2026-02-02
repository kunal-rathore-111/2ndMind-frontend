import { useEffect } from 'react'
import Lenis from 'lenis'
import { LandingPageNav } from '../components/Landing/Nav'
import { LandingHeroSection } from '../components/Landing/HeroSection';
import { RemainingSections } from '../components/Landing/RemainingSections';
import { LandingFooter } from '../components/Landing/Footer';

export default function LandingPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => lenis.destroy()
    }, [])

    return <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <LandingPageNav />
        <LandingHeroSection />
        <RemainingSections />
        <LandingFooter />
    </div>
}







