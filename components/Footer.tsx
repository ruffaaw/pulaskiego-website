import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row justify-between pb-5 pt-5 bg-green-spring-900 px-4 sm:px-8 md:px-12 lg:px-[100px]">
          <div
            className="flex flex-col justify-center items-center mt-5 lg:mt-0 lg:w-1/2 xl:-ml-[170px]"
            data-aos="fade-right"
          >
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
          <div
            className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:w-1/2"
            data-aos="fade-left"
          >
            <Link
              href="https://www.n20.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src="/n20logo.png"
                alt="N20"
                width={212}
                height={144}
                className="p-2"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-2 bg-signature text-white px-4 sm:px-8 md:px-12 lg:px-[100px]">
          <p className="my-2 text-center md:text-left">2025 Policrafts ©</p>
          <div className="text-center md:text-right">
            <p className="text-signature_text p-0 m-0">
              Wizualizacje: Maciej Krzyszkowski, Ala Janeczek
            </p>
            <p className="text-signature_text p-0 m-0">
              Realizacja witryny: Rafał Ciupek
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
