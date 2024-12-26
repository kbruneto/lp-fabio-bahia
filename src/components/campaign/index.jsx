import { ContainerMain, TextCampanha } from "./styles";

export function Campaign() {
  return (
    <ContainerMain>
      <h1>Campanha</h1>

      <TextCampanha>
        <p>
          Fabio Bahia é um pai dedicado, esposo amoroso e amigo que sempre
          esteve presente para todos ao seu redor. Agora, ele enfrenta uma luta
          desafiadora contra uma grave e rara condição de saúde:
        </p>

        <p>
          Trombose venosa porta e mesentérica crônica, além de outras
          complicações sérias que comprometem sua qualidade de vida.
        </p>

        <p>
          Recentemente, Fabio passou por uma cirurgia que, infelizmente, não
          trouxe o resultado esperado. Apesar disso, ele continua enfrentando
          cada dia com uma força impressionante, sempre amparado pelo amor da
          sua família.
        </p>
      </TextCampanha>

      <a
        href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7271835773950197760?compact=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saiba mais..
      </a>
    </ContainerMain>
  );
}
