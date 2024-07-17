"use client";
import styled from "styled-components";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const MenuCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 20rem;
  background: #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0,1);
  margin: 1rem;
`;

const Image = styled.img`
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

const MenuCard: React.FC<MenuCardProps> = ({ title, description, price, imageUrl }) => {
  return(
    <MenuCardBox>
      <Image src={imageUrl} alt={title}/>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </MenuCardBox>
  )
}

export default MenuCard;