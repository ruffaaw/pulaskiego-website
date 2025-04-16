"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import {
  Building2,
  Bus,
  Car,
  CloudRain,
  Droplets,
  Home,
  Leaf,
  MapPin,
  ThermometerSnowflake,
  TreePalm,
} from "lucide-react";

export default function InvestmentSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section
      id="o-inwestycji"
      className="w-full h-full flex flex-col bg-green-spring-200 relative scroll-mt-14 lg:px-[100px] py-8"
    >
      <p
        className="text-2xl sm:text-3xl font-bold text-green-spring-950 px-4 sm:px-8 md:px-12 lg:px-0"
        data-aos="fade-down"
      >
        O INWESTYCJI
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start pt-4 pb-5 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-3/5 px-4 sm:px-8 md:px-12 lg:px-0">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent max-w-[1000px] text-left drop-shadow-lg break-words"
            data-aos="fade-right"
          >
            KOMFORT I&nbsp;BEZPIECZEŃSTWO NA WYCIĄGNIĘCIE RĘKI
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-left mt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Twoje miejsce w&nbsp;spokojnym sercu Wieliczki, gdzie życie toczy
            się w&nbsp;rytmie relaksu.
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-left mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Osiedle przy ulicy Pułaskiego w&nbsp;Wieliczce to idealne miejsce
            dla osób ceniących spokój, bezpieczeństwo i&nbsp;nowoczesne
            rozwiązania. Kameralne osiedle obejmuje tylko 28 mieszkań
            o&nbsp;powierzchni od 60 do 70 m². Zamknięta przestrzeń zapewnia
            mieszkańcom komfort i&nbsp;prywatność, a&nbsp;oświetlone drogi
            wewnętrzne i&nbsp;miejsca postojowe gwarantują bezpieczne
            i&nbsp;wygodne powroty do domu.
          </p>
        </div>
        <div className="w-full lg:w-2/5 flex justify-end relative h-[350px] md:h-[500px] lg:h-[600px] xl:h-[504px]">
          <Image
            src={"/0004.webp"}
            alt="Komfort i bezpieczeństwo na wyciągnięcie ręki"
            fill
            quality={100}
            className="lg:rounded-3xl object-cover drop-shadow-xl"
            data-aos="fade-left"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start py-5 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/5 flex justify-end relative h-[350px] md:h-[500px] lg:h-[600px] xl:h-[504px] max-lg:mt-8 ">
          <Image
            src={"/0003.webp"}
            alt="Zdrowie i ekologia w standardzie"
            fill
            quality={100}
            className="lg:rounded-3xl object-cover drop-shadow-xl"
            data-aos="fade-right"
            unoptimized
          />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-end px-4 sm:px-8 md:px-12 lg:px-0">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-spring-900 max-w-[1000px] drop-shadow-lg text-right bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent"
            data-aos="fade-left"
          >
            ZDROWIE I&nbsp;EKOLOGIA W&nbsp;STANDARDZIE{" "}
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-right mt-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Zielona przestrzeń, która koi zmysły – zadbaj o siebie i&nbsp;swoją
            rodzinę, żyjąc w&nbsp;harmonii z&nbsp;naturą.
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-right mt-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Inwestycja została zaprojektowana z&nbsp;myślą o&nbsp;komforcie
            i&nbsp;zdrowiu mieszkańców. Każde mieszkanie oferuje dobrze
            doświetlone wnętrza oraz przestrzeń do relaksu – zarówno wewnątrz,
            jak i&nbsp;na zewnątrz. Przydomowe ogródki pozwalają cieszyć się
            własnym zielonym zakątkiem, idealnym do odpoczynku po pracy lub
            spędzania czasu z&nbsp;rodziną. Bliskość licznych terenów zielonych
            wokół osiedla zachęca do aktywności fizycznej na świeżym powietrzu,
            co pozytywnie wpływa na samopoczucie i&nbsp;zdrowie całej rodziny.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-5 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-3/5 px-4 sm:px-8 md:px-12 lg:px-0">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg font-bold text-green-spring-900 max-w-[1000px] text-left bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent"
            data-aos="fade-right"
          >
            WYGODNE ŻYCIE W&nbsp;NOWOCZESNYM OTOCZENIU{" "}
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-left mt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Każdy dzień na Pułaskiego 32 to bliskość wszystkiego, co ważne –
            z&nbsp;łatwym dostępem do miasta i&nbsp;pełną wygodą.
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-left mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Mieszkania wyróżniają się funkcjonalnym układem, który zapewnia
            wygodę codziennego użytkowania. Każde wnętrze zostało zaprojektowane
            tak, by maksymalnie wykorzystać przestrzeń, tworząc idealne miejsce
            do relaksu, pracy i&nbsp;spotkań z&nbsp;bliskimi.
          </p>
          <ul className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-left">
            <li
              className="flex flex-row space-x-3 py-2 items-center"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <p>
                Doskonała lokalizacja - sklepy, restauracje i&nbsp;placówki
                edukacyjne w&nbsp;zasięgu ręki.
              </p>
            </li>
            <li
              className="flex flex-row space-x-3 py-2 items-center"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <TreePalm className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <p>
                Nowoczesny park - 3 km alejek, siłownia plenerowa, place zabaw
                i&nbsp;strefa wypoczynkowa.
              </p>
            </li>
            <li
              className="flex flex-row space-x-3 py-2 items-center"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <Bus className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <p>
                Doskonała komunikacja - szybki dojazd do Krakowa i&nbsp;łatwe
                przemieszczanie się po Wieliczce.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/5 flex justify-end relative h-[350px] md:h-[500px] lg:h-[600px] xl:h-[504px]">
          <Image
            src={"/0001.webp"}
            alt="Wygodne życie w nowoczesnym otoczeniu"
            fill
            quality={100}
            className="lg:rounded-3xl object-cover drop-shadow-xl"
            data-aos="fade-left"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-5 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/5 flex justify-end relative h-[350px] md:h-[500px] lg:h-[600px] xl:h-[504px] max-lg:mt-8">
          <Image
            src={"/0002.webp"}
            alt="Nowoczesne technologie i oszczędność"
            fill
            quality={100}
            className="lg:rounded-3xl object-cover drop-shadow-xl"
            data-aos="fade-right"
            unoptimized
          />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-end px-4 sm:px-8 md:px-12 lg:px-0">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg font-bold text-green-spring-900 max-w-[1000px] text-right bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent"
            data-aos="fade-left"
          >
            NOWOCZESNE TECHNOLOGIE I&nbsp;OSZCZĘDNOŚĆ{" "}
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-right mt-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Nowoczesność, która dba o Twój komfort i&nbsp;planetę – ekologiczne
            rozwiązania, które sprawiają, że życie jest łatwiejsze
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-right mt-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Mieszkania zostały wybudowane z&nbsp;najwyższej jakości materiałów,
            z&nbsp;zastosowaniem nowoczesnych i&nbsp;ekologicznych technologii.
          </p>
          <ul className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-right">
            <li
              className="flex flex-row space-x-3 py-2 items-center justify-end"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <p>
                Doskonała izolacja termiczna – gwarantuje oszczędność energii
                i&nbsp;wysoki komfort cieplny.
              </p>
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <ThermometerSnowflake className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </li>
            <li
              className="flex flex-row space-x-3 py-2 items-center justify-end"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <p>
                Zbiorniki na deszczówkę – ekologiczny system nawadniania zieleni
                osiedlowej.
              </p>
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <CloudRain className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </li>
            <li
              className="flex flex-row space-x-3 py-2 items-center justify-end"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <p>
                Przepuszczalne nawierzchnie – pomagają w&nbsp;naturalnej
                cyrkulacji wody, co przekłada się na suchą i&nbsp;estetyczną
                przestrzeń wokół budynków.
              </p>
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <Droplets className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col py-5">
        <div className="flex flex-col lg:flex-row justify-between lg:space-y-0 lg:space-x-8 px-4 sm:px-8 md:px-12 lg:px-0">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-spring-900 text-left bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent drop-shadow-lg"
            data-aos="fade-right"
          >
            IDEALNE MIEJSCE DLA CIEBIE
          </p>
          <p
            className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-lg:mt-4 text-green-spring-900 lg:text-right "
            data-aos="fade-left"
          >
            Twój nowy dom w&nbsp;Wieliczce – połączenie spokoju, przestrzeni
            i&nbsp;nowoczesnego komfortu, który pokochasz.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 mt-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-2/3 px-4 sm:px-8 md:px-12 lg:px-0">
            {[
              {
                icon: <Leaf className="w-12 h-12 sm:w-14 sm:h-14" />,
                title: `SPOKOJNA, ZIELONA OKOLICA`,
                description: `Żyj w${"\u00A0"}otoczeniu natury, gdzie zieleń i${"\u00A0"}cisza tworzą idealne warunki do relaksu.`,
              },
              {
                icon: <Car className="w-12 h-12 sm:w-14 sm:h-14" />,
                title: `DOSKONAŁY DOJAZD DO KRAKOWA I${"\u00A0"}CENTRUM WIELICZKI`,
                description: `Szybki i${"\u00A0"}wygodny dojazd do Krakowa oraz centrum Wieliczki bez stresu i${"\u00A0"}pośpiechu.`,
              },
              {
                icon: <Building2 className="w-12 h-12 sm:w-14 sm:h-14" />,
                title: `WYSOKI STANDARD WYKOŃCZENIA I${"\u00A0"}NOWOCZESNE TECHNOLOGIE`,
                description: `Najnowsze technologie i${"\u00A0"}eleganckie wykończenie gwarantują komfort i${"\u00A0"}oszczędność energii.`,
              },
              {
                icon: <Home className="w-12 h-12 sm:w-14 sm:h-14" />,
                title: `PRZESTRONNE WNĘTRZA I${"\u00A0"}FUNKCJONALNE UKŁADY MIESZKAŃ`,
                description: `Inspirujące wnętrza, które zapewniają swobodę i${"\u00A0"}wygodę codziennego życia.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-green-spring-100 rounded-3xl p-5 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 text-green-spring-700">
                  {item.icon}
                </div>
                <p className="text-xl sm:text-2xl font-bold normal-case text-green-spring-900 mb-4">
                  {item.title}
                </p>
                <p className="text-lg sm:text-xl text-green-spring-900">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 flex justify-end relative max-lg:h-[350px] md:h-[500px] max-lg:mt-8">
            <Image
              src={"/0000.webp"}
              alt="Idealne miejsce dla Ciebie"
              fill
              quality={100}
              className="lg:rounded-3xl object-cover drop-shadow-xl"
              data-aos="fade-left"
              data-aos-delay="100"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between pt-5 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-3 px-4 sm:px-8 md:px-12 lg:px-0">
          <p
            className="lg:hidden text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg font-bold text-green-spring-900 max-w-[1000px] bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent"
            data-aos="fade-left"
          >
            ZAMIESZKAJ NA PUŁASKIEGO 32!{" "}
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[900px] text-left"
            data-aos="fade-right"
          >
            Twój nowy dom w&nbsp;Wieliczce – połączenie spokoju, przestrzeni
            i&nbsp;nowoczesnego komfortu.
          </p>
          <Link
            href={"#kontakt"}
            className="hover:text-green-spring-200 hover:bg-green-spring-900 transition-all drop-shadow-md border-2 border-green-spring-900 text-green-spring-900 px-4 py-2 text-lg sm:text-xl w-1/2 text-center break-words"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Skontaktuj się z&nbsp;nami
          </Link>
        </div>
        <p
          className="max-lg:hidden text-4xl sm:text-5xl md:text-6xl uppercase lg:text-7xl drop-shadow-lg font-bold text-green-spring-900 max-w-[1000px] text-right bg-gradient-to-r to-green-spring-900 from-green-spring-400 bg-clip-text text-transparent"
          data-aos="fade-left"
        >
          ZAMIESZKAJ NA PUŁASKIEGO 32!{" "}
        </p>
      </div>
    </section>
  );
}
