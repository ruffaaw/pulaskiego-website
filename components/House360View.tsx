"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

const House360View = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  const isDragging1 = useRef(false);
  const isDragging2 = useRef(false);

  const lastX1 = useRef(0);
  const lastX2 = useRef(0);

  const images = Array.from({ length: 36 }, (_, i) => `/${i + 1}-min.jpg`);

  const intervalRef1 = useRef<NodeJS.Timeout | null>(null);
  const intervalRef2 = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleMouseDown1 = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging1.current = true;
    lastX1.current =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  };

  const handleMouseMove1 = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging1.current) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const deltaX = clientX - lastX1.current;
    const sensitivity = 5;

    if (Math.abs(deltaX) > sensitivity) {
      setCurrentIndex1(
        (prevIndex) =>
          (prevIndex + (deltaX > 0 ? 1 : -1) + images.length) % images.length
      );
      lastX1.current = clientX;
    }
  };

  const handleMouseUp1 = () => {
    isDragging1.current = false;
  };

  const handleMouseDown2 = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging2.current = true;
    lastX2.current =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  };

  const handleMouseMove2 = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging2.current) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const deltaX = clientX - lastX2.current;
    const sensitivity = 5;

    if (Math.abs(deltaX) > sensitivity) {
      setCurrentIndex2(
        (prevIndex) =>
          (prevIndex + (deltaX > 0 ? 1 : -1) + images.length) % images.length
      );
      lastX2.current = clientX;
    }
  };

  const handleMouseUp2 = () => {
    isDragging2.current = false;
  };

  const handleArrowClick1 = (direction: "left" | "right") => {
    setCurrentIndex1(
      (prevIndex) =>
        (prevIndex + (direction === "left" ? -1 : 1) + images.length) %
        images.length
    );
  };

  const startContinuousScroll1 = (direction: "left" | "right") => {
    if (intervalRef1.current) return;

    intervalRef1.current = setInterval(() => {
      setCurrentIndex1(
        (prevIndex) =>
          (prevIndex + (direction === "left" ? -1 : 1) + images.length) %
          images.length
      );
    }, 100);
  };

  const stopContinuousScroll1 = () => {
    if (intervalRef1.current) {
      clearInterval(intervalRef1.current);
      intervalRef1.current = null;
    }
  };

  const handleArrowClick2 = (direction: "left" | "right") => {
    setCurrentIndex2(
      (prevIndex) =>
        (prevIndex + (direction === "left" ? -1 : 1) + images.length) %
        images.length
    );
  };

  const startContinuousScroll2 = (direction: "left" | "right") => {
    if (intervalRef2.current) return;

    intervalRef2.current = setInterval(() => {
      setCurrentIndex2(
        (prevIndex) =>
          (prevIndex + (direction === "left" ? -1 : 1) + images.length) %
          images.length
      );
    }, 100);
  };

  const stopContinuousScroll2 = () => {
    if (intervalRef2.current) {
      clearInterval(intervalRef2.current);
      intervalRef2.current = null;
    }
  };

  const handleZoom1 = () => {
    setIsZoomed1(true);
  };

  const handleZoom2 = () => {
    setIsZoomed2(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed1(false);
    setIsZoomed2(false);
  };

  return (
    <section
      id="widok-360"
      className="w-full flex flex-col items-center justify-start bg-green-spring-100 text-white py-8 px-4 sm:px-8 md:px-12 lg:px-[100px] scroll-mt-14"
    >
      <motion.p
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent text-center"
        data-aos="fade-down"
      >
        Poznaj swoje przyszłe mieszkanie
      </motion.p>
      <motion.p
        className="hidden lg:flex mt-4 text-lg sm:text-xl md:text-2xl text-green-spring-700 text-center max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Przeciągnij myszką na obrazie lub użyj strzałek pod obrazem, aby obrócić
        widok. Kliknij przycisk w prawym górnym rogu, aby powiększyć widok.
      </motion.p>
      <motion.p
        className="flex lg:hidden mt-4 text-lg sm:text-xl md:text-2xl text-green-spring-700 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Przeciągnij palcem na obrazie lub użyj strzałek pod obrazem, aby
        obrócić.
      </motion.p>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <motion.div
            ref={containerRef1}
            className="w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] relative select-none bg-black rounded-3xl shadow-2xl overflow-hidden mt-8"
            onMouseDown={handleMouseDown1}
            onMouseMove={handleMouseMove1}
            onMouseUp={handleMouseUp1}
            onMouseLeave={handleMouseUp1}
            onTouchStart={handleMouseDown1}
            onTouchMove={handleMouseMove1}
            onTouchEnd={handleMouseUp1}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[currentIndex1]}
              alt={`House view ${currentIndex1}`}
              className="w-full h-full object-cover pointer-events-none"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoom1();
              }}
              className="max-lg:hidden absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all z-10"
              aria-label="Powiększ obraz"
            >
              <div className="p-4 bg-white border-2 border-green-spring-900 rounded-full hover:bg-green-spring-400 transition-all">
                <Expand className="h-8 w-8 text-green-spring-900" />
              </div>
            </button>
          </motion.div>
          <div
            className="flex justify-center items-center gap-8 mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <button
              onClick={() => handleArrowClick1("left")}
              onMouseDown={() => startContinuousScroll1("left")}
              onMouseUp={stopContinuousScroll1}
              onMouseLeave={stopContinuousScroll1}
              onTouchStart={() => startContinuousScroll1("left")}
              onTouchEnd={stopContinuousScroll1}
              className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
            </button>
            <button
              onClick={() => handleArrowClick1("right")}
              onMouseDown={() => startContinuousScroll1("right")}
              onMouseUp={stopContinuousScroll1}
              onMouseLeave={stopContinuousScroll1}
              onTouchStart={() => startContinuousScroll1("right")}
              onTouchEnd={stopContinuousScroll1}
              className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
            </button>
          </div>
        </div>

        <div>
          <motion.div
            ref={containerRef2}
            className="w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] relative select-none bg-black rounded-3xl shadow-2xl overflow-hidden mt-8"
            onMouseDown={handleMouseDown2}
            onMouseMove={handleMouseMove2}
            onMouseUp={handleMouseUp2}
            onMouseLeave={handleMouseUp2}
            onTouchStart={handleMouseDown2}
            onTouchMove={handleMouseMove2}
            onTouchEnd={handleMouseUp2}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[currentIndex2]}
              alt={`House view ${currentIndex2}`}
              className="w-full h-full object-cover pointer-events-none"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoom2();
              }}
              className="max-lg:hidden absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all z-10"
              aria-label="Powiększ obraz"
            >
              <div className="p-4 bg-white border-2 border-green-spring-900 rounded-full hover:bg-green-spring-400 transition-all">
                <Expand className="h-8 w-8 text-green-spring-900" />
              </div>
            </button>
          </motion.div>
          <div
            className="flex justify-center items-center gap-8 mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <button
              onClick={() => handleArrowClick2("left")}
              onMouseDown={() => startContinuousScroll2("left")}
              onMouseUp={stopContinuousScroll2}
              onMouseLeave={stopContinuousScroll2}
              onTouchStart={() => startContinuousScroll2("left")}
              onTouchEnd={stopContinuousScroll2}
              className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
            </button>
            <button
              onClick={() => handleArrowClick2("right")}
              onMouseDown={() => startContinuousScroll2("right")}
              onMouseUp={stopContinuousScroll2}
              onMouseLeave={stopContinuousScroll2}
              onTouchStart={() => startContinuousScroll2("right")}
              onTouchEnd={stopContinuousScroll2}
              className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
            </button>
          </div>
        </div>
      </div>

      {isZoomed1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <button
            onClick={handleCloseZoom}
            className="absolute top-4 right-4 p-2 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
          <div className="relative">
            <motion.div
              onMouseDown={handleMouseDown1}
              onMouseMove={handleMouseMove1}
              onMouseUp={handleMouseUp1}
              onMouseLeave={handleMouseUp1}
              onTouchStart={handleMouseDown1}
              onTouchMove={handleMouseMove1}
              onTouchEnd={handleMouseUp1}
            >
              <img
                src={images[currentIndex1]}
                alt={`House view ${currentIndex1}`}
                className="max-w-[85vw] max-h-[85vh] object-contain pointer-events-none"
              />
            </motion.div>

            <div className="flex justify-center items-center gap-8 mt-8">
              <button
                onClick={() => handleArrowClick1("left")}
                onMouseDown={() => startContinuousScroll1("left")}
                onMouseUp={stopContinuousScroll1}
                onMouseLeave={stopContinuousScroll1}
                onTouchStart={() => startContinuousScroll1("left")}
                onTouchEnd={stopContinuousScroll1}
                className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
              </button>
              <button
                onClick={() => handleArrowClick1("right")}
                onMouseDown={() => startContinuousScroll1("right")}
                onMouseUp={stopContinuousScroll1}
                onMouseLeave={stopContinuousScroll1}
                onTouchStart={() => startContinuousScroll1("right")}
                onTouchEnd={stopContinuousScroll1}
                className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
              </button>
            </div>
          </div>
        </div>
      )}
      {isZoomed2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <button
            onClick={handleCloseZoom}
            className="absolute top-4 right-4 p-2 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
          <div className="relative">
            <motion.div
              onMouseDown={handleMouseDown2}
              onMouseMove={handleMouseMove2}
              onMouseUp={handleMouseUp2}
              onMouseLeave={handleMouseUp2}
              onTouchStart={handleMouseDown2}
              onTouchMove={handleMouseMove2}
              onTouchEnd={handleMouseUp2}
            >
              <img
                src={images[currentIndex2]}
                alt={`House view ${currentIndex2}`}
                className="max-w-[85vw] max-h-[85vh] object-contain pointer-events-none"
              />
            </motion.div>

            <div className="flex justify-center items-center gap-8 mt-8">
              <button
                onClick={() => handleArrowClick2("left")}
                onMouseDown={() => startContinuousScroll2("left")}
                onMouseUp={stopContinuousScroll2}
                onMouseLeave={stopContinuousScroll2}
                onTouchStart={() => startContinuousScroll2("left")}
                onTouchEnd={stopContinuousScroll2}
                className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
              </button>
              <button
                onClick={() => handleArrowClick2("right")}
                onMouseDown={() => startContinuousScroll2("right")}
                onMouseUp={stopContinuousScroll2}
                onMouseLeave={stopContinuousScroll2}
                onTouchStart={() => startContinuousScroll2("right")}
                onTouchEnd={stopContinuousScroll2}
                className="p-4 bg-green-spring-900 rounded-full hover:bg-green-spring-700 transition-all"
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
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default House360View;
