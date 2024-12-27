import { CopyIconImg } from "../../assets/CopyIcon";
import { PixKeyCodeImg } from "../../assets/PixKeyCode";
import {
  ContainerMainPix,
  ContainerTextCode,
  ImageCode,
  TitleDonate,
} from "./styles";

export function PixCode() {
  const handleCopyEmail = () => {
    const email = "fabiobahia1980@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => alert("Chave Pix copiada para a área de transferência!"))
      .catch(() => alert("Erro ao copiar a chave Pix."));
  };

  return (
    <>
      <ContainerMainPix>
        <TitleDonate>Faça uma doação direta via Pix:</TitleDonate>
        <ImageCode src="/src/assets/PixKeyCode.svg" alt="QR Code para Pix">
          <PixKeyCodeImg></PixKeyCodeImg>
        </ImageCode>
        <ContainerTextCode>
          <CopyIconImg
            src="/src/assets/CopyIcon.svg"
            alt="Ícone de copiar"
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
