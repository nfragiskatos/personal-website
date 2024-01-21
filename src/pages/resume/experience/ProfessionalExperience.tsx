import { Title } from "../Resume.styles";
import { Content, Wrapper } from "./ProfessionalExperience.styles";
import DieboldNixdorf from "./positions/DieboldNixdorf";
import GoldblattSystems from "./positions/GoldblattSystems";
import IBM from "./positions/IBM";

const ProfessionalExperience = () => {
  return (
    <Wrapper>
      <Title>Professional Experience</Title>
      <Content>
        <GoldblattSystems />
        <IBM />
        <DieboldNixdorf />
      </Content>
    </Wrapper>
  );
};

export default ProfessionalExperience;
