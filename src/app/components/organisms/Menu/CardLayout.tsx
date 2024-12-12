import styled from "styled-components";

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  box-sizing: border-box;
`;

export default CardLayout;