import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMainAcc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #ffefb4;
  border: solid 1px #000;
  padding: 8px;

  min-height: 380px;
  width: 80%;
  border-radius: 60px;
`;

export const TextContent = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #060606;
  line-height: 1.4;

  span {
    color: ${theme.colors.orange};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 20px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 18px;
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    font-size: 16px;
  }
`;

export const ButtonVaq = styled.a`
  border: 1px solid ${theme.colors.black};
  width: 650px;
  height: 50px;
  background-color: ${theme.colors.orange};
  border-radius: 10px;
  color: ${theme.colors.whiteBG};
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  transform: scale(1);

  &:hover {
    background-color: rgba(248, 168, 45, 0.8);
    color: ${theme.colors.whiteBG};
    border: 1px solid ${theme.colors.black};
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 450px;
    font-size: 18px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 350px;
    font-size: 16px;
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    width: 250px;
  }
`;

export const ButtonInter = styled.a`
  border: 1.3px solid ${theme.colors.black};
  width: 600px;
  height: 45px;
  background-color: #ffcb7c;
  border-radius: 10px;
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out,
    color 0.3s ease-in-out;

  transform: scale(1);

  &:hover {
    border: 1px solid ${theme.colors.black};
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 400px;
    font-size: 18px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 300px;
    font-size: 16px;
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    width: 230px;
    font-size: 14px;
  }
`;
