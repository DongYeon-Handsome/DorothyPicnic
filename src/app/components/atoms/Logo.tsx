"use client";
import React from 'react';
import styled from "styled-components";
import Link from 'next/link';

interface LogoProps {
  color: string;
  children: React.ReactNode;
}

const LogoContainer = styled.div<{ color: string }>`
  font-size: 1.5rem;
  font-weight: 1000;
  margin-left: 4rem;
  color: ${(props) => props.color};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Logo: React.FC<LogoProps> = ({ color, children }) => {
  return(
    <LogoContainer color={color}>
      <StyledLink href="/">{children}</StyledLink>
    </LogoContainer>
  );
};

export default Logo;