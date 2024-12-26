import { Accountability } from "../../components/accountability";
import { Campaign } from "../../components/campaign";
import { PixCode } from "../../components/pixcode";
import { Profile } from "../../components/Profile";
import { UndTheCase } from "../../components/undthecase";

import { ContainerMain, LineFour, LineOne, LineThree, LineTwo } from "./styles";

export function Home() {
  return (
    <ContainerMain>
      <LineOne>
        <Profile></Profile>
        <Campaign></Campaign>
      </LineOne>
      <LineTwo>
        <UndTheCase></UndTheCase>
      </LineTwo>
      <LineThree>
        <Accountability></Accountability>
      </LineThree>
      <LineFour>
        <PixCode></PixCode>
      </LineFour>
    </ContainerMain>
  );
}
