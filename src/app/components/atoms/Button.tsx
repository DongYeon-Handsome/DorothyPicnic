"use client";

import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  width: number;
  height?: number;
  fontSize?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
};

const StyledBtn = styled.button<ButtonProps>`
  ${(props) => {
    const WIDTH = props.width;
    const HEIGHT = props.height;
    const FONT_SIZE = props.fontSize;
    return css`
      display: inline-block;
      outline: none;
      border: none;
      border-radius: 20px;
      color: white;
      text-align: center;
      margin: auto;
      cursor: pointer;
      width: ${WIDTH}px;
      height: ${HEIGHT}px;
      font-size: ${FONT_SIZE}px;
      background-color: #F5A9E1;
      $:hover{
        color: ${lighten(0.5, 'white')};
      }
      $:active{
        color: ${darken(0.5, 'white')};
      }
    `;
  }}
`;

const Button: React.FC<ButtonProps> = ({children, onClick, href, ...rest}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if(onClick){
      onClick(e);
    }
  };

  if(href){
    return(
      <Link href={href} passHref>
        <StyledBtn as="a" {...rest} onClick={handleClick}>
          {children}
        </StyledBtn>
      </Link>
    );
  }

  return(
    <StyledBtn {...rest} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default Button;