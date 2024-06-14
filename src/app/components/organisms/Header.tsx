"use client";

import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Link from 'next/link';

const HeaderBox = styled.header`
  background-color: #ffffff;
  color: #000000;
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 5px -5px gray;
`;

const Nav = styled.nav`
  display: flex;
  list-style: none;
  padding: 0;
  margin-right: 4rem;
`;

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  &:hover{
    color: #F5A9E1;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return(
    <HeaderBox>
      <Logo color='#000000'>DorothyPicnic</Logo>
      <Nav>
        <StyledLink href='/menu'>Menu</StyledLink>
      </Nav>
    </HeaderBox>
  );
};

export default Header;