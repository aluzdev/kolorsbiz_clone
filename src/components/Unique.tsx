import Carousel from "nuka-carousel";
import React from "react";

export const Unique = () => {
  return (
    <div>
      <Carousel
        autoplay
        autoplayInterval={100}
        defaultControlsConfig={{
          nextButtonClassName: "hidden",
          prevButtonClassName: "hidden",
          pagingDotsContainerClassName: "gap-10 carousel-dots",
          pagingDotsStyle: { fill: "#9873E6" },
        }}
      >
        <img src="/burger.svg" />
        <img src="/favicon.ico" />
        <img src="/hero-bus.png" />
        <img src="/kolorsbiz.svg" />
      </Carousel>
    </div>
  );
};
