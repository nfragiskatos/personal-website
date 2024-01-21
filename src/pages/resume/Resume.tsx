import { Main } from "./Resume.styles";
import ProfessionalExperience from "./experience/ProfessionalExperience";
import SkillsAndKnowledge from "./skillsandknowledge/SkillsAndKnowledge";
const Resume = () => {
  return (
    <Main>
      <SkillsAndKnowledge />
      <ProfessionalExperience />
    </Main>
  );
};

export default Resume;
