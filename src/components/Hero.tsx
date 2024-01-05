import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden rounded-3xl bg-center">
      <Image
        src="/hero-bus.png"
        alt="bus"
        width={360}
        height={180}
        quality={100}
        style={{
          width: "100%",
          objectFit: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div className="text-centerleading-[45px] min-h-[400px] w-full bg-grape pt-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <p className="w-[300px] text-3xl font-bold text-white">
            El transporte <br /> de personal <br /> hecho a tu medida
          </p>
          <p className="w-60 text-pretty text-2xl leading-[37px] text-white">
            Soluciones para las necesidades de tu empresa
          </p>
          <button className="h-14 w-[210px] cursor-pointer  rounded-[40px] bg-grass text-xl font-bold text-white">
            Conoce más
          </button>
        </div>
      </div>
    </section>
  );
};
