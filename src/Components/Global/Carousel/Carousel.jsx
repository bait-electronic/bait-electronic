/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "@splidejs/react-splide/css";
import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import { LOGO } from "../../../Constanst/constanst.Const";

function Carousel() {
  const imagesList = [
    { original: LOGO },
    { original: LOGO },
    { original: LOGO },
    { original: LOGO },
    { original: LOGO },
    { original: LOGO },
    { original: LOGO },
    { original: LOGO },
  ];
  return (
    <Splide
      style={{
        width: "1000px",
        height: "300px",
      }}
      options={{ direction: "ttb", heightRatio: "1" }}
      aria-label="My Favorite Images"
    >
      {imagesList.map((image, index) => {
        return (
          <SplideSlide key={index}>
            <img
              key={image.original + index}
              src={image.original}
              alt="Image 1"
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default Carousel;
