"use client";
import styled from "styled-components";
import NextImage, { StaticImageData } from "next/image";
import Button from "../atoms/Button";

interface MenuCardProps {
  title: string;
  description: string;
  price?: string;
  imageSrc: StaticImageData;
  onClick: () => void;
  buttonText?: string;
  buttonClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  buttonHref?: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: auto;
  background: transparent;
  border: none;
  margin: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const StyledImage = styled(NextImage)`
  width: 100%;
  height: 15rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const Description = styled.p`
  margin: 8px 0;
  color: #555;
`

const Price = styled.p`
  margin: 8px 0;
  font-weight: bold;
`;

const MenuHr = styled.hr`
  width: 100%;
  color: #e6e6e6;
`;

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, imageSrc, onClick, buttonText, buttonClick, buttonHref }) => {
  return(
    <CardContainer onClick={onClick}>
      <StyledImage src={imageSrc} alt={title}/>
      <Title>{title}</Title>
      <MenuHr />
      <Description>{description}</Description>
      {price && <Price>{price}</Price>}
      {buttonText && (
        <Button width={120} height={40} fontSize={14} onClick={buttonClick} href={buttonHref}>
          {buttonText}
        </Button>
      )}
    </CardContainer>
  );
}

export default MenuCard;