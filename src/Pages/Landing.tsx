import { Nav } from "@/components/Nav";
import HeroSection from "@/components/ui/Herosection/HeroSection";
import Categories from "@/components/ui/Categories/Categories";

export default function Landing() {
  return (
    <main className="flex min-h-screen w-full flex-col px-4 py-30">
      <Nav />
      <HeroSection />
      <Categories />
    </main>
  );
}
