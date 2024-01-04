import Image from "next/image";
export const Header = () => {
  return (
    <section className="flex w-full flex-row place-content-between px-2">
      <Image src="kolorsbiz.svg" alt="kolorsbiz logo" width={120} height={40} />
      <Image src={"burger.svg"} alt="burger menu" width={30} height={30} />
    </section>
  );
};
