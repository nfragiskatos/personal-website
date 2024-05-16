import { useEffect } from "react";
import { Main } from "./Resume.styles";
import Education from "./education/Education";
import AdditionalExperience from "./experience/AdditionalExperience";
import ProfessionalExperience from "./experience/ProfessionalExperience";
import PatentsAndPublications from "./patentsandpublications/PatentsAndPublications";
import SkillsAndKnowledge from "./skillsandknowledge/SkillsAndKnowledge";
const Resume = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <SkillsAndKnowledge />
      <ProfessionalExperience />
      <AdditionalExperience />
      <Education />
      <PatentsAndPublications />
    </Main>
  );
};

export default Resume;
