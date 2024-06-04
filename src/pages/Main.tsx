'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import ImageSlide from '@/components/templates/home/ImageSlide';
import BestMenu from '@/components/templates/home/BestMenu';

const MainWrapper = styled.div`
  position: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Main(){
  return(
    <MainWrapper>
      <ImageSlide />
      <BestMenu />
    </MainWrapper>
  );
}