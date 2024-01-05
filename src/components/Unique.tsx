import Carousel from "nuka-carousel";
import React from "react";

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
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </Carousel>
    </div>
  );
};
