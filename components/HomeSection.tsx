import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section
      id="home"
      className=" pt-20 h-screen w-full overflow-hidden realtive"
    >
      <Image
        src="/0001.png"
        alt="Tło sekcji"
        fill
        quality={100}
        priority
        className="object-cover object-center"
        data-aos="fade-in"
        data-aos-duration="2000"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white text-center z-10 px-4 sm:px-8 md:px-12 lg:px-[100px] space-y-4">
        <p
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-left transition break-words max-w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Osiedle <br />
          Pułaskiego 32
        </p>
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] lg:max-w-[516px] text-left transition break-words max-w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          Nowoczesne osiedle inspirowane harmonią natury i&nbsp;komfortem życia.
        </p>
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
    </section>
  );
}
