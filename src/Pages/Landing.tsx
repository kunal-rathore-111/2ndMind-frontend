import Audience from "@/components/ui/Landing/Audience/Audience";
import Categories from "@/components/ui/Landing/Categories/Categories";
import Features from "@/components/ui/Landing/Features/Features";
import Footer from "@/components/ui/Landing/Footer";
import GetStarted2 from "@/components/ui/Landing/Getstarted2/GetStarted2";
import HeroWrapper from "@/components/ui/Landing/Herosection/HeroSection";
import { Nav } from "@/components/ui/Landing/Nav";
import SampleCards from "@/components/ui/Landing/Sample/Sample";

export default function Landing() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col space-y-20 px-4">
        <Nav />
        <HeroWrapper />
        <Categories />
        <Features />
        <Audience />
        <SampleCards />
        <GetStarted2 />
        <Footer />
      </main>
    </>
  );
}
