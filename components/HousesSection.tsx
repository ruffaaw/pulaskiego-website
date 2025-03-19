"use client";
import { useState } from "react";
import { houseCoordinates } from "@/app/data/houseCoordinates";

const InteractiveOffersView = () => {
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);

  const handleHouseClick = (id: number) => {
    setSelectedHouse(id);
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

      <div className="w-full max-w-5xl mt-8 relative flex justify-start">
        <div className="relative">
          <img
            src="/z_gory.png"
            alt="Widok z góry inwestycji"
            className="w-full h-auto rounded-3xl"
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
        {selectedHouse !== null && (
          <div className="absolute top-0 right-0 bg-white p-6 sm:p-6 rounded-lg shadow-lg text-green-spring-900 mt-4 sm:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold">
              {houseCoordinates[selectedHouse - 1].name}
            </h3>
            <p className="text-sm sm:text-lg">
              Status:{" "}
              <span
                className={`font-semibold ${
                  houseCoordinates[selectedHouse - 1].status === 0
                    ? "text-red-500"
                    : houseCoordinates[selectedHouse - 1].status === 1
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {getStatusText(houseCoordinates[selectedHouse - 1].status)}
              </span>
            </p>
            <p className="text-sm sm:text-lg">
              Cena:{" "}
              <span className="font-semibold">
                {houseCoordinates[selectedHouse - 1].price}
              </span>
            </p>
            <p className="text-sm sm:text-lg">
              🏠 Powierzchnia:{" "}
              <span className="font-semibold">
                {houseCoordinates[selectedHouse - 1].metraz} m²
              </span>
            </p>
            <p className="text-sm sm:text-lg">
              🛏️ Pokoje:{" "}
              <span className="font-semibold">
                {houseCoordinates[selectedHouse - 1].pokoje}
              </span>
            </p>
            <p className="text-sm sm:text-lg">
              📄{" "}
              <a
                href={houseCoordinates[selectedHouse - 1].pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Zobacz szczegóły (PDF)
              </a>
            </p>
          </div>
        )}{" "}
      </div>
    </section>
  );
};

export default InteractiveOffersView;
