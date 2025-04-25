"use client";

import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Head from "@/app/head";
import Loader from "@/components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head />
      <body>
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
