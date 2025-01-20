import {
  Button,
  ButtonsDiv,
  ButtonTextDiv,
  ContainerMain,
  FlagImageDiv,
  Options,
  TextsDiv,
} from "./styles";

import { Link } from "react-router-dom";

export function Select() {
  return (
    <ContainerMain>
      <Options>
        <TextsDiv>
          <h1>Select a language</h1>
        </TextsDiv>
        <ButtonsDiv>
          <Link to="/">
            <Button>
              <FlagImageDiv>
                <img src="https://flagsapi.com/BR/flat/64.png" />
              </FlagImageDiv>
              <ButtonTextDiv> Português</ButtonTextDiv>
            </Button>
          </Link>

          <Button>
            <FlagImageDiv>
              <img src="https://flagsapi.com/US/flat/64.png" />
            </FlagImageDiv>
            <ButtonTextDiv>English</ButtonTextDiv>
          </Button>
        </ButtonsDiv>
      </Options>
    </ContainerMain>
  );
}
