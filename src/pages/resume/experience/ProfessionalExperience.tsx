import { Title } from "../Resume.styles";
import { Content, Wrapper } from "./Experience.styles";
import DieboldNixdorf from "./positions/DieboldNixdorf";
import Freelance from "./positions/Freelance";
import GoldblattSystems from "./positions/GoldblattSystems";
import IBM from "./positions/IBM";

const ProfessionalExperience = () => {
  return (
    <Wrapper>
      <Title>Professional Experience</Title>
      <Content>
        <Freelance />
        <GoldblattSystems />
        <IBM />
        <DieboldNixdorf />
      </Content>
    </Wrapper>
  );
};

export default ProfessionalExperience;
