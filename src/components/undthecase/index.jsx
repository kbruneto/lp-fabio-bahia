import { FabioFamilyImg } from "../../assets/FabioFamily";
import {
  ContainerMainUnd,
  ContentContainer,
  ImageContainer,
  TextContainer,
} from "./styles";

export function UndTheCase() {
  return (
    <ContainerMainUnd>
      <h1>Entenda o Caso</h1>
      <ContentContainer>
        <TextContainer>
          <p>
            Fabio enfrenta uma condição de saúde rara e grave: trombose venosa
            porta e mesentérica crônica, que compromete a circulação sanguínea
            em veias abdominais vitais. Entre os desafios, ele lida com:
          </p>
          <p>
            • Risco elevado de hemorragias graves; <br />
            <br /> • Aumento do baço e complicações hepáticas; <br />
            <br /> • Dependência de alimentação parenteral devido à desnutrição.
          </p>
          <p>
            Essa jornada exige acompanhamento médico constante, tratamentos
            especializados e muita resiliência. Com o apoio da sua família,
            Fabio segue lutando com força e esperança.
          </p>
        </TextContainer>
        <ImageContainer>
          <FabioFamilyImg></FabioFamilyImg>
        </ImageContainer>
      </ContentContainer>
      <a
        href="https://drive.google.com/file/d/1DntfjKbDvWEwlnVp6-VGrwy9HHhQoooq/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clique aqui para acessar o Laudo
      </a>
    </ContainerMainUnd>
  );
}
