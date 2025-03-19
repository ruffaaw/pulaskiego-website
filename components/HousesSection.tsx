"use client";
import { useRef } from "react";
import { houseCoordinates } from "@/app/data/houseCoordinates";

const HousesSection = () => {
  const houseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listContainerRef = useRef<HTMLDivElement | null>(null);

  const handleHouseClick = (id: number) => {
    const houseRef = houseRefs.current[id];
    const listContainer = listContainerRef.current;

    if (houseRef && listContainer) {
      const scrollOffset = houseRef.offsetTop - listContainer.offsetTop;

      listContainer.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Niedostępny";
      case 1:
        return "Dostępny";
      case 2:
        return "Zarezerwowany";
      default:
        return "Nieznany";
    }
  };

  return (
    <section
      id="domy"
      className="w-full flex flex-col items-center justify-center bg-green-spring-200 text-white py-8 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-14"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent text-center">
        Domy
      </h2>

      <div className="w-full mt-8 relative flex flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-4/5">
          <img
            src="/z_gory.png"
            alt="Widok z góry inwestycji"
            className="w-full h-auto rounded-3xl max-h-[500px] lg:max-h-[660px]"
          />

          {houseCoordinates.map((house) => (
            <button
              key={house.id}
              className={`absolute ${
                house.status === 0
                  ? "bg-red-500"
                  : house.status === 1
                  ? "bg-green-500"
                  : "bg-yellow-500"
              } text-green-spring-900 rounded-full w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center font-bold text-xs md:text-sm lg:text-base  cursor-pointer hover:bg-green-spring-900 hover:text-green-spring-50 transition-all`}
              style={{
                left: `${house.position.x}%`,
                top: `${house.position.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => handleHouseClick(house.id)}
            >
              {house.id}
            </button>
          ))}
        </div>

        <div
          ref={listContainerRef}
          className="overflow-y-auto max-h-[350px] lg:max-h-[660px] w-full lg:w-1/5"
        >
          {houseCoordinates.map((house) => (
            <div
              key={house.id}
              ref={(el) => {
                houseRefs.current[house.id] = el;
              }}
              className="bg-green-spring-50 p-4 sm:p-6 mb-4 text-green-spring-900"
            >
              <h3 className="text-xl sm:text-2xl font-bold">{house.name}</h3>
              <p className="mt-2 text-sm sm:text-base">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    house.status === 0
                      ? "text-red-500"
                      : house.status === 1
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {house.status === 0 ? "🔴" : house.status === 1 ? "🟢" : "🟡"}{" "}
                  {getStatusText(house.status)}
                </span>
              </p>
              <p className="mt-2 text-sm sm:text-base">
                💰 <span className="font-semibold">Cena: {house.price}</span>
              </p>
              <p className="mt-2 text-sm sm:text-base">
                🌳{" "}
                <span className="font-semibold">
                  Działka: {house.dzialka} ha
                </span>
              </p>
              <p className="mt-2 text-sm sm:text-base">
                🛏️ <span className="font-semibold">Pokoje: {house.pokoje}</span>
              </p>
              <p className="mt-2 text-sm sm:text-base">
                🏠{" "}
                <span className="font-semibold">Metraż: {house.metraz} m²</span>
              </p>
              <p className="text-sm sm:text-base mt-4 inline-block bg-green-spring-900 text-green-spring-50 px-4 py-2 rounded-full hover:bg-green-spring-700 transition-all">
                📄
                <a href={house.pdf} target="_blank" rel="noopener noreferrer">
                  Pobierz PDF
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousesSection;
