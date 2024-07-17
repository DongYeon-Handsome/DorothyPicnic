'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import ImageSlide from '@/app/components/templates/home/ImageSlide';
import BestMenu from '@/app/components/templates/home/BestMenu';

const MainWrapper = styled.div`
  position: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main: React.FC = () => {
  return(
    <MainWrapper>
      <ImageSlide />
      <BestMenu />
    </MainWrapper>
  );
};

export default Main;