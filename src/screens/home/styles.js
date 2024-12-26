import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 0 5% 0;
  gap: 5rem;
`;

export const LineOne = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const LineTwo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LineThree = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LineFour = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
