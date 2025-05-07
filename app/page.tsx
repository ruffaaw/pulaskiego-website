import AboutInvestorSection from "@/components/AboutInvestorSection";
import Arrangement from "@/components/Arrangement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import House360View from "@/components/House360View";
import HousesSection from "@/components/HousesSection";
import InvestmentSection from "@/components/InvestmentSection";
import TabsSection from "@/components/TabSection";
// import WebsiteUnderConstruction from "@/components/WebsiteUnderConstruction";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* <WebsiteUnderConstruction /> */}
      <Header />
      <HomeSection />
      <InvestmentSection />
      <TabsSection />
      <AboutInvestorSection />
      <House360View />
      <HousesSection />
      <Arrangement />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
