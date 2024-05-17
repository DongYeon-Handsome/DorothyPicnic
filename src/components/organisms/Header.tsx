"use client";
import styled from 'styled-components';

const HeaderBox = styled.header`
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #000000;
  cursor: pointer;
  margin-left: 4rem;
`;

const Nav = styled.nav`
  ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin-right: 4rem;
    li{
      margin: 0 20px;
      a{
        color: #000000;
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        &:hover{
          color: #F5A9E1;
        }
      }
    }
  }
`;

export default function Header() {
  return(
    <HeaderBox>
      <Logo>Dorothy Picnic</Logo>
      <Nav>
        <ul>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Picnic</a></li>
        </ul>
      </Nav>
    </HeaderBox>
  )
}