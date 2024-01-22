import { Main } from "./Resume.styles";
import AdditionalExperience from "./experience/AdditionalExperience";
import ProfessionalExperience from "./experience/ProfessionalExperience";
import SkillsAndKnowledge from "./skillsandknowledge/SkillsAndKnowledge";
const Resume = () => {
  return (
    <Main>
      <SkillsAndKnowledge />
      <ProfessionalExperience />
      <AdditionalExperience />
    </Main>
  );
};

export default Resume;
