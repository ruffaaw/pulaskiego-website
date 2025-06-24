export const metadata = {
  title: "Pułaskiego 32",
  description:
    "Osiedle Pułaskiego 32 w Wieliczce to nowoczesne, zamknięte osiedle z 28 mieszkaniami. Oferuje prywatność, zieloną przestrzeń, miejsca postojowe i bliskość parków. Sprawdź komfortowe życie w harmonii z naturą!",
  image: "/favicon-pulaskiego.ico",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image} />
      <link rel="preload" href="/0001.webp" as="image" />
    </head>
  );
}
