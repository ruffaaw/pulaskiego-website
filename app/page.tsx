import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
// import InvestmentSection from "@/components/InvestmentSection";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Header />
      <HomeSection />
      {/* <InvestmentSection /> */}
    </div>
  );
}
