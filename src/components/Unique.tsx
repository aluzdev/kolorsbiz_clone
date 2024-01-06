import Carousel from "nuka-carousel";
import React, { useEffect, useRef } from "react";
import UniqueCard from "./UniqueCard";

export const Unique = () => {
  const slideStyle = "w-[256px] mx-auto text-center";
  return (
    <section className=" min-h-[430px]">
      <Carousel
        // autoplay
        // autoplayInterval={2500}

        cellAlign="center"
        wrapAround
        defaultControlsConfig={{
          nextButtonClassName: "hidden",
          prevButtonClassName: "hidden",
          pagingDotsContainerClassName: "gap-10 !top-11 carousel-dots",
          pagingDotsStyle: { fill: "#9873E6" },
        }}
      >
        <div className={slideStyle}>
          <UniqueCard
            src="/routes.svg"
            title="diseño de rutas"
            description="para garantizar la puntualidad"
          />
        </div>
        <div className={slideStyle}>
          <p>2</p>
        </div>
      </Carousel>
    </section>
  );
};
