import Carousel from "nuka-carousel";
import React, { useEffect, useRef } from "react";
import UniqueCard from "./UniqueCard";

export const Unique = () => {
  return (
    <section className=" min-h-[430px]">
      <Carousel
        autoplay
        autoplayInterval={2500}
        className="max-w-64"
        cellAlign="center"
        wrapAround
        defaultControlsConfig={{
          nextButtonClassName: "hidden",
          prevButtonClassName: "hidden",
          pagingDotsContainerClassName: "gap-3 !top-11 carousel-dots",
          pagingDotsStyle: { fill: "#9873E6" },
        }}
      >
        <UniqueCard
          src="/routes.svg"
          title="diseño de rutas"
          description="para garantizar la puntualidad"
        />
        <UniqueCard
          src="/points.svg"
          title="puntos de abordaje"
          description="seguros y flexibles"
        />
        <UniqueCard
          src="/security.svg"
          title="monitoreo"
          description="en tiempo real para la seguridad y seguimiento de pasajeros"
        />
        <UniqueCard
          src="/driver.svg"
          title="conductores"
          description="capacitados"
        />
        <UniqueCard
          src="/soap.svg"
          title="medidas de sanidad"
          description="para tu protección"
        />
        <UniqueCard src="/headset.svg" title="atención" description="24/7" />
      </Carousel>
    </section>
  );
};
