import Carousel from "nuka-carousel";
import React, { useEffect, useRef } from "react";
import UniqueCard from "./UniqueCard";

export const Unique = () => {
  const uniqueCardsData = [
    {
      src: "/routes.svg",
      title: "diseño de rutas",
      description: "para garantizar la puntualidad",
    },
    {
      src: "/points.svg",
      title: "puntos de abordaje",
      description: "seguros y flexibles",
    },
    {
      src: "/security.svg",
      title: "monitoreo",
      description:
        "en tiempo real para la seguridad y seguimiento de pasajeros",
    },
    {
      src: "/driver.svg",
      title: "conductores",
      description: "capacitados",
    },
    {
      src: "/soap.svg",
      title: "medidas de sanidad",
      description: "para tu protección",
    },
    {
      src: "/headset.svg",
      title: "atención",
      description: "24/7",
    },
  ];
  return (
    <section className=" min-h-[430px]">
      <Carousel
        autoplay
        autoplayInterval={2500}
        wrapAround
        className="max-w-64"
        cellAlign="center"
        defaultControlsConfig={{
          nextButtonClassName: "hidden",
          prevButtonClassName: "hidden",
          pagingDotsContainerClassName: "gap-3 !top-11 carousel-dots",
          pagingDotsStyle: { fill: "#9873E6" },
        }}
      >
        {uniqueCardsData.map(({ src, title, description }) => (
          <UniqueCard
            src={src}
            title={title}
            description={description}
          ></UniqueCard>
        ))}
      </Carousel>
    </section>
  );
};
