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
  width: 18rem;
  height: 20rem;
  background: #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0,1);
  margin: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const StyledImage = styled(NextImage)`
  width: 100%;
  height: 13rem;
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

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, imageSrc, onClick, buttonText, buttonClick, buttonHref }) => {
  return(
    <CardContainer onClick={onClick}>
      <StyledImage src={imageSrc} alt={title}/>
      <Title>{title}</Title>
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