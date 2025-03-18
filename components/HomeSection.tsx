import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className=" pt-20 h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-50 text-center z-10 md:px-12 lg:px-[100px] space-y-4 ">
        <p
          className="text-8xl font-bold drop-shadow-lg text-left transition break-words max-w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Osiedle <br /> AquaHome
        </p>
        <p
          className="text-3xl font-semibold drop-shadow-lg lg:max-w-[516px] text-left transition break-words max-w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          Nowoczesne osiedle inspirowane harmonią natury i komfortem życia.
        </p>
        <Link
          key={"o-inwestycji"}
          href={"#o-inwestycji"}
          className="hover:scale-125 transition-all drop-shadow-md border-2 border-green-spring-100 px-4 py-2 text-xl break-words max-w-full"
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
