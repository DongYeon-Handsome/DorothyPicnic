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
  border-bottom: 1px solid #ddd;
`;

const Title = styled.div`
  margin: 0;
`;

const CloseButton = styled.div`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return(
    <Header>
      <Title>{title}</Title>
      <CloseButton onClick={onClose}></CloseButton>
    </Header>
  );
};

export default ModalHeader;