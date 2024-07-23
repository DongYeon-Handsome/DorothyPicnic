'use client';

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import LeftArrow from "../../../../../public/Image/LeftArrow.svg";
import RightArrow from "../../../../../public/Image/RightArrow.svg";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  $currentSlide?: number;
  $slideCount?: number;
}

interface ImageSliderProps {
  images: { src: StaticImageData, alt: string }[];
}

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SliderStyled = styled(Slider)<SliderProps>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  .slick-prev::before, .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
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
    <SliderContainer>
      <SliderStyled {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <StyledImage src={image.src.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </SliderStyled>
    </SliderContainer>
  );
}

export default ImageSlider;