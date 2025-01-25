import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 0 5% 0;
  gap: 5rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 0 5% 0;
  }
`;

export const LineOne = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
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

export const ButtonSelectLenguage = styled.button`
  border: 1px solid ${theme.colors.orange};
  width: 150px;
  height: 22px;
  background-color: transparent;
  border-radius: 3px;
  color: ${theme.colors.orange};
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 15px;
  top: 15px;

  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  transform: scale(1);

  &:hover {
    background-color: rgba(248, 168, 45, 0.8);
    color: ${theme.colors.whiteBG};
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.md}) {
  }
  @media (max-width: ${theme.breakpoints.sm}) {
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    right: 20px;
    top: 20px;
  }
`;
