"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const House360View = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const images = Array.from({ length: 36 }, (_, i) => `/${i + 1}-min.jpg`);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - lastX.current;
    const sensitivity = 5;

    if (Math.abs(deltaX) > sensitivity) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + (deltaX > 0 ? 1 : -1) + images.length) % images.length
      );
      lastX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="widok-360"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-green-spring-100 text-white py-16 px-8"
    >
      <motion.p
        className="text-7xl font-bold uppercase tracking-wide bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent text-center"
        data-aos="fade-down"
      >
        Poznaj swój przyszły dom
      </motion.p>

      <motion.div
        ref={containerRef}
        className="w-full max-w-5xl h-[600px] relative cursor-grab select-none bg-black rounded-3xl shadow-2xl border-4 border-green-spring-400 overflow-hidden mt-8"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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

      <motion.div className="text-center max-w-3xl mt-12" data-aos="fade-up">
        <p className="text-3xl text-green-spring-700">
          Przesuwaj myszką, aby eksplorować budynek z każdej strony i odkryj
          jego unikalny design.
        </p>
      </motion.div>
    </section>
  );
};

export default House360View;
