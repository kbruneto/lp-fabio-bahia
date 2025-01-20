import { CopyIconImg } from "../../assets/CopyIcon";
import { PixKeyCodeImg } from "../../assets/PixKeyCode";
import {
  ContainerMainPix,
  ContainerTextCode,
  ImageCode,
  TitleDonate,
} from "./styles";

export function PixCodeUS() {
  const handleCopyEmail = () => {
    const email = "fabiobahia1980@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => alert("Pix key copied to clipboard!"))
      .catch(() => alert("Error copying Pix key."));
  };

  return (
    <>
      <ContainerMainPix>
        <TitleDonate>Make a direct donation via Pix:</TitleDonate>
        <ImageCode src="/src/assets/PixKeyCode.svg" alt="QR Code for Pix">
          <PixKeyCodeImg></PixKeyCodeImg>
        </ImageCode>
        <ContainerTextCode>
          <CopyIconImg
            src="/src/assets/CopyIcon.svg"
            alt="Copy icon"
            onClick={handleCopyEmail}
            style={{ cursor: "pointer" }}
          />
          <p onClick={handleCopyEmail} style={{ cursor: "pointer" }}>
            fabiobahia1980@gmail.com
          </p>
        </ContainerTextCode>
      </ContainerMainPix>
    </>
  );
}
