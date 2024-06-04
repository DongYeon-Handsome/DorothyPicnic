"use client";

import styled from "styled-components";
import MenuCard from "@/components/mocules/MenuCard";

const BestMenuWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin: auto;
  margin-bottom: 5rem;
  width: 80%;
  height: 50%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000000;
  text-align: center;
`

const BestMenu: React.FC = () => {
  return(
    <>
      <Title>Best Menu</Title>
      <BestMenuWrapper>
        <MenuCard 
          title="Sample 1"
          description="description sample 1"
          price="16,000won"
          imageUrl="../../../../public/Image/Sample1.jpg" 
        />
        <MenuCard 
          title="Sample 2"
          description="description sample 2"
          price="15,000won"
          imageUrl="../../../../public/Image/Sample2.jpg"
        />
        <MenuCard 
          title="Sample 3"
          description="description sample 3"
          price="14,000won"
          imageUrl="../../../../public/Image/Sample3.jpg"
        />
    </BestMenuWrapper>
    </>
  )
}

export default BestMenu;