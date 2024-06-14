"use client";

import styled from "styled-components";
import MenuCard from "../mocules/MenuCard";

const MenuViewWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin: auto;
  margin-bottom: 5rem;
  width: 80%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #000000;
`;

const MenuView: React.FC = () => {
  return(
    <>
      <Title>Test</Title>
      <MenuViewWrapper>
        <MenuCard
          title="Sample 1"
          description="description sample 1"
          price="16,000won"
          imageUrl="../../../../public/Image/Sample1.jpg"
        />
        <MenuCard
          title="Sample 2"
          description="description sample 2"
          price="16,000won"
          imageUrl="../../../../public/Image/Sample2.jpg"
        />
        <MenuCard
          title="Sample 3"
          description="description sample 3"
          price="16,000won"
          imageUrl="../../../../public/Image/Sample3.jpg"
        />
      </MenuViewWrapper>
    </>
  )
}

export default MenuView;