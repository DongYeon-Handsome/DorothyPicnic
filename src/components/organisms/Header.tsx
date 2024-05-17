"use client";
import styled from 'styled-components';

const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  padding: 0 4rem;
  background-color: #FFFFFF;
  z-index: 9999;
`;

const VerticalLine = styled.li`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
`

const Title = styled.div`
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  vertical-align: middle;
  transition: 0.2s;
  cursor: pointer;
`

const HeadLink = styled.div`
  color: #000000;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  vertical-align: middle;
  transition: 0.2s;
  margin-left: 2rem;
  cursor: pointer;
  :hover{ color : #F5A9A9; }
`;

export default function Header() {
  return(
    <HeaderBox>
      <Title>Dorothy Picnic</Title>
      <VerticalLine>
        <HeadLink>Menu</HeadLink>
        <HeadLink>Picnic</HeadLink>
        <HeadLink>Package</HeadLink>
      </VerticalLine>
    </HeaderBox>
  )
}