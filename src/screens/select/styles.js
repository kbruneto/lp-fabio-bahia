import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMain = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Options = styled.div`
  min-height: 250px;
  min-width: 350px;
  background-color: ${theme.colors.whiteBG};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 60px;
  border: solid 2px ${theme.colors.orange};
`;

export const Button = styled.a`
  border: 2px solid ${theme.colors.orange};
  width: 250px;
  height: 45px;
  background-color: ${theme.colors.orange};
  border-radius: 10px;
  color: ${theme.colors.whiteBG};
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  transform: scale(1);

  &:hover {
    background-color: ${theme.colors.orange};
    color: ${theme.colors.whiteBG};
    transform: scale(1.05);
  }
`;

export const FlagImageDiv = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    height: 32px;
  }
`;

export const ButtonTextDiv = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h1 {
    color: ${theme.colors.orange};
    font-size: 26px;
    text-align: center;
  }
`;
