import {
  ButtonInter,
  ButtonVaq,
  ContainerMainAcc,
  TextContent,
} from "./styles";

export function Accountability() {
  return (
    <ContainerMainAcc>
      <TextContent>
        TRANSPARÊNCIA É ESSENCIAL: <br /> ACOMPANHE A{" "}
        <span>PRESTAÇÃO DE CONTAS</span> E AS{" "}
        <span>
          ATUALIZAÇÕES <br />
        </span>
        SOBRE A CAMPANHA NO SITE DA <span>VAQUINHA ONLINE</span>
      </TextContent>
      <ButtonVaq
        href="https://www.kickante.com.br/vaquinha-online/ajude-fabio-tratamento-e-qualidade-de-vida-para-doenca-grave"
        target="_blank"
        rel="noopener noreferrer"
      >
        ACESSE A VAQUINHA ONLINE
      </ButtonVaq>
      <ButtonInter
        href="https://www.gofundme.com/f/help-fabio-improve-his-quality-of-life"
        target="_blank"
        rel="noopener noreferrer"
      >
        DOAÇÕES INTERNACIONAIS
      </ButtonInter>
    </ContainerMainAcc>
  );
}
