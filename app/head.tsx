export const metadata = {
  title: "Pułaskiego",
  description: "",
  image: "/elpropertieslogo.png",
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
