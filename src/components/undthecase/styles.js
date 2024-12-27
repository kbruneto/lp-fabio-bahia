import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMainUnd = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${theme.colors.orange};
    font-size: 50px;
  }

  a {
    border: 2px solid ${theme.colors.orange};
    width: 400px;
    height: 45px;
    background-color: transparent;
    border-radius: 12px;
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
    h1 {
      color: ${theme.colors.orange};
      font-size: 40px;
    }

    a {
      width: 300px;
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
      width: 280px;
      height: 30px;
      font-size: 16px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  gap: 70px;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 0;
  max-width: 600px;
  min-height: 600px;

  p {
    font-weight: 500;
    color: ${theme.colors.black};
    font-size: 22px;
    text-align: justify;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 500px;

    p {
      font-size: 20px;
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: 400px;
    padding: 40px;
    p {
      font-size: 18px;
    }
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    min-height: 300px;
    p {
      font-size: 16px;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 500px;
  display: flex;
  margin: auto 0;

  svg {
    width: 500px;
    height: 500px;
    border-radius: 80px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    svg {
      transform: scale(0.9);
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    svg {
      transform: scale(0.8);
    }
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    svg {
      transform: scale(0.65);
    }
  }
`;
