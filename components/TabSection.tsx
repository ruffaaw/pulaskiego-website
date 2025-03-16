"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import {
  FaShoppingCart,
  FaSchool,
  FaBus,
  FaFilm,
  FaBriefcaseMedical,
  FaTree,
} from "react-icons/fa";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("zakupy");

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const tabs = [
    {
      id: "zakupy",
      icon: <FaShoppingCart className="w-8 h-8" />,
      label: "Zakupy",
      content:
        "Codzienne zakupy zrobisz wygodnie w pobliskich sklepach i supermarketach, oddalonych tylko o kilka minut drogi od osiedla.",
    },
    {
      id: "edukacja",
      icon: <FaSchool className="w-8 h-8" />,
      label: "Edukacja",
      content:
        "W okolicy znajdują się przedszkola, szkoły podstawowe oraz placówki edukacyjne, zapewniające komfortową naukę dla dzieci i młodzieży.",
    },
    {
      id: "transport",
      icon: <FaBus className="w-8 h-8" />,
      label: "Transport",
      content:
        "Przystanek autobusowy znajduje się 300 m od osiedla (ok. 4 min pieszo), a stacja kolejowa 2,3km, co pozwala na szybkie dotarcie do Krakowa i centrum Wieliczki.",
    },
    {
      id: "rozrywka",
      icon: <FaFilm className="w-8 h-8" />,
      label: "Rozrywka",
      content:
        "Restauracje, kawiarnie, kino oraz atrakcje kulturalne w pobliżu sprawią, że zawsze znajdziesz coś dla siebie.",
    },
    {
      id: "usługi",
      icon: <FaBriefcaseMedical className="w-8 h-8" />,
      label: "Usługi",
      content:
        "Apteki, przychodnie, banki i inne punkty usługowe w sąsiedztwie zapewniają wygodę w codziennych sprawach.",
    },
    {
      id: "rekreacja",
      icon: <FaTree className="w-8 h-8" />,
      label: "Rekreacja",
      content:
        "Plac zabaw i boiska sportowe znajdują się 800m od osiedla, park rekreacyjny w odległości 1,8 km. Dodatkowo spokojna, zielona okolica sprzyja aktywnemu wypoczynkowi na świeżym powietrzu.",
    },
  ];

  return (
    <section
      id="lokalizacja"
      className="w-full h-full flex flex-col bg-green-spring-100 py-8 px-[100px] scroll-mt-20"
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
              {tab.icon}
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
