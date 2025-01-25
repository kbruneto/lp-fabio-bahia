import { Accountability } from "../../components/accountability";
import { Campaign } from "../../components/campaign";
import { PixCode } from "../../components/pixcode";
import { Profile } from "../../components/profile";
import { UndTheCase } from "../../components/undthecase";

import {
  ButtonSelectLenguage,
  ContainerMain,
  LineFour,
  LineOne,
  LineThree,
  LineTwo,
} from "./styles";

import { Link } from "react-router-dom";

export function Home() {
  return (
    <ContainerMain>
      <LineOne>
        <Link to="/select">
          <ButtonSelectLenguage>Altere a Linguagem</ButtonSelectLenguage>
        </Link>
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
