import styled from "styled-components";
import { Title } from "../Resume.styles";
import { Content, Wrapper } from "./Experience.styles";
import UniversityOfAkronUndergraduateResearchAssistant from "./positions/UniversityOfAkronUndergraduateResearchAssistant";
import UniversityOfAkronUndergraduateTeachingAssistant from "./positions/UniversityOfAkronUndergraduateTeachingAssistant";
import UniversityOfArizonaResearchAssistant from "./positions/UniversityOfArizonaResearchAssistant";
import UniversityOfArizonaTeachingAssistant from "./positions/UniversityOfArizonaTeachingAssistant";
import AnkiAndroid from "./project/projects/AnkiAndroid";

const StyledWrapper = styled(Wrapper)`
  background: ${({ theme }) => theme.colors.surfaceVariant};
`;

const AdditionalExperience = () => {
  return (
    <StyledWrapper>
      <Title>Additional Experience</Title>
      <Content>
        <AnkiAndroid />
        <UniversityOfArizonaTeachingAssistant />
        <UniversityOfArizonaResearchAssistant />
        <UniversityOfAkronUndergraduateTeachingAssistant />
        <UniversityOfAkronUndergraduateResearchAssistant />
      </Content>
    </StyledWrapper>
  );
};

export default AdditionalExperience;
