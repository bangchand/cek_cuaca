import LoginBanner from "@/components/LoginBanner";
import HeroSection from "@/components/HeroSection";
import DestinationSlider from "@/components/DestinationSlider";
import Navbar from "@/components/Navbar";
import TagSection from "@/components/TagSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col">
        <LoginBanner />
        <HeroSection />
        <DestinationSlider title="Sedang Vimral!!" />
        <DestinationSlider title="Terbaik untuk sekarang: " />
        <TagSection />
        <Footer />
      </main>
    </>
  );
}
