"use client";

import styled from "styled-components";
import ImageSlider from "../templates/home/ImageSlide";
import MenuCard from "../mocules/MenuCard";
import Modals from "../organisms/Modals";
import { StaticImageData } from "next/image";
import { useState } from "react";
import PicnicCards from "../templates/Cards/PicnicCards";

import Sample1 from '../../../../public/Image/Sample1.jpg';
import Sample2 from '../../../../public/Image/Sample2.jpg';
import Sample3 from '../../../../public/Image/Sample3.jpg';

const PicnicWrapper = styled.div`
  position: flex;
  flex-direction: column;
  justify-content: center;
`;

const ComponentsWrapper = styled.div`
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

const PicnicView: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<{ 
    title: string; 
    description: string; 
    price?: string; 
    imageSrc: StaticImageData; 
    modalButtonText?: string;
    modalButtonClick?: () => void; 
    modalButtonHref?: string; 
  } | null>(null);

  const [showButton, setShowButton] = useState(false);

  const handleCardClick = (card: { 
    title: string; 
    description: string; 
    price?: string; 
    imageSrc: StaticImageData; 
    modalButtonText?: string;                       
    modalButtonClick?: () => void; 
    modalButtonHref?: string; 
  }) => {
    setSelectedCard(card);
    setShowButton(true);
  };
  const handleCloseModal = () => {
    setSelectedCard(null);
    setShowButton(false);
  };
  const images = [
    { src: Sample1, alt: 'Image 1' },
    { src: Sample2, alt: 'Image 2' },
    { src: Sample3, alt: 'Image 3' },
  ];
  return(
    <PicnicWrapper>
      <ImageSlider images={images}/>
      <Title>Components</Title>
      <ComponentsWrapper>
        {PicnicCards.map((card) => (
          <MenuCard 
            key={card.id}
            title={card.title}
            description={card.description}
            price={card.price || '0.00won'}
            imageSrc={card.imageSrc}
            onClick={() => handleCardClick(card)}
          />
        ))}
        {selectedCard && (
          <Modals 
            isOpen={!!selectedCard}
            title={selectedCard.title}
            description={selectedCard.description}
            price={selectedCard.price || '0.00won'}
            imageSrc={selectedCard.imageSrc}
            onClose={handleCloseModal}
            showButton={showButton}
            buttonText={selectedCard.modalButtonText}
            buttonClick={selectedCard.modalButtonClick}
            buttonHref={selectedCard.modalButtonHref}
          />
        )}
      </ComponentsWrapper>
    </PicnicWrapper>
  );
};

export default PicnicView;