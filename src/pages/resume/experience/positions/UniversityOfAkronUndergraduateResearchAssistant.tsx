import { JobDetails } from "../Experience.styles";
import Job from "../job/Job";

const UniversityOfAkronUndergraduateResearchAssistant = () => {
  return (
    <Job
      title="undergraduate research assistant"
      startDate="fall 2012"
      company="university of akron"
      location="akron, OH"
    >
      <JobDetails>
        <li>
          Worked on the front-end GUI, in C#, to a Bluetooth traffic monitoring
          system.
        </li>
      </JobDetails>
    </Job>
  );
};

export default UniversityOfAkronUndergraduateResearchAssistant;
