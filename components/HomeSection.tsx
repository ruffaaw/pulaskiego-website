import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className=" pt-20 h-screen w-full ">
      <Image 
      src="/render1.png"
      alt="Tło sekcji"
      fill
      quality={100}
      priority
      className="object-cover object-center"
      data-aos="fade-in"
      data-aos-duration="2000"
      />
        <div
            className="h-full w-full flex flex-col justify-center items-center space-y-20 "
        >
        <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
          <Link
            className="py-3 w-56 max-md:w-3/5  text-white rounded-2xl bg-color3 hover:bg-color2 hover:text-color3 transition break-words max-w-full text-center drop-shadow-xl"
            href="#houses"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            Zobacz domy
          </Link>
          <Link
            className="py-3 w-56 max-md:w-3/5  text-white rounded-2xl bg-color3 hover:bg-color2 hover:text-color3 transition break-words max-w-full text-center drop-shadow-xl"
            href="#contact"
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-duration="1000"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}