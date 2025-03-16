"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutInvestorSection = () => {
  const cards = [
    {
      icon: "🤝",
      title: "Relacje oparte na zaufaniu",
      description:
        "Dla nas najważniejsze są relacje, które budujemy na zaufaniu i szczerości. Staramy się, aby każda współpraca była wyjątkowa i opierała się na długofalowym porozumieniu.",
    },
    {
      icon: "💡",
      title: "Wspólna wizja",
      description:
        "W każdej inwestycji traktujemy naszych klientów jako partnerów. Wspólnie tworzymy przestrzeń, która w pełni odzwierciedla ich oczekiwania i potrzeby. Uważamy, że sukces budowy to wynik dobrej współpracy i wzajemnego zrozumienia.",
    },
    {
      icon: "📏",
      title: "Dokładność i zaangażowanie",
      description:
        "Nasze projekty realizujemy z pełnym profesjonalizmem, dbając o każdy detal. Angażujemy się w każdy etap inwestycji, zapewniając rzetelne wykonanie oraz dotrzymywanie uzgodnionych terminów, by dostarczyć najwyższą jakość.",
    },
    {
      icon: "🛡️",
      title: "Trwałość i komfort",
      description:
        "Dbamy o to, by nasze realizacje były bezpieczne i trwałe. Starannie wybieramy materiały i technologie, które zapewniają nie tylko estetykę, ale i bezpieczeństwo, gwarantując długotrwały komfort.",
    },
    {
      icon: "🏠",
      title: "Miejsce do życia",
      description:
        "Naszym celem jest stworzenie przestrzeni, która będzie źródłem szczęścia i harmonii. Zależy nam, by każdy nasz projekt stał się miejscem, w którym ludzie odnajdują spokój, radość i przestrzeń do wspólnych chwil z bliskimi.",
    },
  ];

  return (
    <section
      id="o-inwestorze"
      className="w-full h-full flex flex-col bg-green-spring-200 relative scroll-mt-20 px-[100px] py-8"
    >
      <p
        className="text-3xl font-bold text-green-spring-950 "
        data-aos="fade-down"
      >
        O INWESTORZE
      </p>

      <div className="flex flex-row justify-between py-4">
        <div className="w-1/2">
          <p
            className="text-7xl font-bold bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent max-w-[1000px] text-left drop-shadow-lg"
            data-aos="fade-right"
          >
            EL PROPERTIES
          </p>
          <p
            className="text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-left mt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Tworzymy przestrzenie, które łączą nowoczesny design z
            funkcjonalnością.
          </p>
          <p
            className="text-2xl text-green-spring-900 max-w-[1000px] text-left mt-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            EL PROPERTIES to firma, która od lat z powodzeniem realizuje
            inwestycje deweloperskie, tworząc przestrzenie, które łączą
            nowoczesny design z funkcjonalnością. Z pasją podchodzimy do każdego
            projektu, dbając o to, aby każdy nasz klient znalazł idealne miejsce
            do życia.
          </p>
        </div>

        <Image
          src="/el_properties_group.png"
          alt="EL PROPERTIES"
          width={600}
          height={504}
          quality={100}
          priority
          className="rounded-3xl max-h-[320px] drop-shadow-xl text-right"
          data-aos="fade-left"
        />
      </div>
      <div className="flex flex-col gap-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.slice(0, 2).map((card, index) => (
            <motion.div
              key={index}
              className="bg-green-spring-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-6xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-green-spring-900 mb-4">
                {card.title}
              </h3>
              <p className="text-lg text-green-spring-700">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.slice(2).map((card, index) => (
            <motion.div
              key={index + 2}
              className="bg-green-spring-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
            >
              <div className="text-6xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-green-spring-900 mb-4">
                {card.title}
              </h3>
              <p className="text-lg text-green-spring-700">
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
