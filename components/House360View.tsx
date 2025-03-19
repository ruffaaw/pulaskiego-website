"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const House360View = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const images = Array.from({ length: 36 }, (_, i) => `/${i + 1}-min.jpg`);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    lastX.current =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const deltaX = clientX - lastX.current;
    const sensitivity = 5;

    if (Math.abs(deltaX) > sensitivity) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + (deltaX > 0 ? 1 : -1) + images.length) % images.length
      );
      lastX.current = clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
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
        Poznaj swój przyszły dom
      </motion.p>

      <motion.div
        ref={containerRef}
        className="w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative cursor-grab select-none bg-black rounded-3xl shadow-2xl border-4 border-green-spring-400 overflow-hidden mt-8"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={images[currentIndex]}
          alt={`House view ${currentIndex}`}
          className="w-full h-full object-cover pointer-events-none"
        />
      </motion.div>

      <motion.div
        className="text-center max-w-3xl mt-8 sm:mt-12"
        data-aos="fade-up"
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-spring-700">
          Przesuwaj myszką, aby eksplorować budynek z każdej strony i odkryj
          jego unikalny design.
        </p>
      </motion.div>
    </section>
  );
};

export default House360View;
