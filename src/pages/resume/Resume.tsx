import { Main } from "./Resume.styles";
import Education from "./education/Education";
import AdditionalExperience from "./experience/AdditionalExperience";
import ProfessionalExperience from "./experience/ProfessionalExperience";
import SkillsAndKnowledge from "./skillsandknowledge/SkillsAndKnowledge";
const Resume = () => {
  return (
    <Main>
      <SkillsAndKnowledge />
      <ProfessionalExperience />
      <AdditionalExperience />
      <Education />
    </Main>
  );
};

export default Resume;
