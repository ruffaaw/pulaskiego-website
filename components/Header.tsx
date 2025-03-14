"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-30 flex justify-between items-center transition-all duration-300 md:px-12 lg:px-[100px] ">
      <div
        className="flex items-center max-md:pl-6"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#home">
          <Image
            src="/next.svg"
            alt="Logo"
            width={64}
            height={64}
            className="h-16 w-16 mr-2 drop-shadow-sm hover:scale-125"
          />
        </Link>
      </div>
      <nav
        className="hidden md:flex space-x-8 text-lg lg:text-xl items-center justify-center text-green-spring-100 font-bold "
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        {[
          { href: "#about-investment", label: "O inwestycji" },
          { href: "#about-us", label: "O nas" },
          { href: "#our-values", label: "Nasze wartości" },
          { href: "#houses", label: "Domy" },
          { href: "#gallery", label: "Galeria" },
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
          key={"contact"}
          href={"#contact"}
          className="hover:text-green-spring-300 hover:scale-125 transition-all drop-shadow-md border-2 border-green-spring-100 hover:border-green-spring-300 px-4 py-2"
        >
          Kontakt
        </Link>
      </nav>
      <button
        className="md:hidden flex items-center text-white py-7 max-md:pr-6"
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
        <div className="fixed flex flex-col items-center top-20 bg-green-spring-800 shadow-md z-30 w-screen h-auto ">
          <Link
            href="#about-investment"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>
          <Link
            href="#about-us"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O nas</p>
          </Link>
          <Link
            href="#our-values"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Nasze wartości</p>
          </Link>
          <Link
            href="#houses"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Domy</p>
          </Link>
          <Link
            href="#gallery"
            className="text-green-spring-100 text-xl w-full py-5 flex justify-center hover:bg-green-spring-300 hover:text-green-spring-900 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="#contact"
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
