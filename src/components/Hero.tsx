import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex h-[70vh] w-full flex-col overflow-hidden rounded-lg bg-center">
      <div className="relative h-[100%] w-full bg-center">
        <Image src="/hero-bus.png" alt="bus" fill objectFit="cover" />
      </div>
      <div className="bg-grape text-centerleading-[45px] min-h-[400px] w-full pt-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <p className="w-[300px] text-pretty text-2xl font-bold text-white">
            El transporte de personal hecho a tu medida
          </p>
          <p className="w-60 text-pretty text-2xl leading-[37px] text-white">
            Soluciones para las necesidades de tu empresa
          </p>
          <button className="bg-grass h-14 w-[210px] rounded-[40px] font-bold text-white">
            Conoce más
          </button>
        </div>
      </div>
    </section>
  );
};
