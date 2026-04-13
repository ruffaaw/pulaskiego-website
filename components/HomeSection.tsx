"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

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
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent via-black/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-center items-center md:items-start text-white text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-[100px] space-y-4">
            <h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-[2px_2px_6px_rgba(0,0,0,1)] transition break-words max-w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Osiedle <br />
              Pułaskiego 32
            </h1>
            <h2
              className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-[2px_2px_6px_rgba(0,0,0,1)] lg:max-w-[516px] transition break-words max-w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              Nowoczesne osiedle inspirowane harmonią natury i&nbsp;komfortem
              życia.
            </h2>
            <div
              className="flex flex-col gap-1 text-white drop-shadow-[2px_2px_6px_rgba(0,0,0,1)]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <a
                href="tel:785006635"
                className="relative inline-flex w-fit items-center gap-2 text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300 ease-out hover:text-green-spring-100 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                <FaPhone className="text-xl sm:text-lg md:text-xl lg:text-2xl" />
                785 006 635
              </a>
              <a
                href="mailto:biuro@elproperties.pl"
                className="relative inline-flex w-fit items-center gap-2 text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300 ease-out hover:text-green-spring-100 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                <FaEnvelope className="text-xl sm:text-lg md:text-xl lg:text-2xl" />
                biuro@elproperties.pl
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                key={"kontakt"}
                href={"#kontakt"}
                className="bg-white/10 text-white hover:scale-105 hover:bg-white hover:text-green-spring-900 transition-[color,background-color,transform,border-color] duration-300 ease-out drop-shadow-[2px_2px_6px_rgba(0,0,0,1)] border-2 border-green-spring-100 px-6 py-3 text-lg sm:text-lg md:text-xl break-words max-w-full"
                style={{
                  transition:
                    "background-color 320ms ease, color 320ms ease, border-color 320ms ease, transform 320ms ease",
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                Skontaktuj się
              </Link>
              <Link
                key={"lokale"}
                href={"#lokale"}
                className="bg-white/10 text-white hover:scale-105 hover:bg-white hover:text-green-spring-900 transition-[color,background-color,transform,border-color] duration-300 ease-out drop-shadow-[2px_2px_6px_rgba(0,0,0,1)] border-2 border-green-spring-100 px-6 py-3 text-lg sm:text-lg md:text-xl break-words max-w-full"
                style={{
                  transition:
                    "background-color 320ms ease, color 320ms ease, border-color 320ms ease, transform 320ms ease",
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="980"
              >
                Lokale
              </Link>
            </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
