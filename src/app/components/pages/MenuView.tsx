"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MenuTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  border-bottom: 2px solid;
  border-bottom-color: #E6E6E6;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  height: auto;
`;

const MenuTypeNav = styled.nav`
  display: flex;
  list-style: none;
  margin-left: auto;
  margin-right: 4rem;
`;

const MenuType = styled.button`
  width: 7rem;
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 1.5rem;
  &:hover{
    color: #F5A9E1;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #000000;
  margin-top: 3rem;
`;

const MainContent = styled.div`
  flex: 1;
  position: relative;
`;

const CardView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.5 ease;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  &.hidden {
    opacity: 0;
    z-index: 0;
  }
`;

const CoffeeMenu = dynamic(() => import('../organisms/Menu/CoffeeMenu'));
const DrinkMenu = dynamic(() => import('../organisms/Menu/DrinkMenu'));
const FinancierMenu = dynamic(() => import('../organisms/Menu/FinancierMenu'));
const DessertMenu = dynamic(() => import('../organisms/Menu/DessertMenu'));

const MenuView: React.FC = () => {
  const [view, setView] = useState('coffee');

  return(
    <Container>
      <MenuTypeWrapper>
        <MenuTypeNav>
          <MenuType onClick={() => setView('coffee')}>Coffee</MenuType>
          <MenuType onClick={() => setView('drink')}>Drink</MenuType>
          <MenuType onClick={() => setView('financier')}>Financier</MenuType>
          <MenuType onClick={() => setView('dessert')}>Dessert</MenuType>
        </MenuTypeNav>
      </MenuTypeWrapper>
      <MainContent>
        <Title>Test</Title>
        <CardView className={view == 'coffee' ? 'active' : 'hidden'}>
          <CoffeeMenu />
        </CardView>
        <CardView className={view == 'drink' ? 'active' : 'hidden'}>
          <DrinkMenu />
        </CardView>
        <CardView className={view == 'financier' ? 'active' : 'hidden'}>
          <FinancierMenu />
        </CardView>
        <CardView className={view == 'dessert' ? 'active' : 'hidden'}>
          <DessertMenu />
        </CardView>
      </MainContent>
    </Container>
  )
}

export default MenuView;