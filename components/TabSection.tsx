"use client";
import { useState } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("zakupy");

  const tabs = [
    {
      id: "zakupy",
      icon: "🛒",
      label: "Zakupy",
      content:
        "Codzienne zakupy zrobisz wygodnie w pobliskich sklepach i supermarketach, oddalonych tylko o kilka minut drogi od osiedla.",
    },
    {
      id: "edukacja",
      icon: "🏫",
      label: "Edukacja",
      content:
        "W okolicy znajdują się przedszkola, szkoły podstawowe oraz placówki edukacyjne, zapewniające komfortową naukę dla dzieci i młodzieży.",
    },
    {
      id: "transport",
      icon: "🚌",
      label: "Transport",
      content:
        "Przystanek autobusowy znajduje się 300 m od osiedla (ok. 4 min pieszo), a stacja kolejowa 2,3km, co pozwala na szybkie dotarcie do Krakowa i centrum Wieliczki.",
    },
    {
      id: "rozrywka",
      icon: "🎬",
      label: "Rozrywka",
      content:
        "Restauracje, kawiarnie, kino oraz atrakcje kulturalne w pobliżu sprawią, że zawsze znajdziesz coś dla siebie.",
    },
    {
      id: "usługi",
      icon: "💼",
      label: "Usługi",
      content:
        "Apteki, przychodnie, banki i inne punkty usługowe w sąsiedztwie zapewniają wygodę w codziennych sprawach.",
    },
    {
      id: "rekreacja",
      icon: "🌳",
      label: "Rekreacja",
      content:
        "Plac zabaw i boiska sportowe znajdują się 800m od osiedla, park rekreacyjny w odległości 1,8 km. Dodatkowo spokojna, zielona okolica sprzyja aktywnemu wypoczynkowi na świeżym powietrzu.",
    },
  ];

  return (
    <section
      id="lokalizacja"
      className="w-full h-full flex flex-col bg-green-spring-100 py-8 px-[100px] scroll-mt-14"
    >
      <h2
        className="text-7xl font-bold bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent text-center mb-8"
        data-aos="fade-down"
      >
        WSZYSTKO W ZASIĘGU RĘKI
      </h2>
      <div className="flex flex-col items-center">
        {/* Karty */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-green-spring-900 text-white scale-110"
                  : "bg-white text-green-spring-900 hover:bg-green-spring-50"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="text-3xl">{tab.icon}</span>
              <span className="mt-2 text-lg font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>
        <div
          key={activeTab}
          className="text-2xl text-green-spring-900 max-w-[1000px] text-center"
          data-aos="fade-up"
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
