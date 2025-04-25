"use client";
import { useEffect, useState } from "react";

import { ReactNode } from "react";

export default function Loader({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/0001.webp";
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);

    const timeout = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-green-spring-200 z-50"></div>
    );
  }

  return <>{children}</>;
}
