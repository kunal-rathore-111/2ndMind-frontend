import Categories from "@/components/ui/Landing/Categories/Categories";
import Features from "@/components/ui/Landing/Features/Features";
import HeroSection from "@/components/ui/Landing/Herosection/HeroSection";
import { Nav } from "@/components/ui/Landing/Nav";

export default function Landing() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col px-4 py-26">
        <Nav />
        <HeroSection />
        <Categories />
        <Features />
      </main>
    </>
  );
}
