"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(
  //     null
  //   );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    // const now = Date.now();
    // if (lastSubmissionTime && now - lastSubmissionTime < 60000) {
    //   alert(
    //     "Wiadomość została już wysłana. Poczekaj chwilę przed wysłaniem kolejnej."
    //   );
    //   setIsSubmitting(false);
    //   return;
    // }

    // if (
    //   !formData.name ||
    //   !formData.email ||
    //   !formData.phone ||
    //   !formData.message ||
    //   !formData.privacyPolicy
    // ) {
    //   alert(
    //     "Proszę wypełnić wszystkie pola i zaakceptować politykę prywatności!"
    //   );
    //   setIsSubmitting(false);
    //   return;
    // }

    // const body = {
    //   email: "",
    //   subject: `Pułaskiego - Wiadomość od: ${formData.name}`,
    //   message: `Imię i nazwisko: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\n${formData.message}`,
    // };

    // try {
    //   // Wysyłanie danych do API
    //   const response = await fetch(
    //     "https://jc5vg6se5e.execute-api.eu-north-1.amazonaws.com/dev/send-mail",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "x-api-key": "_just-a'test\"key,or>is<it?",
    //       },
    //       body: JSON.stringify(body),
    //     }
    //   );

    //   if (response.ok) {
    //     alert("Wiadomość została wysłana pomyślnie!");
    //     // Resetowanie formularza po wysłaniu
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       message: "",
    //       privacyPolicy: false,
    //     });
    //     setLastSubmissionTime(now); // Zapisywanie czasu ostatniego wysłania
    //   } else {
    //     throw new Error("Błąd podczas wysyłania wiadomości");
    //   }
    // } catch (error) {
    //   alert("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    // } finally {
    //   setIsSubmitting(false); // Zakończenie procesu wysyłania
    // }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <section
      id="kontakt"
      className="w-full h-full flex flex-col bg-green-spring-200 relative scroll-mt-14 px-4 sm:px-8 md:px-12 lg:px-[100px] py-8"
    >
      <p
        className="text-2xl sm:text-3xl font-bold text-green-spring-950"
        data-aos="fade-down"
      >
        KONTAKT
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-1/2">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-spring-900 to-green-spring-400 bg-clip-text text-transparent max-w-[1000px] text-left drop-shadow-lg break-words"
            data-aos="fade-right"
          >
            SKONTAKTUJ SIĘ Z NAMI
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-green-spring-900 max-w-[1000px] text-left mt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Masz pytania? Chętnie na nie odpowiemy!
          </p>

          <motion.form
            className="mt-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-2">
              <label htmlFor="name" className="block text-lg font-medium">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Wpisz swoje imię i nazwisko"
                className="w-full px-4 py-2 rounded-lg border border-green-spring-300 focus:outline-none focus:ring-2 focus:ring-green-spring-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <div className="w-full">
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Wpisz swój email"
                  className="w-full px-4 py-2 rounded-lg border border-green-spring-300 focus:outline-none focus:ring-2 focus:ring-green-spring-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="phone" className="block text-lg font-medium">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Wpisz swój numer telefonu"
                  className="w-full px-4 py-2 rounded-lg border border-green-spring-300 focus:outline-none focus:ring-2 focus:ring-green-spring-500"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Treść wiadomości
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Wpisz treść wiadomości"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-green-spring-300 focus:outline-none focus:ring-2 focus:ring-green-spring-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  className="form-checkbox h-5 w-5 text-green-spring-500 rounded focus:ring-green-spring-500 accent-green-spring-500"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  required
                />
                <span className="ml-2 text-lg">
                  Zgadzam się z{" "}
                  <a
                    href="https://www.n20.pl/polityka-prywatnosci"
                    className="text-green-spring-500 hover:text-green-spring-700 underline"
                  >
                    polityką prywatności
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-spring-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-green-spring-600 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij"}
            </button>
          </motion.form>
        </div>

        <motion.div
          className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[649px] xl:h-[609px] rounded-3xl overflow-hidden shadow-lg lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15626.70147718562!2d19.940635014135548!3d50.06241211212332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bcb0775d95b%3A0x6c2b2c699b0abb2b!2sZamek%20Kr%C3%B3lewski%20na%20Wawelu!5e1!3m2!1spl!2spl!4v1742225976785!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa inwestycji"
          ></iframe>
        </motion.div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://www.n20.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Image
              src="/n20logoCzarne.png"
              alt="N20"
              width={255}
              height={160}
            />
          </a>
          <div className="text-left font-bold text-gray-800 max-w-md">
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
        <div>
          <Image src="/next.svg" alt="logo" width={255} height={160} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
