"use client";
import {
  Briefcase,
  Bus,
  Clapperboard,
  School,
  ShoppingCart,
  TreePalm,
} from "lucide-react";
import { useState } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("zakupy");

  const tabs = [
    {
      id: "zakupy",
      icon: <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10" />,
      label: "Zakupy",
      content: `Codzienne zakupy zrobisz wygodnie w${"\u00A0"}pobliskich sklepach i${"\u00A0"}supermarketach, oddalonych tylko o${"\u00A0"}kilka minut drogi od osiedla.`,
    },
    {
      id: "edukacja",
      icon: <School className="w-8 h-8 sm:w-10 sm:h-10" />,
      label: "Edukacja",
      content: `W${"\u00A0"}okolicy znajdują się przedszkola, szkoły podstawowe oraz placówki edukacyjne, zapewniające komfortową naukę dla dzieci i${"\u00A0"}młodzieży.`,
    },
    {
      id: "transport",
      icon: <Bus className="w-8 h-8 sm:w-10 sm:h-10" />,
      label: "Transport",
      content: `Przystanek autobusowy znajduje się 300${"\u00A0"}m${"\u00A0"}od osiedla (ok. 4 min pieszo), a${"\u00A0"}stacja kolejowa 2,3 km, co pozwala na szybkie dotarcie do Krakowa i${"\u00A0"}centrum Wieliczki.`,
    },
    {
      id: "rozrywka",
      icon: <Clapperboard className="w-8 h-8 sm:w-10 sm:h-10" />,
      label: "Rozrywka",
      content: `Restauracje, kawiarnie, kino oraz atrakcje kulturalne w${"\u00A0"}pobliżu sprawią, że zawsze znajdziesz coś dla siebie.`,
    },
    {
      id: "usługi",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />,
      label: "Usługi",
      content: `Apteki, przychodnie, banki i${"\u00A0"}inne punkty usługowe w${"\u00A0"}sąsiedztwie zapewniają wygodę w${"\u00A0"}codziennych sprawach.`,
    },
    {
      id: "rekreacja",
      icon: <TreePalm className="w-8 h-8 sm:w-10 sm:h-10" />,
      label: "Rekreacja",
      content: `Plac zabaw i${"\u00A0"}boiska sportowe znajdują się 800 m od osiedla, park rekreacyjny w${"\u00A0"}odległości 1,8 km. Dodatkowo spokojna, zielona okolica sprzyja aktywnemu wypoczynkowi na świeżym powietrzu.`,
    },
  ];

  return (
    <section
      id="lokalizacja"
      className="w-full h-full flex flex-col bg-green-spring-100 py-8 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-14"
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent text-center mb-8"
        data-aos="fade-down"
      >
        WSZYSTKO W&nbsp;TWOJEJ OKOLICY
      </h2>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-3 sm:p-4 rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-green-spring-900 text-white scale-110"
                  : "bg-white text-green-spring-900 hover:bg-green-spring-50"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span
                className={`w-8 h-8 sm:w-10 sm:h-10 text-green-spring-700 ${
                  activeTab === tab.id ? "text-white" : "text-green-spring-700"
                }`}
              >
                {tab.icon}
              </span>
              <span className="mt-2 text-sm sm:text-lg font-semibold">
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <div
          key={activeTab}
          className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[800px] text-center"
          data-aos="fade-up"
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
