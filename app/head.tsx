export const metadata = {
  title: "Pułaskiego 32",
  description: "",
  image: "/logo_biale_ikona.png",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image} />
    </head>
  );
}
