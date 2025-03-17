"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveOffersView = () => {
  const [selectedHouse, setSelectedHouse] = useState<number | null>(null);
  const houses = [
    {
      id: 1,
      name: "Dom 1",
      status: 1,
      price: "500 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="58"
          height="80"
          viewBox="0 0 58 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 24L9.5 71.5L39 78.5L32.5 29.5L52 26L56 20L54 10.5L32.5 4L27.5 2L23.5 4L24.5 14L19.5 20L1.5 24Z"
            stroke="#f3f4f1"
            strokeWidth="1.5"
          />
        </svg>
      ),
      position: { x: 88.5, y: 204 },
      positionButton: { x: 90, y: 200 },
    },
    {
      id: 2,
      name: "Dom 2",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="58"
          height="83"
          viewBox="0 0 58 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 72.5L1.5 24L21.5 20L25 14.5V1.5L56.5 9.5L55 24L33.5 30L39.5 81L9.5 73"
            stroke="#f3f4f1"
            strokeWidth="1.5"
          />
        </svg>
      ),
      position: { x: 119.5, y: 209.5 },
      positionButton: { x: 125, y: 205 },
    },
    {
      id: 3,
      name: "Dom 3",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="64"
          height="86"
          viewBox="0 0 64 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 28L8 77L42 84L37.5 33L59 26.5L62 20.5L59 12L26 1.5L23 20.5L1.5 28Z"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 151.5, y: 212.5 },
      positionButton: { x: 155, y: 210 },
    },
    {
      id: 4,
      name: "Dom 4",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="65"
          height="90"
          viewBox="0 0 65 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 29.5L7 80L44.5 88L39.5 35.5L63.5 24.5L61.5 10.5L23.5 1.5V23L2 29.5Z"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 188, y: 216.5 },
      positionButton: { x: 195, y: 215 },
    },
    {
      id: 5,
      name: "Dom 5",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="67"
          height="90"
          viewBox="0 0 67 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 28L6 79L45 88.5L40.5 33.5L65.5 24L64 10L23.5 2L25.5 17L1.5 28Z"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 225.5, y: 225 },
      positionButton: { x: 230, y: 220 },
    },
    {
      id: 6,
      name: "Dom 6",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="73"
          height="101"
          viewBox="0 0 73 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 89L1.5 31L26 21L24.5 1.5L71 14L68.5 31L46 37.5L50.5 99.5L6.5 90"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 264.5, y: 227.5 },
      positionButton: { x: 275, y: 230 },
    },
    {
      id: 7,
      name: "Dom 7",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="77"
          height="104"
          viewBox="0 0 77 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 31L7 93L53.5 102.5L50.5 38L72 31L75 15L28 1.5L24.5 24L2 31Z"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 309, y: 234.5 },
      positionButton: { x: 323, y: 232 },
    },
    {
      id: 8,
      name: "Dom 8",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="81"
          height="110"
          viewBox="0 0 81 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 33L4.5 98L56 108L54.5 41.5L76 34L79 17L26.5 1.5L23.5 26L1.5 33Z"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 357.5, y: 239.5 },
      positionButton: { x: 375, y: 235 },
    },
    {
      id: 9,
      name: "Dom 9",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="85"
          height="118"
          viewBox="0 0 85 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 104L1.5 36.5L23.5 29L25.5 2L83 20L80.5 39L59 47V116.5L3 105"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 410.5, y: 245 },
      positionButton: { x: 428, y: 250 },
    },
    {
      id: 10,
      name: "Dom 10",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="91"
          height="124"
          viewBox="0 0 91 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 38V107.5L63 122L65 48L86 40L89 20L26.5 1.5L22.5 30L1 38Z"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 468, y: 253.5 },
      positionButton: { x: 490, y: 260 },
    },
    {
      id: 11,
      name: "Dom 11",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="101"
          height="126"
          viewBox="0 0 101 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 110.5L3 37.5L24 29L28 1.5L99.5 19L91.5 39.5L73.5 47.5L70 124.5L1.5 111"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 530, y: 264.5 },
      positionButton: { x: 560, y: 270 },
    },
    {
      id: 12,
      name: "Dom 12",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="110"
          height="131"
          viewBox="0 0 110 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 114.5L4.5 37.5L22.5 29.5L34.5 1.5L108 21L102 42.5L82.5 51.5L77 129L1 115.5"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 599, y: 274.5 },
      positionButton: { x: 635, y: 280 },
    },
    {
      id: 13,
      name: "Dom 13",
      status: 0,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="122"
          height="145"
          viewBox="0 0 122 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 120L6.5 43L26.5 33L36.5 2L119.5 24L97 56.5L84 143.5L1.5 121"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 675.5, y: 284 },
      positionButton: { x: 720, y: 290 },
    },
    {
      id: 14,
      name: "Dom 14",
      status: 2,
      price: "550 000 zł",
      pdf: "https://n20-storage.s3.eu-north-1.amazonaws.com/trabki/1.pdf",
      dzialka: 4.5,
      pokoje: 4,
      metraz: 120.5,

      path: (
        <svg
          width="140"
          height="152"
          viewBox="0 0 140 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 129L14.5 41.5L42.5 1.5L138 20L104.5 89L97 150.5L1 130.5"
            stroke="#f3f4f1"
            strokeWidth="2"
          />
        </svg>
      ),
      position: { x: 758, y: 297.5 },
      positionButton: { x: 815, y: 300 },
    },
  ];

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
      className="w-full min-h-screen flex flex-col items-center justify-center bg-green-spring-200 text-white py-8 px-[100px] scroll-mt-20"
    >
      <h2 className="text-7xl font-bold uppercase tracking-wide bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent text-center">
        Domy
      </h2>

      <div className="w-full max-w-5xl mt-8 relative">
        <div className="relative">
          <img
            src="/z_gory.png"
            alt="Widok z góry inwestycji"
            className="w-full h-auto rounded-3xl"
          />

          {houses.map((house) => (
            <button
              key={house.id}
              className={`absolute ${
                house.status === 0
                  ? "bg-red-500"
                  : house.status === 1
                  ? "bg-green-500"
                  : "bg-yellow-500"
              } text-green-spring-900 rounded-full w-6 h-6 flex items-center justify-center font-bold cursor-pointer hover:bg-green-spring-900 hover:text-green-spring-50 transition-all`}
              style={{
                left: `${house.positionButton.x + 30}px`,
                top: `${house.positionButton.y - 25}px`,
              }}
              onClick={() => handleHouseClick(house.id)}
            >
              {house.id}
            </button>
          ))}

          {houses.map((house) => (
            <div
              key={house.id}
              className="absolute cursor-pointer"
              style={{
                left: `${house.position.x}px`,
                top: `${house.position.y}px`,
              }}
              onClick={() => handleHouseClick(house.id)}
            >
              {house.path}
            </div>
          ))}
        </div>
        {selectedHouse !== null && (
          <div className="absolute top-0 right-0 bg-white p-6 rounded-lg shadow-lg text-green-spring-900">
            <h3 className="text-2xl font-bold">
              {houses[selectedHouse - 1].name}
            </h3>
            <p className="text-lg">
              Status:{" "}
              <span
                className={`font-semibold ${
                  houses[selectedHouse - 1].status === 0
                    ? "text-red-500"
                    : houses[selectedHouse - 1].status === 1
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {getStatusText(houses[selectedHouse - 1].status)}
              </span>
            </p>
            <p className="text-lg">
              Cena:{" "}
              <span className="font-semibold">
                {houses[selectedHouse - 1].price}
              </span>
            </p>
            <p className="text-lg">
              🏠 Powierzchnia:{" "}
              <span className="font-semibold">
                {houses[selectedHouse - 1].metraz} m²
              </span>
            </p>
            <p className="text-lg">
              🛏️ Pokoje:{" "}
              <span className="font-semibold">
                {houses[selectedHouse - 1].pokoje}
              </span>
            </p>
            <p className="text-lg">
              📄{" "}
              <a
                href={houses[selectedHouse - 1].pdf}
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
