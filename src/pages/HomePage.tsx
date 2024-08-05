import HomeHeroSection from "../components/features/home/HomeHeroSection";
import OurBenefits from "../components/features/home/OurBenefits";
import PopularItems from "../components/features/home/PopularItems";
import Testimonials from "../components/features/home/Testimonials";
import Newsletter from "../components/features/home/Newsletter";
import Header from "../components/layout/header/Header";

function Home() {
  return (
    <div className="min-h-[200vh]">
      <Header color="transparent" />
      <HomeHeroSection />
      <PopularItems />
      <OurBenefits />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;
