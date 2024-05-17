"use client";
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const HeaderBox = styled.header`
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 5px -5px gray;
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
      <Logo color='#000000'>Dorothy Picnic</Logo>
      <Nav>
        <ul>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Picnic</a></li>
        </ul>
      </Nav>
    </HeaderBox>
  )
}