import Carousel from "nuka-carousel";
import React from "react";
import UniqueCard from "./UniqueCard";

export const Unique = () => {
  return (
    <div>
      <Carousel
        autoplay
        autoplayInterval={2500}
        wrapAround
        defaultControlsConfig={{
          nextButtonClassName: "hidden",
          prevButtonClassName: "hidden",
          pagingDotsContainerClassName: "gap-10 carousel-dots",
          pagingDotsStyle: { fill: "#9873E6" },
        }}
      >
        <UniqueCard
          src="/routes.svg"
          title="diseño de rutas"
          description="para garantizar la puntualidad"
        />
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </Carousel>
    </div>
  );
};
