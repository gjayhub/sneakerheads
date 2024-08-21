import Image from "next/image";
import { shoes } from "../utils/data";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import TrendingShoes from "@/components/TrendingShoes";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />

      <TrendingShoes />
    </main>
  );
}
