'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import ImageSlider from '@/app/components/templates/home/ImageSlide';
import BestMenu from '@/app/components/templates/home/BestMenu';

import Sample1 from '../../../../public/Image/Sample1.jpg';
import Sample2 from '../../../../public/Image/Sample2.jpg';
import Sample3 from '../../../../public/Image/Sample3.jpg';
import Sample4 from '../../../../public/Image/Sample4.jpg';

const MainWrapper = styled.div`
  position: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main: React.FC = () => {
  const images = [
    { src: Sample1, alt: 'Image 1' },
    { src: Sample2, alt: 'Image 2' },
    { src: Sample3, alt: 'Image 3' },
    { src: Sample4, alt: 'Image 4' },
  ];

  return(
    <MainWrapper>
      <ImageSlider images={images}/>
      <BestMenu />
    </MainWrapper>
  );
};

export default Main;