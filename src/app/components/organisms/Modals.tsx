import styled from "styled-components";
import ModalHeader from "../mocules/ModalHeader";
import Image, { StaticImageData } from "next/image";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  price: string;
  imageSrc: StaticImageData;
  onClose: () => void;
}

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalBody = styled.div`
  margin: 20px 0;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Modals: React.FC<ModalProps> = ({ isOpen, title, description, imageSrc, onClose }) => {
  if (!isOpen) return null;
  
  return(
    <BackGround>
      <ModalContent>
        <ModalHeader title={title} onClose={onClose} />
        <Image src={imageSrc} alt={title} layout="responsive" width={500} height={300} />
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalContent>
    </BackGround>
  );
};

export default Modals;