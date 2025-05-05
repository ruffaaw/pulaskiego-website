import Image from "next/image";
import { FaEnvelope, FaPhone, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function WebsiteUnderConstruction() {
  return (
    <section
      id="home"
      className=" pt-20 h-screen w-full overflow-hidden realtive"
    >
      <Image
        src="/0001.webp"
        alt="Nowoczesne osiedle mieszkaniowe Pułaskiego 32 w Wieliczce"
        fill
        quality={100}
        priority
        className="object-cover object-center blur-md"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4 sm:px-8 md:px-12 lg:px-[100px]  space-y-12">
        <h1 className="text-7xl xl:text-8xl font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-center transition break-words max-w-full">
          Strona w&nbsp;budowie
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 w-full ">
          <a
            href="https://www.n20.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Image
              src="/n20logo.png"
              alt="N20"
              width={255}
              height={160}
              className="drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            />
          </a>
          <div className="flex max-lg:items-center flex-col text-center lg:text-left font-bold text-white max-w-md drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl md:text-2xl mb-3">
              Kontakt biura nieruchomości
            </h2>
            <p className="text-sm md:text-base flex items-center">
              <FaEnvelope className="text-orange-500 mr-2" />
              biuro@n20.pl
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaPhone className="text-orange-500 mr-2" />
              +48 12 433 38 78
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaMobile className="text-orange-500 mr-2" />
              +48 790 557 504
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaMobile className="text-orange-500 mr-2" />
              +48 790 557 057
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaLocationDot className="text-orange-500 mr-2" />
              Plac Wolnica 13/21, 31-060 Kraków
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
