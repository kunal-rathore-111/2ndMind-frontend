import Audience from "@/components/ui/Audience";
import Categories from "@/components/ui/Categories";
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import GetStarted2 from "@/components/ui/GetStarted2";
import HeroWrapper from "@/components/ui/HeroSection";
import { Nav } from "@/components/ui/Nav";
import SampleCards from "@/components/ui/SampleCard";

export default function Landing() {
  return (
    <>
      <Nav />
      <main className="flex w-full flex-col space-y-32 px-4">
        <div>
          <HeroWrapper />
          <Categories />
        </div>
        <Features />
        <Audience />
        <SampleCards />
        <GetStarted2 />
        <Footer />
      </main>
    </>
  );
}
