"use client";
import React from 'react';
import styled, { css } from "styled-components";

type LogoProps = {
  children: React.ReactNode;
  color: string;
}

const StyledLogo = styled.h1<LogoProps>`
  ${(props) => {
    const COLOR = props.color;
    return css`
      font-size: 1.5rem;
      color: ${COLOR};
      cursor: pointer;
      margin-left: 4rem;
    `;
  }};
`;

export default function Logo({ children, ...rest }: LogoProps) {
  return(
    <StyledLogo {...rest}>
      {children}
    </StyledLogo>
  )
}