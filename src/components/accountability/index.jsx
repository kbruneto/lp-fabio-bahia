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
        ENCONTRE A PRESTAÇÃO DE CONTAS NO SITE DA <br /> <span>VAQUINHA</span>{" "}
        NA ABA DE <span>ATUALIZAÇÕES</span>
      </TextContent>
      <ButtonVaq
        href="https://www.kickante.com.br/vaquinha-online/ajude-fabio-tratamento-e-qualidade-de-vida-para-doenca-grave"
        target="_blank"
        rel="noopener noreferrer"
      >
        CLIQUE PARA ACESSAR A VAQUINHA ONLINE
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
