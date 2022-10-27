import Image from "next/image";
import bottle from "../public/photos/bottle.png";

export default function Bottle() {
  const image = {
    src: bottle,
    alt: "Rosie Mobil 1 Bottle",
  };

  return (
    <div>
      <Image src={image.src} placeholder="blur" alt={image.alt} />
    </div>
  );
}
