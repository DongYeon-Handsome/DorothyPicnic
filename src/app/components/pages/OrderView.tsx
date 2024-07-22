"use client";

import styled from "styled-components";
import ImageSlider from "../templates/home/ImageSlide";
import MenuCard from "../mocules/MenuCard";
import Button from "../atoms/Button";
import { useIsClient } from "@/app/hook/hook";
import Sample1 from '../../../../public/Image/Sample1.jpg';
import Sample2 from '../../../../public/Image/Sample2.jpg';
import Sample3 from '../../../../public/Image/Sample3.jpg';
import { useState } from "react";
import Modals from "../organisms/Modals";

const cards = [
  { id: 1, title: 'Sample 1', description: 'description 1', price: '16,000won' },
  { id: 2, title: 'Sample 2', description: 'description 2', price: '18,000won' },
];

const OrderWrapper = styled.div`
  position: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin: auto;
  margin-bottom: 5rem;
  width: 65%;
  height: 50%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000000;
  text-align: center;
`;

const OrderView: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<{ title: string; description: string; } | null>(null);

  const handleCardClick = (card: { title: string; description: string }) => {
    setSelectedCard(card);
  };
  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const isClient = useIsClient();
  const images = [
    { src: Sample1, alt: 'Image 1' },
    { src: Sample2, alt: 'Image 2' },
    { src: Sample3, alt: 'Image 3' },
  ];
  return(
    <OrderWrapper>
      <ImageSlider images={images}/>
      <Title>Menu</Title>
      <MenuWrapper>
        {cards.map((card) => (
          <MenuCard 
            key={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            imageUrl={""}
            onClick={() => handleCardClick(card)}        
          />
        ))}
        {selectedCard && (
          <Modals
            isOpen={!!selectedCard}
            title={selectedCard.title}
            description={selectedCard.description}
            onClose={handleCloseModal}
          />
        )}
      </MenuWrapper>
      <Title>직접 구성을 주문해보세요</Title>
      {isClient && (
        <Button 
          width={150} 
          height={80} 
          fontSize={30}
          href="http://pf.kakao.com/_PPcaG"
        >
          주문하기 카카오톡
        </Button>
      )}
    </OrderWrapper>
  )
}

export default OrderView;