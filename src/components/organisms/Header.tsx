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

export default function Header() {
  return(
    <HeaderBox>

    </HeaderBox>
  )
}