import { ContainerMain, TextCampanha } from "./styles";

export function Campaign() {
  return (
    <ContainerMain>
      <h1>Campanha</h1>

      <TextCampanha>
        <p>
          Fabio Bahia é um exemplo de força e dedicação: um pai de 4 filhos,
          esposo e amigo sempre presente para quem o cerca. Hoje, ele enfrenta
          uma desafiadora condição de saúde rara e grave e precisa da nossa
          união nessa batalha.
        </p>

        <p>
          Fabio enfrenta uma condição rara e complexa: trombose venosa porta e
          mesentérica crônica, acompanhada de complicações graves que afetam sua
          qualidade de vida.
        </p>

        <p>
          Com coragem, resiliência e determinação, Fabio encara cada dia com
          força sustentado pelo amor e apoio inabalável de sua família.
        </p>
      </TextCampanha>

      <a
        href="https://www.kickante.com.br/vaquinha-online/ajude-fabio-tratamento-e-qualidade-de-vida-para-doenca-grave"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saiba mais..
      </a>
    </ContainerMain>
  );
}
