import styled from "styled-components";

interface ModalHeaderProps {
  title: String;
  onClose: () => void;
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  //border-bottom: 1px solid #ddd;
`;

const CloseButton = styled.div`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return(
    <Header>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Header>
  );
};

export default ModalHeader;