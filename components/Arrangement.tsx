"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  tile: string;
};

export default function Arrangement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const images: GalleryImage[] = [
    { src: "/łazdodatkiScene 9_1.webp", tile: "1x2" },
    { src: "/salonkuchniaScene 4.webp", tile: "2x2" },
    { src: "/sypScene 6_1.webp", tile: "2x1" },
    { src: "/salonkuchniaScene 3.webp", tile: "1x2" },
    { src: "/salonkuchniaScene 5.webp", tile: "1x1" },
    { src: "/salonkuchniaScene 1.webp", tile: "2x1" },
    { src: "/sypScene 8_1.webp", tile: "1x1" },
    { src: "/łazdodatkiScene 10_1.webp", tile: "1x1" },
  ];
  useEffect(() => {
    setIsMounted(true);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeModal();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedIndex]);

  if (!isMounted) return null;

  return (
    <section
      id="aranzacje"
      className="relative w-full h-full py-8 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-14 bg-green-spring-100 "
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent text-center mb-4 pt-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        Aranżacje
      </motion.h1>
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl text-green-spring-700 text-center max-w-6xl mb-8 mx-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
      >
        Odkryj przestrzenie zaprojektowane z&nbsp;myślą o&nbsp;Twoim komforcie.
      </motion.h2>
      <motion.div
        className="grid grid-cols-5 grid-rows-3 gap-3 h-[40vh] lg:h-[80vh] w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {images.map((image, index) => {
          const tileClasses = image.tile.split(" ");
          const sizeClass = tileClasses[0];
          const cornerClass = tileClasses[1] || "";

          return (
            <motion.div
              key={index}
              className={`
                  relative overflow-hidden rounded-2xl shadow-lg
                  transition-all duration-300 hover:scale-105 cursor-pointer
                  ${sizeClass === "2x2" ? "col-span-2 row-span-2" : ""}
                  ${sizeClass === "2x1" ? "col-span-2 row-span-1" : ""}
                  ${sizeClass === "1x1" ? "col-span-1 row-span-1" : ""}
                  ${sizeClass === "1x2" ? "col-span-1 row-span-2" : ""}
                  ${cornerClass === "top-left" ? "rounded-tl-none" : ""}
                  ${cornerClass === "top-right" ? "rounded-tr-none" : ""}
                  ${cornerClass === "bottom-left" ? "rounded-bl-none" : ""}
                  ${cornerClass === "bottom-right" ? "rounded-br-none" : ""}
                `}
              onClick={() => openModal(index)}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "linear",
                  },
                },
              }}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                quality={100}
                className="object-cover hover:scale-95 lg:hover:scale-110 transition-transform duration-300 rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
            </motion.div>
          );
        })}
      </motion.div>

      {isModalOpen && selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full h-[90vh] max-w-[90vw] flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={`Selected image ${selectedIndex + 1}`}
                  fill
                  quality={100}
                  className="object-contain rounded-xl"
                  unoptimized
                />
              </motion.div>
            </div>

            <div className="absolute z-20 w-full px-4 flex justify-between">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
