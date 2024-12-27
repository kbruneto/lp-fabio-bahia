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
            Fabio enfrenta uma condição rara e grave: trombose venosa porta e
            mesentérica crônica, que bloqueia importantes veias abdominais. Isso
            causa complicações como:
          </p>
          <p>
            • Dificuldade na circulação sanguínea, com risco de hemorragias
            graves. <br />
            <br /> • Aumento do baço e problemas no fígado. <br />
            <br /> • Necessidade de alimentação parenteral devido à desnutrição
            severa.
          </p>
          <p>
            Ele precisa de cuidados médicos constantes, medicamentos e
            acompanhamento diário para lidar com essa condição complexa. Apesar
            dos desafios, Fabio segue com força e o apoio da família.
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
