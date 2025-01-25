import {
  ButtonInter,
  ButtonVaq,
  ContainerMainAcc,
  TextContent,
} from "./styles";

export function AccountabilityUS() {
  return (
    <ContainerMainAcc>
      <TextContent>
        TRANSPARENCY IS ESSENTIAL: <br /> TRACK THE <span>ACCOUNTABILITY</span>{" "}
        AND THE{" "}
        <span>
          UPDATES <br />
        </span>
        ABOUT THE CAMPAIGN ON THE <span>VAQUINHA ONLINE</span> WEBSITE
      </TextContent>
      <ButtonVaq
        href="https://www.gofundme.com/f/help-fabio-improve-his-quality-of-life"
        target="_blank"
        rel="noopener noreferrer"
      >
        ACCESS TO GOFOUNDME
      </ButtonVaq>
      <ButtonInter
        href="https://www.kickante.com.br/vaquinha-online/ajude-fabio-tratamento-e-qualidade-de-vida-para-doenca-grave"
        target="_blank"
        rel="noopener noreferrer"
      >
        BRAZIL DONATIONS
      </ButtonInter>
    </ContainerMainAcc>
  );
}
