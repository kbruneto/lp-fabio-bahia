import { AccountabilityUS } from "../../componentsEng/accountabilityUS";
import { CampaignUS } from "../../componentsEng/campaignUS";
import { PixCodeUS } from "../../componentsEng/pixcodeUS";
import { ProfileUS } from "../../componentsEng/profileUS";
import { UndTheCaseUS } from "../../componentsEng/undthecaseUS";
import {
  ContainerMain,
  LineFour,
  LineOne,
  LineThree,
  LineTwo,
} from "../home/styles";

export function HomeUS() {
  return (
    <ContainerMain>
      <LineOne>
        <ProfileUS></ProfileUS>
        <CampaignUS></CampaignUS>
      </LineOne>
      <LineTwo>
        <UndTheCaseUS></UndTheCaseUS>
      </LineTwo>
      <LineThree>
        <AccountabilityUS></AccountabilityUS>
      </LineThree>
      <LineFour>
        <PixCodeUS></PixCodeUS>
      </LineFour>
    </ContainerMain>
  );
}
