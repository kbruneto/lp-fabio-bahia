import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMain = styled.div`
  max-width: 31.25rem;
  max-height: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${theme.colors.orange};
    font-size: 50px;
  }

  a {
    border: 2px solid ${theme.colors.orange};
    width: 250px;
    height: 45px;
    background-color: transparent;
    border-radius: 10px;
    color: ${theme.colors.orange};
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
      background-color: ${theme.colors.orange};
      color: ${theme.colors.whiteBG};
      transform: scale(1.05);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    transform: scale(0.8);

    h1 {
      color: ${theme.colors.orange};
      font-size: 40px;
    }

    a {
      width: 220px;
      height: 35px;
      font-size: 18px;
    }
  }

  @media (max-width: ${theme.breakpoints.mini}) {
    h1 {
      color: ${theme.colors.orange};
      font-size: 35px;
    }

    a {
      width: 200px;
      height: 30px;
      font-size: 16px;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const TextCampanha = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    font-weight: 500;
    color: ${theme.colors.black};
    font-size: 24px;
    text-align: justify;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    p {
      font-size: 22px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    p {
      font-size: 20px;
    }
  }

  @media (max-width: ${theme.breakpoints.mini}) {
    p {
      font-size: 16px;
    }
  }
`;
