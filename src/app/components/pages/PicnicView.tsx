"use client";

import styled from "styled-components";
import ImageSlider from "../templates/home/ImageSlide";
import MenuCard from "../mocules/MenuCard";
import Modals from "../organisms/Modals";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import PicnicCards from "../templates/Cards/PicnicCards";
import ReserveInfo from "../mocules/ReserveInfo";

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
    id: number;
    title: string; 
    description: string; 
    price?: string; 
    imageSrc: StaticImageData; 
    modalButtonText?: string;
    modalButtonClick?: () => void; 
    modalButtonHref?: string; 
  } | null>(null);

  const [showButton, setShowButton] = useState(false);
  const [showReserve, setShowReserve] = useState(false);
  const [reservationDetails, setReservationDetails] = useState<{
    name: string;
    phone: string;
    date: string;
  } | null>(null);

  const handleCardClick = (card: { 
    id: number;
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
    setShowReserve(false);
  };
  const handleCloseModal = () => {
    setSelectedCard(null);
    setShowButton(false);
    setShowReserve(false);
  };

  const handleShowReserveInfo = () => {
    setShowReserve(true);
  };

  const handleReserve = async (name: string, phone: string, date: string) => {
    console.log('Reservation details received', { name, phone, date });
    setReservationDetails({ name, phone, date });
    console.log('Updated reservationDetails:', { name, phone, date });
  }

  const handleConfirmReserve = async () => {
    console.log('reservationDetails: ', reservationDetails);
    console.log('selectedCard: ', selectedCard);

    if(reservationDetails && selectedCard) {
      console.log('Sending request to server');
      try {
        const response = await fetch('/api/reserve', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({...reservationDetails, cardId: selectedCard.id}),
        });

        const data = await response.json();
        if(data.success) {
          alert("Reservation successful");
        } else{
          alert("Reservation failed. Please try again.");
        }
      } catch (error) {
        console.error("Error reserving date: ", error);
        alert('Error reserving date. Please try again.');
      }
    } else{
      alert("Please provide all the necessary information.");
    }
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
            buttonText={showReserve ? "예약하기" : "정보 입력하기"}
            buttonClick={showReserve ? handleConfirmReserve : handleShowReserveInfo}
            buttonHref={selectedCard.modalButtonHref}
          >
            {showReserve && (
              <ReserveInfo 
                onReserve={handleReserve}
              />
            )}
          </Modals>
        )}
      </ComponentsWrapper>
    </PicnicWrapper>
  );
};

export default PicnicView;