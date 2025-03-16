import AboutInvestorSection from "@/components/AboutInvestorSection";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import InvestmentSection from "@/components/InvestmentSection";
import TabsSection from "@/components/TabSection";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Header />
      <HomeSection />
      <InvestmentSection />
      <TabsSection />
      <AboutInvestorSection />
    </div>
  );
}
