import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltDown } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between pb-5 pt-5 bg-green-spring-900 px-4 sm:px-8 md:px-12 lg:px-[100px] max-lg:gap-4">
          <div className="flex flex-col justify-center items-center lg:mt-0 lg:w-1/2 xl:-ml-[170px]">
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.facebook.com/N20RealEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image
                  src="/Facebook_icon.png"
                  alt="Facebook"
                  width={80}
                  height={80}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href="https://www.instagram.com/n20_nieruchomosci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image
                  src="/Instagram_icon.png"
                  alt="Instagram"
                  width={80}
                  height={80}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center my-5 lg:my-0">
            <Link
              href="/prospektInformacyjny/PROSPEKT_INFORMACYJNY_pulaskiego.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz prospekt informacyjny w formacie PDF"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl transition group-hover:bg-white/25">
                <FaLongArrowAltDown />
              </span>
              <span className="text-left">
                <span className="block text-xs uppercase tracking-[0.2em] text-white/70">
                  Prospekt informacyjny
                </span>
                <span className="block text-lg font-semibold leading-tight">
                  Pobierz PDF
                </span>
              </span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:w-1/2">
            <Link
              href="https://www.n20.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image src="/n20logo.png" alt="N20" width={128} height={80} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-2 bg-signature text-white px-4 sm:px-8 md:px-12 lg:px-[100px]">
          <a
            href="https://policrafts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2 text-center md:text-left"
          >
            2025 Policrafts ©
          </a>
          <div className="text-center md:text-right">
            <p className="p-0 m-0">
              Wizualizacje: Maciej Krzyszkowski, Alicja Janeczek
            </p>
            <p className="p-0 m-0">Realizacja witryny: Rafał Ciupek</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
