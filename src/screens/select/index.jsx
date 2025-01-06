import { Button, ButtonsDiv, ContainerMain, Options, TextsDiv } from "./styles";

export function Select() {
  return (
    <ContainerMain>
      <Options>
        <TextsDiv>
          <h1>Select a language</h1>
        </TextsDiv>
        <ButtonsDiv>
          <Button>
            <img src="https://flagsapi.com/BR/flat/64.png" />
            Português
          </Button>
          <Button> English </Button>
        </ButtonsDiv>
      </Options>
    </ContainerMain>
  );
}
