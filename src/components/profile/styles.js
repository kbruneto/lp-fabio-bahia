import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMain = styled.div`
  max-width: 31.25rem;
  min-height: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 50px 50px;

  background-image: url(/src/assets/backgroundprofileimg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${theme.breakpoints.sm}) {
    transform: scale(0.8);
  }
`;

export const Banner = styled.div`
  background-color: ${theme.colors.orange};
  width: 100%;
  height: 9.375rem;
  border-radius: 50px 50px 0px 0px;
  display: flex;
  justify-content: center;
`;

export const FabioImg = styled.div`
  svg {
    border: 4px solid #000000;
    border-radius: 100%;
    display: flex;
    max-height: 15.625rem;
    max-width: 15.625rem;
    margin-top: 1.5625rem;
  }
`;

export const ContentProfile = styled.div`
  margin-top: 6.25rem;
  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    margin-bottom: 3.125rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: ${theme.breakpoints.mini}) {
    h1 {
      font-size: 35px;
    }
  }
`;

export const ContactUsDesc = styled.p`
  display: flex;
  margin-bottom: 0.625rem;
  font-size: 22px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 18px;
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;

  a {
    font-size: 20px;
    font-weight: 300;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    color: inherit;
  }

  svg {
    height: 1.875rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    a {
      font-size: 16px;
    }
    svg {
      height: 24px;
    }
  }
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 24px;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 20px;
  }
`;
