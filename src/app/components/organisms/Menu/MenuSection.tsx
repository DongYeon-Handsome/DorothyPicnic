"use client";

import React, { useState } from "react";
import { MenuCardData } from "./MenuData";
import CardLayout from "./CardLayout";
import MenuCard from "../../mocules/MenuCard";
import Modals from "../Modals";

interface MenuSelectionProps {
  menuData: MenuCardData[];
}

const MenuSection: React.FC<MenuSelectionProps> = ({ menuData }) => {
  const [selectedCard, setSelectedCard] = useState<MenuCardData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (card: MenuCardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return(
    <CardLayout>
      {menuData.map((card, index) => (
        <MenuCard 
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          imageSrc={card.imageSrc}
          onClick={() => handleCardClick(card)}
        />
      ))}

      {selectedCard && (
        <Modals 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCard.title}
          description={selectedCard.description}
          price={selectedCard.price}
          imageSrc={selectedCard.imageSrc}
          showButton
          buttonText="Order Now"
          buttonClick={() => alert(`Ordering ${selectedCard.title}`)}
        />
      )}
    </CardLayout>
  );
};

export default MenuSection;
