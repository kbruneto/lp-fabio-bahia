import styled from "styled-components";

export function ErrorPage() {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Message>Sorry, the page youre looking for doesnt exist.</Message>
      <StyledLink to="/">Go back to Home</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff4040;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
`;

const StyledLink = styled`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
