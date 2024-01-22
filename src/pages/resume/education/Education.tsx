import { Title } from "../Resume.styles";
import { Content, Wrapper } from "./Education.styles";
import School from "./school/School";

const ProfessionalExperience = () => {
  return (
    <Wrapper>
      <Title>Education</Title>
      <Content>
        <School
          degree="Master of Science"
          major="Electrical Engineering"
          institution="University of Arizona"
          graduationDate="December 2015"
        />
        <School
          degree="Bachelor of Science"
          major="Computer Engineering"
          institution="University of Akron"
          graduationDate="May 2013"
        />
      </Content>
    </Wrapper>
  );
};

export default ProfessionalExperience;
