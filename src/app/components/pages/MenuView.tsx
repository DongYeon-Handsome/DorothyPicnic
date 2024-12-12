"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MenuTypeContainer = styled.div`
  display: inline-block;
  width: 80%;
  height: auto;
  border: 1.5px solid #e6e6e6;
  border-radius: 10px;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const MenuTypeTitle = styled.div`
  font-size: 1.5rem;
  margin-left: 3rem;
  margin-right: 3rem;
  padding-bottom: 1rem;
  color: #000000;
  border: none;
  border-bottom: 1.5px solid #e6e6e6;
`;

const MenuTypeNav = styled.nav`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 15px;
  margin-top: 1rem;
  margin-left: 3rem;
`;

const MenuType = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 90px;
  padding: 10px 0;
  background-color: ${({ isActive }) => (isActive ? "#F5A9E1": "transparent")};
  text-align: center;
  white-space: nowrap;
  border: 1.5px solid #e6e6e6;
  border-radius: 30px;
  color: ${({ isActive }) => (isActive ? "#FFFFFF": "#000000")};
  font-size: 1rem;
  &:hover{
    background-color: #F5A9E1;
    color: #FFFFFF;
    cursor: pointer;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const CardView = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  width: 100%;
  height: auto;
`;

const CoffeeMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/CoffeeMenu'));
const NonCoffeeMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/NonCoffeeMenu'));
const TeaMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/TeaMenu'));
const AdeMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/AdeMenu'));
const SmootheMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/SmootheMenu'));
const FinancierMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/FinancierMenu'));
const DessertMenu = dynamic(() => import('../organisms/Menu/MenuLayouts/DessertMenu'));

const menuList = [
  { id: "coffee", name: "커피", component: <CoffeeMenu /> },
  { id: "noncoffee", name: "논커피", component: <NonCoffeeMenu /> },
  { id: "tea", name: "티", component: <TeaMenu /> },
  { id: "ade", name: "에이드", component: <AdeMenu /> },
  { id: "smoothe", name: "스무디", component: <SmootheMenu /> },
  { id: "financier", name: "휘낭시에", component: <FinancierMenu /> },
  { id: "dessert", name: "디저트", component: <DessertMenu /> },
];

const MenuView: React.FC = () => {
  const [view, setView] = useState('coffee');

  return(
    <Container>
      <MenuTypeContainer>
        <MenuTypeTitle>메뉴 분류</MenuTypeTitle>
        <MenuTypeNav>
          {menuList.map((menu) => (
            <MenuType 
              key={menu.id}
              isActive={view === menu.id}
              onClick={() => setView(menu.id)}
            >
              {menu.name}
            </MenuType>
          ))}
        </MenuTypeNav>
      </MenuTypeContainer>

      <MainContent>
       {menuList.map((menu) => (
        <CardView
          key={menu.id}
          isActive={view === menu.id}
        >
          {menu.component}
        </CardView>
       ))}
      </MainContent>
    </Container>
  );
};

export default MenuView;