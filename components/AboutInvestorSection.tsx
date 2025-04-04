"use client";
import { Handshake, Lightbulb, Ruler, ShieldCheck, Home } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutInvestorSection = () => {
  const cards = [
    {
      icon: (
        <Handshake className="w-12 h-12 sm:w-14 sm:h-14 text-green-spring-700" />
      ),
      title: "Relacje oparte na zaufaniu",
      description: `Dla nas najważniejsze są relacje, które budujemy na zaufaniu i${"\u00A0"}szczerości. Staramy się, aby każda współpraca była wyjątkowa i${"\u00A0"}opierała się na długofalowym porozumieniu.`,
    },
    {
      icon: (
        <Lightbulb className="w-12 h-12 sm:w-14 sm:h-14 text-green-spring-700" />
      ),
      title: "Wspólna wizja",
      description: `W${"\u00A0"}każdej inwestycji traktujemy naszych klientów jako partnerów. Wspólnie tworzymy przestrzeń, która w pełni odzwierciedla ich oczekiwania i${"\u00A0"}potrzeby. Uważamy, że sukces budowy to wynik dobrej współpracy i${"\u00A0"}wzajemnego zrozumienia.`,
    },
    {
      icon: (
        <Ruler className="w-12 h-12 sm:w-14 sm:h-14 text-green-spring-700" />
      ),
      title: `Dokładność i${"\u00A0"}zaangażowanie`,
      description: `Nasze projekty realizujemy z${"\u00A0"}pełnym profesjonalizmem, dbając o każdy detal. Angażujemy się we wszystkie etapy inwestycji, zapewniamy rzetelne wykonanie oraz dotrzymywanie uzgodnionych terminów, po to aby dostarczać najwyższą jakość.`,
    },
    {
      icon: (
        <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-green-spring-700" />
      ),
      title: `Trwałość i${"\u00A0"}komfort`,
      description: `Dbamy o to, by nasze realizacje były bezpieczne i${"\u00A0"}trwałe. Starannie wybieramy materiały i${"\u00A0"}technologie, które zapewniają nie tylko estetykę, ale i${"\u00A0"}bezpieczeństwo, gwarantując długotrwały komfort.`,
    },
    {
      icon: (
        <Home className="w-12 h-12 sm:w-14 sm:h-14 text-green-spring-700" />
      ),
      title: "Miejsce do życia",
      description: `Naszym celem jest stworzenie przestrzeni, która będzie źródłem szczęścia i${"\u00A0"}harmonii. Zależy nam, by każdy nasz projekt stał się miejscem, w${"\u00A0"}którym mieszkańcy odnajdują spokój, radość i${"\u00A0"}przestrzeń do wspólnych chwil z${"\u00A0"}bliskimi.`,
    },
  ];

  return (
    <section
      id="o-inwestorze"
      className="w-full h-full flex flex-col bg-green-spring-200 relative scroll-mt-14 px-4 sm:px-8 md:px-12 lg:px-[100px] py-8"
    >
      <p
        className="text-2xl sm:text-3xl font-bold text-green-spring-950 "
        data-aos="fade-down"
      >
        O INWESTORZE
      </p>

      <div className="flex flex-col lg:flex-row justify-between py-4 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent max-w-[1000px] text-left drop-shadow-lg"
            data-aos="fade-right"
          >
            EL PROPERTIES
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-left mt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Tworzymy przestrzenie, które łączą nowoczesny design
            z&nbsp;funkcjonalnością.
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl text-green-spring-900 max-w-[1000px] text-left mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            EL PROPERTIES to firma, która od lat z&nbsp;powodzeniem realizuje
            inwestycje deweloperskie, tworząc przestrzenie, które łączą
            nowoczesny design z&nbsp;funkcjonalnością. Z pasją podchodzimy do
            wszystkich projektów, dbając o&nbsp;to, aby każdy nasz klient
            znalazł idealne miejsce do życia.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src="/elpropertieslogo.png"
            alt="EL PROPERTIES"
            width={300}
            height={504}
            quality={100}
            priority
            className="w-full object-contain lg:max-w-[600px] h-auto drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            data-aos="fade-left"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.slice(0, 2).map((card, index) => (
            <motion.div
              key={index}
              className="bg-green-spring-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4">{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-spring-900 mb-4">
                {card.title}
              </h3>
              <p className="text-base sm:text-lg text-green-spring-700">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.slice(2).map((card, index) => (
            <motion.div
              key={index + 2}
              className="bg-green-spring-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
            >
              <div className="text-5xl sm:text-6xl mb-4">{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-spring-900 mb-4">
                {card.title}
              </h3>
              <p className="text-base sm:text-lg text-green-spring-700">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInvestorSection;
