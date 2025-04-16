"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const galleryImages = [
  "/0000.webp",
  "/0001.webp",
  "/0002.webp",
  "/0003.webp",
  "/0004.webp",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="w-full h-full flex flex-col items-center bg-green-spring-200 relative scroll-mt-14 px-4 sm:px-8 md:px-12 lg:px-[100px] py-8 "
    >
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent text-center mb-4"
        data-aos="fade-down"
      >
        Galeria
      </h1>
      <p
        className="text-lg sm:text-xl md:text-2xl text-green-spring-700 text-center max-w-6xl mb-8 mx-auto"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Zobacz, jak będzie wyglądał Twój LEPSZY adres.
      </p>
      <div
        className="w-full lg:w-4/6"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
