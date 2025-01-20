import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMainPix = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 500px;
  max-width: 100%;
`;

export const TitleDonate = styled.p`
  color: ${theme.colors.orange};
  font-size: 42px;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 38px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 36px;
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    font-size: 32px;
    max-width: 90%;
  }
`;

export const ImageCode = styled.div`
  svg {
    padding: 40px;

    @media (max-width: ${theme.breakpoints.md}) {
      height: 400px;
    }

    @media (max-width: ${theme.breakpoints.mini}) {
      height: 300px;
    }
  }
`;

export const ContainerTextCode = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    color: ${theme.colors.orange};
    font-size: 30px;
    font-weight: 500;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  svg {
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  &:hover {
    p {
      transform: scale(1.05);
      color: rgba(248, 168, 45, 0.8);
    }

    svg {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    p {
      font-size: 26px;
    }
    svg {
      transform: scale(0.9);
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 10px;
    p {
      font-size: 22px;
    }
    svg {
      transform: scale(0.8);
    }
    &:hover {
      svg {
        transform: scale(0.9);
      }
    }
  }
  @media (max-width: ${theme.breakpoints.mini}) {
    p {
      font-size: 18px;
    }
    svg {
      transform: scale(0.7);
    }
  }
`;
