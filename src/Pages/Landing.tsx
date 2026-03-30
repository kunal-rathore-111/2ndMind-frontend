import Audience from "@/components/ui/Landing/Audience/Audience";
import Categories from "@/components/ui/Landing/Categories/Categories";
import Features from "@/components/ui/Landing/Features/Features";
import Footer from "@/components/ui/Landing/Footer";
import GetStarted2 from "@/components/ui/Landing/Getstarted2/GetStarted2";
import HeroSection from "@/components/ui/Landing/Herosection/HeroSection";
import { Nav } from "@/components/ui/Landing/Nav";

export default function Landing() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col px-4 pt-26">
        <Nav />
        <HeroSection />
        <Categories />
        <Features />
        <Audience />
        <GetStarted2 />
        <Footer />
      </main>
    </>
  );
}
