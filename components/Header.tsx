"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else if (scrollPosition === 0) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-30 flex justify-between items-center ${
        isMenuOpen
          ? "bg-green-spring-900"
          : isScrolled
          ? "bg-green-spring-900"
          : "bg-transparent"
      }`}
    >
      <div
        className="flex items-center h-16 max-md:pl-6 md:pl-12 lg:pl-[100px]"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#home">
          <Image
            src="/logo_biale.png"
            alt="Logo"
            width={150}
            height={50}
            className="mr-2 drop-shadow-lg hover:scale-125"
          />
        </Link>
      </div>
      <nav
        className="hidden lg:flex ml-5 space-x-5 xl:space-x-8 text-lg lg:text-xl items-center justify-center text-green-spring-100 font-bold md:pr-12 lg:pr-[100px]"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        {[
          { href: "#o-inwestycji", label: "O inwestycji" },
          { href: "#lokalizacja", label: "Lokalizacja" },
          { href: "#o-inwestorze", label: "O inwestorze" },
          { href: "#widok-360", label: "Widok 360°" },
          { href: "#lokale", label: "Lokale" },
          { href: "#galeria", label: "Galeria" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-green-spring-300 hover:scale-125 transition-all drop-shadow-md "
          >
            {item.label}
          </Link>
        ))}
        <Link
          key={"kontakt"}
          href={"#kontakt"}
          className="hover:text-green-spring-300 hover:scale-125 transition-all drop-shadow-md border-2 border-green-spring-100 hover:border-green-spring-300 px-4 py-2"
        >
          Kontakt
        </Link>
      </nav>
      <button
        className="lg:hidden flex items-center text-white py-7 max-md:pr-6 md:pr-12 lg:pr-[100px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="fixed flex flex-col items-center top-16 bg-green-spring-900 shadow-md z-30 w-screen h-auto ">
          <Link
            href="#o-inwestycji"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>

          <Link
            href="#lokalizacja"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Lokalizacja</p>
          </Link>
          <Link
            href="#o-inwestorze"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestorze</p>
          </Link>
          <Link
            href="#widok-360"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Widok 360°</p>
          </Link>
          <Link
            href="#lokale"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Lokale</p>
          </Link>
          <Link
            href="#galeria"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="#kontakt"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Kontakt</p>
          </Link>
        </div>
      )}
    </header>
  );
}
