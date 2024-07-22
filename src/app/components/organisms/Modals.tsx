import styled from "styled-components";
import ModalHeader from "../mocules/ModalHeader";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  //children: React.ReactNode;
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

const Modals: React.FC<ModalProps> = ({ isOpen, title, description, onClose }) => {
  if (!isOpen) return null;
  
  return(
    <BackGround>
      <ModalContent>
        <ModalHeader title={title} onClose={onClose} />
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalContent>
    </BackGround>
  );
};

export default Modals;