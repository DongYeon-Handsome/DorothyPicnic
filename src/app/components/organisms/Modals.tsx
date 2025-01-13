import styled from "styled-components";
import ModalHeader from "../mocules/ModalHeader";
import Image, { StaticImageData } from "next/image";
import Button from "../atoms/Button";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  price: string;
  imageSrc: StaticImageData;
  onClose: () => void;
  showButton?: boolean;
  buttonText?: string;
  buttonClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  buttonHref?: string
  children?: React.ReactNode;
}

const BackGround = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    /* 태블릿 이하 화면 */
    width: 95%;
    padding: 1.5rem;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    /* 모바일 화면 */
    width: 100%;
    padding: 1rem;
    max-width: 100%;
    border-radius: 0;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

const MenuDescription = styled.div`
  position: flex;
  width: 100%;
  height: auto;
  margin-left: 5rem;
  margin-right: auto;
  font-size: 1.2rem;
`;

const MenuTitle = styled.div`
  font-size: 2rem;
  color: #000000;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1.5px solid #e6e6e6;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 30px;
  background: transparent;
  border: none;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Modals: React.FC<ModalProps> = ({ isOpen, title, description, imageSrc, onClose, showButton, buttonText, buttonClick, buttonHref, children }) => {
  if (!isOpen) return null;
  
  return(
    <BackGround isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {!children && (
          <ModalBody>
            <Image src={imageSrc} alt={title} layout="responsive" width={10} height={10} />
            <MenuDescription>
              <MenuTitle>{title}</MenuTitle>
              {description}
              {showButton && (
                <Button
                  width={120}
                  height={40}
                  fontSize={14}
                  onClick={buttonClick}
                  href={buttonHref}
                >
                  {buttonText}
              </Button>)}
            </MenuDescription>
            <CloseButton onClick={onClose}>X</CloseButton>
          </ModalBody>
        )}
        {children && <ModalBody>{children}</ModalBody>}
        {/*<CloseButton onClick={onClose}>X</CloseButton>*/}
      </ModalContent>
    </BackGround>
  );
};

export default Modals;