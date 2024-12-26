import {
  ContainerMainUnd,
  ContentContainer,
  ImageContainer,
  TextContainer,
} from "./styles";

export function UndTheCase() {
  return (
    <ContainerMainUnd>
      <h1>Entenda o Caso</h1>
      <ContentContainer>
        <TextContainer>
          <p>
            Fabio enfrenta uma condição rara e grave: trombose venosa porta e
            mesentérica crônica, que bloqueia importantes veias abdominais. Isso
            causa complicações como:
          </p>
          <p>
            • Dificuldade na circulação sanguínea, com risco de hemorragias
            graves. <br />
            <br /> • Aumento do baço e problemas no fígado. <br />
            <br /> • Necessidade de alimentação parenteral devido à desnutrição
            severa.
          </p>
          <p>
            Ele precisa de cuidados médicos constantes, medicamentos e
            acompanhamento diário para lidar com essa condição complexa. Apesar
            dos desafios, Fabio segue com força e o apoio da família.
          </p>
        </TextContainer>
        <ImageContainer>
          <img src="/src/assets/FabioFamily.svg"></img>
        </ImageContainer>
      </ContentContainer>
      <a
        href="https://my.microsoftpersonalcontent.com/personal/792d9b8ac3a2ae50/_layouts/15/download.aspx?UniqueId=180b9d72-cd21-4c96-a276-6336859f32a0&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiJiNjc3MzExNS00ZTVhLTQwNTUtYTE3Yy1mMWM5NjQyMjk5ZGQiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzM1MjMwMzI5In0.8YtlUR-SPH5n23_j6GEUYmJUmLOMuLY0wvhY2ruGZzm3ZsApjlFqWANX4TeKo7mFctSmGT-AIzJo42D4juUnGdR6ESUOsIWr3w5YtZjpAmLMNz1QfuyBngWBXT3dRMu1Qkuze8K3S9gnYdf1JcWF3gVLd5BxLWmruft7-WsgvyUCnfbl5xPGI6x8iLlsBiSenjh5JR_dZdrn7drnv98zSrKChOpO--b4wEvD1uHTTTboZcFrPlYwF5y-KBCI27A_xetKefjSWFOr6gb_DJeXsmUEG0aZiZ-caVHm6YSXby03Y4Y7VjyxOLZnN3DFGzQ3k3xqHc-V53OKApYU3w6HvKeRF_uvnZXuISCzCBB-n2LLNVgdcCIcmNmECR68kSIOEa01ZcW2Se_Miz5tchJyyivmthdP5Y-PLOpN5gWlaEBGMUJmH01b3Sk_j5EUjnRMjSetmVc_mEIJannPhpLLRlqCbZCJSeuPxtezu-wR5L-NuwpxqpP9SVZ7iLMsZy7qzULW_PcXIc9ZSDiJZwhPNA.215zQbmskM5Jj7hiSlFUT9ZzF-4R2-39P-YPOqBp88o&ApiVersion=2.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clique aqui para baixar o Laudo
      </a>
    </ContainerMainUnd>
  );
}
