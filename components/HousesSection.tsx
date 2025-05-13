"use client";
import {
  Circle,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Bed,
  Home,
  FileText,
  Sprout,
  Fence,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { houseCoordinates } from "@/data/houseCoordinates";

type House = {
  Id: string;
  id: number;
  name: string;
  status: number;
  price: number | string;
  image: string;
  pokoje: number;
  ogrodek?: number;
  balkon?: number;
  metraz: number;
  position: {
    x: number;
    y: number;
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
    },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
    },
  },
};

const HousesSection = () => {
  const houseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listContainerRef = useRef<HTMLDivElement | null>(null);
  const [houseOffers, setHouseOffers] = useState<House[]>([]);

  const handleHouseClick = (id: number) => {
    const houseRef = houseRefs.current[id];
    const listContainer = listContainerRef.current;

    if (houseRef && listContainer) {
      const houseRect = houseRef.getBoundingClientRect();
      const containerRect = listContainer.getBoundingClientRect();
      const scrollOffset =
        houseRect.top - containerRect.top + listContainer.scrollTop;

      if ("scrollBehavior" in document.documentElement.style) {
        listContainer.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
        });
      } else {
        listContainer.scrollTop = scrollOffset;
      }
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

  const getStatusIcon = (status: number) => {
    switch (status) {
      case 0:
        return <Circle className="text-red-500 w-5 h-5 inline-block" />;
      case 1:
        return <CheckCircle className="text-green-500 w-5 h-5 inline-block" />;
      default:
        return <AlertCircle className="text-yellow-500 w-5 h-5 inline-block" />;
    }
  };

  const formatPrice = (price: number | string): string => {
    const priceStr = typeof price === "number" ? price.toString() : price;
    const cleanPrice = priceStr.replace(/\s/g, "");
    return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const formatUnit = (value: number | string): string => {
    const valueStr = typeof value === "number" ? value.toString() : value;
    const cleanValue = valueStr.replace(/\s/g, "");
    return cleanValue.replace(".", ",");
  };

  useEffect(() => {
    const fetchHouseOffers = async () => {
      try {
        const response = await fetch(
          "https://0cm30gr8l5.execute-api.eu-north-1.amazonaws.com/prd/get-items"
        );
        const data = await response.json();
        const sortedData = data.body.sort((a: House, b: House) => {
          const numA = parseInt(a.Id.replace("dom", ""), 10);
          const numB = parseInt(b.Id.replace("dom", ""), 10);
          return numA - numB;
        });
        const combinedData = sortedData.map((house: House) => {
          const coords = houseCoordinates.find(
            (coord) => coord.id === parseInt(house.Id)
          );
          return {
            ...house,
            id: parseInt(house.Id),
            position: {
              x: coords?.position.x || 0,
              y: coords?.position.y || 0,
            },
          };
        });
        setHouseOffers(combinedData);
      } catch (error) {
        alert("Błąd podczas pobierania danych");
        console.log("Błąd podczas pobierania danych: ", error);
      }
    };
    fetchHouseOffers();
  }, []);

  return (
    <motion.section
      id="lokale"
      className="w-full flex flex-col items-center justify-center bg-green-spring-200 text-white py-8 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent text-center"
        variants={itemVariants}
      >
        Lokale
      </motion.h1>

      <motion.div
        className="w-full mt-8 relative flex flex-col lg:flex-row justify-between gap-8"
        variants={containerVariants}
      >
        <motion.div
          className="relative w-full lg:w-[58%]"
          variants={slideInFromLeft}
        >
          <div className="relative pb-[75%]">
            <img
              src="/z_gory.webp"
              alt="Widok z góry inwestycji"
              className="absolute w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            {houseOffers.map((house) => (
              <button
                key={house.id}
                className={`absolute ${
                  house.status === 0
                    ? "bg-red-500"
                    : house.status === 1
                    ? "bg-green-500"
                    : "bg-yellow-500"
                } text-green-spring-950 bg-opacity-75 hover:bg-opacity-100 rounded-full w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 flex items-center justify-center font-bold text-xs md:text-sm cursor-pointer hover:bg-green-spring-900 hover:text-green-spring-50 transition-all z-10`}
                style={{
                  left: `${house.position.x}%`,
                  top: `${house.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleHouseClick(house.id)}
              >
                {house.name}
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={listContainerRef}
          className="overflow-y-auto max-h-[250px] lg:max-h-[741px] w-full lg:w-[42%] rounded-3xl space-y-4"
          variants={slideInFromRight}
        >
          {houseOffers.map((house, index) => (
            <motion.div
              key={house.id}
              ref={(el) => {
                houseRefs.current[house.id] = el;
              }}
              className="bg-green-spring-50 p-4 sm:p-6 text-green-spring-900 flex flex-row"
              variants={itemVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Mieszkanie {house.name} -{" "}
                  {house.name.endsWith("a") ? "parter" : "piętro"}
                </h2>
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
                    {getStatusIcon(house.status)} {getStatusText(house.status)}
                  </span>
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <DollarSign className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                  <span className="font-semibold">
                    Cena: {formatPrice(house.price)} zł
                  </span>
                </p>
                {house.ogrodek && (
                  <p className="mt-2 text-sm sm:text-base">
                    <Sprout className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                    <span className="font-semibold">
                      Ogródek: {formatUnit(house.ogrodek)} m²
                    </span>
                  </p>
                )}
                {house.balkon && (
                  <p className="mt-2 text-sm sm:text-base">
                    <Fence className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                    <span className="font-semibold">
                      Balkon: {formatUnit(house.balkon)} m²
                    </span>
                  </p>
                )}
                <p className="mt-2 text-sm sm:text-base">
                  <Bed className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                  <span className="font-semibold">Pokoje: {house.pokoje}</span>
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <Home className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                  <span className="font-semibold">
                    Metraż: {formatUnit(house.metraz)} m²
                  </span>
                </p>
                <motion.p
                  className="text-sm sm:text-base mt-4 inline-block bg-green-spring-900 text-green-spring-50 px-4 py-2 rounded-full hover:bg-green-spring-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="inline-block w-5 h-5 mr-1" />
                  <a
                    href={`${house.image}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Szczegóły
                  </a>
                </motion.p>
              </div>
              <div className="mt-4 sm:mt-0 ml-auto w-[36%] sm:w-[50%] flex justify-center sm:justify-end">
                <Image
                  src={
                    house.id === 1
                      ? "/2Dparter1.jpg"
                      : house.id >= 2 &&
                        house.id <= 19 &&
                        house.name.endsWith("a")
                      ? "/2Dparter2-10.jpg"
                      : house.id > 19 && house.name.endsWith("a")
                      ? "/2Dparter11-14.jpg"
                      : house.id >= 1 &&
                        house.id <= 20 &&
                        house.name.endsWith("b")
                      ? "/2Dpietro1-10.jpg"
                      : "/2Dpietro11-14.jpg"
                  }
                  alt={`Plan 2D mieszkania ${house.name}`}
                  width={300}
                  height={500}
                  className="object-contain w-full h-auto max-h-[200px] sm:max-h-[300px]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HousesSection;
