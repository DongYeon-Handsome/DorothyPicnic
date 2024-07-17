'use client';

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import Sample1 from "../../../../../public/Image/Sample1.jpg"
import Sample2 from "../../../../../public/Image/Sample2.jpg";
import Sample3 from "../../../../../public/Image/Sample3.jpg";
import LeftArrow from "../../../../../public/Image/LeftArrow.svg";
import RightArrow from "../../../../../public/Image/RightArrow.svg";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  $currentSlide?: number;
  $slideCount?: number;
}

const SliderStyled = styled(Slider)<SliderProps>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  .slick-prev::before, .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`

export default function ImageSlide(){
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    cssEase: "linear",
    nextArrow: (
      <NextTo>
        <Image src={RightArrow} alt="RightArrow"/>
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Image src={LeftArrow} alt="LeftArrow"/>
      </Pre>
    )
  };

  return(
    <div>
      <SliderStyled {...settings}>
        <div><Image src={Sample1} height={500} alt="Slide 1" /></div>
        <div><Image src={Sample2} height={500} alt="Slide 2" /></div>
        <div><Image src={Sample3} height={500} alt="Slide 3" /></div>
      </SliderStyled>
    </div>
  );
}