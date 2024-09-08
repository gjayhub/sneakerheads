import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import TrendingShoes from "@/components/TrendingShoes";
import SpecialOffer from "@/components/SpecialOffer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <SpecialOffer />
      <FeaturedSection />
      <TrendingShoes />
    </main>
  );
}
