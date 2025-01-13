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
import { StaticImageData } from "next/image";
import OrderCards from "../templates/Cards/OrderCards";

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
  const [selectedCard, setSelectedCard] = useState<{ title: string; description: string; price: string; imageSrc: StaticImageData } | null>(null);

  const handleCardClick = (card: { title: string; description: string; price: string; imageSrc: StaticImageData }) => {
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
        {OrderCards.map((card) => (
          <MenuCard 
            key={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            imageSrc={card.imageSrc}
            onClick={() => handleCardClick(card)}
            //buttonText={card.modalButtonText || "Default Text"}        
          />
        ))}
        {selectedCard && (
          <Modals
            isOpen={!!selectedCard}
            title={selectedCard.title}
            description={selectedCard.description}
            price={selectedCard.price}
            imageSrc={selectedCard.imageSrc}
            onClose={handleCloseModal}
            showButton={true}          
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