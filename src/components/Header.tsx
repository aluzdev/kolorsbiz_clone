import Image from "next/image";
import { Alert } from "flowbite-react";
export const Header = () => {
  return (
    <section className="flex place-content-between">
      <Image src="kolorsbiz.svg" alt="kolorsbiz logo" width={120} height={40} />
      <Image src={"burger.svg"} alt="burger menu" width={30} height={30} />
    </section>
  );
};
