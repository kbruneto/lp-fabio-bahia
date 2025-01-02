import { FabioImg1 } from "../../assets/Fabio";
import { MessageIconImg } from "../../assets/MessageIcon";
import {
  Banner,
  ContactUs,
  ContactUsDesc,
  ContainerMain,
  ContentProfile,
  Description,
  FabioImg,
} from "./styles";

export function Profile() {
  return (
    <ContainerMain>
      <Banner>
        {/* <FabioImg src="/src/assets/Fabio.img" alt="Fabio Image" /> */}
        <FabioImg>
          <FabioImg1></FabioImg1>
        </FabioImg>
      </Banner>

      <ContentProfile>
        <h1>Juntos pelo Fabio!</h1>
        <h2>Apoie essa jornada pela Saúde!</h2>
        <Description>
          Cada contribuição faz a diferença na batalha pela saúde do Fabio. Sua
          ajuda transforma vidas e traz esperança.
        </Description>
        <Description>Muito obrigado pelo apoio!</Description>

        <ContactUsDesc>Entre em contato conosco:</ContactUsDesc>
        <ContactUs>
          <MessageIconImg alt="Icon Message" />
          <a
            href="https://wa.link/07ny0f"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique para o Whatsapp!
          </a>
        </ContactUs>
      </ContentProfile>
    </ContainerMain>
  );
}
