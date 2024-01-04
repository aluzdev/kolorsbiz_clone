import Image from "next/image";
export const Hero = () => {
  return (
    <section className="flex h-[600px] w-full flex-col overflow-hidden rounded-lg bg-center">
      <Image
        src="/hero-bus.png"
        alt="bus"
        sizes="100vw"
        width={350}
        height={180}
        layout="responsive"
      />
      <p>develop</p>
    </section>
  );
};
