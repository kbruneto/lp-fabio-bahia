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

export function ProfileUS() {
  return (
    <ContainerMain>
      <Banner>
        {/* <FabioImg src="/src/assets/Fabio.img" alt="Fabio Image" /> */}
        <FabioImg>
          <FabioImg1></FabioImg1>
        </FabioImg>
      </Banner>

      <ContentProfile>
        <h1>Together for Fabio!</h1>
        <h2>Support this health journey!</h2>
        <Description>
          Every contribution makes a difference in Fabio`s health battle. Your
          help transforms lives and brings hope.
        </Description>
        <Description>Thank you so much for your support!</Description>

        <ContactUsDesc>Contact us:</ContactUsDesc>
        <ContactUs>
          <MessageIconImg alt="Message Icon" />
          <a
            href="https://wa.link/07ny0f"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to go to Whatsapp!
          </a>
        </ContactUs>
      </ContentProfile>
    </ContainerMain>
  );
}
