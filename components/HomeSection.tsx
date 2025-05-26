"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [imageLoaded]);

  return (
    <>
      {!imageLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-green-spring-200 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-spring-800"></div>
        </div>
      )}

      <section
        id="home"
        className={`pt-20 h-screen w-full overflow-hidden relative ${
          !imageLoaded ? "invisible" : ""
        }`}
      >
        <Image
          src="/0001.webp"
          alt="Nowoczesne osiedle mieszkaniowe Pułaskiego 32 w Wieliczce"
          fill
          quality={100}
          priority
          className="object-cover object-center"
          data-aos="fade-in"
          data-aos-duration="2000"
          onLoad={() => {
            setTimeout(() => setImageLoaded(true), 300);
          }}
        />
        {imageLoaded && (
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white text-center z-10 px-4 sm:px-8 md:px-12 lg:px-[100px] space-y-4">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-left transition break-words max-w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Osiedle <br />
              Pułaskiego 32
            </h1>
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] lg:max-w-[516px] text-left transition break-words max-w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              Nowoczesne osiedle inspirowane harmonią natury i&nbsp;komfortem
              życia.
            </h2>
            <Link
              key={"o-inwestycji"}
              href={"#o-inwestycji"}
              className="hover:scale-125 hover:bg-white hover:text-green-spring-900 transition-all drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] border-2 border-green-spring-100 px-4 py-2 text-base sm:text-lg md:text-xl break-words max-w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              Rozpocznij
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
