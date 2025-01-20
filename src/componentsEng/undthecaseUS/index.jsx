import { FabioFamilyImg } from "../../assets/FabioFamily";
import {
  ContainerMainUnd,
  ContentContainer,
  ImageContainer,
  TextContainer,
} from "./styles";

export function UndTheCaseUS() {
  return (
    <ContainerMainUnd>
      <h1>Understand the Case</h1>
      <ContentContainer>
        <TextContainer>
          <p>
            Fabio faces a rare and severe health condition: chronic portal and
            mesenteric venous thrombosis, which affects blood circulation in
            vital abdominal veins. Among the challenges, he deals with:
          </p>{" "}
          <br />
          <p>
            • High risk of severe bleeding; <br />
            <br /> • Enlarged spleen and liver complications; <br />
            <br /> • Dependence on parenteral nutrition due to malnutrition.
          </p>
          <p>
            <br />
            This journey requires constant medical monitoring, specialized
            treatments, and a lot of resilience. With the support of his family,
            Fabio continues to fight with strength and hope.
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
        Click here to access the Medical Report
      </a>
    </ContainerMainUnd>
  );
}
