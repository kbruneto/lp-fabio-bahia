import { Link } from "react-router-dom";
import { AccountabilityUS } from "../../componentsEng/accountabilityUS";
import { CampaignUS } from "../../componentsEng/campaignUS";
import { ProfileUS } from "../../componentsEng/profileUS";
import { UndTheCaseUS } from "../../componentsEng/undthecaseUS";
import {
  ButtonSelectLenguage,
  ContainerMain,
  LineOne,
  LineThree,
  LineTwo,
} from "../home/styles";

export function HomeUS() {
  return (
    <ContainerMain>
      <LineOne>
        <Link to="/select">
          <ButtonSelectLenguage>Change the Language</ButtonSelectLenguage>
        </Link>
        <ProfileUS></ProfileUS>
        <CampaignUS></CampaignUS>
      </LineOne>
      <LineTwo>
        <UndTheCaseUS></UndTheCaseUS>
      </LineTwo>
      <LineThree>
        <AccountabilityUS></AccountabilityUS>
      </LineThree>
    </ContainerMain>
  );
}
