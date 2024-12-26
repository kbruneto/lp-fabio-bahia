import { FabioImg1 } from "../../assets/Fabio";
import {
  Banner,
  ContactUs,
  ContactUsDesc,
  ContainerMain,
  ContentProfile,
  Description,
} from "./styles";

export function Profile() {
  return (
    <ContainerMain>
      <Banner>
        {/* <FabioImg src="/src/assets/Fabio.img" alt="Fabio Image" /> */}
        <FabioImg1></FabioImg1>
      </Banner>

      <ContentProfile>
        <h1>Ajude o Fabio!</h1>
        <Description>
          Com qualquer valor você estará apoiando o tratamento de saúde do
          Fabio. Quem puder nos ajudar, agradecemos muito!
        </Description>

        <ContactUsDesc>Entre em contato conosco:</ContactUsDesc>
        <ContactUs>
          <img src="/src/assets/MessageIcon.svg" alt="Icon Message" />
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
